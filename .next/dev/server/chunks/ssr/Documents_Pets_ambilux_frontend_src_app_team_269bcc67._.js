module.exports = [
"[project]/Documents/Pets/ambilux/frontend/src/app/team/page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "page-module-scss-module__x64u2q__item",
  "item__awards": "page-module-scss-module__x64u2q__item__awards",
  "item__job": "page-module-scss-module__x64u2q__item__job",
  "item__merits": "page-module-scss-module__x64u2q__item__merits",
  "item__name": "page-module-scss-module__x64u2q__item__name",
  "team": "page-module-scss-module__x64u2q__team",
  "team__button": "page-module-scss-module__x64u2q__team__button",
  "team__document": "page-module-scss-module__x64u2q__team__document",
  "team__document--open": "page-module-scss-module__x64u2q__team__document--open",
  "team__title": "page-module-scss-module__x64u2q__team__title",
  "team__wrapper": "page-module-scss-module__x64u2q__team__wrapper",
});
}),
"[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/team/page.module.scss [app-ssr] (css module)");
'use client';
;
;
;
function Team() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const scroll = ()=>{
        const el = document.getElementById('vacancy');
        if (el) {
            setTimeout(()=>el.scrollIntoView({
                    behavior: 'smooth'
                }), 500);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.location.hash === '#vacancy') {
            setOpen(true);
            requestAnimationFrame(()=>scroll());
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__title'],
                children: "Команда"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__wrapper'],
                children: objects.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__name'],
                                children: value.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__job'],
                                children: value.job
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__awards'],
                                children: value.awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__awards-item'],
                                        children: award
                                    }, index, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 51
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__merits'],
                                children: value.merits.map((merit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['item__merits-item'],
                                        children: merit
                                    }, index, false, {
                                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 51
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "vacancy",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__title'],
                children: "Вы так же можете стать частью нашей команды!"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__button'],
                onClick: ()=>{
                    setOpen(!open);
                    scroll();
                },
                children: "Ознакомьтесь с существующими вакансиями"
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__document']} ${open && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$team$2f$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['team__document--open']}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: "https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true",
                    style: {
                        maxWidth: 'calc(630px + 96px * 2)',
                        width: '100%',
                        alignSelf: 'center'
                    },
                    height: 1017
                }, void 0, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/team/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
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
}),
];

//# sourceMappingURL=Documents_Pets_ambilux_frontend_src_app_team_269bcc67._.js.map