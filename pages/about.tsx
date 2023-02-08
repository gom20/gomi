import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import HeaderLayout from '@/components/HeaderLayout';

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <HeaderLayout />
            {page}
        </AppLayout>
    );
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
                } else if (
                    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
                    e.deltaY > 0
                ) {
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
            initial={{
                opacity: 1,
                // y: '100vh',
            }}
            animate={{
                opacity: 1,
                // y: '0vh',
                scale: 1,
            }}
            exit={{
                opacity: 0,
                top: '100vh',
            }}
            transition={{
                duration: 0.7,
            }}
            style={{
                flex: 1,
                backgroundColor: 'yellow',
                width: '100vw',
                height: '105vw',
                alignItems: 'center',
            }}>
            <h1>안녕하세요. </h1>
        </motion.div>
    );
}
