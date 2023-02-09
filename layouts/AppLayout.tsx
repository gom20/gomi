import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import { AnimatePresence, motion } from 'framer-motion';
export default function AppLayout(props: { isHome?: boolean; children: React.ReactNode }) {
    return (
        <motion.div>
            <AnimatePresence>
                {!props.isHome && (
                    <motion.div
                        className={styles.header}
                        key="header"
                        initial={{ opacity: 1, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: -100, transition: { duration: 0.7 } }}
                        transition={{ duration: 0.7 }}>
                        <Header />
                    </motion.div>
                )}
            </AnimatePresence>

            {props.children}
            <Footer />
        </motion.div>
    );
}
