module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "header-module-scss-module__sUM59q__active",
  "header": "header-module-scss-module__sUM59q__header",
  "item": "header-module-scss-module__sUM59q__item",
});
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
"[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const headerItems = {
    home: {
        title: 'главная',
        href: '/',
        type: 'link',
        onClick: ()=>{}
    },
    about: {
        title: 'о нас',
        href: '/about',
        type: 'link',
        onClick: ()=>{}
    },
    contacts: {
        title: 'контакты',
        href: '/contacts',
        type: 'button',
        onClick: ()=>window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'auto'
            })
    },
    vacancies: {
        title: 'вакансии',
        href: '/vacancies',
        type: 'link',
        onClick: ()=>{}
    }
};
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (href)=>{
        return pathname === href;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: Object.entries(headerItems).map(([key, value])=>{
            if (value.type === 'button') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item} ${isActive(value.href) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active}`,
                onClick: value.onClick,
                children: value.title.toUpperCase()
            }, key, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item} ${isActive(value.href) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active}`,
                href: value.href,
                children: value.title.toUpperCase()
            }, key, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/footer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "footer-module-scss-module__0dZbia__button",
  "footer": "footer-module-scss-module__0dZbia__footer",
  "title": "footer-module-scss-module__0dZbia__title",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/footer.module.scss [app-ssr] (css module)");
'use client';
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                href: "https://www.ambilux.com/",
                target: "_blank",
                children: "© 2023 AMBILUX architects."
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                onClick: ()=>window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                    }),
                children: "Нажмите, чтобы вернуться наверх"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef6c7a60._.js.map