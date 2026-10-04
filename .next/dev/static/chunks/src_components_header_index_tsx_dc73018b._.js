(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/header/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/src_components_header_header_module_scss_module_4abe5f19.css",
    "included": [
      "[project]/src/components/header/header.module.scss.module.css [app-client] (css)"
    ]
  },
  "static/chunks/_a3bdbbb0._.js",
  "static/chunks/src_components_header_index_tsx_bfb4d1e2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/header/index.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);