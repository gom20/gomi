import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';

export default function AppLayout(props: { isHome?: boolean; children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
            <AnimatePresence>
                {!props.isHome && (
                    <motion.div
                        style={{ position: 'fixed', top: 0, zIndex: 1 }}
                        key="header"
                        initial={{ opacity: 1, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: -100 }}
                        transition={{ duration: 0.7 }}>
                        <Header />
                    </motion.div>
                )}
            </AnimatePresence>

            {props.children}

            <AnimatePresence>
                {!props.isHome && (
                    <motion.div
                        style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1 }}
                        key="footer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
