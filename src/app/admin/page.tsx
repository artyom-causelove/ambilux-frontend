'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useLocalStorage } from 'usehooks-ts';

export default function Admin() {
  const [token, setToken, removeToken] = useLocalStorage<any>('token', { value: null });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (token.value) {
      fetch('http://158.160.34.62:3001/messages', {
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      })
        .then(response => response.json())
        .then(parsed => setMessages(parsed));
    }
  }, [token]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://158.160.34.62:3001/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });
 
    const data = await response.json()
    
    if (!data) {
      alert('Неверный логин или пароль');
    } else {
      setToken(data);
    }
  }

  return (
    <div className={styles.wrapper}>
      { !token.value && 
        <form suppressHydrationWarning className={styles.form} onSubmit={onSubmit}>
          <span className={styles.title}>Вход</span>
          <input name='login' className={styles.login} placeholder='Логин'/>
          <input name='password' type='password' className={styles.password} placeholder='Пароль'/>
          <button type="submit" className={styles.submit}>Войти</button>
        </form>
      }
      { token.value && messages.map((it: any) => 
        <div suppressHydrationWarning className={styles.message}>
          <span className={styles.name}>{it.name}</span>
          <span className={styles.email}>{it.email}</span>
          <p className={styles.text}>{it.text}</p>
        </div>
      )}
    </div>
  );
}
