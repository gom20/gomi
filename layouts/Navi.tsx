import { AppContext } from '@/hooks/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

export function NaviItem({ page }: { page: string }) {
    const { targetPage, setTargetPage } = useContext(AppContext);
    const [isHover, setHover] = useState(false);
    const [circleStyle, setCircleStyle] = useState('circle');

    useEffect(() => {
        if (page == targetPage) {
            setCircleStyle('circle-selected');
        } else {
            setCircleStyle('circle');
        }
    }, [targetPage]);

    const getPageName = (page: string) => {
        const name = page.substring(1);
        if (!name) return 'Home';
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} key={'navi-item:' + page}>
            <motion.div
                key={'navi-circle:' + page}
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
            <AnimatePresence key={'navi-hover:' + page}>
                {isHover && (
                    <motion.div key={'navi-hover-text:' + page} initial={{ opacity: 0, x: -3, y: -15 }} animate={{ opacity: 1, x: 10, y: -15 }} exit={{ opacity: 0, x: 10, y: -15 }} style={{}}>
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
                return <NaviItem page={page} key={page}></NaviItem>;
            })}
        </div>
    );
}
