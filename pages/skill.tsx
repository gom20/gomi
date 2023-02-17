import { AppContext } from '@/layouts/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { ReactElement, useContext, useEffect, useState } from 'react';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import DvrIcon from '@mui/icons-material/Dvr';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TerminalIcon from '@mui/icons-material/Terminal';

Skill.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

const items = [
    {
        key: 1,
        title: 'Back-end',
        skill: 'Java | SpringBoot | OracleSQL',
        desc:
            'Retail 솔루션 개발 업무로 Spring 기반 웹서버를 개발한 경험이 있습니다. ' +
            'MES 시스템 운영 업무로 Java 기반의 배치 프로그램을 유지보수 하였습니다.',
    },
    {
        key: 2,
        title: 'Front-end',
        skill: 'Javascript | Typescript | React | Redux',
        desc:
            'Smart TV 웹앱 개발자로 경력을 시작했습니다. ' +
            'Javascript, HTML, CSS와 같은 기본적인 프론트엔드 가술에 익숙하며 최신 프론트엔드 기술도 지속적으로 학습하고 있습니다.',
    },
    {
        key: 3,
        title: 'Deploy',
        skill: 'AWS | Vercel',
        desc: '사이드 프로젝트를 하면서 AWS EC2 인스턴스를 생성하여 Redis, MariaDB를 설치하고 REST API 서버를 배포한 경험이 있습니다. 포트폴리오 배포는 Vercel을 사용합니다. ',
    },
    {
        key: 4,
        title: 'IDE',
        skill: 'Eclipse | VisualStudio | intelliJ ',
        desc: 'Java 로 개발하는 업무는 대부분 Eclipse IDE를 사용하였습니다. ' + '프론트엔드 개발은 주로 Visual Studio를 사용합니다. ',
    },
    {
        key: 5,
        title: 'Version Control',
        skill: 'Github | SVN',
        desc: '실무에서 SVN과 Git 모두 사용한 경험이 있습니다. 현재는 주로 Github를 사용하여 형상 관리를 하고 있습니다. ',
    },
    {
        key: 6,

        title: 'Tool',
        skill: 'Jira | Confluence',
        desc: '솔루션 개발 업무에서 Jira로 이슈 관리를 하였습니다. 시스템 운영 업무에서 Confluence를 사용하여 운영 정보를 공유하였습니다.',
    },
];

export default function Skill() {
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
        <div id="skill" className="container">
            <div className="bg"></div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                className="title">
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
    const delayTime = data.key * 0.1;

    const [isHover, setHover] = useState(false);

    const renderItemIcon = (key: number) => {
        const iconStyle = { height: 35, width: 35, color: isHover ? '#000' : '#FFF' };
        switch (key) {
            case 1:
                return <TerminalIcon style={iconStyle} />;
            case 2:
                return <DevicesIcon style={iconStyle} />;
            case 3:
                return <RocketLaunchIcon style={iconStyle} />;
            case 4:
                return <DvrIcon style={iconStyle} />;
            case 5:
                return <GitHubIcon style={iconStyle} />;
            case 6:
                return <BuildCircleIcon style={iconStyle} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: !isHover ? 1 : 0.5, delay: !isHover ? delayTime : 0, type: 'easeInOut' }}
            whileHover={{ y: -5, scale: 1.1, transition: { type: 'easeInOut', duration: 0.5 } }}
            onHoverStart={(e) => {
                setHover(true);
            }}
            onHoverEnd={(e) => {
                setHover(false);
            }}
            className="item"
            style={{ backgroundColor: isHover ? '#2ad883' : '#161c21' }}>
            <div className="item-bg"></div>
            <div className="item-icon">{renderItemIcon(data.key)}</div>
            <div className="item-title" style={isHover ? { color: '#000' } : {}}>
                {data.title}
            </div>
            <div className="item-skill" style={isHover ? { color: '#535353' } : {}}>
                {data.skill}
            </div>
            <div className="item-desc" style={isHover ? { color: '#000' } : {}}>
                {data.desc}
            </div>
        </motion.div>
    );
}
