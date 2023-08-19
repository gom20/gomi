import { motion } from 'framer-motion';

type Props = {
    page: number;
};

export default function Project(props: Props) {
    const works = [
        {
            key: 1,
        },
        {
            key: 2,
            time: '2021. 04 - 2021.07',
            duration: '4개월',
            company: '삼성전자 반도체',
            title: '자재 사용량 분석 시스템 개발',
            desc:
                '재직 시 운영하던 시스템 내 실측 사용량 생성 Application 개발 프로젝트에 참여하였습니다. ' +
                '프로젝트의 목적은 소스 시스템에서 I/F 받은 센서 데이터를 취합하고 가공하여 사용량 데이터(Raw Data)를 생성하는 로직을 개발하는 것입니다. ' +
                '기존에 실측 사용량 생성 로직의 비효율성을 개선하기 위한 재개발 프로젝트이며, 재개발에 따른 타 Application 영향도 분석 및 수정을 진행하였습니다. ' +
                '이 외에 개발자 환경 셋팅 및 테스트 지원, 비즈니스 로직 문의를 대응하였습니다.',
            skill: 'Java | OracleSQL | PeakPerformance | Linux |  Eclipse',
        },
        {
            key: 3,
            time: '2017.11 - 2020.07',
            duration: '2년 8개월',
            company: '삼성전자 반도체',
            title: '자재 사용량 분석 시스템 운영',
            skill: 'Java | OracleSQL | PeakPerformance | OnTuneViewer | Linux |  Eclipse',
            desc:
                '반도체 자재 사용량 분석 시스템 서버를 운영하였습니다. ' +
                'Bistel사의 PeakPerformance 프레임워크 기반의 배치성 작업을 실행하는 Java 프로그램입니다. ' +
                '반도체 생산 공정에서 발생한 센서 데이터를 I/F 받아 여러 단계에 거쳐, 최종적으로 자재 별 사용량과 원단위 데이터를 산출하는 것이 목적입니다. ' +
                '주요 업무로는 시스템 모니터링 (CPU, Memory, Disk, Application 장애 모니터링), 시스템 유지보수 및 성능 개선(SQL튜닝, Application 로직 개선, 프로세스 별 자원 분배 최적화), 고객 SR과 VOC 대응(신규 기능 개발, 데이터 추출, 문의 대응), 해외법인 확산 지원을 하였습니다. ' +
                '주로 사용한 기술은 Java와 Oracle SQL입니다. ',
        },
        {
            key: 4,
            time: '2014.12 - 2017.10',
            company: '삼성 SDS',
            duration: '2년 10개월',
            title: 'Nexshop Sales 솔루션 개발',
            skill: 'Java | Spring Framework | ANSI SQL | Javascript | HTML | CSS | jQuery | Jira',
            desc:
                '삼성 SDS의 리테일 솔루션인 Nexshop 서버 개발에 참여하였습니다. ' +
                '개발 인원이 20명 이상이고 이슈 관리나 브랜치 정책이 체계화된 프로젝트 였습니다. ' +
                '주요 업무로는 Customer 모듈의 REST API와 화면 개발을 담당하였습니다. 그리고 Admin(사용자, 로그인, 메뉴) 모듈을 유지보수 하였습니다. ' +
                'Spring 프레임워크 기반의 REST API 서버를 개발하였으며 이와 함께 웹 화면도 구현하였습니다. ' +
                '화면의 경우 HTML, Javascript, jQuery를 주로 사용하였고, jqGrid 라이브러리로 게시판을 개발하였습니다. ',
        },
        {
            key: 5,
            time: '2013.05 - 2014.11',
            duration: '1년 6개월',
            company: '삼성전자',
            title: 'Smart TV Application 개발',
            skill: 'Javacript | HTML | CSS | jQuery | Backbone.js',
            desc:
                '삼성전자 Smart TV Facebook, Twitter 앱 담당자로 근무하였습니다. ' +
                '하이브리드 웹앱으로 미디어(사진, 동영상) 플레이는 TV 플랫폼 라이브러리가 사용되었고 이 외의 화면은 표준 웹 기술로 구현되었습니다. ' +
                '주요 업무 내용으로는 양산 테스트 Defect 대응, 고객 VOC 대응, 로직 변경 및 신규 로직 추가에 대응하였습니다. ' +
                '그리고 근무기간 동안 Facebook, Twitter App 대상으로 Backbone.js 프레임워크를 적용하여 MVC 패턴으로 재개발 하였습니다. ' +
                '이 외에도 대우증권 App GUI 리뉴얼을 진행하였습니다. ',
        },
    ];

    const work = works[props.page - 1];
    const careers = [
        {
            key: 1,
            title: '삼성 SDS',
            desc: 'Software Engineer',
            duration: '(2013.02-2020.07)',
        },
        {
            key: 2,
            title: '프리랜서',
            desc: 'Freelancer',
            duration: '(2021.04-2021.07)',
        },
    ];

    const render = () => {
        const renderItem = (career: any) => {
            return (
                <div className="career-item" key={career.key}>
                    <div className="career-circle"></div>
                    <motion.div key={'career-' + career.key} whileHover={{ scale: 1.1 }} className="carrer-text">
                        <div className="career-title">{career.title}</div>
                        <div className="career-desc" style={{ marginBottom: '0.4rem' }}>
                            {career.duration}
                        </div>
                        <div className="career-desc">{career.desc}</div>
                    </motion.div>
                </div>
            );
        };

        if (work.key == 1) {
            return (
                <div className="project" key={work.key}>
                    <div className="project-bg"></div>
                    <div className="career">
                        <div className="career-intro">
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <div className="career-gradi" style={{ color: '#2ad883', fontSize: '7rem', lineHeight: 1 }}>
                                    7
                                </div>
                                <div className="career-gradi" style={{ color: '#2ad883', fontSize: '2.4em', lineHeight: 1 }}>
                                    +
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: '300' }}>&nbsp;years</div>
                                </div>
                            </div>
                            <div>working as a</div>
                            <div style={{ color: '#2ad883' }} className="career-gradi">
                                Software Engineer
                            </div>
                        </div>

                        <div className="career-item-container">
                            <div className="career-line"></div>
                            {careers.map((career) => renderItem(career))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="project">
                    <div className="project-bg"></div>
                    <div className="work">
                        <motion.div key={'work-company-' + work.key} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }} className="work-company">
                            {work.company}
                        </motion.div>
                        <motion.div key={'work-title-' + work.key} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="work-title">
                            {work.title}
                        </motion.div>
                        <motion.div key={'work-duration-' + work.key} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="work-duration">
                            {work.time} ({work.duration})
                        </motion.div>

                        <motion.div key={'work-skill-' + work.key} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="work-skill">
                            {work.skill}
                        </motion.div>
                        <motion.div key={'work-desc-' + +work.key} initial={{ rotateX: 0, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="work-desc">
                            {work.desc}
                        </motion.div>
                    </div>
                </div>
            );
        }
    };

    return render();
}
