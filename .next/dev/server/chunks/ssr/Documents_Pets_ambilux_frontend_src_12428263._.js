module.exports = [
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/styles.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/projects-list.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/usehooks-ts/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/projects-list.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ProjectsList({ paths }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 925px)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('https://ambilux.com/api/objects').then((response)=>response.json()).then((parsed)=>setData(parsed)).catch(()=>{});
    }, []);
    const items = paths ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickProjects"])(data, paths) : data;
    const getLink = (item, className, child)=>{
        // Путь абсолютный: относительный увёл бы со страницы категории в /projects/objects/...
        if (item.page === 'page') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            onClick: (e)=>{
                e.preventDefault();
                router.push(`/objects/${encodeURIComponent(item.path)}`, {
                    scroll: false
                });
            },
            className: className,
            children: child
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
            lineNumber: 28,
            columnNumber: 38
        }, this);
        if (item.page === 'file') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: className,
            href: `https://ambilux.com/api/${item.files[0].path}`,
            target: "_blank",
            children: child
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
            lineNumber: 37,
            columnNumber: 38
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: className,
            href: item.link,
            target: "_blank",
            children: child
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item} ${item.reverse ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reverse : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemInfo,
                        children: [
                            item.type && getLink(item, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemType, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.type
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 47,
                                columnNumber: 58
                            }, this)),
                            item.title && getLink(item, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemTitle, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 48,
                                columnNumber: 60
                            }, this)),
                            item.address && getLink(item, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemAddress, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.address
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 49,
                                columnNumber: 64
                            }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemSeparator
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            item.timeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemTimeline,
                                children: item.timeline
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 51,
                                columnNumber: 31
                            }, this),
                            item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemDescription,
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 52,
                                columnNumber: 34
                            }, this),
                            item.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemSize,
                                children: item.size
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 53,
                                columnNumber: 27
                            }, this),
                            item.capacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemCapacity,
                                children: item.capacity
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 54,
                                columnNumber: 31
                            }, this),
                            item.square && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemSquare,
                                children: item.square
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                                lineNumber: 55,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    item.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemPictureWrapper,
                        style: match ? {
                            width: '100%',
                            aspectRatio: `${item.picture.width} / ${item.picture.height}`
                        } : {
                            width: item.picture.width,
                            minHeight: item.picture.height
                        },
                        children: getLink(item, undefined, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$projects$2d$list$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemPicture,
                            src: `https://ambilux.com/api/${item.picture.path}`,
                            alt: item.title,
                            fill: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                            lineNumber: 72,
                            columnNumber: 19
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/styles.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/projects-list/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProjectsCategory({ category }) {
    // Без кнопки (galleryLabel === null) галерея открыта сразу — это раздел «Проекты».
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(category.galleryLabel === null);
    const scroll = ()=>{
        const el = document.getElementById('gallery');
        if (el) {
            setTimeout(()=>el.scrollIntoView({
                    behavior: 'smooth'
                }), 500);
        }
    };
    const hasGallery = category.paths === null || category.paths.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__card'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__title'],
                        children: category.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    category.paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__section']} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['red-line']}`,
                                children: paragraph
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)),
                    category.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__note'],
                        children: category.note
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                        lineNumber: 49,
                        columnNumber: 27
                    }, this),
                    category.article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__button'],
                        href: category.article.href,
                        target: "_blank",
                        children: category.article.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    category.galleryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "gallery",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__button'],
                        onClick: ()=>{
                            setOpen(!open);
                            scroll();
                        },
                        children: category.galleryLabel
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            hasGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__gallery']} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__gallery--open'] : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$projects$2f$category$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['category__gallery-inner'],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$projects$2d$list$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        paths: category.paths
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/projects/category/index.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_12428263._.js.map