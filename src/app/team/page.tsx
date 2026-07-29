'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Team() {
  const [open, setOpen] = useState(false)

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
    <main className={styles['team']}>
      <h1 className={styles['team__title']}>Команда</h1>
      <section className={styles['team__wrapper']}>
        {objects.map((value, index) => 
          <div key={index} className={styles['item']}>
            <span className={styles['item__name']}>{value.name}</span>
            <span className={styles['item__job']}>{value.job}</span>
            <div className={styles['item__awards']}>
              {value.awards.map((award, index) => <span key={index} className={styles['item__awards-item']}>{award}</span>)}
            </div>
            <div className={styles['item__merits']}>
              {value.merits.map((merit, index) => <span key={index} className={styles['item__merits-item']}>{merit}</span>)}
            </div>
          </div>
        )}
      </section>
      <h2 id="vacancy" className={styles['team__title']}>Вы так же можете стать частью нашей команды!</h2>
      <button className={styles['team__button']} onClick={() => { setOpen(!open); scroll(); }}>
        Ознакомьтесь с существующими вакансиями
      </button>
      <div className={`${styles['team__document']} ${open && styles['team__document--open']}`}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true"
          style={{ maxWidth: 'calc(630px + 96px * 2)', width: '100%', alignSelf: 'center' }}
          height={1017}
        />
      </div>
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
  job: 'ГАП, ведущий архитектор',
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
