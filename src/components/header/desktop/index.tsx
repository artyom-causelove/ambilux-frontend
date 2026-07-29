'use client';

import Image from 'next/image';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';

export default function DesktopHeader() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const contacts = (event: any) => {
    event.preventDefault();
    if (pathname !== '/') {
      router.push('/', { onTransitionReady: slideInOut(true)});
    } else {
      const content = document.querySelector('#content');
      const wrapper = document.querySelector('#wrapper');
      if (wrapper && content) {
        wrapper.scrollTo({ top: content.scrollHeight, behavior: 'smooth' });
      }
    }
  }

  const onClick = (href: string) => {
    return (event: any) => {
      event.preventDefault();
      router.push(href, {
        onTransitionReady: slideInOut(false),
        scroll: false
      });
    };
  };

  const slideInOut = (scroll: boolean) => {
    return () => {
      document.documentElement.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' }
      ], {
        pseudoElement: '::view-transition-old(body)',
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        duration: 700
      });

      const anim = document.documentElement
        .animate([
          { transform: 'translateX(100%)' },
          { transform: 'translateX(0)' }
        ], {
          pseudoElement: '::view-transition-new(body)',
          easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
          fill: 'forwards',
          duration: 700
        })
      
      if (scroll) {
        anim.addEventListener('finish', () => {
          const content = document.querySelector('#content');
          const wrapper = document.querySelector('#wrapper');
          if (content && wrapper) {
            wrapper.scrollTo({ top: content.scrollHeight, behavior: 'smooth' });
          }
        });
      }
    }
  };

  return <div className={styles['desktop-header']}>
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
