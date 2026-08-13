import Image from 'next/image';

import styles from './home-contacts.module.scss';

const contacts = [
  {
    alt: 'Max',
    link: 'https://max.ru/join/KWK9Y09HkYy6Cu85Z0fZjDzh8vbRVZNonZYXX9weUEQ',
    icon: '/max.svg',
  },
  {
    alt: 'Telegram',
    link: 'https://t.me/chaplyginspace',
    icon: '/telegram.svg',
  },
  {
    alt: 'VK Video',
    link: 'https://m.vkvideo.ru/@ambiluxarchitects?from=search',
    icon: '/vk.svg',
  },
  {
    alt: 'YouTube',
    link: 'https://m.youtube.com/@ambiluxarchitects643?ra=m',
    icon: '/youtube.svg',
  }
];

export default function HomeContacts() {
  return (
    <div className={styles.contacts}>
      {contacts.map(item =>
        <a href={item.link} key={item.alt} target='_blank' title={item.alt}>
          <Image
            src={item.icon}
            alt={item.alt}
            width={30}
            height={30}
          />
        </a>
      )}
    </div>
  );
}