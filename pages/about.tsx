import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useContext, useEffect } from 'react';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const router = useRouter();
    const { setTargetPage } = useContext(AppContext);
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

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
        <div id="about">
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                animate={{
                    x: 10,
                    opacity: 1,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.5 }}
                className="back-title">
                <p>ABOUT</p>
                <p>ME</p>
            </motion.div>
            {/* <motion.div
                initial={{
                    top: -150,
                    right: -150,
                    opacity: 0,
                }}
                animate={{
                    top: -90,
                    right: -90,
                    opacity: 1,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.5 }}
                className="back-circle"></motion.div> */}

            <motion.div initial={{}} animate={{}} className="title">
                <p>About Me</p>
                <motion.div className="line"></motion.div>
            </motion.div>
            <div className="contents">
                <div className="desc">
                    안녕하세요. 웹 개발자 고미영입니다.
                    <br></br>
                    재직 기간동안 다양한 실무경험을 쌓아왔습니다.
                </div>

                <br></br>

                <div className="item">
                    <div className="label">SKILL</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className="sub-item">
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className="sub-item">
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className="sub-item">
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className="sub-item">
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div className="item">
                        <div className="label">CERTIFICATE</div>
                        <div>
                            <p>2022.10 AZ-900 (Microsoft)</p>
                            <p>2022.10 한국사능력검정 1급 (국사편찬위원회)</p>
                            <p>2022.09 SQL 개발자 (한국데이터산업진흥원)</p>
                            <p>2012.06 정보처리기사 (한국산업인력공단) </p>
                            <p>2012.06 사무자동화산업기사 (한국산업인력공단)</p>
                            <p>2012.03 리눅스마스터 2급 (KAIT 정보통신진흥협회)</p>
                            <p>2011.11 정보처리산업기사 (한국산업인력공단)</p>
                        </div>
                    </div>
                    <div style={{ marginRight: '10rem' }}></div>
                    <div className="item">
                        <div className="label">LANGUAGE</div>
                        <div>
                            <p>2022.08 TOEIC 935</p>
                            <p>2017.08 JLPN N3</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <motion.div className="progress-bar" style={{ scaleY: scaleY }} />
        </div>
    );
}
