import { motion } from 'framer-motion';
import styles from '@/styles/Header.module.css';
import Header from './HeaderLayout';
export default function AppLayout(props: { children: React.ReactNode }) {
    return <>{props.children}</>;
}
