import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const [isVisibleDetail, setVisibleDetail] = useState(false);

    const { setTargetPage } = useContext(AppContext);

    const certificates = [
        { date: '2022.10', name: 'AZ-900' },
        { date: '2022.09', name: 'SQL 개발자' },
        { date: '2012.06', name: '정보처리기사' },
        { date: '2012.06', name: '사무자동화산업기사' },
        { date: '2012.03', name: '리눅스마스터 2급' },
        { date: '2011.11', name: '정보처리산업기사' },
    ];

    const works = [
        { date: '2022', name: '한화시스템' },
        { date: '2021', name: '프리랜서' },
        { date: '2013-2020', name: '삼성SDS' },
    ];

    const renderCertificate = (certificate: any) => {
        return (
            <div className="item">
                <div className="item-date">{certificate.date}</div>
                <div className="item-name">{certificate.name}</div>
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

                if (!hasScroll) {
                    if (e.deltaY < 0) {
                        setTargetPage('/');
                    } else {
                        setTargetPage('/experience');
                    }
                } else {
                    if (scrollY == 0 && e.deltaY < 0) {
                        setTargetPage('/');
                    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        setTargetPage('/experience');
                    }
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
            {/* <motion.div initial={{ opacity: 0, top: 0 }} animate={{ opacity: 1, top: '10rem' }} transition={{ duration: 0.8, ease: 'easeInOut', delay: 1 }} className="title-bg"></motion.div> */}
            <motion.div
                key="about-circle-bg"
                className="circle-bg"
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
                key="about-title-bg"
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
                key="about-title-bg"
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
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', delay: 0.5 }} className="sub-title">
                        <p>안녕하세요.</p>{' '}
                        <p className="gradation-text" style={{ fontWeight: '700' }}>
                            Web Developer
                        </p>
                        <div style={{ flexDirection: 'row', display: 'flex' }}>성실함의 대명사 고미영입니다.</div>
                    </motion.div>
                    <div style={{ color: 'gray', fontSize: '0.8rem', fontWeight: '200' }}>
                        Throughout my seven years as a software engineer, I worked on various projects such as developing Smart TV web applications, web servers, and maintaining the semiconductor
                        manufacturing system. My job on this last project was to run a system that analyzed the amount of material used in the semiconductor production process, where I mainly
                        monitored the system and modified server code. When there were user requests, I wrote SQL queries and extracted data accordingly. It was a good opportunity to deal with a large
                        amount of data based on the Oracle Exadata database.{' '}
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
                            {certificates.map((data) => {
                                return renderCertificate(data);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
