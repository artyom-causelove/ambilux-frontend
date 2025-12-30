module.exports = [
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "background": "layout-module-scss-module__Nm6aKG__background",
  "body": "layout-module-scss-module__Nm6aKG__body",
});
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "header-module-scss-module__sUM59q__header",
  "item": "header-module-scss-module__sUM59q__item",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/router.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
const headerItems = {
    home: {
        title: 'главная',
        href: '/'
    },
    about: {
        title: 'о нас',
        href: '/about'
    },
    contacts: {
        title: 'контакты',
        href: '/contacts'
    },
    vacancies: {
        title: 'вакансии',
        href: '/vacancies'
    }
};
function Header() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const isActive = (href)=>router.pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
        children: Object.entries(headerItems).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                href: value.href,
                children: value.title.toUpperCase()
            }, key, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/footer.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "footer-module-scss-module__0dZbia__button",
  "footer": "footer-module-scss-module__0dZbia__footer",
  "title": "footer-module-scss-module__0dZbia__title",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/footer.module.scss [app-rsc] (css module)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                href: "https://www.ambilux.com/",
                target: "_blank",
                children: "© 2023 AMBILUX architects."
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$footer$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                children: "Нажмите, чтобы вернуться наверх"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/layout.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/footer/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].body,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$layout$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].background,
                            src: "/background.png",
                            alt: "Site background",
                            width: 1920,
                            height: 1080
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8bdc792._.js.map