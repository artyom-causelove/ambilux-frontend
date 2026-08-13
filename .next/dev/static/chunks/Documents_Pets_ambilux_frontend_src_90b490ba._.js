(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d2b074f3404b2fba4fcd86e1067a74503a7709e40747dd55e6756f8d57e13ddc") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d2b074f3404b2fba4fcd86e1067a74503a7709e40747dd55e6756f8d57e13ddc";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "Projects[onClick]": (href)=>(event)=>{
                    event.preventDefault();
                    router.push(href, {
                        scroll: false
                    });
                }
        })["Projects[onClick]"];
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const onClick = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__title,
            children: "Проекты"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ...reveal(0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: intro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 92,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = reveal(1);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: approachTitle
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ...t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section,
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__approach,
                        children: approach.map(_ProjectsApproachMap)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                        lineNumber: 113,
                        columnNumber: 80
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 113,
                columnNumber: 30
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ...reveal(2),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: outro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 120,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = reveal(3);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== onClick) {
        t8 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectLinks"].map({
            "Projects[projectLinks.map()]": (t9)=>{
                const { slug, label } = t9;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__nav-item"],
                    onClick: onClick(`/projects/${slug}`),
                    children: label
                }, slug, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 140,
                    columnNumber: 16
                }, this);
            }
        }["Projects[projectLinks.map()]"]);
        $[10] = onClick;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects,
            children: [
                t1,
                t2,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    ...t7,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__nav,
                        children: t8
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                        lineNumber: 150,
                        columnNumber: 80
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                    lineNumber: 150,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_s(Projects, "8ugQ00PsOREn7qWBbgstLQCqGqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"]
    ];
});
_c = Projects;
function _ProjectsApproachMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-item"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$projects$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-label"],
                children: [
                    item.label,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
                lineNumber: 159,
                columnNumber: 72
            }, this),
            item.text
        ]
    }, index, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/projects/page.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_90b490ba._.js.map