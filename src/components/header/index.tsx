'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
// import Link from 'next/link';

const contacts = [
  {
    alt: 'instagram',
    link: 'https://www.instagram.com/ambilux_architects/',
    icon: '/instagram.avif',
  },
  {
    alt: 'youtube',
    link: 'https://www.youtube.com/channel/UC1gc5w2gEwrbdDrdI9JHP3A',
    icon: '/youtube.avif',
  },
  {
    alt: 'facebook',
    link: 'https://ru-ru.facebook.com/people/Ambilux-Architects/100009167491448',
    icon: '/facebook.avif',
  }
];

export default function Header() {
  const router = useTransitionRouter();
  const match = useMediaQuery('(max-width: 925px)');
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  const headerItems = {
    home: { title: 'главная', href: '/' , type: 'link', onClick: () => {}},
    about: { title: 'о нас', href: '/about', type: 'link', onClick: () => {}},
    contacts: {
      title: 'контакты',
      href: '/contacts',
      type: 'button',
      onClick: (e: any) => {
        e.preventDefault();
        if (pathname !== '/') {
          router.push('/', {
            onTransitionReady: slideInOut(true),
            // scroll: true
          });
        } else {
          const content = document.querySelector('#awd');
          const wrapper = document.querySelector('#wrapper');
          wrapper?.scrollTo({ top: content?.scrollHeight, behavior: 'smooth' });
        }
        setMenu(false);
      }
    },
    vacancies: { title: 'вакансии', href: '/vacancies', type: 'link', onClick: () => {}}
  };

  const isActive = (href: string) => {
    return pathname === href;
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
          const content = document.querySelector('#awd');
          const wrapper = document.querySelector('#wrapper');
          wrapper?.scrollTo({ top: content?.scrollHeight, behavior: 'smooth' });
        });
      }
    }
  };

  const getHeaderPos = () => {
    if (match) {
      return menu ? 'fixed' : 'static';
    } else {
      return 'fixed';
    }
  };

  return (
    <header className={styles.header} style={{ position: getHeaderPos() }}>
      {
        Object.entries(headerItems).map(([key, value]) => {
          if (value.type === 'button') return (
            <button className={`${styles.item} ${isActive(value.href) && styles.active}`} key={key} onClick={value.onClick}>
              {value.title.toUpperCase()}
            </button>
          );
          
          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push(value.href, {
                  onTransitionReady: slideInOut(false),
                  scroll: false
                });
              }}
              className={`${styles.item} ${isActive(value.href) && styles.active}`}
              key={key}
            >
              {value.title.toUpperCase()}
            </a>
          ); 
        })
      }
      <div className={styles.mobileWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.logo}
            src='/logo-black.avif'
            alt='AMBILUX ARCHITECTS'
            fill
          />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.menuWrapper}>
          {contacts.map(item =>
            <a href={item.link} key={item.alt} target='_blank'>
              <Image
                src={item.icon}
                alt={item.alt}
                width={40}
                height={40}
              />
            </a>
          )}
          <div className={`${styles.button} ${menu && styles.active}`} onClick={() => setMenu(!menu)}>
            <div className={styles.buttonIcon}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${menu && styles.activeMenu}`}>
        {
          Object.entries(headerItems).map(([key, value]) => {
            if (value.type === 'button') return (
              <button className={`${styles.mobileItem} ${isActive(value.href) && styles.mobileActive}`} key={key} onClick={value.onClick}>
                {value.title.toUpperCase()}
              </button>
            );
            
            return (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  router.push(value.href, {
                    onTransitionReady: slideInOut(false),
                    scroll: false
                  });
                  setMenu(false);
                }}
                className={`${styles.mobileItem} ${isActive(value.href) && styles.mobileActive}`}
                key={key}
              >
                {value.title.toUpperCase()}
              </a>
            ); 
          })
        }
      </div>
    </header>
  );
}
