import { AppContext } from '@/layouts/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect } from 'react';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const { setTargetPage, targetPage, pages } = useContext(AppContext);
    const nextPage = () => {
        setTargetPage(pages[pages.indexOf(targetPage) + 1]);
    };
    const prevPage = () => {
        setTargetPage(pages[pages.indexOf(targetPage) - 1]);
    };

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;

            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
                if (e.deltaY < 0 && (!hasScroll || (hasScroll && scrollY == 0))) {
                    window.removeEventListener('wheel', handleWheel);
                    prevPage();
                }
                if (e.deltaY > 0 && (!hasScroll || (hasScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight))) {
                    window.removeEventListener('wheel', handleWheel);
                    nextPage();
                }
            }, 500);
        };

        setTimeout(function () {
            window.addEventListener('wheel', handleWheel);
        }, 1000);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div id="about" className="container">
            <motion.div
                key="about-circle-menu"
                className="circle-menu"
                initial={{
                    rotate: 0,
                    right: -800,
                    opacity: 0,
                }}
                animate={{
                    rotate: 360,
                    right: -300,
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    delay: 0.7,
                }}>
                <div className="link-container">
                    <motion.div whileHover={{ scale: 1.02 }} style={{ marginLeft: '0.8rem' }}>
                        <Link href={'https://github.com/gom20'} target="_blank" className="link">
                            Github
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                        <Link href={'https://gom20.tistory.com'} target="_blank" className="link">
                            Blog
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} style={{ marginLeft: '0.8rem' }}>
                        <Link href={'https://open.kakao.com/o/swKFAh4e'} target="_blank" className="link">
                            Kakao
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                key="about-profile-bg-up"
                className="profile-bg"
                initial={{
                    top: '-51vh',
                    opacity: 0,
                }}
                animate={{
                    top: 0,
                    opacity: 1,
                    display: 'block',
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0.7,
                }}
            />
            <motion.div
                key="about-profile-bg-down"
                className="profile-bg"
                initial={{
                    bottom: '-51vh',
                    opacity: 0,
                    zIndex: 2,
                }}
                animate={{
                    bottom: 0,
                    opacity: 1,
                    zIndex: 2,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0.7,
                }}
            />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring', delay: 0.7 }}
                className="title">
                <div>About&nbsp;</div>
                <div style={{ color: '#FFF' }}>Me</div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    rotateY: 90,
                }}
                animate={{
                    opacity: 1,
                    rotateY: 0,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0.8,
                }}
                className="profile-img-container">
                <img className="profile-img" src="/profile-image.jpg" alt="profile" />
            </motion.div>
            <div className="profile-container">
                <div className="intro-text-container">
                    <motion.div className="intro-title">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut', delay: 0.9 }}
                            className="flex-row">
                            <b className="gradation-text">Miyoung Go</b>
                        </motion.div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut', delay: 1.1 }}>
                            I'm a Web Developer.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 1.3 }}
                        className="intro-text">
                        Throughout my seven years as a software engineer, I worked on various projects such as developing Smart TV web applications,
                        web servers, and maintaining the semiconductor manufacturing system. My job on this last project was to run a system that
                        analyzed the amount of material used in the semiconductor production process, where I mainly monitored the system and modified
                        server code. When there were user requests, I wrote SQL queries and extracted data accordingly. It was a good opportunity to
                        deal with a large amount of data based on the Oracle Exadata database.
                    </motion.div>
                </div>
                {/* <div className="info-container">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
                        className="item-container">
                        <div className="item-title">Education</div>
                        <div className="item">
                            <div className="date">2013.02</div>
                            <div className="name">
                                <div>아주대학교 정보통신대학</div>
                                <div>미디어학부 졸업 (4.22/4.5)</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 1.6 }}>
                        <div className="item-container">
                            <div className="item-title">Certificate</div>
                            <div className="flex-row">
                                <div className="flex-column">
                                    <div className="item">
                                        <div className="date">2022.10</div>
                                        <div className="name">AZ-900</div>
                                    </div>
                                    <div className="item">
                                        <div className="date">2022.09</div>
                                        <div className="name">SQL 개발자</div>
                                    </div>
                                    <div className="item">
                                        <div className="date">2012.06</div>
                                        <div className="name">정보처리기사</div>
                                    </div>
                                </div>
                                <div className="flex-column">
                                    <div className="item">
                                        <div className="date">2012.06</div>
                                        <div className="name">사무자동화산업기사</div>
                                    </div>
                                    <div className="item">
                                        <div className="date">2012.03</div>
                                        <div className="name">리눅스마스터 2급</div>
                                    </div>
                                    <div className="item">
                                        <div className="date">2011.11</div>
                                        <div className="name">정보처리산업기사</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 1.7 }}
                        className="item-container">
                        <div className="item-title">Language</div>
                        <div className="item">
                            <div className="date">2022.08</div>
                            <div className="name">TOEIC 935</div>
                        </div>
                        <div className="item">
                            <div className="date">2017.01</div>
                            <div className="name">JLPT N3</div>
                        </div>
                    </motion.div>
                </div> */}
            </div>
        </div>
    );
}
