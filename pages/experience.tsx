import Project from '@/components/Project';
import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState, useContext } from 'react';

Experience.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Experience() {
    const router = useRouter();
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
        let color = 'blue';
        if (page % 2 == 0) {
            color = 'red';
        }
        return (
            <div className="project">
                <div>나의 경력입니다. {page}</div>
                <Project page={page} />
            </div>
        );
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
                        setTargetPage('/contact');
                        // router.push('/contact');
                    }
                } else {
                    if (scrollY == 0 && e.deltaY < 0) {
                        setTargetPage('/about');
                        // router.push('/about');
                    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        setTargetPage('/contact');
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
        <div id="experience">
            <div className="bg"></div>
            <div className="title">Experience</div>
            <div className="container">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        // exit="exit"
                        transition={{
                            // duration: 0.3,
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}>
                        {getContent(page)}
                    </motion.div>
                </AnimatePresence>
                <div
                    className="next"
                    onClick={() => {
                        if (page == 5) return;
                        paginate(1);
                    }}>
                    {'‣'}
                </div>
                <div
                    className="prev"
                    onClick={() => {
                        if (page == 1) return;
                        paginate(-1);
                    }}>
                    {'‣'}
                </div>
            </div>
        </div>
    );
}
