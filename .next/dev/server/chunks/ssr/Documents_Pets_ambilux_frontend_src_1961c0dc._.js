module.exports = [
"[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projects": "page-module-scss-module__AI0HGq__projects",
  "projects__approach": "page-module-scss-module__AI0HGq__projects__approach",
  "projects__approach-item": "page-module-scss-module__AI0HGq__projects__approach-item",
  "projects__approach-label": "page-module-scss-module__AI0HGq__projects__approach-label",
  "projects__nav": "page-module-scss-module__AI0HGq__projects__nav",
  "projects__nav-item": "page-module-scss-module__AI0HGq__projects__nav-item",
  "projects__section": "page-module-scss-module__AI0HGq__projects__section",
  "projects__title": "page-module-scss-module__AI0HGq__projects__title",
  "red-line": "page-module-scss-module__AI0HGq__red-line",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Объект из GET https://ambilux.com/api/objects — поля приходят с бэкенда как есть.
__turbopack_context__.s([
    "pickProjects",
    ()=>pickProjects,
    "projectCategories",
    ()=>projectCategories,
    "projectLinks",
    ()=>projectLinks
]);
const projectCategories = {
    all: {
        title: 'Проекты',
        paragraphs: [],
        galleryLabel: null,
        paths: null
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
        paths: [
            'malinovski',
            'mikopark',
            'sosbul',
            'smartcity',
            'riverside',
            'new-city-hall',
            'quattro',
            'naukograd',
            'big-academ',
            'historical-center'
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
        // «МФК» из спеки — это два объекта: НАУКОГРАД и культурно-развлекательный центр.
        paths: [
            'naukograd',
            'cultural-entertaiment',
            'new-city-hall',
            'prizmatiq',
            'roshtils',
            'trid',
            'valdom',
            'mikopark',
            'quattro',
            'riverside',
            'kampus',
            'pelles'
        ]
    },
    design: {
        title: 'Дизайн',
        paragraphs: [],
        note: 'Информация по данному разделу появится позже',
        galleryLabel: null,
        paths: []
    },
    competitions: {
        title: 'Конкурсы',
        paragraphs: [],
        galleryLabel: 'Галерея конкурсных проектов',
        paths: [
            'cultural-entertaiment',
            'new-city-hall'
        ]
    }
};
const projectLinks = [
    {
        slug: 'all',
        label: 'Проекты'
    },
    {
        slug: 'urban',
        label: 'Градостроительство'
    },
    {
        slug: 'architecture',
        label: 'Архитектура'
    },
    {
        slug: 'design',
        label: 'Дизайн'
    },
    {
        slug: 'competitions',
        label: 'Конкурсы'
    }
];
const pickProjects = (items, paths)=>paths.map((path)=>items.find((item)=>item.path === path)).filter((item)=>Boolean(item));
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const intro = `
  В ответ на вызовы XXI века — эпохи цифровизации, глобализации и стремительно меняющихся социальных сценариев —
  специалистами нашей компании была разработана и внедрена собственная методология интеллектуального моделирования,
  которую мы постоянно обновляем, учитывая динамичность современной жизни.
`;
const approachTitle = `Это целостный научно-практический подход, который включает в себя:`;
const approach = [
    {
        label: `Системный анализ`,
        text: `Глубокое изучение территории, социальных, экономических и культурных факторов;`
    },
    {
        label: `Прогностическое моделирование`,
        text: `
    Создание цифровых моделей, позволяющих прогнозировать развитие пространственных систем и их влияние
    на качество жизни;
  `
    },
    {
        label: `Человекоцентричность моделей`,
        text: `
    Проектирование, ориентированное на новые потребности человека, его комфорт, безопасность и возможности
    для самореализации;
  `
    },
    {
        label: `Применение основных принципов нашей методологии`,
        text: `
    Дифференциация транспортно-пешеходных потоков, резервирование территорий под перспективную уплотнительную
    застройку, многофункциональность планируемой застройки и пр.
  `
    }
];
const outro = `
  Ключевая цель методологии «Интеллектуальное моделирование» — создание устойчивых, адаптивных и эффективных
  пространств, формирующих условия для сохранения и приумножения человеческого капитала. А одним из основных
  принципов практической работы является экономическая целесообразность, в том числе для экономики региона
  при формировании предпосылок развития человеческого капитала и обеспечении условий технологического
  суверенитета РФ.
`;
// Вход синхронизирован с --vt-duration: 700ms — текст проявляется после слайда страницы.
const reveal = (index)=>({
        initial: {
            clipPath: 'inset(0 100% 0 0)'
        },
        animate: {
            clipPath: 'inset(0 0 0 0)'
        },
        transition: {
            duration: 0.8,
            delay: 0.7 + index * 0.15,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    });
function Projects() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    const onClick = (href)=>{
        return (event)=>{
            event.preventDefault();
            router.push(href, {
                scroll: false
            });
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__title'],
                children: "Проекты"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                ...reveal(0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__section']} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['red-line']}`,
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                ...reveal(1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__section'],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: approachTitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__approach'],
                            children: approach.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__approach-item'],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__approach-label'],
                                            children: [
                                                item.label,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        item.text
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                ...reveal(2),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__section']} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['red-line']}`,
                    children: outro
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                ...reveal(3),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__nav'],
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectLinks"].map(({ slug, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['projects__nav-item'],
                            onClick: onClick(`/projects/${slug}`),
                            children: label
                        }, slug, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_1961c0dc._.js.map