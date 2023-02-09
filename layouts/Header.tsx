import styles from '@/styles/Layout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import Menu from './Menu';
export default function Header() {
    return (
        <>
            <motion.div key="logo" initial={{ opacity: 0 }} animate={{ opacity: 1, y: '0vh', scale: 1 }} exit={{ opacity: 0, top: '100vh' }} transition={{ duration: 0.7 }}>
                <Logo />
            </motion.div>
            <motion.div
                key="menu"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    // y: '0vh',
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    top: '100vh',
                }}
                transition={{
                    duration: 0.7,
                }}>
                <Menu />
            </motion.div>
        </>
    );
}
