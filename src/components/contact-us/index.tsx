'use client';

import Image from 'next/image';

import styles from './contact-us.module.scss';
import { FormEvent, useState } from 'react';

const phones = [
  { label: 'Москва', value: '+7-915-750-00-99', href: 'tel:+79157500099' },
  { label: 'Новосибирск', value: '+7 (383) 292-09-29', href: 'tel:+73832920929' },
];

const emails = ['inf@ambilux.com', 'fin@ambilux.com'];

const socials = [
  { alt: 'Max', icon: '/max.svg', link: 'https://max.ru/join/KWK9Y09HkYy6Cu85Z0fZjDzh8vbRVZNonZYXX9weUEQ' },
  { alt: 'Telegram', icon: '/telegram.svg', link: 'https://t.me/chaplyginspace' },
  { alt: 'VK Video', icon: '/vk.svg', link: 'https://m.vkvideo.ru/@ambiluxarchitects?from=search' },
  { alt: 'YouTube', icon: '/youtube.svg', link: 'https://m.youtube.com/@ambiluxarchitects643?ra=m' },
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

      <div className={styles.phones}>
        {phones.map(phone =>
          <a href={phone.href} key={phone.label}>{phone.label}: {phone.value}</a>
        )}
      </div>

      <div className={styles.emails}>
        {emails.map(email =>
          <a href={`mailto:${email}`} key={email} target='_blank'>{email}</a>
        )}
      </div>

      <div className={styles.social}>
        {socials.map(item =>
          <a href={item.link} key={item.alt} target='_blank' title={item.alt}>
            <Image src={item.icon} alt={item.alt} width={30} height={30} />
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
