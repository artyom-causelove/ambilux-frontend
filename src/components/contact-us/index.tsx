'use client';

import Image from 'next/image';

import styles from './contact-us.module.scss';
import { FormEvent, useState } from 'react';

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
  const [vis, setVis] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const tar = event.currentTarget;
  
    const formData = new FormData(tar)
    const response = await fetch('https://ambilux.com/api/messages', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });
  
    const data = await response.json()

    if (data && response.status === 201) {
      tar.reset();
      setVis(true)
      setTimeout(() => setVis(false), 4000);
    }
  }

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
      <form className={styles.form} onSubmit={onSubmit} action='#'>
        <div className={styles.formWrapper}>
          <input required name='name' className={styles.formName} minLength={1} maxLength={60} placeholder='Имя'/>
          <input required name='email' type='email' className={styles.formEmail} minLength={3} maxLength={254} placeholder='Электронная почта'/>
        </div>
        <textarea required name='text' className={styles.formText} minLength={1} maxLength={2000} placeholder='Введите текст'></textarea>
        <button type='submit' className={styles.button}>Отправить</button>
        <span className={`${styles.thanks} ${vis && styles.vis}`}>Отправлено. Спасибо!</span>
      </form>
    </div>
  );
}
