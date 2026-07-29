'use client'

import { ViewTransitions } from 'next-view-transitions';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import '@/scss/globals.scss';

import styles from '@/app/layout.module.scss';

const Header = dynamic(() => import('@/components/header'), { ssr: false, });
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DesktopHeader from '@/components/header/desktop';
import DesktopFooter from '@/components/footer/desktop';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  // Скроллится #wrapper, а не окно, поэтому штатный scroll-restore Next до него не достаёт.
  // Эффект успевает отработать до снятия нового снимка view transition, так что новая
  // страница попадает в него уже прокрученной наверх — без щелчка после анимации.
  useEffect(() => {
    document.getElementById('wrapper')?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <ViewTransitions>
      <html lang="en">
        <body className={styles.body}>
          <div className={styles.wrapper} id='wrapper' onScroll={(e) => {
            if (e.currentTarget.scrollTop > 300) {
              setScroll(true)
            } else {
              setScroll(false);
            }
          }}>
            <DesktopHeader></DesktopHeader>
            <div id='site-background' className={styles.background}>
              <Image
                className={styles.backgroundImage}
                src='/background.png'
                alt='Site background'
                fill
              />
            </div>
            <div id='content' className={styles.content}>
              {children}
            </div>
            <DesktopFooter></DesktopFooter>
          </div>
          {scroll &&
            <svg className={styles.backToTop} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={
              () => document.querySelector('#wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
            }>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          }
        </body>
      </html>
    </ViewTransitions>
  );
}
