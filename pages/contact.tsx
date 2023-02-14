import { AppContext } from '@/hooks/AppContext';
import AppLayout from '@/layouts/AppLayout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useContext, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Link from 'next/link';

Contact.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};
export default function Contact() {
    const { setTargetPage, targetPage, pages } = useContext(AppContext);
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
                }
            }, 500);
        };
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div id="contact">
            <div className="bg"></div>
            <div className="bg-image"></div>
            <div className="title">Contact Info.</div>
            <div className="desc">
                저에 대해 궁금하신 점이 있으신가요? <br /> 문의 사항은 언제나 환영합니다.
            </div>
            <div className="email">rhaldud89@gmail.com</div>
            <div className="icon-container">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={'https://github.com/gom20'} target="_blank">
                        <GitHubIcon style={{ height: 32, width: 32, color: '#fff' }}></GitHubIcon>
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={'https://open.kakao.com/o/swKFAh4e'} target="_blank">
                        <Image priority src="/kakao_icon.svg" height={31} width={31} alt="Follow us on Twitter" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={'https://gom20.tistory.com'} target="_blank">
                        <Image priority src="/tistory_icon.svg" height={30} width={30} alt="Follow us on Twitter" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
