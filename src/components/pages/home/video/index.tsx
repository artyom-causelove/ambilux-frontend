import Image from 'next/image';

import styles from '@/components/pages/home/video/home-video.module.scss';

export default function HomeVideo() {
  return (
    <section className={styles.wrapper}>
      <Image
        className={styles.image}
        src='/logo-white.png'
        alt='AMBILUX ARCHITECTS'
        width={1517}
        height={394}
      />
      <video className={styles.video} autoPlay loop muted playsInline poster="/intro.webp">
        <source src='https://ambilux.com/api/main/intro.mp4' type='video/mp4'/>
      </video>
    </section>
  );
}