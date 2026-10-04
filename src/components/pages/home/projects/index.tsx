'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import styles from './styles.module.scss';
import Reveal from '@/components/reveal';
import { fileUrl, pickProjects, projectCategories, projectLinks, ProjectItem } from '@/utils/projects';

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

const revealTransition = (index: number) => ({
  duration: 0.8,
  delay: index * 0.15,
  ease: [0.22, 1, 0.36, 1] as const,
});

const cardTransition = (index: number) => ({
  duration: 0.6,
  delay: index * 0.1,
  ease: [0.22, 1, 0.36, 1] as const,
});

export default function HomeProjects() {
  const router = useTransitionRouter();
  const [objects, setObjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetch('https://ambilux.com/api/objects')
      .then(response => response.json())
      .then(parsed => setObjects(parsed))
      .catch(() => {});
  }, []);

  const onClick = (href: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      router.push(href, { scroll: false });
    };
  };

  // Обложка карточки — первое ещё не занятое фото из объектов категории (порядок задан paths).
  // Категории пересекаются по объектам (например, «Наукоград» — и архитектура, и градостроительство),
  // поэтому без учёта уже занятых фото соседние карточки показывали бы одну и ту же картинку.
  const cardPictures = useMemo(() => {
    const usedPaths = new Set<string>();
    const result: Record<string, ProjectItem['picture']> = {};

    for (const { slug } of projectLinks) {
      const category = projectCategories[slug];
      const items = category.paths ? pickProjects(objects, category.paths) : objects;
      const picked = items.find(item => item.picture && !usedPaths.has(item.path));

      if (picked) {
        usedPaths.add(picked.path);
        result[slug] = picked.picture;
      }
    }

    return result;
  }, [objects]);

  return (
    <main id="projects" className={styles['projects']}>
      <h1 className={styles['projects__title']}>Проекты</h1>

      <Reveal transition={revealTransition(0)}>
        <section className={`${styles['projects__section']} ${styles['red-line']}`}>
          {intro}
        </section>
      </Reveal>

      <Reveal transition={revealTransition(1)}>
        <section className={styles['projects__section']}>
          <p>{approachTitle}</p>

          <div className={styles['projects__approach']}>
            {approach.map((item, index) => (
              <div key={index} className={styles['projects__approach-item']}>
                <span className={styles['projects__approach-number']}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles['projects__approach-label']}>{item.label}</span>
                <p className={styles['projects__approach-text']}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal transition={revealTransition(2)}>
        <section className={`${styles['projects__section']} ${styles['red-line']}`}>
          {outro}
        </section>
      </Reveal>

      <div className={styles['projects__cards']}>
        {projectLinks.map(({ slug, label }, index) => {
          const picture = cardPictures[slug];

          return (
            <Reveal key={slug} transition={cardTransition(index)}>
              <a className={styles['projects__card']} onClick={onClick(`/projects/${slug}`)}>
                {picture ?
                  <Image
                    className={styles['projects__card-image']}
                    src={fileUrl(picture.path)}
                    alt={label}
                    sizes="(max-width: 925px) 100vw, 380px"
                    fill
                  /> :
                  <div className={styles['projects__card-placeholder']}></div>
                }

                <span className={styles['projects__card-title']}>
                  {label}
                  <span className={styles['projects__card-arrow']}>→</span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}
