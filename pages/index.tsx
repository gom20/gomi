import AppLayout from '@/layouts/AppLayout';
import SouthIcon from '@mui/icons-material/South';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

Home.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout isHome={true}>{page}</AppLayout>;
};

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;
            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? true : false;
                if (!hasScroll) {
                    if (e.deltaY > 0) {
                        router.push('/about');
                    }
                } else {
                    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        router.push('/about');
                    }
                }
            }, 500);
        };

        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [router]);

    return (
        <div id="home">
            <motion.div
                key="box-motion"
                className="box"
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                animate={{
                    opacity: [1, 1, 1, 1, 1, 1],
                    scale: [0, 2, 1, 2, 0, 10],
                    rotate: [0, 0, 180, 0, 0, 0],
                    backgroundColor: ['hsl(60, 100%, 90%)', 'hsl(60, 100%, 90%)', 'hsl(0, 100%, 95%)', 'hsl(0, 100%, 95%)', 'hsl(0, 100%, 95%)', 'hsl(241, 56%, 57%)'],
                    borderRadius: ['50%', '50%', '20%', '50%', '50%', '50%'],
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
                        color: ['hsl(210, 100%, 35%)', 'hsl(210, 100%, 35%)', 'hsl(210, 100%, 35%)', 'hsl(241, 80%, 57%)', 'hsl(241, 80%, 57%)', 'hsl(0, 0%, 100%)'],
                    }}
                    transition={{
                        duration: 4,
                        ease: 'easeInOut',
                    }}>
                    Hello!
                </motion.p>
            </motion.div>
            <div>
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
                    router.push('/about');
                }}
                style={{ position: 'fixed', bottom: 0, marginBottom: '2rem' }}>
                <motion.a key="arror-motion">
                    <SouthIcon fontSize="large" style={{ color: '#FFF' }}></SouthIcon>
                </motion.a>
            </motion.div>
        </div>
    );
}
