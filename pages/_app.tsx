import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    let initialPageVariants = {
        initial: { opacity: 0, y: 1100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -1100 },
    };

    const [width, setWidth] = useState(1100);
    const [variants, setVariants] = useState(initialPageVariants);
    useEffect(() => {
        if (width <= 800) {
            setVariants({
                initial: { opacity: 0, y: 0 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 0 },
            });
        } else {
            setVariants(initialPageVariants);
        }
    }, [width]);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return getLayout(
        <AnimatePresence mode="popLayout" initial={true}>
            <motion.div key={router.pathname} variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}
