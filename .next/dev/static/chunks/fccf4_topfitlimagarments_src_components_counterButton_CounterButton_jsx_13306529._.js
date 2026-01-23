(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Tpfitlimgarments/topfitlimagarments/src/components/counterButton/CounterButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tpfitlimgarments/topfitlimagarments/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tpfitlimgarments/topfitlimagarments/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // if Next.js 13+ with app directory
;
const CounterButton = ({ end, duration = 2000, label })=>{
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CounterButton.useEffect": ()=>{
            let start = 0;
            const increment = end / (duration / 50); // updates every 50ms
            const counter = setInterval({
                "CounterButton.useEffect.counter": ()=>{
                    start += increment;
                    if (start >= end) {
                        start = end;
                        clearInterval(counter);
                    }
                    setCount(Math.floor(start));
                }
            }["CounterButton.useEffect.counter"], 50);
            return ({
                "CounterButton.useEffect": ()=>clearInterval(counter)
            })["CounterButton.useEffect"];
        }
    }["CounterButton.useEffect"], [
        end,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-3xl md:text-4xl font-extrabold text-primary mb-2",
                children: [
                    count.toLocaleString(),
                    "+"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Tpfitlimgarments/topfitlimagarments/src/components/counterButton/CounterButton.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tpfitlimgarments$2f$topfitlimagarments$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm md:text-[16px] text-accent font-bold",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/Tpfitlimgarments/topfitlimagarments/src/components/counterButton/CounterButton.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Tpfitlimgarments/topfitlimagarments/src/components/counterButton/CounterButton.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CounterButton, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = CounterButton;
const __TURBOPACK__default__export__ = CounterButton;
var _c;
__turbopack_context__.k.register(_c, "CounterButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=fccf4_topfitlimagarments_src_components_counterButton_CounterButton_jsx_13306529._.js.map