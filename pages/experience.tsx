import AppLayout from '@/layouts/AppLayout';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import styles from '@/styles/Experience.module.css';

Experience.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Experience() {
    const router = useRouter();
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
                        router.push('/about');
                    } else {
                        router.push('/contact');
                    }
                } else {
                    if (scrollY == 0 && e.deltaY < 0) {
                        router.push('/about');
                    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
                        router.push('/contact');
                    }
                }
            }, 500);
        };
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [router]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Experience</div>
            <div style={{ marginBottom: '30rem' }}>
                2022.01 – 2022.04 (4 개월) 한화 솔루션 MES 시스템 운영 ∙ 운영 인원: 2명 ∙ 개발 환경: Eclipse, Visual Studio ∙ 개발 언어 및 라이브러리: Java, Javascript, React, MySQL, Spring Framework
                ∙ 상세 내용: - MES 웹 서버, 화면 유지보수 2021.04 - 2021.07 (4개월) 삼성전자 반도체 자재 사용량 분석 시스템 개발 프로젝트 ∙ 개발 인원: 4명 ∙ 개발 환경: Eclipse, SVN ∙ 개발 언어 및
                라이브러리: Oracle SQL, Java, PeakPerformance Framework ∙ 담당 업무: 재직 시 운영하던 시스템 내 실측 사용량 생성Application 개발 프로젝트 지원 ∙ 상세 내용: - 실측 사용량
                생성Appliacation 재개발에 따른 타 Application 영향도 분석 및 수정 진행 - 개발자 환경 셋팅 및 테스트 지원, 비즈니스 로직 문의 대응 2017.11 - 2020.07 (2년 8개월) 삼성전자 반도체 자재
                사용량 분석 시스템 운영 ∙ 운영 인원: 4명 ∙ 개발 환경: Eclipse, SVN, JIRA, Confluence, onTuneViewer ∙ 개발 언어 및 라이브러리: Oracle SQL, Java, PeakPerformance Framework ∙ 담당 업무:
                반도체 자재 사용량 분석 시스템 서버 운영 ∙ 상세 내용: 1) 시스템 모니터링 - 서버 CPU, Memory, Disk, 모니터링 - Application 장애 모니터링 - 시스템 Log 모니터링 2) 시스템 유지보수 및 성능
                개선 - SQL 튜닝 - Application 로직 개선 - 프로세스 별 자원 분배 최적화 3) 고객 SR(Service Request), VOC(Voice of Customer) 대응 - 신규 기능 개발 - 기존 기능 로직 변경 - 데이터 추출
                요청 대응 - 시스템 이용 및 데이터 관련 문의 답변 4) 운영 업무 체계화 - 운영 프로세스 SOP 문서 작성 - 운영 정보 체계화 5) 시스템 해외 법인 확산 지원 - 적용 시나리오, DB Script 작성 및
                적용 지원 - 해외법인 담당자와 커뮤니케이션 (메일/메신저) ∙ 주요 성과: - VOC/SR 처리 납기 준수 - 시스템 안정화 및 성능 개선 기여 - 운영 정보 관리 체계 수립하여 업무 효율성 향상에 기여 -
                현업 원가절감 활동 지원 2014.12 - 2017.10 (2년 10개월) 삼성 SDS Nexshop Sales 솔루션 개발 ∙ 개발 인원: 약 20명 ∙ 개발 환경: IntelliJ, Git, JIRA, Confluence ∙ 개발 언어 및 라이브러리:
                ANSI SQL, Java, JavaScript, jQuery, Spring Framework ∙ 담당 업무: Web 서버, Web UI 개발 ∙ 상세 내용: - Customer 모듈 RESTful API개발 - Admin(User, Login, Menu Management) 모듈 유지보수
                - 휴대폰 개통 기능 연동 개발 (통신사 웹서비스 호출을 위한 SOAP 기반 클라이언트 구현) 2013.05 - 2014.11 (1년 6개월) 삼성전자 Smart TV Application 개발 ∙ 개발 인원: 12명 ∙ 개발 환경:
                Sublime Text, SVN, Redmine ∙ 개발 언어 및 라이브러리: JavaScript, jQuery, HTML, CSS, BackboneJS ∙ 담당 업무: Smart TV Facebook, Twitter, 대우증권 WebApp 유지보수 및 리팩토링 ∙ 상세
                내용: - 양산 테스트 Defect, VOC, 로직 변경 요청 대응 - Facebook, Twitter App 대상 BackboneJS F/W적용하여 MVC 패턴으로 재개발 - 대우증권 App GUI 리뉴얼
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} style={{ fontSize: '30rem' }}>
                test
            </motion.div>
            <div style={{ marginTop: '30rem' }}></div>
            <motion.div className="progress-bar" style={{ scaleY: scaleY }} />
        </div>
    );
}
