import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';
import Navi from './Navi';
import Pager from './Pager';

export default function AppLayout(props: { isHome?: boolean; children: React.ReactNode }) {
    const opacityVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const headerVariants = {
        initial: { opacity: 0, top: -100 },
        animate: { opacity: 1, top: 0 },
        exit: { opacity: 0, top: -100 },
    };

    const pagerVariants = {
        initial: { opacity: 0, bottom: -100 },
        animate: { opacity: 1, bottom: 0 },
        exit: { opacity: 0, bottom: -100 },
    };

    return (
        <motion.div id="header-container" variants={opacityVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.7 }}>
            <AnimatePresence>
                {!props.isHome && (
                    <>
                        <motion.div
                            style={{ position: 'fixed', top: 0, zIndex: 10 }}
                            key="header"
                            variants={headerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.7 }}>
                            <Header />
                        </motion.div>
                        <motion.div
                            key="navi"
                            variants={opacityVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}>
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
                            key="footer"
                            variants={opacityVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.7 }}>
                            <Footer />
                        </motion.div>
                        <motion.div
                            id="pager-container"
                            key="pager"
                            variants={pagerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.7 }}>
                            <Pager />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
