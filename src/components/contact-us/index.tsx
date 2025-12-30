import Image from 'next/image';

import styles from './contact-us.module.scss';

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

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>СВЯЖИТЕСЬ С НАМИ</span>
      <div className={styles.separator}></div>
      <div className={styles.email}>
        <a href='mailto:Inf@ambilux.com' target='_blank'>E-MAIL: inf@ambilux.com</a>
      </div>
      <div className={styles.telegram}>
        <a href='https://t.me/ambilux_architects' target='_blank'>Telegram: https://t.me/ambilux_architects</a>
      </div>
      <div className={styles.social}>
        {contacts.map(item =>
          <a href={item.link} key={item.alt} target='_blank'>
            <Image
              src={item.icon}
              alt={item.alt}
              width={30}
              height={30}
            />
          </a>
        )}
      </div>
      <div className={styles.formWrapper}>
        <input className={styles.formName} placeholder='Имя'/>
        <input className={styles.formEmail} placeholder='Электронная почта'/>
      </div>
      <textarea className={styles.formText} placeholder='Введите текст'></textarea>
      <button className={styles.button}>Отправить</button>
    </div>
  );
}
