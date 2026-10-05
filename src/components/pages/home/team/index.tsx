'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Reveal from '@/components/reveal';

// Фото лежат в public/team под номером позиции в objects (0 — руководитель), уже ужаты
// до WebP 320×320 — оптимизатор Next для них не нужен, отдаём как есть.
const photo = (index: number) => `/team/${index}.webp`;

const DOC_IFRAME_URL = 'https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true';

export default function HomeTeam() {
  const [open, setOpen] = useState(false)
  // Текст вакансий из Google Doc, очищенный на сервере (см. app/vacancies-doc/route.ts).
  // null — ещё грузится, '' — не удалось, тогда показываем исходный iframe.
  const [doc, setDoc] = useState<string | null>(null);
  const [lead, ...rest] = objects;

  useEffect(() => {
    fetch('/vacancies-doc')
      .then(response => response.ok ? response.text() : '')
      .then(setDoc)
      .catch(() => setDoc(''));
  }, []);

  const scroll = () => {
    const el = document.getElementById('vacancy')
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 500);
    }
  }

  useEffect(() => {
    if (window.location.hash === '#vacancy') {
      setOpen(true);

      requestAnimationFrame(() => scroll());
    }
  }, []);

  return (
    <main id="team" className={styles['team']}>
      <h1 className={styles['team__title']}>Команда</h1>

      <Reveal transition={{ duration: 0.5, ease: 'easeOut' }} amount={0.2}>
        <section className={styles['team__lead']}>
          <Image className={styles['team__lead-avatar']} src={photo(0)} alt={lead.name} width={67} height={67} unoptimized />
          <div className={styles['team__lead-info']}>
            <span className={styles['item__name']}>{lead.name}</span>
            <span className={styles['item__job']}>{lead.job}</span>
            <div className={styles['item__awards']}>
              {lead.awards.map((award, index) => <span key={index} className={styles['item__awards-item']}>{award}</span>)}
            </div>
            <div className={styles['item__merits']}>
              {lead.merits.map((merit, index) => <span key={index} className={styles['item__merits-item']}>{merit}</span>)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal transition={{ duration: 0.5, ease: 'easeOut' }} amount={0.1}>
        <section className={styles['team__grid']}>
          {rest.map((value, index) =>
            <div key={index} className={styles['item']}>
              <Image className={styles['item__avatar']} src={photo(index + 1)} alt={value.name} width={67} height={67} unoptimized />
              <div className={styles['item__text']}>
                <span className={styles['item__name']}>{value.name}</span>
                <span className={styles['item__job']}>{value.job}</span>
              </div>
            </div>
          )}
        </section>
      </Reveal>

      <Reveal transition={{ duration: 0.5, ease: 'easeOut' }}>
        <h2 id="vacancy" className={`${styles['team__title']} ${styles['team__title--center']}`}>Вы так же можете стать частью нашей команды!</h2>
        <button className={styles['team__button']} onClick={() => { setOpen(!open); scroll(); }}>
          Ознакомьтесь с существующими вакансиями
        </button>
      </Reveal>
      {doc === '' ?
        <div className={`${styles['team__document']} ${open && styles['team__document--open']}`}>
          <iframe
            src={DOC_IFRAME_URL}
            style={{ maxWidth: 'calc(630px + 96px * 2)', width: '100%', alignSelf: 'center' }}
            height={1017}
          />
        </div> :
        <div className={`${styles['team__doc']} ${open ? styles['team__doc--open'] : ''}`}>
          <div className={styles['team__doc-inner']}>
            <div className={styles['team__doc-text']} dangerouslySetInnerHTML={{ __html: doc ?? '' }} />
          </div>
        </div>
      }
    </main>
  );
}

const objects = [{
  name: 'Юрий Михайлович Чаплыгин',
  job: 'Основатель и главный архитектор AMBILUX architects',
  awards: [
    '- Член градостроительного совета Сибирского отделения Российской Академии Наук',
    '- Член государственной экзаменационной комиссии Новосибирского Государственного Университета Архитектуры, Дизайна и Искусств',
    '- Лауреат международных премий в области архитектуры и градостроительства'
  ],
  merits: [
    '2014-2015 Участник общественной рабочей группы по защите Новосибирского дендропарка.',
    '2018-2019 Участник межведомственной рабочей группы по созданию межвузовского кампуса Новосибирской области.',
    '2018-2020 Инициатор программы развития общественного центра наукограда Кольцово.',
    '2019-2021 Участник создания концепции «Большого Академгородка», «Смарт-Сити», «I-CITY», в рамках развития Новосибирского наукополиса.',
    '2020-2021 Участник межведомственной рабочей группы по вопросам комплексного развития перспективной территории СмартСити - Новосибирск - зоны опережающего развития Новосибирского наукополиса.',
  ]
}, {
  name: 'Светлана Гришмановская',
  job: 'Заместитель директора, финансовый директор',
  awards: [],
  merits: []
}, {
  name: 'Наталья Максимова',
  job: 'Коммерческий директор',
  awards: [],
  merits: []
}, {
  name: 'Дарья Жиркова',
  job: 'Руководитель отдела развития',
  awards: [],
  merits: []
}, {
  name: 'Михаил Чаплыгин',
  job: 'Ландшафтный архитектор',
  awards: [],
  merits: []
}, {
  name: 'Петр Горбунов',
  job: 'ГАП',
  awards: [],
  merits: []
}, {
  name: 'Виктор Лях',
  job: 'ГИП, главный конструктор',
  awards: [],
  merits: []
}, {
  name: 'Наталья Дьячкова',
  job: 'ГИП',
  awards: [],
  merits: []
}, {
  name: 'Степан Мучной',
  job: 'Архитектор',
  awards: [],
  merits: []
}, {
  name: 'Роман Букатин',
  job: 'Инженер, изобретатель',
  awards: [],
  merits: []
}, {
  name: 'Юлия Горбунова',
  job: 'Дизайнер',
  awards: [],
  merits: []
}, {
  name: 'Евгений Волков',
  job: 'IT-специалист',
  awards: [],
  merits: []
}, {
  name: 'Леонид Чаплыгин',
  job: 'Промпт-менеджер',
  awards: [],
  merits: []
}];
