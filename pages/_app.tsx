import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <AnimatePresence mode="popLayout" initial={true}>
            <motion.div key={router.pathname} initial={{ opacity: 0, y: '100%', x: 0 }} animate={{ opacity: 1, y: 0, x: 0 }} exit={{ opacity: 0, y: '-100%', x: 0 }} transition={{ duration: 0.5 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}
