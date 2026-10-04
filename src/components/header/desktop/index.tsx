'use client';

import Image from 'next/image';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import styles from './styles.module.scss';
import { scrollToSection, scrollToSectionAfterTransition } from '@/utils/scroll';

export default function DesktopHeader() {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Разделы «О нас»/«Проекты»/«Команда»/«Контакты» живут на главной как секции —
  // с других страниц сперва переходим на «/», затем доскролливаем после анимации.
  const toSection = (id: string) => {
    return (event: any) => {
      event.preventDefault();
      setMenuOpen(false);
      if (pathname !== '/') {
        router.push('/', { onTransitionReady: () => scrollToSectionAfterTransition(id) });
      } else {
        scrollToSection(id);
      }
    };
  };

  // Сам слайд задан в globals.scss через ::view-transition-*, здесь только навигация.
  const onClick = (href: string) => {
    return (event: any) => {
      event.preventDefault();
      setMenuOpen(false);
      router.push(href, { scroll: false });
    };
  };

  // Пункты общие для десктопного ряда и мобильной панели — обработчики те же,
  // отличается только то, какой из двух блоков сейчас показан по CSS-медиазапросу.
  const navItems = <>
    <a className={styles['desktop-header__navigation-item']} onClick={onClick('/')}>Главная</a>
    <a className={styles['desktop-header__navigation-item']} onClick={toSection('about')}>О нас</a>
    <a className={styles['desktop-header__navigation-item']} onClick={toSection('projects')}>Проекты</a>
    <a className={styles['desktop-header__navigation-item']} onClick={toSection('team')}>Команда</a>
    <a className={styles['desktop-header__navigation-item']} onClick={toSection('contacts')}>Контакты</a>
  </>;

  return <div id='site-header' className={styles['desktop-header']}>
    <div className={styles['desktop-header__logo']}>
      <Image src='/logo-black.avif' alt='AMBILUX ARCHITECTS' fill/>
    </div>

    <div className={styles['desktop-header__navigation']}>
      {navItems}
    </div>

    <button
      type='button'
      aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={menuOpen}
      className={`${styles['desktop-header__burger']} ${menuOpen ? styles['desktop-header__burger--active'] : ''}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className={styles['desktop-header__burger-icon']}></span>
    </button>

    <nav className={`${styles['desktop-header__mobile-nav']} ${menuOpen ? styles['desktop-header__mobile-nav--open'] : ''}`}>
      {navItems}
    </nav>
  </div>
}
