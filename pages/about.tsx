import { AppContext } from '@/layouts/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

    const items = [
        { date: '2022.10', name: 'AZ-900' },
        { date: '2022.09', name: 'SQL 개발자' },
        { date: '2012.06', name: '정보처리기사' },
        { date: '2012.06', name: '사무자동화산업기사' },
        { date: '2012.03', name: '리눅스마스터 2급' },
        { date: '2011.11', name: '정보처리산업기사' },
    ];

    const renderItem = (item: any) => {
        return (
            <div className="item" key={item.name}>
                <div className="item-date">{item.date}</div>
                <div className="item-name">{item.name}</div>
            </div>
        );
    };

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;
            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;
                if (e.deltaY < 0 && (!hasScroll || (hasScroll && scrollY == 0))) {
                    prevPage();
                }
                if (e.deltaY > 0 && (!hasScroll || (hasScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight))) {
                    nextPage();
                }
            }, 500);
        };
        window.addEventListener('wheel', handleWheel);
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
                    delay: 0.2,
                }}>
                <div className="link-container">
                    <motion.div whileHover={{ scale: 1.05 }} style={{ marginLeft: '1rem' }}>
                        <Link href={'https://github.com/gom20'} target="_blank" className="link">
                            Github
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href={'https://gom20.tistory.com'} target="_blank" className="link">
                            Blog
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ marginLeft: '0.3rem' }}>
                        <Link href={'https://open.kakao.com/o/swKFAh4e'} target="_blank" className="link">
                            Kakao
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                key="about-title-bg1"
                className="title-bg"
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
                    delay: 0.2,
                }}
            />
            <motion.div
                key="about-title-bg2"
                className="title-bg"
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
                    delay: 0.2,
                }}
            />
            <motion.div className="title" style={{ display: 'flex', flexDirection: 'row' }}>
                <div>About&nbsp;</div>
                <div style={{ color: '#FFF' }}>Me</div>
            </motion.div>
            <Image priority src="/profile-image.jpg" height={200} width={200} alt="test" style={{ zIndex: 2, borderRadius: '50%' }} />
            <div className="profile-container">
                <div className="text-container">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                        className="sub-title">
                        <p>안녕하세요.</p>{' '}
                        <p className="gradation-text" style={{ fontWeight: '700' }}>
                            Web Developer
                        </p>
                        <div style={{ flexDirection: 'row', display: 'flex' }}>고미영입니다.</div>
                    </motion.div>
                    <div style={{ color: 'gray', fontSize: '0.8rem', fontWeight: '200' }}>
                        Throughout my seven years as a software engineer, I worked on various projects such as developing Smart TV web applications,
                        web servers, and maintaining the semiconductor manufacturing system. My job on this last project was to run a system that
                        analyzed the amount of material used in the semiconductor production process, where I mainly monitored the system and modified
                        server code. When there were user requests, I wrote SQL queries and extracted data accordingly. It was a good opportunity to
                        deal with a large amount of data based on the Oracle Exadata database.{' '}
                    </div>
                </div>
            </div>

            <div className="detail-container">
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div>
                        <div className="item-title">Education</div>
                        <div className="item-container">
                            <div className="item">
                                <div className="date">2013.02</div>
                                <div>
                                    <div>아주대학교 정보통신대학</div>
                                    <div>미디어학부 졸업 (4.22/4.5)</div>
                                </div>
                            </div>
                        </div>
                        <div className="item-title">Language</div>
                        <div className="item-container">
                            <div className="item">
                                <div className="date">2022.08</div>
                                <div className="name">TOEIC 935</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="item-title">Certificate</div>
                        <div className="item-container">
                            {items.map((data) => {
                                return renderItem(data);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
