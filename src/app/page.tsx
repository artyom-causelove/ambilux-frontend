'use client';

import { useEffect } from 'react';

import styles from './page.module.scss';

import HomeVideo from '@/components/pages/home/video';
import HomeAbout from '@/components/pages/home/about';
import HomeProjects from '@/components/pages/home/projects';
import HomeTeam from '@/components/pages/home/team';
import ContactUs from '@/components/contact-us';
import { scrollToSection } from '@/utils/scroll';

export default function Home() {
  // Прямой заход по якорю (например, /#about из внешней ссылки) — доскроллить после монтирования.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() => scrollToSection(id));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <HomeVideo></HomeVideo>
      <HomeAbout></HomeAbout>
      <HomeProjects></HomeProjects>
      <HomeTeam></HomeTeam>
      <ContactUs></ContactUs>
    </div>
  );
}
