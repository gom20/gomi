import { AppContext } from '@/hooks/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

export default function Navi() {
    const { pages, setTargetPage } = React.useContext(AppContext);

    const getPageName = (page: string) => {
        const name = page.substring(1);
        if (!name) return 'Home';
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    };
    return (
        <div id="navi">
            {pages.map((page) => {
                const [isHover, setHover] = React.useState(false);
                return (
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key={'navi-item:' + page}>
                        <motion.div
                            key={'navi-circle:' + page}
                            whileHover={{ scale: 2, backgroundColor: '#5755cf' }}
                            onHoverStart={(e) => {
                                setHover(true);
                            }}
                            onHoverEnd={(e) => {
                                setHover(false);
                            }}
                            className="circle"
                            onClick={() => {
                                setTimeout(function () {
                                    setTargetPage(page);
                                }, 100);
                            }}></motion.div>
                        <AnimatePresence key={'navi-hover:' + page}>
                            {isHover && (
                                <motion.div
                                    key={'navi-hover-text:' + page}
                                    initial={{ opacity: 0, x: -3, y: -15 }}
                                    animate={{ opacity: 1, x: 10, y: -15 }}
                                    exit={{ opacity: 0, x: 10, y: -15 }}
                                    style={{}}>
                                    {getPageName(page)}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
