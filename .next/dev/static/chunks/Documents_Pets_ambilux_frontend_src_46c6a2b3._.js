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
  "about__award": "styles-module-scss-module__XeiJ0a__about__award",
  "about__awards": "styles-module-scss-module__XeiJ0a__about__awards",
  "about__body": "styles-module-scss-module__XeiJ0a__about__body",
  "about__lead": "styles-module-scss-module__XeiJ0a__about__lead",
  "about__section": "styles-module-scss-module__XeiJ0a__about__section",
  "about__section-award": "styles-module-scss-module__XeiJ0a__about__section-award",
  "about__section-meta": "styles-module-scss-module__XeiJ0a__about__section-meta",
  "about__section-project": "styles-module-scss-module__XeiJ0a__about__section-project",
  "about__section-title": "styles-module-scss-module__XeiJ0a__about__section-title",
  "about__section-url": "styles-module-scss-module__XeiJ0a__about__section-url",
  "about__span": "styles-module-scss-module__XeiJ0a__about__span",
  "about__stat": "styles-module-scss-module__XeiJ0a__about__stat",
  "about__stat-label": "styles-module-scss-module__XeiJ0a__about__stat-label",
  "about__stat-value": "styles-module-scss-module__XeiJ0a__about__stat-value",
  "about__stats": "styles-module-scss-module__XeiJ0a__about__stats",
  "about__subtitle": "styles-module-scss-module__XeiJ0a__about__subtitle",
  "about__title": "styles-module-scss-module__XeiJ0a__about__title",
  "media": "styles-module-scss-module__XeiJ0a__media",
  "red-line": "styles-module-scss-module__XeiJ0a__red-line",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Reveal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "dcc2fc4991f661d68585399e2677ecab226e6c274b16f26216386e9772f250dc") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dcc2fc4991f661d68585399e2677ecab226e6c274b16f26216386e9772f250dc";
    }
    const { children, transition, amount: t1 } = t0;
    const amount = t1 === undefined ? 0.3 : t1;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] !== amount) {
        t2 = {
            once: true,
            amount
        };
        $[1] = amount;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            clipPath: "inset(0 100% 0 0)"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== inView) {
        t4 = inView ? {
            clipPath: "inset(0 0 0 0)"
        } : undefined;
        $[4] = inView;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== children || $[7] !== t4 || $[8] !== transition) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: t3,
                animate: t4,
                transition: transition,
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx",
                lineNumber: 64,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
        $[8] = transition;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(Reveal, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeAbout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/styles.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/utils/projects.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const lead = `
  С 2014 года — путь от премиального малоэтажного строительства до градостроительных
  решений государственного масштаба, основанный на собственной методологии
  «Интеллектуальное моделирование» и признании профессионального сообщества.
`;
// Первый абзац из старой версии текста убран — его смысл теперь передаёт lead выше,
// дословно повторять то же самое сразу под цифрами было бы избыточно.
const aboutSections = [
    `
    Ambilux architects была основана в 2014 году. Наша философия основана на глубоком понимании того, что архитектура — это не просто создание объектов,
    а конструирование будущего, в центре которого находится человек. Начав свою деятельность в сегменте премиального малоэтажного индивидуального строительства,
    компания зарекомендовала себя как создатель эксклюзивных, функциональных и эстетически выверенных пространств. Этот опыт позволил нам отточить внимание к деталям и
    развить глубокое понимание потребностей конечного пользователя - человека. Этот прочный фундамент стал основой для перехода к более масштабным проектам. На текущий
    момент ключевым направлением деятельности компании является градостроительство.
  `,
    `
    Постепенно мы перешли от проектирования «индивидуального мира» человека к созданию целостных экосистем для жизни, работы и развития. Мы ставим перед собой задачу о
    создании самых эффективных градостроительных решений – о создании нового градостроительства.
  `,
    `
    Эффективность нашего подхода подтверждена широкой географией реализованных проектов. Наши архитектурные решения воплощены на территории Российской Федерации,
    в странах ближнего зарубежья, Западной Европы и Северной Америки. Градостроительные решения в настоящий момент реализуются в различных регионах Российской Федерации.
    Способность успешно работать в разных культурных и климатических контекстах демонстрирует универсальность и гибкость наших методов.
  `
];
const awardTitle = `
  Профессионализм и новаторский подход Ambilux architects получили высокое признание на международном уровне.
  Компания является неоднократным лауреатом премий в области архитектуры и градостроительства:
`;
const awardSections = [
    {
        project: `Стратегический мастер-план «АКАДЕМСИТИ» (СмартСити-Новосибирск). Концепция генерального плана городского округа (поселения)`,
        meta: `
    Конкурс на лучшие научные и творческие работы в области архитектуры, градостроительства и
    строительных наук 2025 года Российской академии архитектуры и строительных работ
  `,
        award: `Диплом`
    },
    {
        project: `Лучший проект объектов благоустройства и создания комфортной городской среды, генерального плана городского округа (городского поселения, сельского поселения)`,
        meta: `НОПРИЗ - 2023`,
        award: `Диплом II степени`
    },
    {
        project: `Лучший проект дорожно-транспортной и коммунальной инфраструктуры, а также объектов промышленного и сельскохозяйственного назначения`,
        meta: `НОПРИЗ - 2023`,
        award: `Диплом II степени`
    },
    {
        project: `Лучший проект генерального плана городского округа (поселения). Стратегический мастер-план «АКАДЕМСИТИ» (Смарт-Сити Новосибирск)`,
        meta: `НОПРИЗ - 2022`,
        award: `Диплом I степени`
    },
    {
        project: `Реализация резиденции «Prizmatiq villa»`,
        meta: `Золотая капитель - 2021`,
        award: `Золотой диплом`
    },
    {
        project: `Многофункциональный комплекс «Наукоград»`,
        meta: `Золотая капитель - 2021`,
        award: `Диплом «Суперфинал»`
    },
    {
        project: `Лучшее архитектурное бюро`,
        meta: `Золотая капитель - 2021`,
        award: `Золотой диплом`
    },
    {
        project: `Лучший реализованный проект объекта культуры`,
        meta: `НОПРИЗ -  2021`,
        award: `Диплом I степени`
    },
    {
        project: `Реализация резиденции «Prizmatiq villa»`,
        meta: `НОПРИЗ – 2020`,
        award: `Диплом II степени`
    },
    {
        project: `Проект развития административного центра «Чхонджу-сити», Республика Корея`,
        meta: `НОПРИЗ - 2020`,
        award: `Диплом II степени`
    },
    {
        project: `Градостроительная концепция развития исторического центра, эко-регенерация р. Сутолока, г. Уфа`,
        meta: `ЭкоБерег - 2019`,
        award: `2 место`
    },
    {
        project: `Проект развития общественного центра наукограда Кольцово. Многофункциональный комплекс «Наукоград»`,
        meta: `НОПРИЗ - 2019`,
        award: `Диплом I степени`
    },
    {
        project: `Проект резиденции «Prizmatiq villa»`,
        meta: `Eurazian prize - 2019`,
        award: `Бронзовый диплом`
    },
    {
        project: `Проект развития набережной реки Миасс в Челябинске, в рамках разработки нового имиджа города и создание проектов для трех ключевых объектов к саммитам ШОС и БРИКС`,
        meta: `Archchel-2020 (Правительство Челябинской области, Союз архитекторов России, Союз дизайнеров России и АНО «Агентство международного сотрудничества Челябинской области») TATLIN - 2016`,
        award: `1, 2 места`
    },
    {
        project: `Проект реконструкции ДК «Академия»`,
        meta: `Золотая капитель - 2015`,
        award: `Серебряный диплом`
    },
    {
        project: `Проект перcпективного развития новосибирского дендропарка`,
        meta: `Мэрия г. Новосибирска - 2015`,
        award: `I место, Благодарственное письмо мэра г. Новосибирска`
    },
    {
        project: `Проект развития общественного пространства на территории бывшей гостиницы «Россия» - парк «Зарядье»`,
        meta: `Правительство Москвы - 2012`,
        award: `Диплом участника`
    },
    {
        project: `Концепция высотного МФК «Азия» по ул. Кирова, г. Новосибирск`,
        meta: `Золотая капитель - 2007`,
        award: `Диплом оргкомитета`
    }
];
const mediaSections = {
    text: [
        {
            title: `Prizmatiq: дом из советского будущего`,
            url: [
                {
                    text: ``,
                    href: `https://status-media.com/life-style/prizmatiq-dom-iz-sovetskogo-budushhego`
                }
            ]
        },
        {
            title: `Движущая сила развития Академгородка`,
            url: [
                {
                    text: ``,
                    href: `https://ksonline.ru/577580/yurij-chaplygin-zadacha-vozrozhdeniya-akademgorodka-shans-dlya-aktivnyh-predstavitelej-vlasti-proyavit-sebya`
                }
            ]
        },
        {
            title: `Градостроительные концепции (Новостройки Новосибирска)`,
            url: [
                {
                    text: ``,
                    href: `https://nnsib.ru/page104133576.html`
                }
            ]
        },
        {
            title: `Как превратить Новосибирск в город мечты`,
            url: [
                {
                    text: ``,
                    href: `https://www.calameo.com/read/0078349962a4c382c0d1b`
                }
            ]
        },
        {
            title: `Смарт-сити / Академ-сити:`,
            url: [
                {
                    text: `• Проект пошел в работу`,
                    href: `https://academcity.org/content/proekt-poshel-v-rabotu`
                },
                {
                    text: `• Инвестиции в первую очередь`,
                    href: `https://vn.ru/news-investitsii-v-pervuyu-ochered-smartsiti-sostavyat-46-mlrd-rubley/`
                },
                {
                    text: `• Чем новосибирский СмартСити будет лучше казанского Иннополиса`,
                    href: `https://ksonline.ru/491124/kak-obstoyat-dela-s-proektom-smartsiti-i-chto-zhdet-ego-v-blizhajshem-budushhem/`
                }
            ]
        },
        {
            title: `Интеллектуальное моделирование и пр. (журнал STATUS)`,
            url: [
                {
                    text: ``,
                    href: `https://www.calameo.com/books/0070248911279c53fb650`
                }
            ]
        },
        {
            title: `Трансформация рынка недвижимости: Эпоха ИЖС`,
            url: [
                {
                    text: ``,
                    href: `https://www.calameo.com/read/007024891367b1eed7f0d`
                }
            ]
        }
    ],
    video: [
        {
            title: `Прямой эфир с руководителем выставки «Сибирская строительная неделя» Павлом Плешканем`,
            url: `https://vk.ru/wall-210925213_1255`
        },
        {
            title: `Многофункциональный культурно-развлекательный центр Кольцово`,
            url: `https://m.vkvideo.ru/video-236078703_456239020?from=video`
        },
        {
            title: `Многофункциональный комплекс «Наукоград»`,
            url: `https://m.vkvideo.ru/video-236078703_456239017?from=video`
        },
        {
            title: `Вилла Prizmatiq`,
            url: `https://m.vkvideo.ru/video-236078703_456239018?from=video`
        },
        {
            title: `Академгородок 2.0`,
            url: `https://m.vkvideo.ru/video-236078703_456239019?from=video`
        }
    ]
};
function HomeAbout() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "391f70aa9b93a1f29c0eadc8b854c33eab7993a401e4259e16642e4b62c3c324") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "391f70aa9b93a1f29c0eadc8b854c33eab7993a401e4259e16642e4b62c3c324";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            value: "13",
            label: "\u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            value: String(awardSections.length),
            label: "\u043D\u0430\u0433\u0440\u0430\u0434 \u0438 \u043F\u0440\u0435\u043C\u0438\u0439"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            t0,
            t1,
            {
                value: String(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectLinks"].length - 1),
                label: "\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const stats = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__title,
            children: "О нас"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: {
                duration: 0.8,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__lead,
                children: lead
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 227,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.6,
            delay: 0.1,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__stats,
                children: stats.map(_HomeAboutStatsMap)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 245,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 245,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__body,
            children: aboutSections.map(_HomeAboutAboutSectionsMap)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: "awards",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__span
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 255,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__title,
            children: "Награды"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            delay: 0,
            duration: 0.5,
            ease: "easeOut"
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: awardTitle
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 278,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    let t14;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            amount: 0.1,
            transition: t10,
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__awards,
                    children: awardSections.map(_HomeAboutAwardSectionsMap)
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                    lineNumber: 287,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: "media",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__span
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__title,
            children: "Публицистика"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
    } else {
        t12 = $[13];
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "about",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about,
            children: [
                t3,
                t4,
                t6,
                t7,
                t8,
                t9,
                t12,
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    amount: 0.1,
                    transition: {
                        delay: 0,
                        duration: 0.5,
                        ease: "easeOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__subtitle,
                            children: "Статьи:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                            lineNumber: 304,
                            columnNumber: 10
                        }, this),
                        mediaSections.text.map(_HomeAboutMediaSectionsTextMap),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__subtitle,
                            children: "Видео:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                            lineNumber: 304,
                            columnNumber: 117
                        }, this),
                        mediaSections.video.map(_HomeAboutMediaSectionsVideoMap)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                    lineNumber: 300,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    return t15;
}
_c = HomeAbout;
function _HomeAboutMediaSectionsVideoMap(section_2, index_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-title"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
            href: section_2.url,
            target: "_blank",
            children: section_2.title
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 312,
            columnNumber: 88
        }, this)
    }, index_4, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 312,
        columnNumber: 10
    }, this);
}
function _HomeAboutMediaSectionsTextMap(section_1, index_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-title"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                href: section_1.url[0].href,
                target: "_blank",
                children: section_1.title
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 315,
                columnNumber: 88
            }, this),
            section_1.url.map(_HomeAboutMediaSectionsTextMapSection_1UrlMap)
        ]
    }, index_2, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 315,
        columnNumber: 10
    }, this);
}
function _HomeAboutMediaSectionsTextMapSection_1UrlMap(url, index_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-url"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
        href: url.href,
        target: "_blank",
        children: url.text
    }, index_3, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 318,
        columnNumber: 10
    }, this);
}
function _HomeAboutAwardSectionsMap(section_0, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__award,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-project"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: section_0.project
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 321,
                columnNumber: 65
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-meta"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: section_0.meta
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 321,
                columnNumber: 163
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__section-award"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: section_0.award
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 321,
                columnNumber: 255
            }, this)
        ]
    }, index_1, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 321,
        columnNumber: 10
    }, this);
}
function _HomeAboutAboutSectionsMap(section, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        amount: 0.3,
        transition: {
            duration: 0.8,
            delay: index_0 * 0.15,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
            children: section
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
            lineNumber: 328,
            columnNumber: 6
        }, this)
    }, index_0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 324,
        columnNumber: 10
    }, this);
}
function _HomeAboutStatsMap(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about__stat,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__stat-value"],
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 331,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$about$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["about__stat-label"],
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
                lineNumber: 331,
                columnNumber: 123
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/about/index.tsx",
        lineNumber: 331,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HomeAbout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projects": "styles-module-scss-module__Vf14tq__projects",
  "projects__approach": "styles-module-scss-module__Vf14tq__projects__approach",
  "projects__approach-item": "styles-module-scss-module__Vf14tq__projects__approach-item",
  "projects__approach-label": "styles-module-scss-module__Vf14tq__projects__approach-label",
  "projects__approach-number": "styles-module-scss-module__Vf14tq__projects__approach-number",
  "projects__approach-text": "styles-module-scss-module__Vf14tq__projects__approach-text",
  "projects__card": "styles-module-scss-module__Vf14tq__projects__card",
  "projects__card-arrow": "styles-module-scss-module__Vf14tq__projects__card-arrow",
  "projects__card-image": "styles-module-scss-module__Vf14tq__projects__card-image",
  "projects__card-placeholder": "styles-module-scss-module__Vf14tq__projects__card-placeholder",
  "projects__card-title": "styles-module-scss-module__Vf14tq__projects__card-title",
  "projects__cards": "styles-module-scss-module__Vf14tq__projects__cards",
  "projects__section": "styles-module-scss-module__Vf14tq__projects__section",
  "projects__title": "styles-module-scss-module__Vf14tq__projects__title",
  "red-line": "styles-module-scss-module__Vf14tq__red-line",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next-view-transitions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/styles.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx [app-client] (ecmascript)");
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
const revealTransition = (index)=>({
        duration: 0.8,
        delay: index * 0.15,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    });
const cardTransition = (index)=>({
        duration: 0.6,
        delay: index * 0.1,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    });
function HomeProjects() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "a2530e0b5176308258e6b0a074224c7b9b05adeb2c125447a5dd466777f617da") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a2530e0b5176308258e6b0a074224c7b9b05adeb2c125447a5dd466777f617da";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [objects, setObjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HomeProjects[useEffect()]": ()=>{
                fetch("https://ambilux.com/api/objects").then(_HomeProjectsUseEffectAnonymous).then({
                    "HomeProjects[useEffect() > (anonymous)()]": (parsed)=>setObjects(parsed)
                }["HomeProjects[useEffect() > (anonymous)()]"]).catch(_HomeProjectsUseEffectAnonymous2);
            }
        })["HomeProjects[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== router) {
        t3 = ({
            "HomeProjects[onClick]": (href)=>(event)=>{
                    event.preventDefault();
                    router.push(href, {
                        scroll: false
                    });
                }
        })["HomeProjects[onClick]"];
        $[4] = router;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const onClick = t3;
    let result;
    if ($[6] !== objects) {
        const usedPaths = new Set();
        result = {};
        for (const { slug } of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectLinks"]){
            const category = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCategories"][slug];
            const items = category.paths ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickProjects"])(objects, category.paths) : objects;
            const picked = items.find({
                "HomeProjects[items.find()]": (item)=>item.picture && !usedPaths.has(item.path)
            }["HomeProjects[items.find()]"]);
            if (picked) {
                usedPaths.add(picked.path);
                result[slug] = picked.picture;
            }
        }
        $[6] = objects;
        $[7] = result;
    } else {
        result = $[7];
    }
    const cardPictures = result;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__title,
            children: "Проекты"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: revealTransition(0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: intro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 138,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = revealTransition(1);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: approachTitle
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: t6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section,
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__approach,
                        children: approach.map(_HomeProjectsApproachMap)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                        lineNumber: 159,
                        columnNumber: 84
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 159,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: revealTransition(2),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__section} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["red-line"]}`,
                children: outro
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 166,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== cardPictures || $[15] !== onClick) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$utils$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectLinks"].map({
            "HomeProjects[projectLinks.map()]": (t11, index_0)=>{
                const { slug: slug_0, label } = t11;
                const picture = cardPictures[slug_0];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    transition: cardTransition(index_0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__card,
                        onClick: onClick(`/projects/${slug_0}`),
                        children: [
                            picture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__card-image"],
                                src: `https://ambilux.com/api/${picture.path}`,
                                alt: label,
                                sizes: "(max-width: 925px) 100vw, 380px",
                                fill: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                                lineNumber: 180,
                                columnNumber: 163
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__card-placeholder"]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                                lineNumber: 180,
                                columnNumber: 330
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__card-title"],
                                children: [
                                    label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__card-arrow"],
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                                        lineNumber: 180,
                                        columnNumber: 443
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                                lineNumber: 180,
                                columnNumber: 387
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                        lineNumber: 180,
                        columnNumber: 74
                    }, this)
                }, slug_0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                    lineNumber: 180,
                    columnNumber: 16
                }, this);
            }
        }["HomeProjects[projectLinks.map()]"]);
        $[14] = cardPictures;
        $[15] = onClick;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "projects",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects,
            children: [
                t4,
                t5,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projects__cards,
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                    lineNumber: 191,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_s(HomeProjects, "TNox7F92ZCLKvqifKPZiUh+/MFY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionRouter"]
    ];
});
_c = HomeProjects;
function _HomeProjectsApproachMap(item_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-item"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-number"],
                children: String(index + 1).padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 200,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-label"],
                children: item_0.label
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 200,
                columnNumber: 170
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$projects$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["projects__approach-text"],
                children: item_0.text
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
                lineNumber: 200,
                columnNumber: 244
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/projects/index.tsx",
        lineNumber: 200,
        columnNumber: 10
    }, this);
}
function _HomeProjectsUseEffectAnonymous2() {}
function _HomeProjectsUseEffectAnonymous(response) {
    return response.json();
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
  "item__avatar": "styles-module-scss-module__zmJkfa__item__avatar",
  "item__awards": "styles-module-scss-module__zmJkfa__item__awards",
  "item__job": "styles-module-scss-module__zmJkfa__item__job",
  "item__merits": "styles-module-scss-module__zmJkfa__item__merits",
  "item__name": "styles-module-scss-module__zmJkfa__item__name",
  "item__text": "styles-module-scss-module__zmJkfa__item__text",
  "team": "styles-module-scss-module__zmJkfa__team",
  "team__button": "styles-module-scss-module__zmJkfa__team__button",
  "team__document": "styles-module-scss-module__zmJkfa__team__document",
  "team__document--open": "styles-module-scss-module__zmJkfa__team__document--open",
  "team__grid": "styles-module-scss-module__zmJkfa__team__grid",
  "team__lead": "styles-module-scss-module__zmJkfa__team__lead",
  "team__lead-avatar": "styles-module-scss-module__zmJkfa__team__lead-avatar",
  "team__lead-info": "styles-module-scss-module__zmJkfa__team__lead-info",
  "team__title": "styles-module-scss-module__zmJkfa__team__title",
  "team__title--center": "styles-module-scss-module__zmJkfa__team__title--center",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/components/reveal/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Реальных фото нет ни у кого — вместо пустой рамки-плейсхолдера показываем инициалы
// (имя + последнее слово, чтобы у «Юрий Михайлович Чаплыгин» получилось «ЮЧ», а не «ЮМ»).
const getInitials = (name)=>{
    const parts = name.trim().split(/\s+/);
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
function HomeTeam() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "81622ea52dfabe34fd00d296fb14549b2ac2e7edf81adec506a3c7bc21864df8") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "81622ea52dfabe34fd00d296fb14549b2ac2e7edf81adec506a3c7bc21864df8";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lead, ...rest] = objects;
    const scroll = _HomeTeamScroll;
    let t0;
    if ($[1] !== scroll) {
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
        $[1] = scroll;
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
    const t2 = "team";
    const t3 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"];
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__title,
            children: "Команда"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.5,
            ease: "easeOut"
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["team__lead-avatar"],
            children: getInitials(lead.name)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__name,
            children: lead.name
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__job,
            children: lead.job
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t7;
        $[8] = t8;
    } else {
        t7 = $[7];
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__awards,
            children: lead.awards.map(_HomeTeamLeadAwardsMap)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: t5,
            amount: 0.2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__lead,
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["team__lead-info"],
                        children: [
                            t7,
                            t8,
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__merits,
                                children: lead.merits.map(_HomeTeamLeadMeritsMap)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                                lineNumber: 96,
                                columnNumber: 146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                        lineNumber: 96,
                        columnNumber: 91
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 96,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            duration: 0.5,
            ease: "easeOut"
        };
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    const t12 = 0.1;
    const t13 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"];
    const t14 = rest.map(_HomeTeamRestMap);
    let t15;
    if ($[12] !== t13.team__grid || $[13] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t13.team__grid,
            children: t14
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[12] = t13.team__grid;
        $[13] = t14;
        $[14] = t15;
    } else {
        t15 = $[14];
    }
    let t16;
    if ($[15] !== T0 || $[16] !== t11 || $[17] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            transition: t11,
            amount: t12,
            children: t15
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[15] = T0;
        $[16] = t11;
        $[17] = t15;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            duration: 0.5,
            ease: "easeOut"
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "vacancy",
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__title} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["team__title--center"]}`,
            children: "Вы так же можете стать частью нашей команды!"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[19] = t17;
        $[20] = t18;
    } else {
        t17 = $[19];
        t18 = $[20];
    }
    let t19;
    if ($[21] !== open || $[22] !== scroll) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$reveal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            transition: t17,
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    lineNumber: 150,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[21] = open;
        $[22] = scroll;
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    const t20 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team__document} ${open && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["team__document--open"]}`;
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true",
            style: {
                maxWidth: "calc(630px + 96px * 2)",
                width: "100%",
                alignSelf: "center"
            },
            height: 1017
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[25] = t20;
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] !== t10 || $[28] !== t16 || $[29] !== t19 || $[30] !== t22 || $[31] !== t3.team || $[32] !== t4) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: t2,
            className: t3.team,
            children: [
                t4,
                t10,
                t16,
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t16;
        $[29] = t19;
        $[30] = t22;
        $[31] = t3.team;
        $[32] = t4;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    return t23;
}
_s(HomeTeam, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = HomeTeam;
function _HomeTeamRestMap(value, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__avatar,
                children: getInitials(value.name)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 198,
                columnNumber: 53
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__text,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__name,
                        children: value.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                        lineNumber: 198,
                        columnNumber: 158
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item__job,
                        children: value.job
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                        lineNumber: 198,
                        columnNumber: 213
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
                lineNumber: 198,
                columnNumber: 123
            }, this)
        ]
    }, index_1, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function _HomeTeamLeadMeritsMap(merit, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["item__merits-item"],
        children: merit
    }, index_0, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 201,
        columnNumber: 10
    }, this);
}
function _HomeTeamLeadAwardsMap(award, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$pages$2f$home$2f$team$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["item__awards-item"],
        children: award
    }, index, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/pages/home/team/index.tsx",
        lineNumber: 204,
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
  "formFooter": "contact-us-module-scss-module__IW5CWG__formFooter",
  "formName": "contact-us-module-scss-module__IW5CWG__formName",
  "formText": "contact-us-module-scss-module__IW5CWG__formText",
  "formWrapper": "contact-us-module-scss-module__IW5CWG__formWrapper",
  "label": "contact-us-module-scss-module__IW5CWG__label",
  "separator": "contact-us-module-scss-module__IW5CWG__separator",
  "social": "contact-us-module-scss-module__IW5CWG__social",
  "socialItem": "contact-us-module-scss-module__IW5CWG__socialItem",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "2cdcc4c532d96a3a1542367fc84c02395c86f2e4a7d7d8931f26716c0ace212d") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2cdcc4c532d96a3a1542367fc84c02395c86f2e4a7d7d8931f26716c0ace212d";
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
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                    children: "E-MAIL: "
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 70,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "mailto:Inf@ambilux.com",
                    target: "_blank",
                    children: "inf@ambilux.com"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 70,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
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
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                    children: "Telegram: "
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 77,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://t.me/ambilux_architects",
                    target: "_blank",
                    children: "https://t.me/ambilux_architects"
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 77,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
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
                    lineNumber: 92,
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
                    lineNumber: 92,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    const t8 = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thanks} ${vis && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vis}`;
    let t9;
    if ($[9] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t8,
            children: "Отправлено. Спасибо!"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: "Отправить"
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formFooter,
                            children: [
                                t9,
                                t10
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                            lineNumber: 118,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
                    lineNumber: 118,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    return t11;
}
_s(ContactUs, "JOKBNVXTafkEwEmufRBeAQPqH1Q=");
_c = ContactUs;
function _ContactUsContactsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$components$2f$contact$2d$us$2f$contact$2d$us$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialItem,
        href: item.link,
        target: "_blank",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: item.icon,
            alt: item.alt,
            width: 22,
            height: 22
        }, void 0, false, {
            fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
            lineNumber: 127,
            columnNumber: 91
        }, this)
    }, item.alt, false, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/components/contact-us/index.tsx",
        lineNumber: 127,
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

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_46c6a2b3._.js.map