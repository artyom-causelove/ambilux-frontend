import styles from './page.module.scss';

import HomeContacts from '@/components/pages/home/contacts';
import HomeVideo from '@/components/pages/home/video';
import HomeMain from '@/components/pages/home/main';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HomeVideo></HomeVideo>
      <HomeContacts></HomeContacts>
      <HomeMain></HomeMain>
    </div>
  );
}
