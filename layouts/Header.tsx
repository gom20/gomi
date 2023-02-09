import styles from '@/styles/Layout.module.css';
import { motion } from 'framer-motion';
import Info from './Info';
import Menu from './Menu';
export default function Header() {
  return (
    <div className={styles.header}>
      <motion.div
        key="header"
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
        <Info />
      </motion.div>
      <Menu />
    </div>
  );
}
