import styles from '@/styles/Layout.module.css';

export default function Info() {
    return (
        <div className={styles.info}>
            <div className={styles.logo}>
                <p style={{ color: '#5755cf' }}>GO!</p>
                <p>MIYOUNG</p>
            </div>
        </div>
    );
}
