(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/app/page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "page-module-scss-module__Qa8JdG__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "home-video": "styles-module-scss-module__lUtIJW__home-video",
  "home-video__logo": "styles-module-scss-module__lUtIJW__home-video__logo",
  "home-video__logo-content": "styles-module-scss-module__lUtIJW__home-video__logo-content",
  "home-video__preload": "styles-module-scss-module__lUtIJW__home-video__preload",
  "home-video__preload--loaded": "styles-module-scss-module__lUtIJW__home-video__preload--loaded",
  "home-video__source": "styles-module-scss-module__lUtIJW__home-video__source",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/styles.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function HomeVideo() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ef63f9282919af55f291e58f29408b11265011374f5e7c2d0cca54bb53350a11") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ef63f9282919af55f291e58f29408b11265011374f5e7c2d0cca54bb53350a11";
    }
    const video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "HomeVideo[useEffect()]": ()=>{
                if (video.current) {
                    video.current.currentTime = Math.random() * 124.5;
                }
            }
        })["HomeVideo[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__logo"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__logo-content"],
                src: "/logo-white.png",
                alt: "AMBILUX ARCHITECTS",
                fill: true
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
                lineNumber: 37,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__preload"]} ${playing ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__preload--loaded"] : ""}`;
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: video,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__source"],
            preload: "auto",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            poster: "/intro.webp",
            onPlaying: {
                "HomeVideo[<video>.onPlaying]": ()=>setPlaying(true)
            }["HomeVideo[<video>.onPlaying]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                src: "https://ambilux.com/api/main/intro.mp4",
                type: "video/mp4"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
                lineNumber: 55,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video"],
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["home-video__wrapper"],
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
                    lineNumber: 62,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_s(HomeVideo, "kJBYkFpNqaLDklEN8s7PJLC5G04=");
_c = HomeVideo;
var _c;
__turbopack_context__.k.register(_c, "HomeVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "styles-module-scss-module__XeiJ0a__about",
  "about__section": "styles-module-scss-module__XeiJ0a__about__section",
  "about__section-award": "styles-module-scss-module__XeiJ0a__about__section-award",
  "about__section-meta": "styles-module-scss-module__XeiJ0a__about__section-meta",
  "about__section-project": "styles-module-scss-module__XeiJ0a__about__section-project",
  "about__section-title": "styles-module-scss-module__XeiJ0a__about__section-title",
  "about__section-url": "styles-module-scss-module__XeiJ0a__about__section-url",
  "about__span": "styles-module-scss-module__XeiJ0a__about__span",
  "about__subtitle": "styles-module-scss-module__XeiJ0a__about__subtitle",
  "about__title": "styles-module-scss-module__XeiJ0a__about__title",
  "media": "styles-module-scss-module__XeiJ0a__media",
  "red-line": "styles-module-scss-module__XeiJ0a__red-line",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx'\n\nExpected '</', got 'jsx text (\n\n    )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projects": "styles-module-scss-module__Vf14tq__projects",
  "projects__approach": "styles-module-scss-module__Vf14tq__projects__approach",
  "projects__approach-item": "styles-module-scss-module__Vf14tq__projects__approach-item",
  "projects__approach-label": "styles-module-scss-module__Vf14tq__projects__approach-label",
  "projects__nav": "styles-module-scss-module__Vf14tq__projects__nav",
  "projects__nav-item": "styles-module-scss-module__Vf14tq__projects__nav-item",
  "projects__section": "styles-module-scss-module__Vf14tq__projects__section",
  "projects__title": "styles-module-scss-module__Vf14tq__projects__title",
  "red-line": "styles-module-scss-module__Vf14tq__red-line",
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
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/styles.module.scss [app-client] (css module)");
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
// Проявляется при попадании блока в область видимости, а не при монтировании —
// на длинной странице секция может оказаться далеко за пределами экрана.
const reveal = (index)=>({
        initial: {
            clipPath: 'inset(0 100% 0 0)'
        },
        whileInView: {
            clipPath: 'inset(0 0 0 0)'
        },
        viewport: {
            once: true,
            amount: 0.3
        },
        transition: {
            duration: 0.8,
            delay: index * 0.15,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    });
function HomeProjects() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d38f584d21b4e0ed9b1490a962a690c4592a8959601da2e3f55a2d613ccb9339") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38f584d21b4e0ed9b1490a962a690c4592a8959601da2e3f55a2d613ccb9339";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "HomeProjects[onClick]": (href)=>(event)=>{
                    event.preventDefault();
                    router.push(href, {
                        scroll: false
                    });
                }
        })["HomeProjects[onClick]"];
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const onClick = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__title,
            children: "Проекты"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 90,
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
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: intro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 97,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 97,
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
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 111,
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
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section,
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__approach,
                        children: approach.map(_HomeProjectsApproachMap)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                        lineNumber: 118,
                        columnNumber: 80
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 118,
                columnNumber: 30
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 118,
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
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: outro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 125,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 125,
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
            "HomeProjects[projectLinks.map()]": (t9)=>{
                const { slug, label } = t9;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__nav-item"],
                    onClick: onClick(`/projects/${slug}`),
                    children: label
                }, slug, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                    lineNumber: 145,
                    columnNumber: 16
                }, this);
            }
        }["HomeProjects[projectLinks.map()]"]);
        $[10] = onClick;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "projects",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects,
            children: [
                t1,
                t2,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    ...t7,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__nav,
                        children: t8
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                        lineNumber: 155,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                    lineNumber: 155,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_s(HomeProjects, "8ugQ00PsOREn7qWBbgstLQCqGqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"]
    ];
});
_c = HomeProjects;
function _HomeProjectsApproachMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-item"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-label"],
                children: [
                    item.label,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 164,
                columnNumber: 72
            }, this),
            item.text
        ]
    }, index, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
        lineNumber: 164,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HomeProjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "styles-module-scss-module__zmJkfa__item",
  "item__awards": "styles-module-scss-module__zmJkfa__item__awards",
  "item__job": "styles-module-scss-module__zmJkfa__item__job",
  "item__merits": "styles-module-scss-module__zmJkfa__item__merits",
  "item__name": "styles-module-scss-module__zmJkfa__item__name",
  "team": "styles-module-scss-module__zmJkfa__team",
  "team__button": "styles-module-scss-module__zmJkfa__team__button",
  "team__document": "styles-module-scss-module__zmJkfa__team__document",
  "team__document--open": "styles-module-scss-module__zmJkfa__team__document--open",
  "team__title": "styles-module-scss-module__zmJkfa__team__title",
  "team__wrapper": "styles-module-scss-module__zmJkfa__team__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/styles.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomeTeam() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "8b766438269292c08da31069b19cb58c48b5be81a89b351a73f6321358d85b17") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b766438269292c08da31069b19cb58c48b5be81a89b351a73f6321358d85b17";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scroll = _HomeTeamScroll;
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "HomeTeam[useEffect()]": ()=>{
                if (window.location.hash === "#vacancy") {
                    setOpen(true);
                    requestAnimationFrame({
                        "HomeTeam[useEffect() > requestAnimationFrame()]": ()=>scroll()
                    }["HomeTeam[useEffect() > requestAnimationFrame()]"]);
                }
            }
        })["HomeTeam[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__title,
            children: "Команда"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__wrapper,
            children: objects.map(_HomeTeamObjectsMap)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "vacancy",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__title,
            children: "Вы так же можете стать частью нашей команды!"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== open) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__button,
            onClick: {
                "HomeTeam[<button>.onClick]": ()=>{
                    setOpen(!open);
                    scroll();
                }
            }["HomeTeam[<button>.onClick]"],
            children: "Ознакомьтесь с существующими вакансиями"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = open;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__document} ${open && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["team__document--open"]}`;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true",
            style: {
                maxWidth: "calc(630px + 96px * 2)",
                width: "100%",
                alignSelf: "center"
            },
            height: 1017
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t5 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "team",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team,
            children: [
                t2,
                t3,
                t4,
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_s(HomeTeam, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = HomeTeam;
function _HomeTeamObjectsMap(value, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__name,
                children: value.name
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 100,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__job,
                children: value.job
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 100,
                columnNumber: 106
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__awards,
                children: value.awards.map(_HomeTeamObjectsMapValueAwardsMap)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 100,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__merits,
                children: value.merits.map(_HomeTeamObjectsMapValueMeritsMap)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 100,
                columnNumber: 255
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
function _HomeTeamObjectsMapValueMeritsMap(merit, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["item__merits-item"],
        children: merit
    }, index_1, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 103,
        columnNumber: 10
    }, this);
}
function _HomeTeamObjectsMapValueAwardsMap(award, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["item__awards-item"],
        children: award
    }, index_0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
function _HomeTeamScroll() {
    const el = document.getElementById("vacancy");
    if (el) {
        setTimeout({
            "HomeTeam[scroll > setTimeout()]": ()=>el.scrollIntoView({
                    behavior: "smooth"
                })
        }["HomeTeam[scroll > setTimeout()]"], 500);
    }
}
const objects = [
    {
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
            '2020-2021 Участник межведомственной рабочей группы по вопросам комплексного развития перспективной территории СмартСити - Новосибирск - зоны опережающего развития Новосибирского наукополиса.'
        ]
    },
    {
        name: 'Светлана Гришмановская',
        job: 'Заместитель директора, финансовый директор',
        awards: [],
        merits: []
    },
    {
        name: 'Наталья Максимова',
        job: 'Коммерческий директор',
        awards: [],
        merits: []
    },
    {
        name: 'Дарья Жиркова',
        job: 'Руководитель отдела развития',
        awards: [],
        merits: []
    },
    {
        name: 'Михаил Чаплыгин',
        job: 'Ландшафтный архитектор',
        awards: [],
        merits: []
    },
    {
        name: 'Петр Горбунов',
        job: 'ГАП, ведущий архитектор',
        awards: [],
        merits: []
    },
    {
        name: 'Виктор Лях',
        job: 'ГИП, главный конструктор',
        awards: [],
        merits: []
    },
    {
        name: 'Наталья Дьячкова',
        job: 'ГИП',
        awards: [],
        merits: []
    },
    {
        name: 'Степан Мучной',
        job: 'Архитектор',
        awards: [],
        merits: []
    },
    {
        name: 'Роман Букатин',
        job: 'Инженер, изобретатель',
        awards: [],
        merits: []
    },
    {
        name: 'Юлия Горбунова',
        job: 'Дизайнер',
        awards: [],
        merits: []
    },
    {
        name: 'Евгений Волков',
        job: 'IT-специалист',
        awards: [],
        merits: []
    },
    {
        name: 'Леонид Чаплыгин',
        job: 'Промпт-менеджер',
        awards: [],
        merits: []
    }
];
var _c;
__turbopack_context__.k.register(_c, "HomeTeam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/contact-us.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "contact-us-module-scss-module__IW5CWG__button",
  "email": "contact-us-module-scss-module__IW5CWG__email",
  "form": "contact-us-module-scss-module__IW5CWG__form",
  "formEmail": "contact-us-module-scss-module__IW5CWG__formEmail",
  "formName": "contact-us-module-scss-module__IW5CWG__formName",
  "formText": "contact-us-module-scss-module__IW5CWG__formText",
  "formWrapper": "contact-us-module-scss-module__IW5CWG__formWrapper",
  "separator": "contact-us-module-scss-module__IW5CWG__separator",
  "social": "contact-us-module-scss-module__IW5CWG__social",
  "telegram": "contact-us-module-scss-module__IW5CWG__telegram",
  "thanks": "contact-us-module-scss-module__IW5CWG__thanks",
  "title": "contact-us-module-scss-module__IW5CWG__title",
  "vis": "contact-us-module-scss-module__IW5CWG__vis",
  "wrapper": "contact-us-module-scss-module__IW5CWG__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/contact-us.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const contacts = [
    {
        alt: 'instagram',
        link: 'https://www.instagram.com/ambilux_architects/',
        icon: '/instagram.avif'
    },
    {
        alt: 'youtube',
        link: 'https://www.youtube.com/channel/UC1gc5w2gEwrbdDrdI9JHP3A',
        icon: '/youtube.avif'
    },
    {
        alt: 'facebook',
        link: 'https://ru-ru.facebook.com/people/Ambilux-Architects/100009167491448',
        icon: '/facebook.avif'
    }
];
function ContactUs() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "59803fee7abc54902a704c410bafb45a4891a5431762bf36844b84337e3821cd") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59803fee7abc54902a704c410bafb45a4891a5431762bf36844b84337e3821cd";
    }
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = async function onSubmit(event) {
            event.preventDefault();
            const tar = event.currentTarget;
            const formData = new FormData(tar);
            const response = await fetch("https://ambilux.com/api/messages", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData))
            });
            const data = await response.json();
            if (data && response.status === 201) {
                tar.reset();
                setVis(true);
                setTimeout({
                    "ContactUs[onSubmit > setTimeout()]": ()=>setVis(false)
                }["ContactUs[onSubmit > setTimeout()]"], 4000);
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const onSubmit = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: "СВЯЖИТЕСЬ С НАМИ"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].separator
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].email,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "mailto:Inf@ambilux.com",
                target: "_blank",
                children: "E-MAIL: inf@ambilux.com"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                lineNumber: 70,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telegram,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://t.me/ambilux_architects",
                target: "_blank",
                children: "Telegram: https://t.me/ambilux_architects"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                lineNumber: 77,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].social,
            children: contacts.map(_ContactUsContactsMap)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    name: "name",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formName,
                    minLength: 1,
                    maxLength: 60,
                    placeholder: "\u0418\u043C\u044F"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 93,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    name: "email",
                    type: "email",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formEmail,
                    minLength: 3,
                    maxLength: 254,
                    placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 93,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            required: true,
            name: "text",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formText,
            minLength: 1,
            maxLength: 2000,
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: "Отправить"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    const t9 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thanks} ${vis && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vis}`;
    let t10;
    if ($[10] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "contacts",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: onSubmit,
                    action: "#",
                    children: [
                        t6,
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: t9,
                            children: "Отправлено. Спасибо!"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                            lineNumber: 107,
                            columnNumber: 150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 107,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
}
_s(ContactUs, "JOKBNVXTafkEwEmufRBeAQPqH1Q=");
_c = ContactUs;
function _ContactUsContactsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: item.link,
        target: "_blank",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: item.icon,
            alt: item.alt,
            width: 30,
            height: 30
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 116,
            columnNumber: 61
        }, this)
    }, item.alt, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ContactUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/page.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/video/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/scroll.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "e6f1f39db81554b19d4ccc2cc0ae3412a7b39aebaa6a8ef840b21ca0e084a6bf") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e6f1f39db81554b19d4ccc2cc0ae3412a7b39aebaa6a8ef840b21ca0e084a6bf";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_HomeUseEffect, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$video$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/page.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
function _HomeUseEffect() {
    const id = window.location.hash.slice(1);
    if (id) {
        requestAnimationFrame({
            "Home[useEffect() > requestAnimationFrame()]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSection"])(id)
        }["Home[useEffect() > requestAnimationFrame()]"]);
    }
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_43ca0564._.js.map