module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backToTop": "layout-module-scss-module__Nm6aKG__backToTop",
  "background": "layout-module-scss-module__Nm6aKG__background",
  "body": "layout-module-scss-module__Nm6aKG__body",
  "content": "layout-module-scss-module__Nm6aKG__content",
  "wrapper": "layout-module-scss-module__Nm6aKG__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/styles.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "desktop-header": "styles-module-scss-module__tOk6ba__desktop-header",
  "desktop-header__burger": "styles-module-scss-module__tOk6ba__desktop-header__burger",
  "desktop-header__burger--active": "styles-module-scss-module__tOk6ba__desktop-header__burger--active",
  "desktop-header__burger-icon": "styles-module-scss-module__tOk6ba__desktop-header__burger-icon",
  "desktop-header__logo": "styles-module-scss-module__tOk6ba__desktop-header__logo",
  "desktop-header__mobile-nav": "styles-module-scss-module__tOk6ba__desktop-header__mobile-nav",
  "desktop-header__mobile-nav--open": "styles-module-scss-module__tOk6ba__desktop-header__mobile-nav--open",
  "desktop-header__navigation": "styles-module-scss-module__tOk6ba__desktop-header__navigation",
  "desktop-header__navigation-item": "styles-module-scss-module__tOk6ba__desktop-header__navigation-item",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/utils/scroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Прокрутка живёт на #wrapper, а не на окне: у html/body стоит overflow: hidden.
// #wrapper уже учитывает высоту фиксированной шапки через padding-top, поэтому
// обычного scrollIntoView достаточно — без ручного подсчёта оффсетов.
__turbopack_context__.s([
    "scrollToSection",
    ()=>scrollToSection,
    "scrollToSectionAfterTransition",
    ()=>scrollToSectionAfterTransition
]);
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollToSectionAfterTransition(id) {
    const animation = document.getAnimations().find((item)=>item.effect?.pseudoElement === '::view-transition-new(page)');
    // finished реджектится, если переход прервали новой навигацией
    (animation?.finished ?? Promise.resolve()).then(()=>scrollToSection(id)).catch(()=>{});
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/styles.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/scroll.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function DesktopHeader() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Разделы «О нас»/«Проекты»/«Команда»/«Контакты» живут на главной как секции —
    // с других страниц сперва переходим на «/», затем доскролливаем после анимации.
    const toSection = (id)=>{
        return (event)=>{
            event.preventDefault();
            setMenuOpen(false);
            if (pathname !== '/') {
                router.push('/', {
                    onTransitionReady: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToSectionAfterTransition"])(id)
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToSection"])(id);
            }
        };
    };
    // Сам слайд задан в globals.scss через ::view-transition-*, здесь только навигация.
    const onClick = (href)=>{
        return (event)=>{
            event.preventDefault();
            setMenuOpen(false);
            router.push(href, {
                scroll: false
            });
        };
    };
    // Пункты общие для десктопного ряда и мобильной панели — обработчики те же,
    // отличается только то, какой из двух блоков сейчас показан по CSS-медиазапросу.
    const navItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation-item'],
                onClick: onClick('/'),
                children: "Главная"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation-item'],
                onClick: toSection('about'),
                children: "О нас"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation-item'],
                onClick: toSection('projects'),
                children: "Проекты"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation-item'],
                onClick: toSection('team'),
                children: "Команда"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation-item'],
                onClick: toSection('contacts'),
                children: "Контакты"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "site-header",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__logo'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo-black.avif",
                    alt: "AMBILUX ARCHITECTS",
                    fill: true
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__navigation'],
                children: navItems
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": menuOpen ? 'Закрыть меню' : 'Открыть меню',
                "aria-expanded": menuOpen,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__burger']} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__burger--active'] : ''}`,
                onClick: ()=>setMenuOpen(!menuOpen),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__burger-icon']
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                    lineNumber: 65,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__mobile-nav']} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-header__mobile-nav--open'] : ''}`,
                children: navItems
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/styles.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "desktop-footer": "styles-module-scss-module__n1cemW__desktop-footer",
  "desktop-footer__logo": "styles-module-scss-module__n1cemW__desktop-footer__logo",
  "desktop-footer__presentation": "styles-module-scss-module__n1cemW__desktop-footer__presentation",
  "desktop-footer__social": "styles-module-scss-module__n1cemW__desktop-footer__social",
  "desktop-footer__social-item": "styles-module-scss-module__n1cemW__desktop-footer__social-item",
  "desktop-footer__social-item-text": "styles-module-scss-module__n1cemW__desktop-footer__social-item-text",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/styles.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
function DesktopFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "site-footer",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__logo'],
                children: "© 2026 Ambilux architects"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__presentation'],
                children: "Скачать презентацию"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item'],
                        href: "https://max.ru/join/KWK9Y09HkYy6Cu85Z0fZjDzh8vbRVZNonZYXX9weUEQ",
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item-image'],
                                src: "/max.svg",
                                alt: "Max",
                                width: 30,
                                height: 30
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                                lineNumber: 15,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item-text'],
                                children: "MAX"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                                lineNumber: 22,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item'],
                        href: "https://m.vkvideo.ru/@ambiluxarchitects?from=search",
                        target: "_blank",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item-image'],
                            src: "/vk.svg",
                            alt: "VK",
                            width: 30,
                            height: 30
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                            lineNumber: 25,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item'],
                        href: "https://t.me/chaplyginspace",
                        target: "_blank",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item-image'],
                            src: "/telegram.svg",
                            alt: "Telegram",
                            width: 30,
                            height: 30
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item'],
                        href: "https://m.youtube.com/@ambiluxarchitects643?ra=m",
                        target: "_blank",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['desktop-footer__social-item-image'],
                            src: "/youtube.svg",
                            alt: "youtube",
                            width: 30,
                            height: 30
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                            lineNumber: 43,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                        lineNumber: 42,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    const [scroll, setScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Скроллится #wrapper, а не окно, поэтому штатный scroll-restore Next до него не достаёт.
    // Эффект успевает отработать до снятия нового снимка view transition, так что новая
    // страница попадает в него уже прокрученной наверх — без щелчка после анимации.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.getElementById('wrapper')?.scrollTo({
            top: 0
        });
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewTransitions"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "en",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
                        id: "wrapper",
                        onScroll: (e)=>{
                            if (e.currentTarget.scrollTop > 300) {
                                setScroll(true);
                            } else {
                                setScroll(false);
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "site-background",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].background
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "content",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    scroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backToTop,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: ()=>document.querySelector('#wrapper')?.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_bgCarrier",
                                strokeWidth: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_tracerCarrier",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_iconCarrier",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17 15L12 10L7 15",
                                    stroke: "#000000",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bd093315._.js.map