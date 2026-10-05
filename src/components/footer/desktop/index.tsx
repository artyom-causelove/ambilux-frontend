import styles from './styles.module.scss';

import Image from 'next/image';

export default function DesktopFooter() {
  return <div id='site-footer' className={styles['desktop-footer']}>
    <h1 className={styles['desktop-footer__logo']}>© 2026 Ambilux architects</h1>

    {/* Исходник 57 МБ, на сайте — версия 10 МБ (страницы отрендерены в JPEG 2200px) */}
    <a
      className={styles['desktop-footer__presentation']}
      href='/ambilux-presentation-2025.pdf'
      download='AMBILUX presentation 2025.pdf'
    >
      Скачать презентацию
    </a>

    <div className={styles['desktop-footer__social']}>
      <a className={styles['desktop-footer__social-item']} href='https://max.ru/join/KWK9Y09HkYy6Cu85Z0fZjDzh8vbRVZNonZYXX9weUEQ' target='_blank'>
        <Image
          className={styles['desktop-footer__social-item-image']}
          src='/max.svg'
          alt='Max'
          width={30}
          height={30}
        />
        <span className={styles['desktop-footer__social-item-text']}>MAX</span>
      </a>
      <a className={styles['desktop-footer__social-item']} href='https://m.vkvideo.ru/@ambiluxarchitects?from=search' target='_blank'>
        <Image
          className={styles['desktop-footer__social-item-image']}
          src='/vk.svg'
          alt='VK'
          width={30}
          height={30}
        />
      </a>
      <a className={styles['desktop-footer__social-item']} href='https://t.me/chaplyginspace' target='_blank'>
        <Image
          className={styles['desktop-footer__social-item-image']}
          src='/telegram.svg'
          alt='Telegram'
          width={30}
          height={30}
        />
      </a>
      <a className={styles['desktop-footer__social-item']} href='https://m.youtube.com/@ambiluxarchitects643?ra=m' target='_blank'>
        <Image
          className={styles['desktop-footer__social-item-image']}
          src='/youtube.svg'
          alt='youtube'
          width={30}
          height={30}
        />
      </a>
    </div>
  </div>
}
