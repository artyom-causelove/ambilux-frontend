(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "page-module-scss-module__XgLNgq__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Object
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/router.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Object() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "3d0417f585153347cdb7211dd9d4973d28e54e1255d6b767736798325df411ca") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d0417f585153347cdb7211dd9d4973d28e54e1255d6b767736798325df411ca";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] !== router.query.id) {
        t0 = ({
            "Object[useEffect()]": ()=>{
                fetch(`http://localhost:3001/objects/${router.query.id}`).then(_ObjectUseEffectAnonymous).then({
                    "Object[useEffect() > (anonymous)()]": (parsed)=>{
                        setData(parsed);
                        setLoading(false);
                    }
                }["Object[useEffect() > (anonymous)()]"]);
            }
        })["Object[useEffect()]"];
        $[1] = router.query.id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "loading"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t2;
    if ($[5] !== data?.files) {
        t2 = data?.files.map(_ObjectAnonymous);
        $[5] = data?.files;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(Object, "SReHsPVpJRq4kMWx+KAHRPZ9x8M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Object;
function _ObjectAnonymous(file) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        alt: "Object picture",
        src: `http://localhost:3001/${file.path}`
    }, void 0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
        lineNumber: 72,
        columnNumber: 10
    }, this);
}
function _ObjectUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "Object");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_app_objects_%5Bid%5D_bd6046bf._.js.map