module.exports = [
"[project]/Documents/Pets/ambilux/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Pets/ambilux/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Pets/ambilux/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "page-module-scss-module__XgLNgq__wrapper",
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
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Object
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/router.js [app-rsc] (ecmascript)");
;
;
;
async function Object() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const response = await fetch(`http://localhost:3001/objects/${router.query.id}`);
    const data = await response.json();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrapper,
        children: data.files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                alt: "Object picture",
                src: `http://localhost:3001/${file.path}`
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e181a55f._.js.map