import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import PeopleIcon from '@mui/icons-material/People';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ReactElement, useContext, useEffect } from 'react';

About.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function About() {
    const { setTargetPage } = useContext(AppContext);
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const datas = [
        { name: 'Responsibility', desc: '맡은바 업무에 대한 주인의식과 책임감이 있습니다. ', icon: <PeopleIcon></PeopleIcon> },
        { name: 'Consisntency', desc: '하고자 하는 일을 끝까지 해내는 일관된 끈기가 있습니다. ', icon: <PeopleIcon></PeopleIcon> },
        { name: 'Communication', desc: '재직 기간 동안 고객사에서 업무를 하면서 커뮤니케이션 역량을 키웠습니다. ', icon: <PeopleIcon></PeopleIcon> },
        { name: 'Learning Ability', desc: '새로운 기술에 대한 학습욕구와 빠른 습득력과 이를 적용하는 능력이 있습니다.', icon: <PeopleIcon></PeopleIcon> },
    ];

    useEffect(() => {
        let timer: null | NodeJS.Timeout;
        const handleWheel = (e: WheelEvent) => {
            if (timer) return;

            console.log(e.deltaY);

            timer = setTimeout(function () {
                timer = null;
                let hasScroll = window.innerHeight == document.body.offsetHeight ? false : true;

                if (!hasScroll) {
                    console.log(hasScroll);
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
            {/* <motion.div
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
            </motion.div> */}
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

            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', delay: 0.5 }} className="title">
                <p>About Me</p>
                <motion.div className="line"></motion.div>
            </motion.div>
            <div className="desc">
                안녕하세요. 웹 개발자 고미영입니다.
                <br></br>
                재직 기간동안 다양한 실무경험을 쌓아왔습니다.
                <br></br>
                좋은 서비스를 만들고 싶습니다.
            </div>

            {/* <div className="item-title">핵심 역량</div>
            <div className="item-container">
                {datas.map((data) => {
                    return (
                        <motion.div className="item">
                            <div className="item-icon">{data.icon}</div>
                            <div className="item-name">{data.name}</div>
                            <div className="item-desc">{data.desc}</div>
                        </motion.div>
                    );
                })}
            </div> */}

            <div className="item-title">Education</div>
            <div className="item-container">
                <div> 아주대학교 </div>
            </div>

            <div className="item-title">Certificate</div>
            <div className="item-container">
                <div> 아주대학교 </div>
            </div>
            <motion.div className="progress-bar" style={{ scaleY: scaleY }} />
        </div>
    );
}
