// Объект из GET https://ambilux.com/api/objects — поля приходят с бэкенда как есть.
export type ProjectItem = {
  id: number;
  path: string;
  title: string;
  address?: string;
  description?: string;
  timeline?: string;
  type?: string;
  size?: string;
  capacity?: string;
  square?: string;
  link?: string;
  reverse?: boolean;
  page: 'page' | 'file' | 'link';
  files: { path: string }[];
  picture?: { path: string; width: number; height: number };
};

export type ProjectCategory = {
  title: string;
  paragraphs: string[];
  note?: string;                              // текст-заглушка вместо галереи
  article?: { label: string; href: string };  // кнопка на внешнюю статью
  galleryLabel: string | null;                // null — без кнопки, список открыт сразу
  paths: string[] | null;                     // null — все объекты из API в порядке ответа
  cover?: string;                             // картинка карточки на главной (путь API), подобрана вручную
};

// У API нет поля категории, поэтому разбиение живёт здесь: категория -> path-слаги
// в том порядке, в котором проекты перечислены в спеке.
export const projectCategories: Record<string, ProjectCategory> = {
  all: {
    title: 'Проекты',
    paragraphs: [],
    galleryLabel: null,
    paths: null,
    cover: 'quattro/quattro-content-2.avif'
  },

  urban: {
    title: 'Градостроительство',
    paragraphs: [
      `
        Одним из основных направлений деятельности AMBILUX architects является градостроительное проектирование.
      `,
      `
        Мы осознаем, что привычных подходов формирования городской среды на сегодняшний день уже недостаточно.
        Поэтому мы разработали новые принципы и приемы проектирования, которые позволяют нам раскрыть максимальный
        потенциал территорий.
      `,
      `
        «Интеллектуальное моделирование» — это разработанная и применяемая нами уникальная методология. Являет собой
        совокупность принципов проектирования и определённый метод анализа территории, социальных сценариев,
        человеческого потенциала и других аспектов. Это позволяет минимизировать вариативность и помочь найти
        оптимальное и наиболее рациональное решение при формировании пространств.
      `,
      `
        Один из основных принципов в практической работе является человекоцентричность - это конкурентное преимущество,
        которое позволяет вести диалог с властью, преимущественно при реализации механизмов КРТ. Компания формирует
        новые принципы систем расселения для эффективного землепользования и создания условий, в частности для
        улучшения демографических показателей.
      `
    ],
    article: {
      label: 'О создании градостроительных концепций — «Новостройки Новосибирска»',
      href: 'https://nnsib.ru/page104133576.html'
    },
    galleryLabel: 'Галерея градостроительных концепций',
    cover: '/projects/akademcity/akademcity-cover.jpg',
    // Разбивка от заказчика (05.10.2026); порядок неважен — список перемешивается при показе.
    paths: [
      'malinovski',
      'mikopark',
      'sosbul',
      'smartcity',
      'riverside',
      'new-city-hall',
      'quattro',
      'kampus',
      'big-academ',
      'historical-center', // «Уфа»
      'akademcity',
      'science-quarter',
      'asonov'
    ]
  },

  architecture: {
    title: 'Архитектура',
    paragraphs: [
      `
        Компания AMBILUX architects основана в 2014-м году для создания современной среды обитания людей.
        Мы приветствуем открытые деловые отношения для создания объектов инновационной архитектурной среды
        на всех этапах реализации проекта.
      `,
      `
        При проектировании мы используем передовые информационные технологии для увеличения качества выпускаемой
        проектной продукции, уменьшения сроков исполнения договорных обязательств и оптимизации затрат при
        перспективном строительстве и эксплуатации объектов.
      `,
      `
        С 2025 года развиваем направление типологического малоэтажного жилья нового формата – это интеграция
        приемов премиального сегмента в массовое строительство.
      `
    ],
    galleryLabel: 'Галерея архитектурных проектов',
    cover: 'naukograd/naukograd-content-8.avif',
    // Разбивка от заказчика (05.10.2026). «МФКРЦ наукоград» — культурно-развлекательный центр,
    // «МФК наукоград» — НАУКОГРАД, «Талдом» — VALDOM.
    paths: [
      'malinovski',
      'mikopark',
      'sosbul',
      'cultural-entertaiment',
      'riverside',
      'valdom',
      'pelles',
      'new-city-hall',
      'quattro',
      'kampus',
      'roshtils',
      'prizmatiq',
      'naukograd',
      'trid',
      'science-quarter'
    ]
  },

  // «Дизайн» скрыт (05.10.2026): своих проектов нет, а пустые вкладки заказчик просил убрать.
  // Старый адрес /projects/design перенаправляется на все проекты (next.config.ts).

  competitions: {
    title: 'Конкурсы',
    paragraphs: [],
    galleryLabel: 'Галерея конкурсных проектов',
    cover: 'new-city-hall/new-city-hall-content-4.avif',
    paths: ['cultural-entertaiment', 'new-city-hall', 'historical-center']
  }
};

export const projectLinks: { slug: string; label: string }[] = [
  { slug: 'all', label: 'Проекты' },
  { slug: 'urban', label: 'Градостроительство' },
  { slug: 'architecture', label: 'Архитектура' },
  { slug: 'competitions', label: 'Конкурсы' }
];

// Путь из API: обычно ключ в S3 (отдаётся через редирект бэкенда), но файлы с ведущим «/»
// лежат статикой во фронтенде (public/projects) — пока у нас нет ключа на запись в бакет.
export const fileUrl = (path: string) => path.startsWith('/') ? path : `https://ambilux.com/api/${path}`;

// Порядок карточек задаёт карта, а не выдача API. Удалённый на бэкенде слаг молча выпадает.
export const pickProjects = (items: ProjectItem[], paths: string[]) =>
  paths
    .map((path) => items.find((item) => item.path === path))
    .filter((item): item is ProjectItem => Boolean(item));
