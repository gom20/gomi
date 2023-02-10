import AppLayout from '@/layouts/AppLayout';
import styles from '@/styles/Home.module.css';
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
        <div className={styles.container}>
            <motion.div
                className={styles.box}
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                animate={{
                    opacity: [1, 1, 1, 1, 1],
                    scale: [2, 1, 2, 1, 2],
                    rotate: [0, 0, 0, 180, 0],
                    backgroundColor: ['hsl(60, 100%, 90%)', 'hsl(346, 100%, 95%)', 'hsl(60, 100%, 90%)'],
                    borderRadius: ['50%', '50%', '50%', '20%', '50%'],
                }}
                transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: 1,
                }}
            />
            <motion.div
                initial={{
                    y: -50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.3 }}
                className={styles.title}>
                Hello!
            </motion.div>
            <div>
                <motion.div
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 0.7 }}
                    className={styles.desc}>
                    I'm Miyoung.
                </motion.div>
                {/* <br></br> */}
                <motion.div
                    initial={{
                        x: 50,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 1.1 }}
                    className={styles.desc}>
                    <p>I'm a Full Stack</p> <p style={{ fontWeight: '800' }}>Web Developer.</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, type: 'spring', delay: 1.4 }}
                onClick={() => {
                    router.push('/about');
                }}
                style={{ position: 'fixed', bottom: 0, marginBottom: '5rem' }}>
                <motion.a>
                    <SouthIcon fontSize="large"></SouthIcon>
                </motion.a>
            </motion.div>
        </div>
    );
}
