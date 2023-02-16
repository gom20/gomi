import CustomCursor from '@/components/CustomCursor';
import { AppContext } from '@/hooks/AppContext';
import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useContext, useEffect, useReducer, useState } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
    const pages = ['/', '/about', '/experience', '/skill', '/contact'];
    const [targetPage, setTargetPage] = useState(router.asPath);

    const getLayout = Component.getLayout ?? ((page) => page);

    let initialPageVariants = {
        initial: { opacity: 0, y: 1100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -1100 },
    };

    const [screenWidth, setScreenWidth] = useState(1100);
    const [pageVariants, setPageVariants] = useState(initialPageVariants);

    useEffect(() => {
        const curIdx = pages.indexOf(globalThis.location.pathname);
        const nextIdx = pages.indexOf(targetPage);
        if (screenWidth > 800) {
            if (curIdx <= nextIdx) {
                setPageVariants({
                    initial: { opacity: 1, y: 1100 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 1, y: -1100 },
                });
            } else {
                setPageVariants({
                    initial: { opacity: 1, y: -1100 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 1, y: 1100 },
                });
            }
        }
        router.push(targetPage);
    }, [targetPage]);

    useEffect(() => {
        if (screenWidth > 800) {
            setPageVariants(initialPageVariants);
        } else {
            setPageVariants({
                initial: { opacity: 0, y: 0 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 0 },
            });
        }
    }, [screenWidth]);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleWindowSizeChange = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return (
        <AppContext.Provider value={{ pages, targetPage, setTargetPage }}>
            {getLayout(
                <>
                    <AnimatePresence mode="popLayout" initial={true}>
                        <motion.div key={router.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                            <Component {...{ ...pageProps }} />
                        </motion.div>
                    </AnimatePresence>
                    <CustomCursor />
                </>
            )}
        </AppContext.Provider>
    );
}
