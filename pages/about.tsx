import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const router = useRouter();

    let timer: null | NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
        if (timer) return;

        timer = setTimeout(function () {
            timer = null;
            let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
            if (!hasScroll) {
                if (e.deltaY < 0) {
                    router.push('/');
                } else {
                    router.push('/experience');
                }
            } else {
                if (scrollY == 0 && e.deltaY < 0) {
                    router.push('/');
                } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                    router.push('/experience');
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
        <motion.div
            key="about"
            // className={styles.container}
            // initial={{ y: 100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // exit={{ y: 300, opacity: 0, transition: { duration: 1 } }}
            // transition={{
            //     type: 'spring',
            //     stiffness: 260,
            //     damping: 20,
            // }}
            style={{
                flex: 1,
                backgroundColor: 'pink',
            }}>
            <h1>안녕하세요. </h1>
        </motion.div>
    );
}
