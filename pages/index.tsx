import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import SouthIcon from '@mui/icons-material/South';
import { motion } from 'framer-motion';
import { ReactElement, useContext, useEffect } from 'react';

Home.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout isHome={true}>{page}</AppLayout>;
};

export default function Home() {
    const { setTargetPage } = useContext(AppContext);

    const movePage = () => {
        setTimeout(function () {
            setTargetPage('/about');
        }, 500);
    };

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;
            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? true : false;
                if (!hasScroll) {
                    if (e.deltaY > 0) {
                        setTargetPage('/about');
                    }
                } else {
                    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        setTargetPage('/about');
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
        <motion.div
            id="home"
            className="container"
            key="home-color"
            animate={{
                backgroundColor: ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(210, 21%, 15%)'],
            }}
            transition={{
                duration: 4,
                ease: 'easeInOut',
            }}>
            <motion.div
                key="box-motion"
                className="box"
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                animate={{
                    opacity: [1, 1, 1, 1, 1, 1],
                    scale: [0, 2, 1, 2, 0, 2.3],
                    rotate: [0, 0, 180, 0, 0, 0],
                    backgroundColor: ['hsl(137, 93%, 89%)', 'hsl(137, 93%, 89%)', 'hsl(179, 55%, 78%)', 'hsl(179, 55%, 78%)', 'hsl(179, 55%, 78%)', 'hsl(210, 21%, 15%)'],
                    borderRadius: ['50%', '50%', '20%', '50%', '50%', '50%', '50%'],
                }}
                transition={{
                    duration: 4,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                key="hello-position"
                initial={{
                    y: -50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.3 }}
                className="title">
                <motion.p
                    key="hello-color"
                    initial={{ color: '#000' }}
                    animate={{
                        color: ['hsl(151, 69%, 51%)', 'hsl(151, 69%, 51%)', 'hsl(151, 69%, 51%)', 'hsl(223, 100%, 56%)', 'hsl(223, 100%, 56%)', 'hsl(151, 69%, 51%)'],
                    }}
                    transition={{
                        duration: 4,
                        ease: 'easeInOut',
                    }}>
                    Hello!
                </motion.p>
            </motion.div>
            <div className="desc-container">
                <motion.div
                    key="miyoung-position"
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 0.7 }}
                    className="desc">
                    <motion.p
                        key="miyoung-color"
                        animate={{
                            color: ['hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 100%)'],
                        }}
                        transition={{
                            duration: 4,
                            ease: 'easeInOut',
                        }}>
                        I'm Miyoung.
                    </motion.p>
                </motion.div>
                <motion.div
                    key="fullstack-position"
                    initial={{
                        x: 50,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 1.1 }}
                    className="desc">
                    <motion.p
                        key="full-color"
                        animate={{
                            color: ['hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 100%)'],
                        }}
                        transition={{
                            duration: 4,
                            ease: 'easeInOut',
                        }}>
                        I'm a Full Stack
                    </motion.p>
                    <motion.p
                        key="developer-color"
                        animate={{
                            color: ['hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 100%)'],
                        }}
                        transition={{
                            duration: 4,
                            ease: 'easeInOut',
                        }}
                        className="desc"
                        style={{ fontWeight: '700' }}>
                        Web Developer.
                    </motion.p>
                </motion.div>
            </div>
            <motion.div
                key="arror-position"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, type: 'spring', repeat: Infinity }}
                onClick={() => {
                    movePage();
                }}
                style={{ position: 'fixed', bottom: 0, marginBottom: '2rem', zIndex: 2 }}>
                <motion.a key="arror-motion">
                    <SouthIcon fontSize="large" style={{ color: '#FFF' }}></SouthIcon>
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
