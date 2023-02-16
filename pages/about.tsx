import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { ReactElement, useContext, useEffect } from 'react';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const { setTargetPage } = useContext(AppContext);

    const certificates = [
        { date: '2022.10', name: 'AZ-900', issuer: 'Microsoft' },
        { date: '2022.09', name: 'SQL 개발자', issuer: '한국데이터산업진흥원' },
        { date: '2012.06', name: '정보처리기사', issuer: '한국산업인력공단' },
        { date: '2012.06', name: '사무자동화산업기사', issuer: '한국산업인력공단' },
        { date: '2012.03', name: '리눅스마스터 2급', issuer: 'KAIT 정보통신진흥협회' },
        { date: '2011.11', name: '정보처리산업기사', issuer: '한국산업인력공단' },
    ];

    const renderCertificate = (certificate: any) => {
        return (
            <div className="item">
                <div className="item-date">{certificate.date}</div>
                <div className="item-name">{certificate.name}</div>
                <div className="item-issuer">{certificate.issuer}</div>
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
            <div className="profile-container">
                <Image priority src="/about.jpg" height={300} width={200} alt="test" />
                <div className="text-container">
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', delay: 0.5 }} className="title">
                        <p>About Me</p>
                        <motion.div className="line"></motion.div>
                    </motion.div>
                    <div className="sub-title">
                        <p>안녕하세요.</p> <p>웹 개발자 고미영입니다.</p>
                    </div>

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

                    <div className="item-title">Certificate</div>
                    <div className="item-container">
                        {certificates.map((data) => {
                            return renderCertificate(data);
                        })}
                    </div>
                    <div className="item-title">Language</div>
                    <div className="item-container">
                        <div className="item">
                            <div className="date">2022.08</div>
                            <div>TOEIC 935</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
