import Project from '@/components/Project';
import { AppContext } from '@/layouts/AppContext';
import AppLayout from '@/layouts/AppLayout';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { ReactElement, useContext, useEffect, useState } from 'react';

Experience.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Experience() {
    const { setTargetPage, targetPage, pages } = useContext(AppContext);
    const nextPage = () => {
        setTargetPage(pages[pages.indexOf(targetPage) + 1]);
    };
    const prevPage = () => {
        setTargetPage(pages[pages.indexOf(targetPage) - 1]);
    };

    const swipeConfidenceThreshold = 10000;

    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction: number) => {
            return {
                zIndex: 0,
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
    };

    const [[page, direction], setPage] = useState([1, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const getContent = (page: number) => {
        return <Project page={page} />;
    };

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;

            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
                if (e.deltaY < 0 && (!hasScroll || (hasScroll && scrollY == 0))) {
                    window.removeEventListener('wheel', handleWheel);
                    prevPage();
                }
                if (e.deltaY > 0 && (!hasScroll || (hasScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight))) {
                    window.removeEventListener('wheel', handleWheel);
                    nextPage();
                }
            }, 500);
        };

        setTimeout(function () {
            window.addEventListener('wheel', handleWheel);
        }, 1000);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Miyoung Ko | Web Developer</title>
                <meta name="description" content="Miyoung Ko | Home" />
            </Head>
            <div id="experience" className="container">
                <div className="bg-image"></div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                    className="title">
                    Experience
                </motion.div>
                <div className="project-navi-container">
                    <div className="project-container">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                transition={{
                                    x: { type: 'spring', stiffness: 200, damping: 30 },
                                    opacity: { duration: 0.3 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        if (page == 5) return;
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        if (page == 1) return;
                                        paginate(-1);
                                    }
                                }}>
                                {getContent(page)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="navigator">
                        <NavigateBeforeOutlinedIcon
                            fontSize="large"
                            className="prev"
                            style={page == 1 ? { color: '#818181' } : { color: '#f3f3f3' }}
                            onClick={() => {
                                if (page == 1) return;
                                paginate(-1);
                            }}></NavigateBeforeOutlinedIcon>
                        {page} / 5
                        <NavigateNextOutlinedIcon
                            fontSize="large"
                            className="next"
                            style={page == 5 ? { color: '#818181' } : { color: '#f3f3f3' }}
                            onClick={() => {
                                if (page == 5) return;
                                paginate(1);
                            }}></NavigateNextOutlinedIcon>
                    </div>
                </div>
            </div>
        </>
    );
}
