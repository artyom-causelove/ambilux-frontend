'use client';

import styles from './page.module.scss';

import { motion } from 'framer-motion';

const aboutSections = [
  `
    Архитектурно-градостроительная компания Ambilux architects представляет собой синергию тридцатилетнего профессионального
    опыта основателя и главного архитектора компании Юрия Михайловича Чаплыгина, мультидисциплинарность команды талантливых людей,
    объединённых созидательными амбициями, и передового подхода к формированию пространственной среды
  `,
  `
    Ambilux architects была основана в 2014 году. Наша философия основана на глубоком понимании того, что архитектура — это не просто создание объектов,
    а конструирование будущего, в центре которого находится человек. Начав свою деятельность в сегменте премиального малоэтажного индивидуального строительства,
    компания зарекомендовала себя как создатель эксклюзивных, функциональных и эстетически выверенных пространств. Этот опыт позволил нам отточить внимание к деталям и
    развить глубокое понимание потребностей конечного пользователя - человека. Этот прочный фундамент стал основой для перехода к более масштабным проектам. На текущий
    момент ключевым направлением деятельности компании является градостроительство.
  `,
  `
    Постепенно мы перешли от проектирования «индивидуального мира» человека к созданию целостных экосистем для жизни, работы и развития. Мы ставим перед собой задачу о
    создании самых эффективных градостроительных решений – о создании нового градостроительства.
  `,
  `
    Эффективность нашего подхода подтверждена широкой географией реализованных проектов. Наши архитектурные решения воплощены на территории Российской Федерации,
    в странах ближнего зарубежья, Западной Европы и Северной Америки. Градостроительные решения в настоящий момент реализуются в различных регионах Российской Федерации.
    Способность успешно работать в разных культурных и климатических контекстах демонстрирует универсальность и гибкость наших методов.
  `
];

const awardTitle = `
  Профессионализм и новаторский подход Ambilux architects получили высокое признание на международном уровне.
  Компания является неоднократным лауреатом премий в области архитектуры и градостроительства:
`;
const awardSections = [{
  project: `Стратегический мастер-план «АКАДЕМСИТИ» (СмартСити-Новосибирск). Концепция генерального плана городского округа (поселения)`,
  meta: `
    Конкурс на лучшие научные и творческие работы в области архитектуры, градостроительства и
    строительных наук 2025 года Российской академии архитектуры и строительных работ
  `,
  award: `Диплом`
}, {
  project: `Лучший проект объектов благоустройства и создания комфортной городской среды, генерального плана городского округа (городского поселения, сельского поселения)`,
  meta: `НОПРИЗ - 2023`,
  award: `Диплом II степени`
}, {
  project: `Лучший проект дорожно-транспортной и коммунальной инфраструктуры, а также объектов промышленного и сельскохозяйственного назначения`,
  meta: `НОПРИЗ - 2023`,
  award: `Диплом II степени`
}, {
  project: `Лучший проект генерального плана городского округа (поселения). Стратегический мастер-план «АКАДЕМСИТИ» (Смарт-Сити Новосибирск)`,
  meta: `НОПРИЗ - 2022`,
  award: `Диплом I степени`
}, {
  project: `Реализация резиденции «Prizmatiq villa»`,
  meta: `Золотая капитель - 2021`,
  award: `Золотой диплом`
}, {
  project: `Многофункциональный комплекс «Наукоград»`,
  meta: `Золотая капитель - 2021`,
  award: `Диплом «Суперфинал»`
}, {
  project: `Лучшее архитектурное бюро`,
  meta: `Золотая капитель - 2021`,
  award: `Золотой диплом`
}, {
  project: `Лучший реализованный проект объекта культуры`,
  meta: `НОПРИЗ -  2021`,
  award: `Диплом I степени`
}, {
  project: `Реализация резиденции «Prizmatiq villa»`,
  meta: `НОПРИЗ – 2020`,
  award: `Диплом II степени`
}, {
  project: `Проект развития административного центра «Чхонджу-сити», Республика Корея`,
  meta: `НОПРИЗ - 2020`,
  award: `Диплом II степени`
}, {
  project: `Градостроительная концепция развития исторического центра, эко-регенерация р. Сутолока, г. Уфа`,
  meta: `ЭкоБерег - 2019`,
  award: `2 место`
}, {
  project: `Проект развития общественного центра наукограда Кольцово. Многофункциональный комплекс «Наукоград»`,
  meta: `НОПРИЗ - 2019`,
  award: `Диплом I степени`
}, {
  project: `Проект резиденции «Prizmatiq villa»`,
  meta: `Eurazian prize - 2019`,
  award: `Бронзовый диплом`
}, {
  project: `Проект развития набережной реки Миасс в Челябинске, в рамках разработки нового имиджа города и создание проектов для трех ключевых объектов к саммитам ШОС и БРИКС`,
  meta: `Archchel-2020 (Правительство Челябинской области, Союз архитекторов России, Союз дизайнеров России и АНО «Агентство международного сотрудничества Челябинской области») TATLIN - 2016`,
  award: `1, 2 места`
}, {
  project: `Проект реконструкции ДК «Академия»`,
  meta: `Золотая капитель - 2015`,
  award: `Серебряный диплом`
}, {
  project: `Проект перcпективного развития новосибирского дендропарка`,
  meta: `Мэрия г. Новосибирска - 2015`,
  award: `I место, Благодарственное письмо мэра г. Новосибирска`
}, {
  project: `Проект развития общественного пространства на территории бывшей гостиницы «Россия» - парк «Зарядье»`,
  meta: `Правительство Москвы - 2012`,
  award: `Диплом участника`
}, {
  project: `Концепция высотного МФК «Азия» по ул. Кирова, г. Новосибирск`,
  meta: `Золотая капитель - 2007`,
  award: `Диплом оргкомитета`
}];

const mediaSections = {
  text: [{
    title: `Prizmatiq: дом из советского будущего`,
    url: [{
      text: ``,
      href: `https://status-media.com/life-style/prizmatiq-dom-iz-sovetskogo-budushhego`
    }]
  }, {
    title: `Движущая сила развития Академгородка`,
    url: [{
      text: ``,
      href: `https://ksonline.ru/577580/yurij-chaplygin-zadacha-vozrozhdeniya-akademgorodka-shans-dlya-aktivnyh-predstavitelej-vlasti-proyavit-sebya`
    }]
  }, {
    title: `Градостроительные концепции (Новостройки Новосибирска)`,
    url: [{
      text: ``,
      href: `https://nnsib.ru/page104133576.html`
    }]
  }, {
    title: `Как превратить Новосибирск в город мечты`,
    url: [{
      text: ``,
      href: `https://www.calameo.com/read/0078349962a4c382c0d1b`
    }]
  }, {
    title: `Смарт-сити / Академ-сити:`,
    url: [{
      text: `• Проект пошел в работу`,
      href: `https://academcity.org/content/proekt-poshel-v-rabotu`
    }, {
      text: `• Инвестиции в первую очередь`,
      href: `https://vn.ru/news-investitsii-v-pervuyu-ochered-smartsiti-sostavyat-46-mlrd-rubley/`
    }, {
      text: `• Чем новосибирский СмартСити будет лучше казанского Иннополиса`,
      href: `https://ksonline.ru/491124/kak-obstoyat-dela-s-proektom-smartsiti-i-chto-zhdet-ego-v-blizhajshem-budushhem/`
    }]
  }, {
    title: `Интеллектуальное моделирование и пр. (журнал STATUS)`,
    url: [{
      text: ``,
      href: `https://www.calameo.com/books/0070248911279c53fb650`
    }]
  }, {
    title: `Трансформация рынка недвижимости: Эпоха ИЖС`,
    url: [{
      text: ``,
      href: `https://www.calameo.com/read/007024891367b1eed7f0d`
    }]
  }],

  video: [{
    title: `Прямой эфир с руководителем выставки «Сибирская строительная неделя» Павлом Плешканем`,
    url: `https://vk.ru/wall-210925213_1255`
  }, {
    title: `Многофункциональный культурно-развлекательный центр Кольцово`,
    url: `https://m.vkvideo.ru/video-236078703_456239020?from=video`
  }, {
    title: `Многофункциональный комплекс «Наукоград»`,
    url: `https://m.vkvideo.ru/video-236078703_456239017?from=video`
  }, {
    title: `Вилла Prizmatiq`,
    url: `https://m.vkvideo.ru/video-236078703_456239018?from=video`
  }, {
    title: `Академгородок 2.0`,
    url: `https://m.vkvideo.ru/video-236078703_456239019?from=video`
  }]
};

export default function About() {
  return (
    <main className={styles['about']}>
      <h1 className={styles['about__title']}>О нас</h1>
      {aboutSections.map((section, index) => (
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
          <section className={`${styles['about__section']} ${styles['red-line']}`}>
            {section}
          </section>
        </motion.div>
      ))}

      <span id="awards" className={styles['about__span']}></span>
      <h1 className={styles['about__title']}>Награды</h1>
      <motion.div
        initial={{
          clipPath: 'inset(0 100% 0 0)',
        }}
        animate={{
          clipPath: 'inset(0 0 0 0)',
        }}
        transition={{
          delay: 0,
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <section className={`${styles['about__section']} ${styles['red-line']}`}>
          <p>{awardTitle}</p>
        </section>

        {awardSections.map((section, index) => (
          <section key={index} className={styles['about__section']}>
            <p className={`${styles['about__section-project']} ${styles['red-line']}`}>
              {section.project}
            </p>

            <p className={`${styles['about__section-meta']} ${styles['red-line']}`}>
              {section.meta}
            </p>

            <p className={`${styles['about__section-award']} ${styles['red-line']}`}>
              {section.award}
            </p>
          </section>
        ))}
      </motion.div>

      <span id="media" className={styles['about__span']}></span>
      <h1 className={styles['about__title']}>Публицистика</h1>
      <motion.div
        initial={{
          clipPath: 'inset(0 100% 0 0)',
        }}
        animate={{
          clipPath: 'inset(0 0 0 0)',
        }}
        transition={{
          delay: 0,
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <h2 className={styles['about__subtitle']}>Статьи:</h2>
        {mediaSections.text.map((section, index) => (
          <section key={index} className={`${styles['about__section']} ${styles['media']}`}>
            <a className={`${styles['about__section-title']} ${styles['red-line']}`} href={section.url[0].href} target='_blank'>
              {section.title}
            </a>

            { section.url.map((url, index) =>
              <a key={index} className={`${styles['about__section-url']} ${styles['red-line']}`} href={url.href} target='_blank'>
                {url.text}
              </a>
            )}
          </section>
        ))}

        <h2 className={styles['about__subtitle']}>Видео:</h2>
        {mediaSections.video.map((section, index) => (
          <section key={index} className={`${styles['about__section']} ${styles['media']}`}>
            <a className={`${styles['about__section-title']} ${styles['red-line']}`} href={section.url} target='_blank'>
              {section.title}
            </a>
          </section>
        ))}
      </motion.div>
      
    </main>
  );
}
