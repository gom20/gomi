import { AppContext } from '@/hooks/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

export function NaviItem({ page }: { page: string }) {
    const { targetPage, setTargetPage } = useContext(AppContext);
    const [isHover, setHover] = useState(false);
    const [circleStyle, setCircleStyle] = useState('circle');

    const getPageName = (page: string) => {
        const name = page.substring(1);
        if (!name) return 'Home';
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    };

    useEffect(() => {
        if (page == targetPage) {
            setCircleStyle('circle-selected');
        } else {
            setCircleStyle('circle');
        }
    }, [targetPage]);

    return (
        <div className="navi-item">
            <motion.div
                key={'navi-motion-' + page}
                whileHover={{ scale: 2 }}
                onHoverStart={(e) => {
                    setHover(true);
                }}
                onHoverEnd={(e) => {
                    setHover(false);
                }}
                className={circleStyle}
                onClick={() => {
                    setTimeout(function () {
                        setTargetPage(page);
                    }, 100);
                }}></motion.div>
            <AnimatePresence>
                {isHover && (
                    <motion.div
                        key={'navi-hover-text-' + page}
                        initial={{ opacity: 0, x: -3, y: -15 }}
                        animate={{ opacity: 1, x: 10, y: -15 }}
                        exit={{ opacity: 0, x: 10, y: -15 }}>
                        {getPageName(page)}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Navi() {
    const { pages } = useContext(AppContext);

    return (
        <div id="navi">
            {pages.map((page: any) => {
                return <NaviItem page={page} key={'navi-item-' + page}></NaviItem>;
            })}
        </div>
    );
}
