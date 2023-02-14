import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import Image from 'next/image';
import { ReactElement, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import StorageIcon from '@mui/icons-material/Storage';

Skill.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default function Skill() {
    const items = [
        {
            key: 1,
            icon: <Image priority src="/git_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'Back-end Development',
            skill: 'Java | SpringBoot | OracleDB | OracleSQL',
            desc:
                'Sales Solution 개발 업무 당시 Rest API 서버 개발을 경헙이 있습니다.' + '운영 업무를 하면서 Java 기반의 배치성 프로그램을 운영하였습니다. 이당시에는 Oracel SQL을 주로 사용하였습니다.',
        },
        {
            key: 2,
            icon: <Image priority src="/git_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'Front-end Development',
            skill: 'Javascript | Typescript | React | Redux | Html',
            desc: 'Smart TV 웹앱 개발자로 경력을 시작했습니다. ' + 'Javascript, Html, CSS 익숙하며 그 당시에는 jQuery를 많이 사용하였습니다.' + '최신 Front end 기술을 계속 숙지하고 있습니다.',
        },
        {
            key: 3,
            icon: <Image priority src="/git_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'Deploy',
            skill: 'AWS | Vercel',
            desc: '사이드 프로젝트 완료 후 AWS에 EC2 인스턴스에 Redis, MariaDB 구축하여 REST API 서버를 배포한 경험이 있습니다. 포트폴리오는 Vercel을 사용하여 자동 배포하고 있습니다. ',
        },
        {
            key: 4,
            icon: <Image priority src="/eclipse_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'IDE',
            skill: 'Eclipse | VisualStudio | intelliJ | SublimeText',
            desc: '재직 기간 대부분의 시간을 Eclipse를 사용하였기 때문에 툴 사용에 능숙합니다.  ' + 'Front end개발은 주로 Visual Studio 를 사용합니다. ',
        },
        {
            key: 5,
            icon: <Image priority src="/eclipse_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'Version Control',
            skill: 'Github | SVN',
            desc: '실무에서 SVN과 git모두 사용하였습니다. 현재는 주로 github를 사용하여 버전 관리를 하고 있습니다. ',
        },
        {
            key: 6,
            icon: <Image priority src="/eclipse_icon.svg" height={31} width={31} alt="Follow us on Twitter" />,
            title: 'Tool',
            skill: 'Counfluence | Jira',
            desc: '솔루션 개발 시 Jira로 이슈관리를 한 경험이 있으며, MES 시스템을 운영하면서 필요한 필수 정보들을 Confluence를 통해 페이지를 작성하여 팀원들과 공유하였습니다.',
        },
    ];

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
                if ((hasScroll && scrollY == 0 && e.deltaY < 0) || (!hasScroll && e.deltaY < 0)) {
                    prevPage();
                } else {
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
        <div id="skill">
            <div className="bg"></div>
            {/* <motion.div
                initial={{
                    top: -150,
                    right: -150,
                    opacity: 0,
                }}
                animate={{
                    top: 10,
                    right: 10,
                    opacity: 0.3,
                }}
                transition={{ duration: 1.5, type: 'spring', delay: 0.5 }}
                style={{ position: 'fixed', fontSize: '30rem', zIndex: 3, fontWeight: '800' }}>
                +
            </motion.div>
            <motion.div
                initial={{
                    bottom: -150,
                    left: -150,
                    opacity: 0,
                }}
                animate={{
                    bottom: 10,
                    left: 10,
                    opacity: 0.3,
                }}
                transition={{ duration: 1.5, type: 'spring', delay: 0.5 }}
                style={{ position: 'fixed', fontSize: '30rem', zIndex: 3, fontWeight: '800' }}>
                +
            </motion.div> */}
            <motion.div
                initial={{
                    top: -150,
                    right: -150,
                    opacity: 0,
                }}
                animate={{
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                }}
                transition={{ duration: 1.5, type: 'spring', delay: 0.5 }}
                style={{ position: 'fixed', zIndex: 2 }}>
                <Image priority src="/line-pattern.svg" height={800} width={800} alt="test" />
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', delay: 0.5 }} className="title">
                Skill-Set
            </motion.div>
            <div className="item-container">
                {items.map((item) => {
                    return <SkillItem data={item} key={item.key}></SkillItem>;
                })}
            </div>
        </div>
    );
}

function SkillItem({ data }: { data: any }) {
    const delayTime = data.key * 0.05;
    return (
        <motion.div initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} transition={{ duration: 1, delay: delayTime }} className="item">
            <div className="item-bg"></div>
            <div className="item-icon">{data.icon}</div>
            <div className="item-title">{data.title}</div>
            <div className="item-skill">{data.skill}</div>
            <div className="item-desc">{data.desc}</div>
        </motion.div>
    );
}
