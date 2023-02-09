import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import styles from '@/styles/About.module.css';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
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
                } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
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
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ duration: 2, type: 'spring', delay: 0.5 }}
                className={styles.backtitle}>
                <p>ABOUT</p>
                <p>ME</p>
            </motion.div>
            <motion.div
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
                className={styles.backcircle}></motion.div>

            <motion.div className={styles.title}>
                <p>안녕하세요.</p> <p>Web Developer</p>
                <p>고미영입니다.</p>
            </motion.div>
            <div className={styles.contents}>
                <div className={styles.desc}>
                    Throughout my seven years as a software engineer, I worked on various projects such as developing Smart TV web applications, web servers, and maintaining the semiconductor
                    manufacturing system. My job on this last project was to run a system that analyzed the amount of material used in the semiconductor production process, where I mainly monitored
                    the system and modified server code. When there were user requests, I wrote SQL queries and extracted data accordingly. It was a good opportunity to deal with a large amount of
                    data based on the Oracle Exadata database.
                </div>
                <br></br>

                <div className={styles.item}>
                    <div className={styles.label}>SKILL</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className={styles.subitem}>
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className={styles.subitem}>
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className={styles.subitem}>
                            <div>Language</div>
                            <div>
                                <p>java</p>
                                <p>Javascript</p>
                                <p>Python</p>
                                <p>Mysql</p>
                            </div>
                        </div>
                        <div className={styles.subitem}>
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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div className={styles.item}>
                        <div className={styles.label}>CERTIFICATE</div>
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
                    <div className={styles.item}>
                        <div className={styles.label}>LANGUAGE</div>
                        <div>
                            <p>2022.08 TOEIC 935</p>
                            <p>2017.08 JLPN N3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
