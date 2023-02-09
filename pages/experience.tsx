import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

Experience.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Experience() {
    const router = useRouter();

    let timer: null | NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
        if (timer) return;

        timer = setTimeout(function () {
            timer = null;
            let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
            if (!hasScroll) {
                if (e.deltaY < 0) {
                    router.push('/about');
                } else {
                    router.push('/contact');
                }
            } else {
                if (scrollY == 0 && e.deltaY < 0) {
                    router.push('/about');
                } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                    router.push('/contact');
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
            // key="experience"
            // initial={{
            //   opacity: 0,
            //   top: '100vh',
            // }}
            // animate={{
            //   opacity: 1,
            //   top: '0vh',
            //   scale: 1,
            // }}
            // exit={{
            //   opacity: 0,
            //   top: '100vh',
            // }}
            // transition={{
            //   duration: 0.7,
            // }}
            style={{
                flex: 1,
                backgroundColor: 'orange',
                width: '100vw',
                height: '105vw',
                alignItems: 'center',
            }}>
            <h1>안녕하세요. 경험 페이지예요.</h1>
        </motion.div>
    );
}
