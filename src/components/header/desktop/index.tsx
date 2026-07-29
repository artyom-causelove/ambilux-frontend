'use client';

import Image from 'next/image';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';
import { scrollToContacts, scrollToContactsAfterTransition } from '@/utils/scroll';

export default function DesktopHeader() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const contacts = (event: any) => {
    event.preventDefault();
    if (pathname !== '/') {
      router.push('/', { onTransitionReady: scrollToContactsAfterTransition });
    } else {
      scrollToContacts();
    }
  }

  // Сам слайд задан в globals.scss через ::view-transition-*, здесь только навигация.
  const onClick = (href: string) => {
    return (event: any) => {
      event.preventDefault();
      router.push(href, { scroll: false });
    };
  };

  return <div id='site-header' className={styles['desktop-header']}>
    <div className={styles['desktop-header__logo']}>
      <Image src='/logo-black.avif' alt='AMBILUX ARCHITECTS' fill/>
    </div>

    <div className={styles['desktop-header__navigation']}>
      <a className={styles['desktop-header__navigation-item']} onClick={onClick('/')}>Главная</a>
      <a className={styles['desktop-header__navigation-item']} onClick={onClick('/about')}>О нас</a>
      <a className={styles['desktop-header__navigation-item']} onClick={onClick('/projects')}>Проекты</a>
      <a className={styles['desktop-header__navigation-item']} onClick={onClick('/team')}>Команда</a>
      <a className={styles['desktop-header__navigation-item']} onClick={contacts}>Контакты</a>
    </div>
  </div>
}
