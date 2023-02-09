import styles from '@/styles/Layout.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
export default function Menu() {
    let navData = new Map<string, string>();
    navData.set('/', 'Home');
    navData.set('/about', 'About Me');
    navData.set('/experience', 'Experience');
    navData.set('/contact', 'Contact');

    const [state, setState] = React.useState({
        isOpen: false,
    });

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState({ isOpen: open });
    };

    const list = () => (
        <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List style={{ paddingTop: '5rem' }}>
                <motion.div
                    key="home"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 0.5 }}>
                    {listItem('/')}
                </motion.div>
                <motion.div
                    key="about"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 0.75 }}>
                    {listItem('/about')}
                </motion.div>
                <motion.div
                    key="experience"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 0.9 }}>
                    {listItem('/experience')}
                </motion.div>
                <motion.div
                    key="contact"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 1 }}>
                    {listItem('/contact')}
                </motion.div>
                <motion.div
                    key="external"
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: [0, 0, 1],
                        x: [100, 100, 0],
                    }}
                    transition={{ times: [0, 0.7, 1], duration: 1 }}>
                    <ListItem key={'external'} disablePadding className={styles.link}>
                        <GitHubIcon fontSize="large" style={{ color: '#818181' }}></GitHubIcon>
                    </ListItem>
                </motion.div>
            </List>
        </Box>
    );

    const listItem = (navKey: string) => (
        <ListItem key={navKey} disablePadding>
            <motion.a whileHover={{ scale: 1.1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
                <Link href={navKey} className={styles.link}>
                    {navData.get(navKey)}
                </Link>
            </motion.a>
        </ListItem>
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
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
