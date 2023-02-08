import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
        <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            style={{
                flex: 1,
                backgroundColor: 'green',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
            }}>
            <motion.div>
                <h1>안녕하세요.contact</h1>
            </motion.div>
        </motion.div>
    );
}
