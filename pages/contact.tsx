import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import styles from '@/styles/Contact.module.css';

Contact.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Contact() {
    const router = useRouter();

    let timer: null | NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
        if (timer) return;

        timer = setTimeout(function () {
            timer = null;
            let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
            if (!hasScroll) {
                if (e.deltaY < 0) {
                    router.push('/experience');
                }
            } else {
                if (scrollY == 0 && e.deltaY < 0) {
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
        <div className={styles.container}>
            <h1>Contact Info입니다 </h1>
        </div>
    );
}