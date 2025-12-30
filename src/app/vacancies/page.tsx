import Image from 'next/image';
import styles from './page.module.scss';

export default function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <Image
        className={styles.logo}
        src='/logo-black.avif'
        alt='AMBILUX'
        width={281}
        height={50}
      />
      <p className={styles.info}>На данный момент нет доступных вакансий, однако Вы можете отправить резюме на <a href='mailto:team@ambilux.com' target='_blank'>team@ambilux.com</a></p>
    </div>
  );
}
