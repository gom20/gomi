import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';
import Navi from './Navi';
import Pager from './Pager';

export default function AppLayout(props: { isHome?: boolean; children: React.ReactNode }) {
    return (
        <motion.div id="header-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
            <AnimatePresence>
                {!props.isHome && (
                    <>
                        <motion.div
                            style={{ position: 'fixed', top: 0, zIndex: 10 }}
                            key="header"
                            initial={{ opacity: 1, top: -100 }}
                            animate={{ opacity: 1, top: 0 }}
                            exit={{ opacity: 1, top: -100 }}
                            transition={{ duration: 0.7 }}>
                            <Header />
                        </motion.div>
                        <motion.div key="navi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                            <Navi />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {props.children}

            <AnimatePresence>
                {!props.isHome && (
                    <>
                        <motion.div
                            style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 1 }}
                            key="footer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}>
                            <Footer />
                        </motion.div>
                        <motion.div
                            style={{ position: 'fixed', right: 0, bottom: 0, zIndex: 10 }}
                            key="pager"
                            initial={{ opacity: 0, bottom: -100 }}
                            animate={{ opacity: 1, bottom: 0 }}
                            exit={{ opacity: 0, bottom: -100 }}
                            transition={{ duration: 0.7 }}>
                            <Pager />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
