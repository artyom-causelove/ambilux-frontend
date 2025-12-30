'use client'

import { ViewTransitions } from 'next-view-transitions';
import Image from 'next/image';

import '@/scss/globals.scss';

import styles from '@/app/layout.module.scss';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScroll] = useState(false);

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
            <Header></Header>
            <div className={styles.background}>
              <Image
                className={styles.backgroundImage}
                src='/background.png'
                alt='Site background'
                fill
              />
            </div>
            <div id='awd' className={styles.content}>
              {children}
            </div>
            <Footer></Footer>
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
