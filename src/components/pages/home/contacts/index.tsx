import Image from 'next/image';

import styles from './home-contacts.module.scss';

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

export default function HomeContacts() {
  return (
    <div className={styles.contacts}>
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
      <span>Мы проводим технические работы. Благодарим за понимание.</span>
    </div>
  );
}