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
        <AnimatePresence mode="wait">
            <motion.div
                key="index"
                // className={styles.container}
                // initial={{ y: 100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // exit={{ x: 100, opacity: 0, transition: { duration: 1 } }}
                // transition={{
                //     duration: 1,
                // }}
                style={{
                    flex: 1,
                    overflow: 'hidden',

                    // backgroundColor: 'pink',
                }}>
                <main className={styles.main}>
                    <div className={styles.title}>Hello!</div>
                    <div>
                        <div className={styles.desc}>I'm Miyoung.</div>
                        <div className={styles.desc}>I'm a Full Stack Web Developer!</div>
                    </div>
                    <div>
                        <SouthIcon fontSize="large"></SouthIcon>
                    </div>
                </main>
            </motion.div>
        </AnimatePresence>
    );
}
