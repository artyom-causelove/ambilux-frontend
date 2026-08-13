(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "category": "styles-module-scss-module__OrwWMW__category",
  "category__button": "styles-module-scss-module__OrwWMW__category__button",
  "category__card": "styles-module-scss-module__OrwWMW__category__card",
  "category__gallery": "styles-module-scss-module__OrwWMW__category__gallery",
  "category__gallery--open": "styles-module-scss-module__OrwWMW__category__gallery--open",
  "category__gallery-inner": "styles-module-scss-module__OrwWMW__category__gallery-inner",
  "category__note": "styles-module-scss-module__OrwWMW__category__note",
  "category__section": "styles-module-scss-module__OrwWMW__category__section",
  "category__title": "styles-module-scss-module__OrwWMW__category__title",
  "red-line": "styles-module-scss-module__OrwWMW__red-line",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/projects-list.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "projects-list-module-scss-module__fX2q0q__item",
  "itemAddress": "projects-list-module-scss-module__fX2q0q__itemAddress",
  "itemCapacity": "projects-list-module-scss-module__fX2q0q__itemCapacity",
  "itemDescription": "projects-list-module-scss-module__fX2q0q__itemDescription",
  "itemInfo": "projects-list-module-scss-module__fX2q0q__itemInfo",
  "itemPicture": "projects-list-module-scss-module__fX2q0q__itemPicture",
  "itemPictureWrapper": "projects-list-module-scss-module__fX2q0q__itemPictureWrapper",
  "itemSeparator": "projects-list-module-scss-module__fX2q0q__itemSeparator",
  "itemSize": "projects-list-module-scss-module__fX2q0q__itemSize",
  "itemSquare": "projects-list-module-scss-module__fX2q0q__itemSquare",
  "itemTimeline": "projects-list-module-scss-module__fX2q0q__itemTimeline",
  "itemTitle": "projects-list-module-scss-module__fX2q0q__itemTitle",
  "itemType": "projects-list-module-scss-module__fX2q0q__itemType",
  "list": "projects-list-module-scss-module__fX2q0q__list",
  "reverse": "projects-list-module-scss-module__fX2q0q__reverse",
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
"[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/projects-list.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-client] (ecmascript)");
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
function ProjectsList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "0ab24bcf95e5647762332f668783557aab6cc9eef3e4f9a6e21a49a7a2e30c14") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ab24bcf95e5647762332f668783557aab6cc9eef3e4f9a6e21a49a7a2e30c14";
    }
    const { paths } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 925px)");
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProjectsList[useEffect()]": ()=>{
                fetch("https://ambilux.com/api/objects").then(_ProjectsListUseEffectAnonymous).then({
                    "ProjectsList[useEffect() > (anonymous)()]": (parsed)=>setData(parsed)
                }["ProjectsList[useEffect() > (anonymous)()]"]).catch(_ProjectsListUseEffectAnonymous2);
            }
        })["ProjectsList[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== data || $[5] !== paths) {
        t4 = paths ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickProjects"])(data, paths) : data;
        $[4] = data;
        $[5] = paths;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const items = t4;
    let t5;
    if ($[7] !== router) {
        t5 = ({
            "ProjectsList[getLink]": (item, className, child)=>{
                if (item.page === "page") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: {
                            "ProjectsList[getLink > <a>.onClick]": (e)=>{
                                e.preventDefault();
                                router.push(`/objects/${encodeURIComponent(item.path)}`, {
                                    scroll: false
                                });
                            }
                        }["ProjectsList[getLink > <a>.onClick]"],
                        className: className,
                        children: child
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                        lineNumber: 66,
                        columnNumber: 18
                    }, this);
                }
                if (item.page === "file") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: className,
                        href: `https://ambilux.com/api/${item.files[0].path}`,
                        target: "_blank",
                        children: child
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                        lineNumber: 76,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: className,
                    href: item.link,
                    target: "_blank",
                    children: child
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                    lineNumber: 78,
                    columnNumber: 16
                }, this);
            }
        })["ProjectsList[getLink]"];
        $[7] = router;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const getLink = t5;
    let t6;
    if ($[9] !== getLink || $[10] !== items || $[11] !== match) {
        let t7;
        if ($[13] !== getLink || $[14] !== match) {
            t7 = ({
                "ProjectsList[items.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item} ${item_0.reverse ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reverse : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemInfo,
                                children: [
                                    item_0.type && getLink(item_0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemType, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item_0.type
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 220
                                    }, this)),
                                    item_0.title && getLink(item_0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTitle, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item_0.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 299
                                    }, this)),
                                    item_0.address && getLink(item_0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemAddress, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item_0.address
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 383
                                    }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSeparator
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 414
                                    }, this),
                                    item_0.timeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTimeline,
                                        children: item_0.timeline
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 474
                                    }, this),
                                    item_0.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemDescription,
                                        children: item_0.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 560
                                    }, this),
                                    item_0.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSize,
                                        children: item_0.size
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 645
                                    }, this),
                                    item_0.capacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemCapacity,
                                        children: item_0.capacity
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 720
                                    }, this),
                                    item_0.square && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSquare,
                                        children: item_0.square
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                        lineNumber: 92,
                                        columnNumber: 801
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 92,
                                columnNumber: 138
                            }, this),
                            item_0.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemPictureWrapper,
                                style: match ? {
                                    width: "100%",
                                    aspectRatio: `${item_0.picture.width} / ${item_0.picture.height}`
                                } : {
                                    width: item_0.picture.width,
                                    minHeight: item_0.picture.height
                                },
                                children: getLink(item_0, undefined, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemPicture,
                                    src: `https://ambilux.com/api/${item_0.picture.path}`,
                                    alt: item_0.title,
                                    fill: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                    lineNumber: 98,
                                    columnNumber: 42
                                }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 92,
                                columnNumber: 885
                            }, this)
                        ]
                    }, item_0.id, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                        lineNumber: 92,
                        columnNumber: 48
                    }, this)
            })["ProjectsList[items.map()]"];
            $[13] = getLink;
            $[14] = match;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        t6 = items.map(t7);
        $[9] = getLink;
        $[10] = items;
        $[11] = match;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: t6
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_s(ProjectsList, "tApD+YqvNvRUbnBYqQk1/c/s7Fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = ProjectsList;
function _ProjectsListUseEffectAnonymous2() {}
function _ProjectsListUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/styles.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProjectsCategory(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "0f87fd3ca7b3759dc048b088393ccb12f117d538c2b0d76ba28e7a78f971286e") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f87fd3ca7b3759dc048b088393ccb12f117d538c2b0d76ba28e7a78f971286e";
    }
    const { category } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(category.galleryLabel === null);
    const scroll = _ProjectsCategoryScroll;
    const hasGallery = category.paths === null || category.paths.length > 0;
    let t1;
    if ($[1] !== category.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__title,
            children: category.title
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = category.title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== category.paragraphs) {
        t2 = category.paragraphs.map(_ProjectsCategoryCategoryParagraphsMap);
        $[3] = category.paragraphs;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== category.note) {
        t3 = category.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__note,
            children: category.note
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 41,
            columnNumber: 27
        }, this);
        $[5] = category.note;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== category.article) {
        t4 = category.article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__button,
            href: category.article.href,
            target: "_blank",
            children: category.article.label
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 49,
            columnNumber: 30
        }, this);
        $[7] = category.article;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== category.galleryLabel || $[10] !== open) {
        t5 = category.galleryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "gallery",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__button,
            onClick: {
                "ProjectsCategory[<button>.onClick]": ()=>{
                    setOpen(!open);
                    scroll();
                }
            }["ProjectsCategory[<button>.onClick]"],
            children: category.galleryLabel
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 57,
            columnNumber: 35
        }, this);
        $[9] = category.galleryLabel;
        $[10] = open;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t1 || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__card,
            children: [
                t1,
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== category.paths || $[19] !== hasGallery || $[20] !== open) {
        t7 = hasGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__gallery} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["category__gallery--open"] : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["category__gallery-inner"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paths: category.paths
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                    lineNumber: 83,
                    columnNumber: 171
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                lineNumber: 83,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 83,
            columnNumber: 24
        }, this);
        $[18] = category.paths;
        $[19] = hasGallery;
        $[20] = open;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== t6 || $[23] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    return t8;
}
_s(ProjectsCategory, "idT2xUH/XYukBBXvqZLzzOGkPB0=");
_c = ProjectsCategory;
function _ProjectsCategoryCategoryParagraphsMap(paragraph, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            clipPath: "inset(0 100% 0 0)"
        },
        animate: {
            clipPath: "inset(0 0 0 0)"
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
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
            children: paragraph
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
            lineNumber: 111,
            columnNumber: 6
        }, this)
    }, index, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
        lineNumber: 103,
        columnNumber: 10
    }, this);
}
function _ProjectsCategoryScroll() {
    const el = document.getElementById("gallery");
    if (el) {
        setTimeout({
            "ProjectsCategory[scroll > setTimeout()]": ()=>el.scrollIntoView({
                    behavior: "smooth"
                })
        }["ProjectsCategory[scroll > setTimeout()]"], 500);
    }
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsCategory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_2afc1c49._.js.map