import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import { fontSize } from '@mui/system';

type Props = {
    page: number;
};

export default function Project(props: Props) {
    const works = [
        { key: 1 },
        {
            key: 2,
            time: '2022. 01 - 2022.04',
            duration: '4개월',
            title: '한화 솔루션 MES 시스템 운영',
            desc: '한화 솔루션의 MES 시스템을 운영하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
        {
            key: 3,
            time: '2021. 04 - 2021.07',
            duration: '4개월',
            title: '삼성전자 반도체 자재 사용량 분석 시스템 개발 프로젝트',
            desc:
                '재직 시 운영하던 시스템 내 실측 사용량 생성Application 개발 프로젝트 지원하였습니다.' +
                '소스 시스템에서 I/F 받은 센서 데이터를 취합하여 해당 시스템 내 실측 사용량 데이터를 생성하는 Application 재개발 프로젝트에 투입되었습니다.' +
                '이와 함께 신규 개발자 분들의 환경세팅과 테스트 지원 비즈니스 로직 문의에 대응하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
        {
            key: 4,
            time: '2017.11 - 2020.07',
            duration: '2년 8개월',
            title: '삼성전자 반도체 자재 사용량 분석 시스템 운영',
            desc:
                '재직 시 운영하던 시스템 내 실측 사용량 생성Application 개발 프로젝트 지원하였습니다.' +
                '소스 시스템에서 I/F 받은 센서 데이터를 취합하여 해당 시스템 내 실측 사용량 데이터를 생성하는 Application 재개발 프로젝트에 투입되었습니다.' +
                '이와 함께 신규 개발자 분들의 환경세팅과 테스트 지원 비즈니스 로직 문의에 대응하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
        {
            key: 5,
            time: '2014.12 - 2017.10',
            duration: '2년 10개월',
            title: '삼성 SDS Nexshop Sales 솔루션 개발',
            desc:
                '재직 시 운영하던 시스템 내 실측 사용량 생성Application 개발 프로젝트 지원하였습니다.' +
                '소스 시스템에서 I/F 받은 센서 데이터를 취합하여 해당 시스템 내 실측 사용량 데이터를 생성하는 Application 재개발 프로젝트에 투입되었습니다.' +
                '이와 함께 신규 개발자 분들의 환경세팅과 테스트 지원 비즈니스 로직 문의에 대응하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
        {
            key: 6,
            time: '2013.05 - 2014.11',
            duration: '1년 6개월',
            title: '삼성전자 Smart TV Application 개발',
            desc:
                '재직 시 운영하던 시스템 내 실측 사용량 생성Application 개발 프로젝트 지원하였습니다.' +
                '소스 시스템에서 I/F 받은 센서 데이터를 취합하여 해당 시스템 내 실측 사용량 데이터를 생성하는 Application 재개발 프로젝트에 투입되었습니다.' +
                '이와 함께 신규 개발자 분들의 환경세팅과 테스트 지원 비즈니스 로직 문의에 대응하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
    ];

    const work = works[props.page - 1];
    const careers = [
        {
            key: 1,
            title: '삼성 SDS',
            desc: 'Software Engineer (2013-2020)',
        },
        {
            key: 2,
            title: '아이엘포유',
            desc: 'Freelancing (2021)',
        },
        {
            key: 3,
            title: '한화시스템',
            desc: 'Software Engineer (2022)',
        },
    ];

    const render = () => {
        const renderItem = (career: any) => {
            return (
                <div className="career-item" key={career.key}>
                    <div className="career-circle"></div>
                    <motion.div key={'career-' + career.key} whileHover={{ scale: 1.1 }} className="carrer-text">
                        <div className="career-title">{career.title}</div>
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
                                <div style={{ color: '#2ad883', fontSize: '7rem', lineHeight: 1, fontFamily: 'Raleway' }}>8&nbsp;</div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: '300' }}>years</div>
                                </div>
                            </div>
                            <div>working as a</div>
                            <div style={{ color: '#2ad883' }}>Software Engineer</div>
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
                        <h1>{work.title} </h1>
                        <div>{work.time}</div>
                        <div>{work.duration}</div>
                        <div>{work.skill}</div>
                        <div>{work.desc}</div>
                    </div>
                </div>
            );
        }
    };

    return render();
}
