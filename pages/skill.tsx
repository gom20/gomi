import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { ReactElement, useContext, useEffect } from 'react';

Skill.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
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
            <div className="title">Skill-set</div>
            <div className="item-container">
                <div className="item">
                    <div className="item-icon">item icon</div>
                    <div className="item-title">Back-end Development</div>
                    <div className="item-skill">java|springboot|OraclDB|AWSEC2</div>
                    <div className="item-desc">
                        Sales Solution Rest API 서버 개발을 경험하였습니다. 사이드 프로젝트로 등산기록앱을 만들면서 Spring Boot로 Rest API 서버를 구축하였으며, AWS EC2에 배포한 경험이 있습니다. Java
                        기반 배치성 프로그램을 운영하면서 Oracle DB와 오라클SQL을 주 스킬로 사용하였습니다.
                    </div>
                </div>
            </div>
        </div>
    );
}
