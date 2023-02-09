import AppLayout from '@/layouts/AppLayout';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default function Home() {
  const router = useRouter();

  let timer: null | NodeJS.Timeout;
  const handleWheel = (e: WheelEvent) => {
    if (timer) return;
    timer = setTimeout(function () {
      timer = null;
      let hasScroll = window.innerHeight == document.body.offsetHeight ? true : false;
      if (!hasScroll) {
        if (e.deltaY > 0) {
          router.push('/about');
        }
      } else {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
          router.push('/about');
        }
      }
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Hello!</div>
      <div>
        <div className={styles.desc}>I'm Miyoung.</div>
        <div className={styles.desc}>I'm a Full Stack Web Developer!</div>
      </div>
    </main>
  );
}
