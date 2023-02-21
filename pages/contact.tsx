import { AppContext } from '@/layouts/AppContext';
import AppLayout from '@/layouts/AppLayout';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useContext, useEffect } from 'react';

Contact.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Contact() {
    const { setTargetPage, targetPage, pages } = useContext(AppContext);
    let isTransitioning = false;
    const prevPage = () => {
        setTargetPage(pages[pages.indexOf(targetPage) - 1]);
    };

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer || isTransitioning) return;

            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
                if (e.deltaY < 0 && (!hasScroll || (hasScroll && scrollY == 0))) {
                    isTransitioning = true;
                    window.removeEventListener('wheel', handleWheel);
                    prevPage();
                }
            }, 500);
        };
        setTimeout(function () {
            window.addEventListener('wheel', handleWheel);
        }, 1000);
        return () => {
            console.log('unmount');
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Miyoung Ko | Web Developer</title>
                <meta name="description" content="Miyoung Ko | Home" />
            </Head>
            <div id="contact" className="container">
                <div className="bg"></div>
                <div className="bg-image"></div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                    className="title"
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ color: '#2ad883' }}>Contact</div> <div>&nbsp;Info.</div>
                </motion.div>
                <motion.div
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="desc">
                    저에 대해 궁금하신 점이 있으신가요?
                </motion.div>
                <motion.div
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="desc">
                    문의 사항은 이메일로 보내주시기 바랍니다.
                </motion.div>
                <motion.div
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="email">
                    rhaldud89@gmail.com
                </motion.div>
                <div className="icon-container">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href={'https://github.com/gom20'} target="_blank">
                            <GitHubIcon style={{ height: 32, width: 32, color: '#fff' }}></GitHubIcon>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href={'https://open.kakao.com/o/swKFAh4e'} target="_blank">
                            <Image priority src="/kakao_icon.svg" height={31} width={31} alt="Follow us on Twitter" />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href={'https://gom20.tistory.com'} target="_blank">
                            <Image priority src="/tistory_icon.svg" height={30} width={30} alt="Follow us on Twitter" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
