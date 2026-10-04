'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

import styles from './styles.module.scss';
import ProjectsList from '@/components/projects-list';
import { ProjectCategory } from '@/utils/projects';

export default function ProjectsCategory({ category }: { category: ProjectCategory }) {
  // Без кнопки (galleryLabel === null) галерея открыта сразу — это раздел «Проекты».
  const [open, setOpen] = useState(category.galleryLabel === null);

  const scroll = () => {
    const el = document.getElementById('gallery');
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 500);
    }
  }

  const hasGallery = category.paths === null || category.paths.length > 0;

  return (
    <main className={styles['category']}>
      <section className={styles['category__card']}>
        <h1 className={styles['category__title']}>{category.title}</h1>

        {category.paragraphs.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{
              clipPath: 'inset(0 100% 0 0)',
            }}
            animate={{
              clipPath: 'inset(0 0 0 0)',
            }}
            transition={{
              duration: 0.8,
              delay: 0.7 + index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className={`${styles['category__section']} ${styles['red-line']}`}>
              {paragraph}
            </p>
          </motion.div>
        ))}

        {category.note && <p className={styles['category__note']}>{category.note}</p>}

        {category.article &&
          <a className={styles['category__button']} href={category.article.href} target='_blank'>
            {category.article.label}
          </a>
        }

        {category.galleryLabel &&
          <button id='gallery' className={styles['category__button']} onClick={() => { setOpen(!open); scroll(); }}>
            {category.galleryLabel}
          </button>
        }
      </section>

      {hasGallery &&
        <div className={`${styles['category__gallery']} ${open ? styles['category__gallery--open'] : ''}`}>
          <div className={styles['category__gallery-inner']}>
            <ProjectsList paths={category.paths}></ProjectsList>
          </div>
        </div>
      }
    </main>
  );
}
