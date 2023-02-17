import { AppContext } from '@/layouts/AppContext';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { motion } from 'framer-motion';
import * as React from 'react';

export default function Menu() {
    let navData = new Map<string, string>();
    navData.set('/', 'Home');
    navData.set('/about', 'About');
    navData.set('/experience', 'Experience');
    navData.set('/skill', 'Skill');
    navData.set('/contact', 'Contact');

    const { pages, targetPage, setTargetPage } = React.useContext(AppContext);
    const [state, setState] = React.useState({
        isOpen: false,
    });

    const durations = [0.5, 0.75, 0.9, 1, 1.1];
    const linkVariants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState({ isOpen: open });
    };

    const renderItem = (navKey: string) => (
        <ListItem key={navKey} disablePadding>
            <motion.div whileHover={{ scale: 1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
                <div
                    className={navKey == targetPage ? 'link-selected' : 'link'}
                    onClick={() => {
                        setTimeout(function () {
                            setTargetPage(navKey);
                        }, 100);
                    }}>
                    {navData.get(navKey)}
                </div>
            </motion.div>
        </ListItem>
    );
    const renderList = () => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} id="menu">
            <List style={{ paddingTop: '5rem' }}>
                {pages.map((page, idx) => {
                    return (
                        <motion.div key={page} variants={linkVariants} initial="initial" animate="animate" transition={{ duration: durations[idx] }}>
                            {renderItem(page)}
                        </motion.div>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key="right">
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon style={{ color: 'gray' }} fontSize="large" />
                </Button>
                <Drawer
                    anchor="right"
                    open={state['isOpen']}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            backgroundColor: 'black',
                        },
                    }}>
                    {renderList()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
