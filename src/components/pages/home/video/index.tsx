'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from '@/components/pages/home/video/styles.module.scss';

export default function HomeVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (video.current) {
      video.current.currentTime = Math.random() * 124.5;
    }
  }, []);

  return (
    <section className={styles['home-video']}>
      <div className={styles['home-video__logo']}>
        <Image
          className={styles['home-video__logo-content']}
          src='/logo-white.png'
          alt='AMBILUX ARCHITECTS'
          fill
        />
      </div>
      
      <div className={styles['home-video__wrapper']}>
        <div className={`${styles['home-video__preload']} ${playing ? styles['home-video__preload--loaded'] : ''}`}></div>
        <video ref={video} className={styles['home-video__source']} preload='auto' autoPlay loop muted playsInline poster="/intro.webp" onPlaying={() => setPlaying(true)}>
          <source src='https://ambilux.com/api/main/intro.mp4' type='video/mp4'/>
        </video>
      </div>
    </section>
  );
}