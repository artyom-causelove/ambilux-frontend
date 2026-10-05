'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import styles from './projects-list.module.scss';
import { fileUrl, ProjectItem } from '@/utils/projects';

// Фишер–Йетс: заказчик просил, чтобы порядок проектов был разным при каждом заходе,
// иначе соседние разделы выглядят одинаково.
const shuffle = <T,>(list: T[]) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// paths не задан или null — показываем все объекты. Порядок случайный при каждой загрузке.
export default function ProjectsList({ paths }: { paths?: string[] | null }) {
  const router = useTransitionRouter();
  const [data, setData] = useState<ProjectItem[]>([]);
  const match = useMediaQuery('(max-width: 925px)');

  useEffect(() => {
    fetch('https://ambilux.com/api/objects')
      .then(response => response.json())
      .then(parsed => setData(shuffle(parsed)))
      .catch(() => {});
  }, []);

  // Фильтруем, а не pickProjects: тот вернул бы порядок paths и отменил перемешивание.
  const items = paths ? data.filter(item => paths.includes(item.path)) : data;

  const getLink = (item: ProjectItem, className: string | undefined, child: ReactNode) => {
    // Путь абсолютный: относительный увёл бы со страницы категории в /projects/objects/...
    if (item.page === 'page') return <a
      onClick={(e) => {
        e.preventDefault();
        router.push(`/objects/${encodeURIComponent(item.path)}`, { scroll: false });
      }}
      className={className}>
        {child}
    </a>;

    if (item.page === 'file') return <a className={className} href={fileUrl(item.files[0].path)} target='_blank'>{child}</a>;

    return <a className={className} href={item.link} target='_blank'>{child}</a>;
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) =>
        // Сторона картинки чередуется по позиции: поле reverse из API рассчитано
        // на фиксированный порядок и после перемешивания давало два одинаковых подряд.
        <div className={`${styles.item} ${index % 2 ? styles.reverse : ''}`} key={item.id}>
          <div className={styles.itemInfo}>
            {item.type && getLink(item, styles.itemType, <span>{item.type}</span>)}
            {item.title && getLink(item, styles.itemTitle, <span>{item.title}</span>)}
            {item.address && getLink(item, styles.itemAddress, <span>{item.address}</span>)}
            <div className={styles.itemSeparator}></div>
            {item.timeline && <span className={styles.itemTimeline}>{item.timeline}</span>}
            {item.description && <span className={styles.itemDescription}>{item.description}</span>}
            {item.size && <span className={styles.itemSize}>{item.size}</span>}
            {item.capacity && <span className={styles.itemCapacity}>{item.capacity}</span>}
            {item.square && <span className={styles.itemSquare}>{item.square}</span>}
          </div>
          {item.picture &&
            <div
              className={styles.itemPictureWrapper}
              style={match ? {
                width: '100%',
                aspectRatio: `${item.picture.width} / ${item.picture.height}`
              }: {
                width: item.picture.width,
                minHeight: item.picture.height
              }}
            >
              {
                getLink(
                  item,
                  undefined,
                  <Image
                    className={styles.itemPicture}
                    src={fileUrl(item.picture.path)}
                    alt={item.title}
                    fill
                  />
                )
              }
            </div>
          }
        </div>
      )}
    </div>
  );
}
