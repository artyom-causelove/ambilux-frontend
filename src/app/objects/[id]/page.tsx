'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fileUrl } from '@/utils/projects';

type ObjectFile = { id: number; path: string; width?: number; height?: number };

const isPdf = (file: ObjectFile) => file.path.toLowerCase().endsWith('.pdf');

// Сколько абзацев описания видно до «Читать полностью»: в начале docx идут название, адрес, год.
const PREVIEW_PARAGRAPHS = 5;

export default function Object() {
  const params = useParams();

  const match = useMediaQuery('(max-width: 925px)');
  const [data, setData] = useState<any>(null);
  const [text, setText] = useState<string[]>([]);
  // Описания длинные (до сотни абзацев) — без сворачивания до галереи на телефоне не долистать.
  const [expanded, setExpanded] = useState(false);
  const visibleText = expanded ? text : text.slice(0, PREVIEW_PARAGRAPHS);

  useEffect(() => {
    fetch(`https://ambilux.com/api/objects/${params.id}`)
      .then(response => response.json())
      .then(parsed => setData(parsed));

    // Описание проекта лежит статикой в public/texts — у API для него нет поля.
    fetch(`/texts/${params.id}.txt`)
      .then(response => response.ok ? response.text() : '')
      .then(raw => setText(raw.split(/\n\s*\n/).map(it => it.trim()).filter(Boolean)))
      .catch(() => {});
  }, []);

  // API отдаёт файлы без гарантии порядка, а он важен: сначала планшеты, потом изображения.
  const files: ObjectFile[] = [...(data?.files ?? [])].sort((a, b) => a.id - b.id);
  const pdfs = files.filter(isPdf);
  const images = files.filter(file => !isPdf(file));

  return (
    <div className={styles.wrapper}>
      {data && (text.length > 0 || pdfs.length > 0) &&
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>

          {pdfs.map(file =>
            <a
              className={styles.download}
              href={fileUrl(file.path)}
              target='_blank'
              key={file.id}
            >
              Скачать PDF
            </a>
          )}

          {visibleText.map((paragraph, index) =>
            <p className={styles.paragraph} key={index}>{paragraph}</p>
          )}

          {text.length > PREVIEW_PARAGRAPHS &&
            <button className={styles.more} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Свернуть' : 'Читать полностью'}
            </button>
          }
        </div>
      }

      {images.map(file =>
        <div className={styles.imageWrapper} key={file.id} style={match
          ? { width: '100%', aspectRatio: `${file.width} / ${file.height}` }
          : { width: file.width, height: file.height }
        }>
          <Image
            className={styles.image}
            alt='Object picture'
            src={fileUrl(file.path)}
            sizes={match ? '100vw' : `${file.width}px`}
            fill
          />
        </div>
      )}
    </div>
  );
}
