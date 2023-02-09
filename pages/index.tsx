import AppLayout from '@/layouts/AppLayout';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import SouthIcon from '@mui/icons-material/South';
import { AnimatePresence, motion } from 'framer-motion';

Home.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout isHome={true}>{page}</AppLayout>;
};

export default function Home() {
    const router = useRouter();

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

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className={styles.container}>
            <motion.div
                key="title"
                initial={{
                    x: -100,
                }}
                animate={{
                    x: 0,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.7 }}
                className={styles.title}>
                Hello!
            </motion.div>
            <div>
                <motion.div
                    key="title"
                    initial={{
                        x: -50,
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 0.7 }}
                    className={styles.desc}>
                    I'm Miyoung.
                </motion.div>
                <motion.div
                    key="title"
                    initial={{
                        y: 50,
                    }}
                    animate={{
                        y: 0,
                    }}
                    transition={{ duration: 2, type: 'spring', delay: 0.7 }}
                    className={styles.desc}>
                    I'm a Full Stack Web Developer.
                </motion.div>
            </div>
            <motion.div
                whileHover={{ scale: 1.1, y: 10 }}
                onClick={() => {
                    router.push('/about');
                }}>
                {/* <motion.a whileHover={{ scale: 1.1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}> */}
                <SouthIcon fontSize="large"></SouthIcon>
                {/* </motion.a> */}
            </motion.div>
        </div>
    );
}
