import { motion } from 'framer-motion';
import styles from '@/styles/Header.module.css';
export default function HeaderLayout() {
    return (
        <header className={styles.header}>
            <div>
                <p>HINT</p>
            </div>
            <div>HOME MAIL SEARCH ACCOUNT</div>
        </header>
    );
}
