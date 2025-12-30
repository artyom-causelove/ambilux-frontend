(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "image": "page-module-scss-module__XgLNgq__image",
  "imageWrapper": "page-module-scss-module__XgLNgq__imageWrapper",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Object() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "4e682cf0a02eb8f50f819cd60d178122b9a342aebfa33794cc368bcdd8250e9a") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4e682cf0a02eb8f50f819cd60d178122b9a342aebfa33794cc368bcdd8250e9a";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 925px)");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== params.id) {
        t0 = ({
            "Object[useEffect()]": ()=>{
                fetch(`http://10.8.0.2:3001/objects/${params.id}`).then(_ObjectUseEffectAnonymous).then({
                    "Object[useEffect() > (anonymous)()]": (parsed)=>setData(parsed)
                }["Object[useEffect() > (anonymous)()]"]);
            }
        })["Object[useEffect()]"];
        $[1] = params.id;
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
    let t2;
    if ($[4] !== data?.files || $[5] !== match) {
        t2 = data?.files.map({
            "Object[(anonymous)()]": (file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                    style: match ? {
                        width: "100%",
                        aspectRatio: `${file.width} / ${file.height}`
                    } : {
                        width: file.width,
                        height: file.height
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$src$2f$app$2f$objects$2f5b$id$5d2f$page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                        alt: "Object picture",
                        src: `http://10.8.0.2:3001/${file.path}`,
                        fill: true
                    }, void 0, false, {
                        fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 10
                    }, this)
                }, file.id, false, {
                    fileName: "[project]/Documents/Pets/ambilux/frontend/src/app/objects/[id]/page.tsx",
                    lineNumber: 45,
                    columnNumber: 40
                }, this)
        }["Object[(anonymous)()]"]);
        $[4] = data?.files;
        $[5] = match;
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
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(Object, "5cB1VJYxQnSplK06xw0N4PTLk1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = Object;
function _ObjectUseEffectAnonymous(response) {
    return response.json();
}
var _c;
__turbopack_context__.k.register(_c, "Object");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/lodash.debounce/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBoolean",
    ()=>useBoolean,
    "useClickAnyWhere",
    ()=>useClickAnyWhere,
    "useCopyToClipboard",
    ()=>useCopyToClipboard,
    "useCountdown",
    ()=>useCountdown,
    "useCounter",
    ()=>useCounter,
    "useDarkMode",
    ()=>useDarkMode,
    "useDebounceCallback",
    ()=>useDebounceCallback,
    "useDebounceValue",
    ()=>useDebounceValue,
    "useDocumentTitle",
    ()=>useDocumentTitle,
    "useEventCallback",
    ()=>useEventCallback,
    "useEventListener",
    ()=>useEventListener,
    "useHover",
    ()=>useHover,
    "useIntersectionObserver",
    ()=>useIntersectionObserver,
    "useInterval",
    ()=>useInterval,
    "useIsClient",
    ()=>useIsClient,
    "useIsMounted",
    ()=>useIsMounted,
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect,
    "useLocalStorage",
    ()=>useLocalStorage,
    "useMap",
    ()=>useMap,
    "useMediaQuery",
    ()=>useMediaQuery,
    "useOnClickOutside",
    ()=>useOnClickOutside,
    "useReadLocalStorage",
    ()=>useReadLocalStorage,
    "useResizeObserver",
    ()=>useResizeObserver,
    "useScreen",
    ()=>useScreen,
    "useScript",
    ()=>useScript,
    "useScrollLock",
    ()=>useScrollLock,
    "useSessionStorage",
    ()=>useSessionStorage,
    "useStep",
    ()=>useStep,
    "useTernaryDarkMode",
    ()=>useTernaryDarkMode,
    "useTimeout",
    ()=>useTimeout,
    "useToggle",
    ()=>useToggle,
    "useUnmount",
    ()=>useUnmount,
    "useWindowSize",
    ()=>useWindowSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/lodash.debounce/index.js [app-client] (ecmascript)");
;
;
// src/useBoolean/useBoolean.ts
function useBoolean(defaultValue = false) {
    if (typeof defaultValue !== "boolean") {
        throw new Error("defaultValue must be `true` or `false`");
    }
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const setTrue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setTrue]": ()=>{
            setValue(true);
        }
    }["useBoolean.useCallback[setTrue]"], []);
    const setFalse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setFalse]": ()=>{
            setValue(false);
        }
    }["useBoolean.useCallback[setFalse]"], []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[toggle]": ()=>{
            setValue({
                "useBoolean.useCallback[toggle]": (x)=>!x
            }["useBoolean.useCallback[toggle]"]);
        }
    }["useBoolean.useCallback[toggle]"], []);
    return {
        value,
        setValue,
        setTrue,
        setFalse,
        toggle
    };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
// src/useEventListener/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
    const savedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    useIsomorphicLayoutEffect({
        "useEventListener.useIsomorphicLayoutEffect": ()=>{
            savedHandler.current = handler;
        }
    }["useEventListener.useIsomorphicLayoutEffect"], [
        handler
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEventListener.useEffect": ()=>{
            const targetElement = (element == null ? void 0 : element.current) ?? window;
            if (!(targetElement && targetElement.addEventListener)) return;
            const listener = {
                "useEventListener.useEffect.listener": (event)=>{
                    savedHandler.current(event);
                }
            }["useEventListener.useEffect.listener"];
            targetElement.addEventListener(eventName, listener, options);
            return ({
                "useEventListener.useEffect": ()=>{
                    targetElement.removeEventListener(eventName, listener, options);
                }
            })["useEventListener.useEffect"];
        }
    }["useEventListener.useEffect"], [
        eventName,
        element,
        options
    ]);
}
// src/useClickAnyWhere/useClickAnyWhere.ts
function useClickAnyWhere(handler) {
    useEventListener("click", {
        "useClickAnyWhere.useEventListener": (event)=>{
            handler(event);
        }
    }["useClickAnyWhere.useEventListener"]);
}
function useCopyToClipboard() {
    const [copiedText, setCopiedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCopyToClipboard.useCallback[copy]": async (text)=>{
            if (!(navigator == null ? void 0 : navigator.clipboard)) {
                console.warn("Clipboard not supported");
                return false;
            }
            try {
                await navigator.clipboard.writeText(text);
                setCopiedText(text);
                return true;
            } catch (error) {
                console.warn("Copy failed", error);
                setCopiedText(null);
                return false;
            }
        }
    }["useCopyToClipboard.useCallback[copy]"], []);
    return [
        copiedText,
        copy
    ];
}
function useCounter(initialValue) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue ?? 0);
    const increment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[increment]": ()=>{
            setCount({
                "useCounter.useCallback[increment]": (x)=>x + 1
            }["useCounter.useCallback[increment]"]);
        }
    }["useCounter.useCallback[increment]"], []);
    const decrement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[decrement]": ()=>{
            setCount({
                "useCounter.useCallback[decrement]": (x)=>x - 1
            }["useCounter.useCallback[decrement]"]);
        }
    }["useCounter.useCallback[decrement]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[reset]": ()=>{
            setCount(initialValue ?? 0);
        }
    }["useCounter.useCallback[reset]"], [
        initialValue
    ]);
    return {
        count,
        increment,
        decrement,
        reset,
        setCount
    };
}
function useInterval(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useInterval.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useInterval.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            if (delay === null) {
                return;
            }
            const id = setInterval({
                "useInterval.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useInterval.useEffect.id"], delay);
            return ({
                "useInterval.useEffect": ()=>{
                    clearInterval(id);
                }
            })["useInterval.useEffect"];
        }
    }["useInterval.useEffect"], [
        delay
    ]);
}
// src/useCountdown/useCountdown.ts
function useCountdown({ countStart, countStop = 0, intervalMs = 1e3, isIncrement = false }) {
    const { count, increment, decrement, reset: resetCounter } = useCounter(countStart);
    const { value: isCountdownRunning, setTrue: startCountdown, setFalse: stopCountdown } = useBoolean(false);
    const resetCountdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[resetCountdown]": ()=>{
            stopCountdown();
            resetCounter();
        }
    }["useCountdown.useCallback[resetCountdown]"], [
        stopCountdown,
        resetCounter
    ]);
    const countdownCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[countdownCallback]": ()=>{
            if (count === countStop) {
                stopCountdown();
                return;
            }
            if (isIncrement) {
                increment();
            } else {
                decrement();
            }
        }
    }["useCountdown.useCallback[countdownCallback]"], [
        count,
        countStop,
        decrement,
        increment,
        isIncrement,
        stopCountdown
    ]);
    useInterval(countdownCallback, isCountdownRunning ? intervalMs : null);
    return [
        count,
        {
            startCountdown,
            stopCountdown,
            resetCountdown
        }
    ];
}
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useEventCallback.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEventCallback.useRef[ref]"]);
    useIsomorphicLayoutEffect({
        "useEventCallback.useIsomorphicLayoutEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useIsomorphicLayoutEffect"], [
        fn
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": (...args)=>{
            var _a;
            return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
// src/useLocalStorage/useLocalStorage.ts
var IS_SERVER = typeof window === "undefined";
function useLocalStorage(key, initialValue, options = {}) {
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useLocalStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useLocalStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER) {
                return initialValueToUse;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
                return initialValueToUse;
            }
        }
    }["useLocalStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useLocalStorage.useState"]);
    const setValue = useEventCallback({
        "useLocalStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER) {
                console.warn(`Tried setting localStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.localStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("local-storage", {
                    key
                }));
            } catch (error) {
                console.warn(`Error setting localStorage key \u201C${key}\u201D:`, error);
            }
        }
    }["useLocalStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useLocalStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER) {
                console.warn(`Tried removing localStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.localStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("local-storage", {
                key
            }));
        }
    }["useLocalStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
var IS_SERVER2 = typeof window === "undefined";
function useMediaQuery(query, { defaultValue = false, initializeWithValue = true } = {}) {
    const getMatches = (query2)=>{
        if (IS_SERVER2) {
            return defaultValue;
        }
        return window.matchMedia(query2).matches;
    };
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMediaQuery.useState": ()=>{
            if (initializeWithValue) {
                return getMatches(query);
            }
            return defaultValue;
        }
    }["useMediaQuery.useState"]);
    function handleChange() {
        setMatches(getMatches(query));
    }
    useIsomorphicLayoutEffect({
        "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
            const matchMedia = window.matchMedia(query);
            handleChange();
            if (matchMedia.addListener) {
                matchMedia.addListener(handleChange);
            } else {
                matchMedia.addEventListener("change", handleChange);
            }
            return ({
                "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
                    if (matchMedia.removeListener) {
                        matchMedia.removeListener(handleChange);
                    } else {
                        matchMedia.removeEventListener("change", handleChange);
                    }
                }
            })["useMediaQuery.useIsomorphicLayoutEffect"];
        }
    }["useMediaQuery.useIsomorphicLayoutEffect"], [
        query
    ]);
    return matches;
}
// src/useDarkMode/useDarkMode.ts
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";
function useDarkMode(options = {}) {
    const { defaultValue, localStorageKey = LOCAL_STORAGE_KEY, initializeWithValue = true } = options;
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
        initializeWithValue,
        defaultValue
    });
    const [isDarkMode, setDarkMode] = useLocalStorage(localStorageKey, defaultValue ?? isDarkOS ?? false, {
        initializeWithValue
    });
    useIsomorphicLayoutEffect({
        "useDarkMode.useIsomorphicLayoutEffect": ()=>{
            if (isDarkOS !== isDarkMode) {
                setDarkMode(isDarkOS);
            }
        }
    }["useDarkMode.useIsomorphicLayoutEffect"], [
        isDarkOS
    ]);
    return {
        isDarkMode,
        toggle: ()=>{
            setDarkMode((prev)=>!prev);
        },
        enable: ()=>{
            setDarkMode(true);
        },
        disable: ()=>{
            setDarkMode(false);
        },
        set: (value)=>{
            setDarkMode(value);
        }
    };
}
function useUnmount(func) {
    const funcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(func);
    funcRef.current = func;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmount.useEffect": ()=>({
                "useUnmount.useEffect": ()=>{
                    funcRef.current();
                }
            })["useUnmount.useEffect"]
    }["useUnmount.useEffect"], []);
}
// src/useDebounceCallback/useDebounceCallback.ts
function useDebounceCallback(func, delay = 500, options) {
    const debouncedFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    useUnmount({
        "useDebounceCallback.useUnmount": ()=>{
            if (debouncedFunc.current) {
                debouncedFunc.current.cancel();
            }
        }
    }["useDebounceCallback.useUnmount"]);
    const debounced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDebounceCallback.useMemo[debounced]": ()=>{
            const debouncedFuncInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
            const wrappedFunc = {
                "useDebounceCallback.useMemo[debounced].wrappedFunc": (...args)=>{
                    return debouncedFuncInstance(...args);
                }
            }["useDebounceCallback.useMemo[debounced].wrappedFunc"];
            wrappedFunc.cancel = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    debouncedFuncInstance.cancel();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.isPending = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return !!debouncedFunc.current;
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.flush = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return debouncedFuncInstance.flush();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            return wrappedFunc;
        }
    }["useDebounceCallback.useMemo[debounced]"], [
        func,
        delay,
        options
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounceCallback.useEffect": ()=>{
            debouncedFunc.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
        }
    }["useDebounceCallback.useEffect"], [
        func,
        delay,
        options
    ]);
    return debounced;
}
function useDebounceValue(initialValue, delay, options) {
    const eq = (options == null ? void 0 : options.equalityFn) ?? ((left, right)=>left === right);
    const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(unwrappedInitialValue);
    const previousValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(unwrappedInitialValue);
    const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);
    if (!eq(previousValueRef.current, unwrappedInitialValue)) {
        updateDebouncedValue(unwrappedInitialValue);
        previousValueRef.current = unwrappedInitialValue;
    }
    return [
        debouncedValue,
        updateDebouncedValue
    ];
}
function useDocumentTitle(title, options = {}) {
    const { preserveTitleOnUnmount = true } = options;
    const defaultTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            defaultTitle.current = window.document.title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], []);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            window.document.title = title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], [
        title
    ]);
    useUnmount({
        "useDocumentTitle.useUnmount": ()=>{
            if (!preserveTitleOnUnmount && defaultTitle.current) {
                window.document.title = defaultTitle.current;
            }
        }
    }["useDocumentTitle.useUnmount"]);
}
function useHover(elementRef) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = ()=>{
        setValue(true);
    };
    const handleMouseLeave = ()=>{
        setValue(false);
    };
    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);
    return value;
}
function useIntersectionObserver({ threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false, initialIsIntersecting = false, onChange } = {}) {
    var _a;
    const [ref, setRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useIntersectionObserver.useState": ()=>({
                isIntersecting: initialIsIntersecting,
                entry: void 0
            })
    }["useIntersectionObserver.useState"]);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = onChange;
    const frozen = ((_a = state.entry) == null ? void 0 : _a.isIntersecting) && freezeOnceVisible;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!ref) return;
            if (!("IntersectionObserver" in window)) return;
            if (frozen) return;
            let unobserve;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": (entries)=>{
                    const thresholds = Array.isArray(observer.thresholds) ? observer.thresholds : [
                        observer.thresholds
                    ];
                    entries.forEach({
                        "useIntersectionObserver.useEffect": (entry)=>{
                            const isIntersecting = entry.isIntersecting && thresholds.some({
                                "useIntersectionObserver.useEffect": (threshold2)=>entry.intersectionRatio >= threshold2
                            }["useIntersectionObserver.useEffect"]);
                            setState({
                                isIntersecting,
                                entry
                            });
                            if (callbackRef.current) {
                                callbackRef.current(isIntersecting, entry);
                            }
                            if (isIntersecting && freezeOnceVisible && unobserve) {
                                unobserve();
                                unobserve = void 0;
                            }
                        }
                    }["useIntersectionObserver.useEffect"]);
                }
            }["useIntersectionObserver.useEffect"], {
                threshold,
                root,
                rootMargin
            });
            observer.observe(ref);
            return ({
                "useIntersectionObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify(threshold),
        root,
        rootMargin,
        frozen,
        freezeOnceVisible
    ]);
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            var _a2;
            if (!ref && ((_a2 = state.entry) == null ? void 0 : _a2.target) && !freezeOnceVisible && !frozen && prevRef.current !== state.entry.target) {
                prevRef.current = state.entry.target;
                setState({
                    isIntersecting: initialIsIntersecting,
                    entry: void 0
                });
            }
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        state.entry,
        freezeOnceVisible,
        frozen,
        initialIsIntersecting
    ]);
    const result = [
        setRef,
        !!state.isIntersecting,
        state.entry
    ];
    result.ref = result[0];
    result.isIntersecting = result[1];
    result.entry = result[2];
    return result;
}
function useIsClient() {
    const [isClient, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsClient.useEffect": ()=>{
            setClient(true);
        }
    }["useIsClient.useEffect"], []);
    return isClient;
}
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMounted.useEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useEffect"];
        }
    }["useIsMounted.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useIsMounted.useCallback": ()=>isMounted.current
    }["useIsMounted.useCallback"], []);
}
function useMap(initialState = /* @__PURE__ */ new Map()) {
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map(initialState));
    const actions = {
        set: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key, value)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.set(key, value);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        setAll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (entries)=>{
                setMap({
                    "useMap.useCallback": ()=>new Map(entries)
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        remove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.delete(key);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        reset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": ()=>{
                setMap({
                    "useMap.useCallback": ()=>/* @__PURE__ */ new Map()
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], [])
    };
    return [
        map,
        actions
    ];
}
// src/useOnClickOutside/useOnClickOutside.ts
function useOnClickOutside(ref, handler, eventType = "mousedown", eventListenerOptions = {}) {
    useEventListener(eventType, {
        "useOnClickOutside.useEventListener": (event)=>{
            const target = event.target;
            if (!target || !target.isConnected) {
                return;
            }
            const isOutside = Array.isArray(ref) ? ref.filter({
                "useOnClickOutside.useEventListener": (r)=>Boolean(r.current)
            }["useOnClickOutside.useEventListener"]).every({
                "useOnClickOutside.useEventListener": (r)=>r.current && !r.current.contains(target)
            }["useOnClickOutside.useEventListener"]) : ref.current && !ref.current.contains(target);
            if (isOutside) {
                handler(event);
            }
        }
    }["useOnClickOutside.useEventListener"], void 0, eventListenerOptions);
}
var IS_SERVER3 = typeof window === "undefined";
function useReadLocalStorage(key, options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER3) {
        initializeWithValue = false;
    }
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
            return parsed;
        }
    }["useReadLocalStorage.useCallback[deserializer]"], [
        options
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[readValue]": ()=>{
            if (IS_SERVER3) {
                return null;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : null;
            } catch (error) {
                console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
                return null;
            }
        }
    }["useReadLocalStorage.useCallback[readValue]"], [
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useReadLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return void 0;
        }
    }["useReadLocalStorage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReadLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return storedValue;
}
var initialSize = {
    width: void 0,
    height: void 0
};
function useResizeObserver(options) {
    const { ref, box = "content-box" } = options;
    const [{ width, height }, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSize);
    const isMounted = useIsMounted();
    const previousSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        ...initialSize
    });
    const onResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    onResize.current = options.onResize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!ref.current) return;
            if (typeof window === "undefined" || !("ResizeObserver" in window)) return;
            const observer = new ResizeObserver({
                "useResizeObserver.useEffect": ([entry])=>{
                    const boxProp = box === "border-box" ? "borderBoxSize" : box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
                    const newWidth = extractSize(entry, boxProp, "inlineSize");
                    const newHeight = extractSize(entry, boxProp, "blockSize");
                    const hasChanged = previousSize.current.width !== newWidth || previousSize.current.height !== newHeight;
                    if (hasChanged) {
                        const newSize = {
                            width: newWidth,
                            height: newHeight
                        };
                        previousSize.current.width = newWidth;
                        previousSize.current.height = newHeight;
                        if (onResize.current) {
                            onResize.current(newSize);
                        } else {
                            if (isMounted()) {
                                setSize(newSize);
                            }
                        }
                    }
                }
            }["useResizeObserver.useEffect"]);
            observer.observe(ref.current, {
                box
            });
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        box,
        ref,
        isMounted
    ]);
    return {
        width,
        height
    };
}
function extractSize(entry, box, sizeType) {
    if (!entry[box]) {
        if (box === "contentBoxSize") {
            return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
        }
        return void 0;
    }
    return Array.isArray(entry[box]) ? entry[box][0][sizeType] : // @ts-ignore Support Firefox's non-standard behavior
    entry[box][sizeType];
}
var IS_SERVER4 = typeof window === "undefined";
function useScreen(options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER4) {
        initializeWithValue = false;
    }
    const readScreen = ()=>{
        if (IS_SERVER4) {
            return void 0;
        }
        return window.screen;
    };
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScreen.useState": ()=>{
            if (initializeWithValue) {
                return readScreen();
            }
            return void 0;
        }
    }["useScreen.useState"]);
    const debouncedSetScreen = useDebounceCallback(setScreen, options.debounceDelay);
    function handleSize() {
        const newScreen = readScreen();
        const setSize = options.debounceDelay ? debouncedSetScreen : setScreen;
        if (newScreen) {
            const { width, height, availHeight, availWidth, colorDepth, orientation, pixelDepth } = newScreen;
            setSize({
                width,
                height,
                availHeight,
                availWidth,
                colorDepth,
                orientation,
                pixelDepth
            });
        }
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useScreen.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useScreen.useIsomorphicLayoutEffect"], []);
    return screen;
}
var cachedScriptStatuses = /* @__PURE__ */ new Map();
function getScriptNode(src) {
    const node = document.querySelector(`script[src="${src}"]`);
    const status = node == null ? void 0 : node.getAttribute("data-status");
    return {
        node,
        status
    };
}
function useScript(src, options) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScript.useState": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return "idle";
            }
            if (typeof window === "undefined") {
                return "loading";
            }
            return cachedScriptStatuses.get(src) ?? "loading";
        }
    }["useScript.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScript.useEffect": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return;
            }
            const cachedScriptStatus = cachedScriptStatuses.get(src);
            if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
                setStatus(cachedScriptStatus);
                return;
            }
            const script = getScriptNode(src);
            let scriptNode = script.node;
            if (!scriptNode) {
                scriptNode = document.createElement("script");
                scriptNode.src = src;
                scriptNode.async = true;
                if (options == null ? void 0 : options.id) {
                    scriptNode.id = options.id;
                }
                scriptNode.setAttribute("data-status", "loading");
                document.body.appendChild(scriptNode);
                const setAttributeFromEvent = {
                    "useScript.useEffect.setAttributeFromEvent": (event)=>{
                        const scriptStatus = event.type === "load" ? "ready" : "error";
                        scriptNode == null ? void 0 : scriptNode.setAttribute("data-status", scriptStatus);
                    }
                }["useScript.useEffect.setAttributeFromEvent"];
                scriptNode.addEventListener("load", setAttributeFromEvent);
                scriptNode.addEventListener("error", setAttributeFromEvent);
            } else {
                setStatus(script.status ?? cachedScriptStatus ?? "loading");
            }
            const setStateFromEvent = {
                "useScript.useEffect.setStateFromEvent": (event)=>{
                    const newStatus = event.type === "load" ? "ready" : "error";
                    setStatus(newStatus);
                    cachedScriptStatuses.set(src, newStatus);
                }
            }["useScript.useEffect.setStateFromEvent"];
            scriptNode.addEventListener("load", setStateFromEvent);
            scriptNode.addEventListener("error", setStateFromEvent);
            return ({
                "useScript.useEffect": ()=>{
                    if (scriptNode) {
                        scriptNode.removeEventListener("load", setStateFromEvent);
                        scriptNode.removeEventListener("error", setStateFromEvent);
                    }
                    if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
                        scriptNode.remove();
                        cachedScriptStatuses.delete(src);
                    }
                }
            })["useScript.useEffect"];
        }
    }["useScript.useEffect"], [
        src,
        options == null ? void 0 : options.shouldPreventLoad,
        options == null ? void 0 : options.removeOnUnmount,
        options == null ? void 0 : options.id
    ]);
    return status;
}
var IS_SERVER5 = typeof window === "undefined";
function useScrollLock(options = {}) {
    const { autoLock = true, lockTarget, widthReflow = true } = options;
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lock = ()=>{
        if (target.current) {
            const { overflow, paddingRight } = target.current.style;
            originalStyle.current = {
                overflow,
                paddingRight
            };
            if (widthReflow) {
                const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth;
                const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;
                const scrollbarWidth = offsetWidth - target.current.scrollWidth;
                target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
            }
            target.current.style.overflow = "hidden";
            setIsLocked(true);
        }
    };
    const unlock = ()=>{
        if (target.current && originalStyle.current) {
            target.current.style.overflow = originalStyle.current.overflow;
            if (widthReflow) {
                target.current.style.paddingRight = originalStyle.current.paddingRight;
            }
        }
        setIsLocked(false);
    };
    useIsomorphicLayoutEffect({
        "useScrollLock.useIsomorphicLayoutEffect": ()=>{
            if (IS_SERVER5) return;
            if (lockTarget) {
                target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget;
            }
            if (!target.current) {
                target.current = document.body;
            }
            if (autoLock) {
                lock();
            }
            return ({
                "useScrollLock.useIsomorphicLayoutEffect": ()=>{
                    unlock();
                }
            })["useScrollLock.useIsomorphicLayoutEffect"];
        }
    }["useScrollLock.useIsomorphicLayoutEffect"], [
        autoLock,
        lockTarget,
        widthReflow
    ]);
    return {
        isLocked,
        lock,
        unlock
    };
}
var IS_SERVER6 = typeof window === "undefined";
function useSessionStorage(key, initialValue, options = {}) {
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useSessionStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useSessionStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER6) {
                return initialValueToUse;
            }
            try {
                const raw = window.sessionStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn(`Error reading sessionStorage key \u201C${key}\u201D:`, error);
                return initialValueToUse;
            }
        }
    }["useSessionStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSessionStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useSessionStorage.useState"]);
    const setValue = useEventCallback({
        "useSessionStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER6) {
                console.warn(`Tried setting sessionStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.sessionStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("session-storage", {
                    key
                }));
            } catch (error) {
                console.warn(`Error setting sessionStorage key \u201C${key}\u201D:`, error);
            }
        }
    }["useSessionStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useSessionStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER6) {
                console.warn(`Tried removing sessionStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.sessionStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("session-storage", {
                key
            }));
        }
    }["useSessionStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSessionStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useSessionStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useSessionStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("session-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
function useStep(maxStep) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const canGoToNextStep = currentStep + 1 <= maxStep;
    const canGoToPrevStep = currentStep - 1 > 0;
    const setStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[setStep]": (step)=>{
            const newStep = step instanceof Function ? step(currentStep) : step;
            if (newStep >= 1 && newStep <= maxStep) {
                setCurrentStep(newStep);
                return;
            }
            throw new Error("Step not valid");
        }
    }["useStep.useCallback[setStep]"], [
        maxStep,
        currentStep
    ]);
    const goToNextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToNextStep]": ()=>{
            if (canGoToNextStep) {
                setCurrentStep({
                    "useStep.useCallback[goToNextStep]": (step)=>step + 1
                }["useStep.useCallback[goToNextStep]"]);
            }
        }
    }["useStep.useCallback[goToNextStep]"], [
        canGoToNextStep
    ]);
    const goToPrevStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToPrevStep]": ()=>{
            if (canGoToPrevStep) {
                setCurrentStep({
                    "useStep.useCallback[goToPrevStep]": (step)=>step - 1
                }["useStep.useCallback[goToPrevStep]"]);
            }
        }
    }["useStep.useCallback[goToPrevStep]"], [
        canGoToPrevStep
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[reset]": ()=>{
            setCurrentStep(1);
        }
    }["useStep.useCallback[reset]"], []);
    return [
        currentStep,
        {
            goToNextStep,
            goToPrevStep,
            canGoToNextStep,
            canGoToPrevStep,
            setStep,
            reset
        }
    ];
}
// src/useTernaryDarkMode/useTernaryDarkMode.ts
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode";
function useTernaryDarkMode({ defaultValue = "system", localStorageKey = LOCAL_STORAGE_KEY2, initializeWithValue = true } = {}) {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, {
        initializeWithValue
    });
    const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
        initializeWithValue
    });
    const isDarkMode = mode === "dark" || mode === "system" && isDarkOS;
    const toggleTernaryDarkMode = ()=>{
        const modes = [
            "light",
            "system",
            "dark"
        ];
        setMode((prevMode)=>{
            const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length;
            return modes[nextIndex];
        });
    };
    return {
        isDarkMode,
        ternaryDarkMode: mode,
        setTernaryDarkMode: setMode,
        toggleTernaryDarkMode
    };
}
function useTimeout(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useTimeout.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useTimeout.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            if (!delay && delay !== 0) {
                return;
            }
            const id = setTimeout({
                "useTimeout.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useTimeout.useEffect.id"], delay);
            return ({
                "useTimeout.useEffect": ()=>{
                    clearTimeout(id);
                }
            })["useTimeout.useEffect"];
        }
    }["useTimeout.useEffect"], [
        delay
    ]);
}
function useToggle(defaultValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!defaultValue);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToggle.useCallback[toggle]": ()=>{
            setValue({
                "useToggle.useCallback[toggle]": (x)=>!x
            }["useToggle.useCallback[toggle]"]);
        }
    }["useToggle.useCallback[toggle]"], []);
    return [
        value,
        toggle,
        setValue
    ];
}
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize(options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER7) {
        initializeWithValue = false;
    }
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWindowSize.useState": ()=>{
            if (initializeWithValue) {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
            return {
                width: void 0,
                height: void 0
            };
        }
    }["useWindowSize.useState"]);
    const debouncedSetWindowSize = useDebounceCallback(setWindowSize, options.debounceDelay);
    function handleSize() {
        const setSize = options.debounceDelay ? debouncedSetWindowSize : setWindowSize;
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useWindowSize.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useWindowSize.useIsomorphicLayoutEffect"], []);
    return windowSize;
}
;
}),
]);

//# sourceMappingURL=Documents_Pets_ambilux_frontend_6aa980e0._.js.map