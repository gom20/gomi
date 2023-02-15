import Project from '@/components/Project';
import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useContext, useEffect, useState } from 'react';

Experience.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Experience() {
    const { setTargetPage } = useContext(AppContext);
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
                if (!hasScroll) {
                    if (e.deltaY < 0) {
                        setTargetPage('/about');
                        // router.push('/about');
                    } else {
                        setTargetPage('/skill');
                        // router.push('/contact');
                    }
                } else {
                    if (scrollY == 0 && e.deltaY < 0) {
                        setTargetPage('/about');
                        // router.push('/about');
                    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        setTargetPage('/skill');
                        // router.push('/contact');
                    }
                }
            }, 500);
        };
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div id="experience" className="container">
            <div className="bg"></div>
            <div className="bg-image"></div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', delay: 0.5 }} className="title">
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
                                    if (page == 6) return;
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
                        className="prev"
                        style={page == 1 ? { color: '#818181' } : { color: '#f3f3f3' }}
                        onClick={() => {
                            if (page == 1) return;
                            paginate(-1);
                        }}></NavigateBeforeOutlinedIcon>
                    {page} / 6
                    <NavigateNextOutlinedIcon
                        className="next"
                        style={page == 6 ? { color: '#818181' } : { color: '#f3f3f3' }}
                        onClick={() => {
                            if (page == 6) return;
                            paginate(1);
                        }}></NavigateNextOutlinedIcon>
                </div>
            </div>
        </div>
    );
}
