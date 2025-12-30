(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "header-module-scss-module__sUM59q__active",
  "header": "header-module-scss-module__sUM59q__header",
  "item": "header-module-scss-module__sUM59q__item",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/header/header.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8c82fc9982f038286f786753981584a821e6afad0621ef8bc0adfbb32513c514") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c82fc9982f038286f786753981584a821e6afad0621ef8bc0adfbb32513c514";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "Header[isActive]": (href)=>pathname === href
        })["Header[isActive]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    if ($[3] !== isActive) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: Object.entries(headerItems).map({
                "Header[(anonymous)()]": (t2)=>{
                    const [key, value] = t2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item} ${isActive(value.href) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                        href: value.href,
                        children: value.title.toUpperCase()
                    }, key, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
                        lineNumber: 50,
                        columnNumber: 18
                    }, this);
                }
            }["Header[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/header/index.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = isActive;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_components_header_7e2260b9._.js.map