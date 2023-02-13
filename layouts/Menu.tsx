import { AppContext } from '@/hooks/AppContext';
import styles from '@/styles/Layout.module.css';
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
    navData.set('https://github.com/gom20', 'Github');
    navData.set('https://gom20.tistory.com/', 'Blog');

    const { setTargetPage } = React.useContext(AppContext);
    const [state, setState] = React.useState({
        isOpen: false,
    });

    // const test = () => {
    //     data.setTargetPage('test');
    // };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState({ isOpen: open });
    };

    const list = () => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
                    key="github"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 1.05 }}>
                    {listItem('https://github.com/gom20')}
                </motion.div>
                <motion.div
                    key="blog"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 1.1 }}>
                    {listItem('https://gom20.tistory.com/')}
                </motion.div>
            </List>
        </Box>
    );

    const listItem = (navKey: string) => (
        <ListItem key={navKey} disablePadding>
            <motion.div whileHover={{ scale: 1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
                {navKey.startsWith('/') ? (
                    <div
                        className={styles.link}
                        onClick={() => {
                            setTargetPage(navKey);
                        }}>
                        {navData.get(navKey)}
                    </div>
                ) : (
                    <Link href={navKey} className={styles.link} target={'_blank'}>
                        {navData.get(navKey)}
                    </Link>
                )}
                {/* <Link href={navKey} className={styles.link} target={navKey.startsWith('/') ? '_self' : '_blank'}>
                    {navData.get(navKey)}
                </Link> */}
            </motion.div>
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
