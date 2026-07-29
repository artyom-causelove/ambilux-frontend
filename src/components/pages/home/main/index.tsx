import styles from '@/components/pages/home/main/home-main.module.scss';
import ContactUs from '@/components/contact-us';
import ProjectsList from '@/components/projects-list';

export default function HomeMain() {
  return (
    <main className={styles.main}>
      <ProjectsList/>
      <ContactUs/>
    </main>
  );
}
