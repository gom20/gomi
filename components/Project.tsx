import { AppProps } from 'next/app';

type Props = {
    page: number;
};

export default function Project(props: Props) {
    const projects = [
        {
            time: '2022. 01 - 2022.04',
            duration: '4개월',
            title: '한화 솔루션 MES 시스템 운영',
            desc: '한화 솔루션의 MES 시스템을 운영하였습니다.',
            skill: 'Java, Javacript, React, MySQL, Spring Framework, Eclipse, Visual Studio',
        },
        {
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

    const data = projects[props.page - 1];

    return (
        <div>
            <h1>{data.title} </h1>
            <div>{data.time}</div>
            <div>{data.duration}</div>
            <div>{data.skill}</div>
            <div>{data.desc}</div>
        </div>
    );
}
