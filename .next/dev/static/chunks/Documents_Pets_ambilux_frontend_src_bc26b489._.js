(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backToTop": "layout-module-scss-module__Nm6aKG__backToTop",
  "background": "layout-module-scss-module__Nm6aKG__background",
  "body": "layout-module-scss-module__Nm6aKG__body",
  "content": "layout-module-scss-module__Nm6aKG__content",
  "wrapper": "layout-module-scss-module__Nm6aKG__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/Documents/Pets/ambilux/frontend/src/utils/scroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/styles.module.scss [app-client] (css module)");
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
function DesktopHeader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "a34a056b225c1bf4e94b0f6e0c401fc98bca193fbbe4a35bbde3991cf7f6b375") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a34a056b225c1bf4e94b0f6e0c401fc98bca193fbbe4a35bbde3991cf7f6b375";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== pathname || $[2] !== router) {
        t0 = ({
            "DesktopHeader[toSection]": (id)=>(event)=>{
                    event.preventDefault();
                    setMenuOpen(false);
                    if (pathname !== "/") {
                        router.push("/", {
                            onTransitionReady: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAfterTransition"])(id)
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSection"])(id);
                    }
                }
        })["DesktopHeader[toSection]"];
        $[1] = pathname;
        $[2] = router;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const toSection = t0;
    let t1;
    if ($[4] !== router) {
        t1 = ({
            "DesktopHeader[onClick]": (href)=>(event_0)=>{
                    event_0.preventDefault();
                    setMenuOpen(false);
                    router.push(href, {
                        scroll: false
                    });
                }
        })["DesktopHeader[onClick]"];
        $[4] = router;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const onClick = t1;
    let t2;
    if ($[6] !== onClick) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation-item"],
            onClick: onClick("/"),
            children: "Главная"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = onClick;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== toSection) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation-item"],
            onClick: toSection("about"),
            children: "О нас"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = toSection;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== toSection) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation-item"],
            onClick: toSection("projects"),
            children: "Проекты"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[10] = toSection;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== toSection) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation-item"],
            onClick: toSection("team"),
            children: "Команда"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[12] = toSection;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== toSection) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation-item"],
            onClick: toSection("contacts"),
            children: "Контакты"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[14] = toSection;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t5 || $[20] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true);
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const navItems = t7;
    let t8;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__logo"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logo-black.avif",
                alt: "AMBILUX ARCHITECTS",
                fill: true
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
                lineNumber: 115,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== navItems) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__navigation"],
            children: navItems
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[23] = navItems;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    const t10 = menuOpen ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E";
    const t11 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__burger"]} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__burger--active"] : ""}`;
    let t12;
    if ($[25] !== menuOpen) {
        t12 = ({
            "DesktopHeader[<button>.onClick]": ()=>setMenuOpen(!menuOpen)
        })["DesktopHeader[<button>.onClick]"];
        $[25] = menuOpen;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__burger-icon"]
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== menuOpen || $[29] !== t10 || $[30] !== t11 || $[31] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": t10,
            "aria-expanded": menuOpen,
            className: t11,
            onClick: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[28] = menuOpen;
        $[29] = t10;
        $[30] = t11;
        $[31] = t12;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    const t15 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__mobile-nav"]} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header__mobile-nav--open"] : ""}`;
    let t16;
    if ($[33] !== navItems || $[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t15,
            children: navItems
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[33] = navItems;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t14 || $[37] !== t16 || $[38] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "site-header",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-header"],
            children: [
                t8,
                t9,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t16;
        $[38] = t9;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(DesktopHeader, "1jfeSbR/QZOXgGV3DazRG1NDR9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DesktopHeader;
var _c;
__turbopack_context__.k.register(_c, "DesktopHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "desktop-footer": "styles-module-scss-module__n1cemW__desktop-footer",
  "desktop-footer__logo": "styles-module-scss-module__n1cemW__desktop-footer__logo",
  "desktop-footer__presentation": "styles-module-scss-module__n1cemW__desktop-footer__presentation",
  "desktop-footer__social": "styles-module-scss-module__n1cemW__desktop-footer__social",
  "desktop-footer__social-item": "styles-module-scss-module__n1cemW__desktop-footer__social-item",
  "desktop-footer__social-item-text": "styles-module-scss-module__n1cemW__desktop-footer__social-item-text",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/styles.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function DesktopFooter() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "7dc6574477c3e9949552279e9950e05fd956877da6aa74d29813583e90cd35a8") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7dc6574477c3e9949552279e9950e05fd956877da6aa74d29813583e90cd35a8";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__logo"],
            children: "© 2026 Ambilux architects"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__presentation"],
            children: "Скачать презентацию"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item"],
            href: "https://max.ru/join/KWK9Y09HkYy6Cu85Z0fZjDzh8vbRVZNonZYXX9weUEQ",
            target: "_blank",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item-image"],
                    src: "/max.svg",
                    alt: "Max",
                    width: 30,
                    height: 30
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                    lineNumber: 25,
                    columnNumber: 150
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item-text"],
                    children: "MAX"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                    lineNumber: 25,
                    columnNumber: 263
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item"],
            href: "https://m.vkvideo.ru/@ambiluxarchitects?from=search",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item-image"],
                src: "/vk.svg",
                alt: "VK",
                width: 30,
                height: 30
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                lineNumber: 32,
                columnNumber: 138
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item"],
            href: "https://t.me/chaplyginspace",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item-image"],
                src: "/telegram.svg",
                alt: "Telegram",
                width: 30,
                height: 30
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                lineNumber: 39,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "site-footer",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer"],
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social"],
                    children: [
                        t2,
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item"],
                            href: "https://m.youtube.com/@ambiluxarchitects643?ra=m",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["desktop-footer__social-item-image"],
                                src: "/youtube.svg",
                                alt: "youtube",
                                width: 30,
                                height: 30
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                                lineNumber: 46,
                                columnNumber: 264
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                            lineNumber: 46,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
                    lineNumber: 46,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = DesktopFooter;
var _c;
__turbopack_context__.k.register(_c, "DesktopFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/desktop/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/desktop/index.tsx [app-client] (ecmascript)");
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
function RootLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "daa93e9d7c87fc21f9458eb58f8c9d25bd3f0eef89573bc67cd63a3684f8dcbf") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "daa93e9d7c87fc21f9458eb58f8c9d25bd3f0eef89573bc67cd63a3684f8dcbf";
    }
    const { children } = t0;
    const [scroll, setScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== pathname) {
        t1 = [
            pathname
        ];
        $[1] = pathname;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_RootLayoutUseEffect, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "RootLayout[<div>.onScroll]": (e)=>{
                if (e.currentTarget.scrollTop > 300) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            }
        })["RootLayout[<div>.onScroll]"];
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$desktop$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "site-background",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].background
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "content",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$desktop$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            id: "wrapper",
            onScroll: t2,
            children: [
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== scroll) {
        t8 = scroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backToTop,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            onClick: _RootLayoutSvgOnClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "SVGRepo_bgCarrier",
                    strokeWidth: "0"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 81,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "SVGRepo_tracerCarrier",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 81,
                    columnNumber: 197
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "SVGRepo_iconCarrier",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 15L12 10L7 15",
                        stroke: "#000000",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                        lineNumber: 81,
                        columnNumber: 302
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 81,
                    columnNumber: 274
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 81,
            columnNumber: 20
        }, this);
        $[11] = scroll;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewTransitions"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
                lang: "en",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                    children: [
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 89,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                lineNumber: 89,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_s(RootLayout, "ekKrJ7MvcCJOhbi3Vys6fXwYxiU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
function _RootLayoutSvgOnClick() {
    return document.querySelector("#wrapper")?.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function _RootLayoutUseEffect() {
    document.getElementById("wrapper")?.scrollTo({
        top: 0
    });
}
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_bc26b489._.js.map