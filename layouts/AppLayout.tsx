import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
export default function AppLayout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
