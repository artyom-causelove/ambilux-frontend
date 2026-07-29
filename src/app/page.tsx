import styles from './page.module.scss';

import HomeVideo from '@/components/pages/home/video';
import HomeMain from '@/components/pages/home/main';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HomeVideo></HomeVideo>
      <HomeMain></HomeMain>
    </div>
  );
}
