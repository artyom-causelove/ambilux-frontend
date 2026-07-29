'use client';

import { motion } from 'motion/react';
import { useTransitionRouter } from 'next-view-transitions';

import styles from './page.module.scss';
import { projectLinks } from '@/utils/projects';

const intro = `
  В ответ на вызовы XXI века — эпохи цифровизации, глобализации и стремительно меняющихся социальных сценариев —
  специалистами нашей компании была разработана и внедрена собственная методология интеллектуального моделирования,
  которую мы постоянно обновляем, учитывая динамичность современной жизни.
`;

const approachTitle = `Это целостный научно-практический подход, который включает в себя:`;

const approach = [{
  label: `Системный анализ`,
  text: `Глубокое изучение территории, социальных, экономических и культурных факторов;`
}, {
  label: `Прогностическое моделирование`,
  text: `
    Создание цифровых моделей, позволяющих прогнозировать развитие пространственных систем и их влияние
    на качество жизни;
  `
}, {
  label: `Человекоцентричность моделей`,
  text: `
    Проектирование, ориентированное на новые потребности человека, его комфорт, безопасность и возможности
    для самореализации;
  `
}, {
  label: `Применение основных принципов нашей методологии`,
  text: `
    Дифференциация транспортно-пешеходных потоков, резервирование территорий под перспективную уплотнительную
    застройку, многофункциональность планируемой застройки и пр.
  `
}];

const outro = `
  Ключевая цель методологии «Интеллектуальное моделирование» — создание устойчивых, адаптивных и эффективных
  пространств, формирующих условия для сохранения и приумножения человеческого капитала. А одним из основных
  принципов практической работы является экономическая целесообразность, в том числе для экономики региона
  при формировании предпосылок развития человеческого капитала и обеспечении условий технологического
  суверенитета РФ.
`;

// Вход синхронизирован с --vt-duration: 700ms — текст проявляется после слайда страницы.
const reveal = (index: number) => ({
  initial: {
    clipPath: 'inset(0 100% 0 0)',
  },
  animate: {
    clipPath: 'inset(0 0 0 0)',
  },
  transition: {
    duration: 0.8,
    delay: 0.7 + index * 0.15,
    ease: [0.22, 1, 0.36, 1] as const,
  }
});

export default function Projects() {
  const router = useTransitionRouter();

  const onClick = (href: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      router.push(href, { scroll: false });
    };
  };

  return (
    <main className={styles['projects']}>
      <h1 className={styles['projects__title']}>Проекты</h1>

      <motion.div {...reveal(0)}>
        <section className={`${styles['projects__section']} ${styles['red-line']}`}>
          {intro}
        </section>
      </motion.div>

      <motion.div {...reveal(1)}>
        <section className={styles['projects__section']}>
          <p>{approachTitle}</p>

          <ul className={styles['projects__approach']}>
            {approach.map((item, index) => (
              <li key={index} className={styles['projects__approach-item']}>
                <span className={styles['projects__approach-label']}>{item.label}:</span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>

      <motion.div {...reveal(2)}>
        <section className={`${styles['projects__section']} ${styles['red-line']}`}>
          {outro}
        </section>
      </motion.div>

      <motion.div {...reveal(3)}>
        <nav className={styles['projects__nav']}>
          {projectLinks.map(({ slug, label }) => (
            <a key={slug} className={styles['projects__nav-item']} onClick={onClick(`/projects/${slug}`)}>
              {label}
            </a>
          ))}
        </nav>
      </motion.div>
    </main>
  );
}
