import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import { useScroll, useSpring } from 'framer-motion';
import { ReactElement, useEffect } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <AnimatePresence mode="wait" initial={true}>
                <motion.div key={router.pathname} initial={{ opacity: 1, y: 1000 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1, y: -1000 }} transition={{ duration: 0.7 }}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
            {/* <CustomCursor /> */}
        </>
    );
}
