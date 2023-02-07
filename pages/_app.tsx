import '@/styles/globals.css';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
    return <Component {...pageProps} />;
}
