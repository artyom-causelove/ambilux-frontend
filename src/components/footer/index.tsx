'use client';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a className={styles.title} href='https://www.ambilux.com/' target='_blank'>© {new Date().getFullYear()} AMBILUX architects.</a>
      <span
        className={styles.button}
        onClick={() => document.querySelector('#wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Нажмите, чтобы вернуться наверх
      </span>
    </div>
  );
}
