(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/optimized-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptimizedImage",
    ()=>OptimizedImage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Tiny blur placeholder - dark gray base64
const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIDBAAFERITITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aw3T7GoV7cMttIpYUkVpERiVLAHcBiO2cb9/MXU9W1C7qFyxJdnaSaVpGYyNuSxJJ/TjGMZJLDozdj//Z";
function OptimizedImage({ src, alt, className, containerClassName, fill, width, height, sizes, priority = false, ...props }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OptimizedImage.useCallback[handleLoad]": ()=>{
            setIsLoaded(true);
        }
    }["OptimizedImage.useCallback[handleLoad]"], []);
    const handleError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OptimizedImage.useCallback[handleError]": ()=>{
            setHasError(true);
            setIsLoaded(true);
        }
    }["OptimizedImage.useCallback[handleError]"], []);
    // Fallback for broken images
    const imageSrc = hasError ? "/placeholder.svg" : src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("thumbnail-container relative overflow-hidden", !isLoaded && "img-loading", containerClassName),
        style: fill ? {
            width: '100%',
            height: '100%'
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: alt,
            fill: fill,
            width: !fill ? width : undefined,
            height: !fill ? height : undefined,
            sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gpu-accelerate transition-opacity duration-300", isLoaded ? "img-loaded opacity-100" : "opacity-0", className),
            onLoad: handleLoad,
            onError: handleError,
            loading: priority ? "eager" : "lazy",
            placeholder: "blur",
            blurDataURL: BLUR_PLACEHOLDER,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/optimized-image.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/optimized-image.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(OptimizedImage, "iP3JG6lC/falwxxfNyEk5AMNVAA=");
_c = OptimizedImage;
const __TURBOPACK__default__export__ = OptimizedImage;
var _c;
__turbopack_context__.k.register(_c, "OptimizedImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/library-content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMICS_API_BASE",
    ()=>COMICS_API_BASE,
    "allLibraryMagazines",
    ()=>allLibraryMagazines,
    "batmanComics",
    ()=>batmanComics,
    "comicSeriesCategories",
    ()=>comicSeriesCategories,
    "donaldDuckComics",
    ()=>donaldDuckComics,
    "getComicsByGenre",
    ()=>getComicsByGenre,
    "getComicsBySeries",
    ()=>getComicsBySeries,
    "getLibraryMagazineBySlug",
    ()=>getLibraryMagazineBySlug,
    "libraryMagazines",
    ()=>libraryMagazines,
    "mickeyMouseComics",
    ()=>mickeyMouseComics
]);
const COMICS_API_BASE = "https://api.ameora.fun";
// Helper function to get ebook thumbnails (cycling through 85 images)
function getEbookThumbnail(index) {
    const i = (index - 1) % 85 + 1 // Cycle through 1-85
    ;
    return `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/${i}.png`;
}
// Helper function to get Batman comic URLs
function getBatmanComic(index) {
    const i = (index - 1) % 50 + 1 // Cycle through 1-50
    ;
    // Batman images are from ebook212pxx256px/1.png to 50.png (50 images)
    const imageIndex = i // 1-50
    ;
    return {
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/${imageIndex}.png`,
        pdfFile: `${COMICS_API_BASE}/content/comics/batman/bmp${i}/bms${i}.pdf`
    };
}
// Helper function to get Donald Duck comic URLs
function getDonaldDuckComic(index) {
    const i = (index - 1) % 10 + 1 // Cycle through 1-10
    ;
    // Donald Duck images are from ebook212pxx256px/52.png to 61.png (10 images)
    const imageIndex = 51 + i // 52-61
    ;
    return {
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/${imageIndex}.png`,
        pdfFile: `${COMICS_API_BASE}/content/comics/donald_duck/ddp${i}/dds${i}.pdf`
    };
}
// Helper function to get Mickey Mouse comic URLs
function getMickeyMouseComic(index) {
    const i = (index - 1) % 18 + 1 // Cycle through 1-18
    ;
    // Mickey Mouse images are from ebook212pxx256px/68.png to 85.png (18 images)
    const imageIndex = 67 + i // 68-85
    ;
    return {
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/${imageIndex}.png`,
        pdfFile: `${COMICS_API_BASE}/content/comics/mickey_mouse/mmp${i}/mms${i}.pdf`
    };
}
const batmanComics = Array.from({
    length: 50
}, (_, i)=>{
    const comic = getBatmanComic(i + 1);
    return {
        id: 1000 + i + 1,
        slug: `batman-${i + 1}`,
        title: `باتمان - الحلقة ${i + 1}`,
        rating: Number((4.5 + i % 5 * 0.1).toFixed(1)),
        views: `${300 + i * 10}K`,
        downloads: `${100 + i * 5}K`,
        image: comic.image,
        genre: "باتمان",
        rank: i + 1,
        shortDescription: `مغامرات الفارس المظلم - الحلقة ${i + 1}`,
        fullDescription: `استمتع بمغامرات باتمان المثيرة في مدينة جوثام. الفارس المظلم يواجه أعداءه في معارك ملحمية. حلقة ${i + 1} مليئة بالإثارة والتشويق.`,
        readers: `${300 + i * 10}K`,
        subscribers: `${200 + i * 5}K`,
        parts: 10 + i % 10,
        pdfFile: comic.pdfFile,
        series: "batman"
    };
});
const donaldDuckComics = Array.from({
    length: 10
}, (_, i)=>{
    const comic = getDonaldDuckComic(i + 1);
    return {
        id: 2000 + i + 1,
        slug: `donald-duck-${i + 1}`,
        title: `بطوط - الحلقة ${i + 1}`,
        rating: Number((4.3 + i % 5 * 0.1).toFixed(1)),
        views: `${200 + i * 20}K`,
        downloads: `${80 + i * 10}K`,
        image: comic.image,
        genre: "بطوط",
        rank: i + 1,
        shortDescription: `مغامرات بطوط الكوميدية - الحلقة ${i + 1}`,
        fullDescription: `انضم إلى بطوط في مغامراته الكوميدية المضحكة مع أبناء أخيه حظوظ وفظوظ ولظوظ. حلقة ${i + 1} مليئة بالمرح.`,
        readers: `${200 + i * 20}K`,
        subscribers: `${150 + i * 10}K`,
        parts: 6 + i % 6,
        pdfFile: comic.pdfFile,
        series: "donald_duck"
    };
});
const mickeyMouseComics = Array.from({
    length: 18
}, (_, i)=>{
    const comic = getMickeyMouseComic(i + 1);
    return {
        id: 3000 + i + 1,
        slug: `mickey-mouse-${i + 1}`,
        title: `ميكي ماوس - الحلقة ${i + 1}`,
        rating: Number((4.4 + i % 5 * 0.1).toFixed(1)),
        views: `${250 + i * 15}K`,
        downloads: `${90 + i * 8}K`,
        image: comic.image,
        genre: "ميكي ماوس",
        rank: i + 1,
        shortDescription: `مغامرات ميكي ماوس - الحلقة ${i + 1}`,
        fullDescription: `انطلق مع ميكي ماوس في مغامرة جديدة مليئة بالمرح والإثارة مع أصدقائه. حلقة ${i + 1} ممتعة للجميع.`,
        readers: `${250 + i * 15}K`,
        subscribers: `${180 + i * 8}K`,
        parts: 7 + i % 7,
        pdfFile: comic.pdfFile,
        series: "mickey_mouse"
    };
});
const libraryMagazines = [
    // Superhero/خارقة genre - mapped to Batman comics
    {
        id: 1,
        slug: "ملحمة-اللانهاية",
        title: "ملحمة اللانهاية",
        rating: 4.9,
        views: "2.4M",
        downloads: "856K",
        ...getBatmanComic(1),
        genre: "خارقة",
        rank: 1,
        shortDescription: "المعركة النهائية عبر الحقائق اللانهائية",
        fullDescription: "في هذه الملحمة الكبرى، يواجه أبطال الأكوان المتعددة تهديدًا كونيًا يمحو العوالم واحدًا تلو الآخر.",
        readers: "2.4M",
        subscribers: "2.4M",
        parts: 18,
        series: "batman"
    },
    {
        id: 2,
        slug: "الأساطير-الكونية",
        title: "الأساطير الكونية",
        rating: 4.8,
        views: "1.9M",
        downloads: "623K",
        ...getBatmanComic(2),
        genre: "خيال علمي",
        rank: 2,
        shortDescription: "مغامرات فضائية ملحمية تتجاوز الخيال",
        fullDescription: "رحلة بين النجوم تتابع طاقم سفينة استكشافية يكتشفون حضارات مفقودة وقوى قديمة.",
        readers: "1.9M",
        subscribers: "1.8M",
        parts: 12,
        series: "batman"
    },
    {
        id: 3,
        slug: "سجلات-عالم-الظل",
        title: "سجلات عالم الظل",
        rating: 4.8,
        views: "1.7M",
        downloads: "589K",
        ...getBatmanComic(3),
        genre: "خيالي",
        rank: 3,
        shortDescription: "تتكشف السحر الأسود والأسرار القديمة",
        fullDescription: "بين ممالك الضوء والظلام، يقف حارس أخير يحاول منع اندلاع حرب سحرية.",
        readers: "1.7M",
        subscribers: "1.5M",
        parts: 20,
        series: "batman"
    },
    {
        id: 4,
        slug: "محاربي-النيون",
        title: "محاربي النيون",
        rating: 4.7,
        views: "1.5M",
        downloads: "445K",
        ...getBatmanComic(4),
        genre: "السايبربانك",
        rank: 4,
        shortDescription: "معارك التكنولوجيا الفائقة في مستقبل بائس",
        fullDescription: "في مدينة تغمرها الأضواء النيونية والشبكات العصبية، يقاتل محاربو الظل.",
        readers: "1.5M",
        subscribers: "1.3M",
        parts: 10,
        series: "batman"
    },
    {
        id: 5,
        slug: "حراس-الوقت",
        title: "حراس الوقت",
        rating: 4.7,
        views: "1.3M",
        downloads: "412K",
        ...getBatmanComic(5),
        genre: "خارقة",
        rank: 5,
        shortDescription: "السفر عبر الزمن والمعارك الكونية",
        fullDescription: "فريق من الأبطال يسافر عبر الزمن لمنع كوارث كونية تهدد الوجود نفسه.",
        readers: "1.3M",
        subscribers: "1.1M",
        parts: 15,
        series: "batman"
    },
    {
        id: 6,
        slug: "أساطير-المجرة",
        title: "أساطير المجرة",
        rating: 4.6,
        views: "1.2M",
        downloads: "378K",
        ...getBatmanComic(6),
        genre: "خيال علمي",
        rank: 6,
        shortDescription: "مغامرات فضائية بين النجوم",
        fullDescription: "استكشاف أعماق الفضاء والمواجهة مع حضارات غريبة في رحلة ملحمية.",
        readers: "1.2M",
        subscribers: "1.0M",
        parts: 14,
        series: "batman"
    },
    {
        id: 7,
        slug: "الفارس-الأسود",
        title: "الفارس الأسود",
        rating: 4.6,
        views: "1.1M",
        downloads: "345K",
        ...getBatmanComic(7),
        genre: "خارقة",
        rank: 7,
        shortDescription: "حارس الظلام يحمي المدينة",
        fullDescription: "بطل مقنع يخوض معاركه في الظلام ضد قوى الشر التي تهدد المدينة.",
        readers: "1.1M",
        subscribers: "950K",
        parts: 16,
        series: "batman"
    },
    {
        id: 8,
        slug: "عاصفة-الرعد",
        title: "عاصفة الرعد",
        rating: 4.5,
        views: "980K",
        downloads: "312K",
        ...getBatmanComic(8),
        genre: "خارقة",
        rank: 8,
        shortDescription: "قوة البرق تحمي الأبرياء",
        fullDescription: "بطل يمتلك قوة الصواعق يستخدم قدراته لحماية العالم من التهديدات.",
        readers: "980K",
        subscribers: "850K",
        parts: 12,
        series: "batman"
    },
    {
        id: 9,
        slug: "حارس-الليل",
        title: "حارس الليل",
        rating: 4.5,
        views: "920K",
        downloads: "298K",
        ...getBatmanComic(9),
        genre: "خارقة",
        rank: 9,
        shortDescription: "المنتقم في الظلام",
        fullDescription: "محارب يعمل في الظل لمحاربة الجريمة وحماية الضعفاء.",
        readers: "920K",
        subscribers: "800K",
        parts: 11,
        series: "batman"
    },
    {
        id: 10,
        slug: "الصقر-الذهبي",
        title: "الصقر الذهبي",
        rating: 4.4,
        views: "870K",
        downloads: "276K",
        ...getBatmanComic(10),
        genre: "خارقة",
        rank: 10,
        shortDescription: "بطل يحلق في السماء",
        fullDescription: "محارب مجنح يدافع عن العدالة من السماء بقوى خارقة.",
        readers: "870K",
        subscribers: "750K",
        parts: 13,
        series: "batman"
    },
    // Mickey Mouse genre magazines
    {
        id: 11,
        slug: "مغامرات-ميكي",
        title: "مغامرات ميكي",
        rating: 4.8,
        views: "1.5M",
        downloads: "520K",
        ...getMickeyMouseComic(1),
        genre: "ميكي ماوس",
        rank: 11,
        shortDescription: "مغامرات ميكي ماوس الممتعة",
        fullDescription: "انضم إلى ميكي ماوس في مغامراته الشيقة مع أصدقائه في عالم مليء بالمرح.",
        readers: "1.5M",
        subscribers: "1.2M",
        parts: 15,
        series: "mickey_mouse"
    },
    {
        id: 12,
        slug: "ميكي-والأصدقاء",
        title: "ميكي والأصدقاء",
        rating: 4.7,
        views: "1.3M",
        downloads: "450K",
        ...getMickeyMouseComic(2),
        genre: "ميكي ماوس",
        rank: 12,
        shortDescription: "ميكي وأصدقاؤه في مغامرات جديدة",
        fullDescription: "ميكي وميني وجوفي وبلوتو في مغامرات مثيرة ومضحكة.",
        readers: "1.3M",
        subscribers: "1.1M",
        parts: 12,
        series: "mickey_mouse"
    },
    {
        id: 13,
        slug: "عالم-ميكي-السحري",
        title: "عالم ميكي السحري",
        rating: 4.6,
        views: "1.1M",
        downloads: "380K",
        ...getMickeyMouseComic(3),
        genre: "ميكي ماوس",
        rank: 13,
        shortDescription: "ميكي في عالم السحر",
        fullDescription: "ميكي يكتشف عالمًا سحريًا مليئًا بالمفاجآت والمغامرات.",
        readers: "1.1M",
        subscribers: "950K",
        parts: 10,
        series: "mickey_mouse"
    },
    // Donald Duck genre magazines
    {
        id: 14,
        slug: "مغامرات-بطوط",
        title: "مغامرات بطوط",
        rating: 4.7,
        views: "1.4M",
        downloads: "480K",
        ...getDonaldDuckComic(1),
        genre: "بطوط",
        rank: 14,
        shortDescription: "مغامرات بطوط الكوميدية",
        fullDescription: "بطوط في مغامرات مضحكة مع عائلته وأصدقائه في قصص مليئة بالمرح.",
        readers: "1.4M",
        subscribers: "1.2M",
        parts: 14,
        series: "donald_duck"
    },
    {
        id: 15,
        slug: "بطوط-والكنز",
        title: "بطوط والكنز",
        rating: 4.6,
        views: "1.2M",
        downloads: "410K",
        ...getDonaldDuckComic(2),
        genre: "بطوط",
        rank: 15,
        shortDescription: "بطوط يبحث عن الكنز",
        fullDescription: "بطوط وأبناء أخيه في رحلة بحث عن كنز قديم مخبأ.",
        readers: "1.2M",
        subscribers: "1.0M",
        parts: 11,
        series: "donald_duck"
    },
    {
        id: 16,
        slug: "عم-دهب-والثروة",
        title: "عم دهب والثروة",
        rating: 4.5,
        views: "1.0M",
        downloads: "350K",
        ...getDonaldDuckComic(3),
        genre: "بطوط",
        rank: 16,
        shortDescription: "مغامرات عم دهب",
        fullDescription: "عم دهب في مغامرات للحفاظ على ثروته من اللصوص.",
        readers: "1.0M",
        subscribers: "850K",
        parts: 9,
        series: "donald_duck"
    },
    // Action/فعل genre - mapped to Batman
    {
        id: 17,
        slug: "المحاربين-العنصريين",
        title: "المحاربين العنصريين",
        rating: 4.4,
        views: "460K",
        downloads: "180K",
        ...getBatmanComic(11),
        genre: "فعل",
        rank: 17,
        shortDescription: "أسياد النار والماء والأرض والهواء يتحدون",
        fullDescription: "محاربون يتحكمون بالعناصر الأربعة يتحدون لمواجهة تهديد كوني.",
        readers: "460K",
        subscribers: "380K",
        parts: 12,
        series: "batman"
    },
    {
        id: 18,
        slug: "المحارب-الوحيد",
        title: "المحارب الوحيد",
        rating: 4.7,
        views: "680K",
        downloads: "250K",
        ...getBatmanComic(12),
        genre: "فعل",
        rank: 18,
        shortDescription: "محارب وحيد ضد الجيش",
        fullDescription: "محارب وحيد يواجه جيشًا كاملًا لحماية قريته من الدمار.",
        readers: "680K",
        subscribers: "550K",
        parts: 15,
        series: "batman"
    },
    {
        id: 19,
        slug: "معركة-الأبطال",
        title: "معركة الأبطال",
        rating: 4.6,
        views: "620K",
        downloads: "230K",
        ...getBatmanComic(13),
        genre: "فعل",
        rank: 19,
        shortDescription: "معركة ملحمية بين الأبطال",
        fullDescription: "أبطال من عوالم مختلفة يلتقون في معركة ملحمية.",
        readers: "620K",
        subscribers: "500K",
        parts: 14,
        series: "batman"
    },
    // Romance/الرومانسية genre - mapped to Mickey Mouse
    {
        id: 20,
        slug: "حب-في-زمن-الحرب",
        title: "حب في زمن الحرب",
        rating: 4.6,
        views: "420K",
        downloads: "180K",
        ...getMickeyMouseComic(4),
        genre: "الرومانسية",
        rank: 20,
        shortDescription: "قصة حب ملحمية في خضم الحرب",
        fullDescription: "قصة حب مؤثرة تتحدى كل الصعاب في أوقات الحرب.",
        readers: "420K",
        subscribers: "300K",
        parts: 12,
        series: "mickey_mouse"
    },
    {
        id: 21,
        slug: "قلوب-متحدة",
        title: "قلوب متحدة",
        rating: 4.5,
        views: "380K",
        downloads: "160K",
        ...getMickeyMouseComic(5),
        genre: "الرومانسية",
        rank: 21,
        shortDescription: "قصة حب تتحدى كل الصعاب",
        fullDescription: "قصة حب رومانسية بين شخصين من خلفيات مختلفة.",
        readers: "380K",
        subscribers: "280K",
        parts: 10,
        series: "mickey_mouse"
    },
    {
        id: 22,
        slug: "عاشق-الليل",
        title: "عاشق الليل",
        rating: 4.4,
        views: "350K",
        downloads: "150K",
        ...getMickeyMouseComic(6),
        genre: "الرومانسية",
        rank: 22,
        shortDescription: "قصة حب غامضة في المدينة",
        fullDescription: "قصة حب مثيرة بين محقق ومشتبه بها في قضية غامضة.",
        readers: "350K",
        subscribers: "250K",
        parts: 8,
        series: "mickey_mouse"
    },
    // Horror/رعب genre - mapped to Batman
    {
        id: 23,
        slug: "ليالي-الرعب",
        title: "ليالي الرعب",
        rating: 4.5,
        views: "520K",
        downloads: "200K",
        ...getBatmanComic(14),
        genre: "رعب",
        rank: 23,
        shortDescription: "حكايات مرعبة في الظلام",
        fullDescription: "مجموعة من القصص المرعبة التي ستجعلك تخاف من الظلام.",
        readers: "520K",
        subscribers: "420K",
        parts: 10,
        series: "batman"
    },
    {
        id: 24,
        slug: "لعنة-القصر",
        title: "لعنة القصر",
        rating: 4.4,
        views: "480K",
        downloads: "185K",
        ...getBatmanComic(15),
        genre: "رعب",
        rank: 24,
        shortDescription: "أسرار مظلمة في قصر مسكون",
        fullDescription: "عائلة تنتقل إلى قصر قديم لتكتشف لعنة قديمة.",
        readers: "480K",
        subscribers: "380K",
        parts: 11,
        series: "batman"
    },
    {
        id: 25,
        slug: "الشبح-الأسود",
        title: "الشبح الأسود",
        rating: 4.3,
        views: "440K",
        downloads: "170K",
        ...getBatmanComic(16),
        genre: "رعب",
        rank: 25,
        shortDescription: "شبح ينتقم من الأحياء",
        fullDescription: "شبح يطارد من ظلمه في حياته السابقة.",
        readers: "440K",
        subscribers: "350K",
        parts: 9,
        series: "batman"
    },
    // Fantasy/خيالي genre - mapped to Donald Duck
    {
        id: 26,
        slug: "أكاديمية-ميستيك",
        title: "أكاديمية ميستيك",
        rating: 4.7,
        views: "890K",
        downloads: "320K",
        ...getDonaldDuckComic(4),
        genre: "خيالي",
        rank: 26,
        shortDescription: "مدرسة للسحر والمغامرات",
        fullDescription: "طالب يكتشف قدراته السحرية في أكاديمية للسحرة.",
        readers: "890K",
        subscribers: "720K",
        parts: 16,
        series: "donald_duck"
    },
    {
        id: 27,
        slug: "ممالك-الخيال",
        title: "ممالك الخيال",
        rating: 4.6,
        views: "820K",
        downloads: "290K",
        ...getDonaldDuckComic(5),
        genre: "خيالي",
        rank: 27,
        shortDescription: "عوالم سحرية لا حدود لها",
        fullDescription: "رحلة عبر ممالك سحرية مليئة بالمخلوقات الأسطورية.",
        readers: "820K",
        subscribers: "660K",
        parts: 14,
        series: "donald_duck"
    },
    {
        id: 28,
        slug: "التنين-الأخير",
        title: "التنين الأخير",
        rating: 4.5,
        views: "760K",
        downloads: "265K",
        ...getDonaldDuckComic(6),
        genre: "خيالي",
        rank: 28,
        shortDescription: "آخر تنين وفارسه",
        fullDescription: "صبي يكتشف آخر تنين في العالم ويصبح فارسه.",
        readers: "760K",
        subscribers: "610K",
        parts: 13,
        series: "donald_duck"
    },
    // Sci-Fi/خيال علمي genre - mapped to Batman
    {
        id: 29,
        slug: "حروب-الفضاء",
        title: "حروب الفضاء",
        rating: 4.6,
        views: "780K",
        downloads: "280K",
        ...getBatmanComic(17),
        genre: "خيال علمي",
        rank: 29,
        shortDescription: "معارك بين الكواكب",
        fullDescription: "حرب كونية بين إمبراطوريات فضائية متناحرة.",
        readers: "780K",
        subscribers: "630K",
        parts: 15,
        series: "batman"
    },
    {
        id: 30,
        slug: "الروبوت-المتمرد",
        title: "الروبوت المتمرد",
        rating: 4.5,
        views: "720K",
        downloads: "255K",
        ...getBatmanComic(18),
        genre: "خيال علمي",
        rank: 30,
        shortDescription: "آلة تبحث عن إنسانيتها",
        fullDescription: "روبوت يكتسب الوعي ويبدأ رحلة البحث عن معنى الحياة.",
        readers: "720K",
        subscribers: "580K",
        parts: 12,
        series: "batman"
    },
    {
        id: 31,
        slug: "المستقبل-البعيد",
        title: "المستقبل البعيد",
        rating: 4.4,
        views: "680K",
        downloads: "235K",
        ...getBatmanComic(19),
        genre: "خيال علمي",
        rank: 31,
        shortDescription: "رؤية للمستقبل البعيد",
        fullDescription: "كيف سيبدو العالم بعد ألف سنة من الآن.",
        readers: "680K",
        subscribers: "540K",
        parts: 11,
        series: "batman"
    },
    // Historical/تاريخية genre - mapped to Mickey Mouse
    {
        id: 32,
        slug: "فارس-القرون",
        title: "فارس القرون",
        rating: 4.5,
        views: "560K",
        downloads: "210K",
        ...getMickeyMouseComic(7),
        genre: "تاريخية",
        rank: 32,
        shortDescription: "بطل من العصور الوسطى",
        fullDescription: "فارس نبيل يدافع عن المملكة ضد الغزاة.",
        readers: "560K",
        subscribers: "450K",
        parts: 13,
        series: "mickey_mouse"
    },
    {
        id: 33,
        slug: "أساطير-الفراعنة",
        title: "أساطير الفراعنة",
        rating: 4.4,
        views: "520K",
        downloads: "195K",
        ...getMickeyMouseComic(8),
        genre: "تاريخية",
        rank: 33,
        shortDescription: "أسرار مصر القديمة",
        fullDescription: "اكتشاف أسرار الفراعنة ولعناتهم القديمة.",
        readers: "520K",
        subscribers: "420K",
        parts: 11,
        series: "mickey_mouse"
    },
    {
        id: 34,
        slug: "محاربي-الساموراي",
        title: "محاربي الساموراي",
        rating: 4.3,
        views: "480K",
        downloads: "180K",
        ...getMickeyMouseComic(9),
        genre: "تاريخية",
        rank: 34,
        shortDescription: "شرف المحاربين اليابانيين",
        fullDescription: "قصة ساموراي يسعى لاستعادة شرفه المفقود.",
        readers: "480K",
        subscribers: "380K",
        parts: 10,
        series: "mickey_mouse"
    },
    // Cyberpunk/السايبربانك genre - mapped to Batman
    {
        id: 35,
        slug: "مدينة-النيون",
        title: "مدينة النيون",
        rating: 4.6,
        views: "640K",
        downloads: "240K",
        ...getBatmanComic(20),
        genre: "السايبربانك",
        rank: 35,
        shortDescription: "مستقبل مظلم ومشرق",
        fullDescription: "في مدينة تغمرها أضواء النيون، يكافح أبطال من أجل الحرية.",
        readers: "640K",
        subscribers: "520K",
        parts: 14,
        series: "batman"
    },
    {
        id: 36,
        slug: "قراصنة-الشبكة",
        title: "قراصنة الشبكة",
        rating: 4.5,
        views: "600K",
        downloads: "220K",
        ...getBatmanComic(21),
        genre: "السايبربانك",
        rank: 36,
        shortDescription: "هاكرز ضد النظام",
        fullDescription: "مجموعة من القراصنة الإلكترونيين يحاربون شركات فاسدة.",
        readers: "600K",
        subscribers: "480K",
        parts: 12,
        series: "batman"
    },
    // More superhero magazines
    {
        id: 37,
        slug: "فريق-العدالة",
        title: "فريق العدالة",
        rating: 4.7,
        views: "1.0M",
        downloads: "380K",
        ...getBatmanComic(22),
        genre: "خارقة",
        rank: 37,
        shortDescription: "أبطال متحدون لإنقاذ العالم",
        fullDescription: "فريق من أقوى الأبطال يتحدون لمواجهة التهديدات الكونية.",
        readers: "1.0M",
        subscribers: "850K",
        parts: 18,
        series: "batman"
    },
    {
        id: 38,
        slug: "الرجل-الحديدي",
        title: "الرجل الحديدي",
        rating: 4.6,
        views: "920K",
        downloads: "340K",
        ...getBatmanComic(23),
        genre: "خارقة",
        rank: 38,
        shortDescription: "عبقري في درع حديدي",
        fullDescription: "مخترع عبقري يصنع درعًا تكنولوجيًا لمحاربة الشر.",
        readers: "920K",
        subscribers: "780K",
        parts: 16,
        series: "batman"
    },
    {
        id: 39,
        slug: "العنكبوت-الخارق",
        title: "العنكبوت الخارق",
        rating: 4.8,
        views: "1.2M",
        downloads: "450K",
        ...getBatmanComic(24),
        genre: "خارقة",
        rank: 39,
        shortDescription: "بطل الحي الودود",
        fullDescription: "شاب يكتسب قوى العنكبوت ويصبح بطلاً خارقًا.",
        readers: "1.2M",
        subscribers: "1.0M",
        parts: 20,
        series: "batman"
    },
    {
        id: 40,
        slug: "المرأة-الخارقة",
        title: "المرأة الخارقة",
        rating: 4.7,
        views: "1.1M",
        downloads: "410K",
        ...getBatmanComic(25),
        genre: "خارقة",
        rank: 40,
        shortDescription: "أميرة محاربة",
        fullDescription: "أميرة من جزيرة خفية تصبح بطلة خارقة.",
        readers: "1.1M",
        subscribers: "920K",
        parts: 17,
        series: "batman"
    },
    // More action magazines
    {
        id: 41,
        slug: "النينجا-الأخير",
        title: "النينجا الأخير",
        rating: 4.5,
        views: "580K",
        downloads: "215K",
        ...getBatmanComic(26),
        genre: "فعل",
        rank: 41,
        shortDescription: "آخر محارب من عشيرته",
        fullDescription: "نينجا وحيد يسعى للانتقام من قتلة عشيرته.",
        readers: "580K",
        subscribers: "470K",
        parts: 13,
        series: "batman"
    },
    {
        id: 42,
        slug: "قبضة-الحديد",
        title: "قبضة الحديد",
        rating: 4.4,
        views: "540K",
        downloads: "200K",
        ...getBatmanComic(27),
        genre: "فعل",
        rank: 42,
        shortDescription: "فنون قتالية خارقة",
        fullDescription: "محارب يتقن فنونًا قتالية قديمة ويستخدمها للعدالة.",
        readers: "540K",
        subscribers: "430K",
        parts: 11,
        series: "batman"
    },
    // More Mickey Mouse
    {
        id: 43,
        slug: "ميكي-المحقق",
        title: "ميكي المحقق",
        rating: 4.6,
        views: "950K",
        downloads: "350K",
        ...getMickeyMouseComic(10),
        genre: "ميكي ماوس",
        rank: 43,
        shortDescription: "ميكي يحل الألغاز",
        fullDescription: "ميكي ماوس يتحول إلى محقق ويحل ألغاز صعبة.",
        readers: "950K",
        subscribers: "800K",
        parts: 14,
        series: "mickey_mouse"
    },
    {
        id: 44,
        slug: "ميكي-في-الفضاء",
        title: "ميكي في الفضاء",
        rating: 4.5,
        views: "880K",
        downloads: "320K",
        ...getMickeyMouseComic(11),
        genre: "ميكي ماوس",
        rank: 44,
        shortDescription: "مغامرات ميكي الفضائية",
        fullDescription: "ميكي يسافر إلى الفضاء في مغامرة مثيرة.",
        readers: "880K",
        subscribers: "740K",
        parts: 12,
        series: "mickey_mouse"
    },
    // More Donald Duck
    {
        id: 45,
        slug: "بطوط-السباق",
        title: "بطوط السباق",
        rating: 4.5,
        views: "820K",
        downloads: "300K",
        ...getDonaldDuckComic(7),
        genre: "بطوط",
        rank: 45,
        shortDescription: "بطوط في سباقات مثيرة",
        fullDescription: "بطوط يدخل سباقات سيارات مليئة بالمفاجآت.",
        readers: "820K",
        subscribers: "680K",
        parts: 10,
        series: "donald_duck"
    },
    {
        id: 46,
        slug: "بطوط-الساحر",
        title: "بطوط الساحر",
        rating: 4.4,
        views: "760K",
        downloads: "275K",
        ...getDonaldDuckComic(8),
        genre: "بطوط",
        rank: 46,
        shortDescription: "بطوط يتعلم السحر",
        fullDescription: "بطوط يحصل على عصا سحرية ويتسبب في فوضى.",
        readers: "760K",
        subscribers: "620K",
        parts: 9,
        series: "donald_duck"
    },
    // Additional magazines for variety - mapped to remaining Batman comics
    {
        id: 47,
        slug: "أبطال-الظل",
        title: "أبطال الظل",
        rating: 4.6,
        views: "720K",
        downloads: "260K",
        ...getBatmanComic(28),
        genre: "خارقة",
        rank: 47,
        shortDescription: "أبطال يعملون في الخفاء",
        fullDescription: "فريق سري من الأبطال يحمي العالم من التهديدات الخفية.",
        readers: "720K",
        subscribers: "590K",
        parts: 14,
        series: "batman"
    },
    {
        id: 48,
        slug: "الساحر-الأعظم",
        title: "الساحر الأعظم",
        rating: 4.5,
        views: "680K",
        downloads: "245K",
        ...getBatmanComic(29),
        genre: "خيالي",
        rank: 48,
        shortDescription: "أقوى ساحر في العالم",
        fullDescription: "ساحر عظيم يحمي العالم من التهديدات السحرية.",
        readers: "680K",
        subscribers: "550K",
        parts: 15,
        series: "batman"
    },
    {
        id: 49,
        slug: "محاربو-الكواكب",
        title: "محاربو الكواكب",
        rating: 4.4,
        views: "640K",
        downloads: "230K",
        ...getBatmanComic(30),
        genre: "خيال علمي",
        rank: 49,
        shortDescription: "دفاع عن المجرة",
        fullDescription: "فريق من المحاربين يدافعون عن الكواكب من الغزو.",
        readers: "640K",
        subscribers: "510K",
        parts: 13,
        series: "batman"
    },
    {
        id: 50,
        slug: "أسطورة-الفينيق",
        title: "أسطورة الفينيق",
        rating: 4.7,
        views: "880K",
        downloads: "320K",
        ...getBatmanComic(31),
        genre: "خيالي",
        rank: 50,
        shortDescription: "طائر النار الأسطوري",
        fullDescription: "محارب يحمل روح الفينيق ويقاتل قوى الظلام.",
        readers: "880K",
        subscribers: "720K",
        parts: 16,
        series: "batman"
    }
];
const allLibraryMagazines = [
    ...libraryMagazines,
    ...batmanComics,
    ...donaldDuckComics,
    ...mickeyMouseComics
];
function getLibraryMagazineBySlug(slug) {
    const decoded = decodeURIComponent(slug);
    // Try multiple matching strategies to be robust against encoding / slug differences
    return allLibraryMagazines.find((m)=>m.slug === slug) || allLibraryMagazines.find((m)=>m.slug === decoded) || allLibraryMagazines.find((m)=>encodeURIComponent(m.slug) === slug) || allLibraryMagazines.find((m)=>m.title === decoded || m.title === slug);
}
function getComicsBySeries(series) {
    return allLibraryMagazines.filter((m)=>m.series === series);
}
function getComicsByGenre(genre) {
    return allLibraryMagazines.filter((m)=>m.genre === genre);
}
const comicSeriesCategories = [
    {
        id: "batman",
        slug: "batman",
        name: "باتمان",
        nameEn: "Batman",
        count: batmanComics.length,
        color: "#1A1A2E",
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/1.png`,
        description: "مغامرات الفارس المظلم في مدينة جوثام"
    },
    {
        id: "donald_duck",
        slug: "donald-duck",
        name: "بطوط",
        nameEn: "Donald Duck",
        count: donaldDuckComics.length,
        color: "#0066CC",
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/52.png`,
        description: "مغامرات بطوط الكوميدية المضحكة"
    },
    {
        id: "mickey_mouse",
        slug: "mickey-mouse",
        name: "ميكي ماوس",
        nameEn: "Mickey Mouse",
        count: mickeyMouseComics.length,
        color: "#E31937",
        image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/68.png`,
        description: "مغامرات ميكي ماوس الممتعة"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/trending-comics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingComics",
    ()=>TrendingComics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/optimized-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/library-content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// API Base URL from Excel
const COMICS_API_BASE = "https://api.ameora.fun";
// Trending comics configuration - will use translations
// Updated with specific episodes: Batman 11, Donald Duck 4, Mickey Mouse 9
const trendingComicsConfig = [
    {
        id: 1,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batmanComics"][10],
        rating: 4.9,
        trend: "+15%",
        image: "/batman.jpg",
        slug: 'batman-11'
    },
    {
        id: 2,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mickeyMouseComics"][8],
        rating: 4.8,
        trend: "+12%",
        image: "/mickeymouse.jpg",
        slug: 'mickey-mouse-9'
    },
    {
        id: 3,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donaldDuckComics"][3],
        rating: 4.7,
        trend: "+18%",
        image: "/donaldduck.jpg",
        slug: 'donald-duck-4'
    },
    {
        id: 4,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batmanComics"][10],
        rating: 4.6,
        trend: "+9%",
        image: "/batman.jpg",
        slug: 'batman-11'
    },
    {
        id: 5,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mickeyMouseComics"][8],
        rating: 4.8,
        trend: "+14%",
        image: "/mickeymouse.jpg",
        slug: 'mickey-mouse-9'
    },
    {
        id: 6,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donaldDuckComics"][3],
        rating: 4.5,
        trend: "+11%",
        image: "/donaldduck.jpg",
        slug: 'donald-duck-4'
    },
    {
        id: 7,
        comic: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$library$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batmanComics"][10],
        rating: 4.7,
        trend: "+13%",
        image: "/batman.jpg",
        slug: 'batman-11'
    }
];
function TrendingComics() {
    _s();
    const { translations, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrendingComics.useCallback[nextSlide]": ()=>{
            setCurrentIndex({
                "TrendingComics.useCallback[nextSlide]": (prev)=>(prev + 1) % trendingComicsConfig.length
            }["TrendingComics.useCallback[nextSlide]"]);
        }
    }["TrendingComics.useCallback[nextSlide]"], []);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrendingComics.useCallback[prevSlide]": ()=>{
            setCurrentIndex({
                "TrendingComics.useCallback[prevSlide]": (prev)=>(prev - 1 + trendingComicsConfig.length) % trendingComicsConfig.length
            }["TrendingComics.useCallback[prevSlide]"]);
        }
    }["TrendingComics.useCallback[prevSlide]"], []);
    // Auto-rotate carousel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrendingComics.useEffect": ()=>{
            if (isDragging) return;
            const interval = setInterval(nextSlide, 4000);
            return ({
                "TrendingComics.useEffect": ()=>clearInterval(interval)
            })["TrendingComics.useEffect"];
        }
    }["TrendingComics.useEffect"], [
        nextSlide,
        isDragging
    ]);
    // Touch/Mouse handlers for swipe
    const handleStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrendingComics.useCallback[handleStart]": (clientX)=>{
            setIsDragging(true);
            startX.current = clientX;
            currentX.current = clientX;
        }
    }["TrendingComics.useCallback[handleStart]"], []);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrendingComics.useCallback[handleMove]": (clientX)=>{
            if (!isDragging) return;
            currentX.current = clientX;
        }
    }["TrendingComics.useCallback[handleMove]"], [
        isDragging
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrendingComics.useCallback[handleEnd]": ()=>{
            if (!isDragging) return;
            const diff = startX.current - currentX.current;
            if (Math.abs(diff) > 50) {
                if (diff > 0) nextSlide();
                else prevSlide();
            }
            setIsDragging(false);
        }
    }["TrendingComics.useCallback[handleEnd]"], [
        isDragging,
        nextSlide,
        prevSlide
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-r from-[#1E1E2F] to-[#121212] py-24 md:py-32 lg:py-40 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto px-4 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "mb-12 md:mb-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 bg-[#FF4C60]/10 mb-4 px-4 py-2 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "w-5 h-5 text-[#FF4C60]"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/trending-comics.tsx",
                                    lineNumber: 134,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-[#FF4C60]",
                                    children: translations.home.trendingComics.badge
                                }, void 0, false, {
                                    fileName: "[project]/components/home/trending-comics.tsx",
                                    lineNumber: 135,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 133,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-4 font-bold text-white text-4xl md:text-5xl",
                            children: translations.home.trendingComics.title
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 137,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-2xl text-[#B0B0B0] text-lg",
                            children: translations.home.trendingComics.subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 138,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/trending-comics.tsx",
                    lineNumber: 126,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "lg",
                            onClick: prevSlide,
                            className: "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-[#FF4C60]/20 hover:bg-[#FF4C60] text-white border-[#FF4C60] rounded-full w-10 h-10 md:w-12 md:h-12 p-0 transition-all duration-300 hover:scale-110 shadow-lg",
                            "aria-label": "Previous slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 md:w-6 md:h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/home/trending-comics.tsx",
                                lineNumber: 153,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 146,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "lg",
                            onClick: nextSlide,
                            className: "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-[#FF4C60]/20 hover:bg-[#FF4C60] text-white border-[#FF4C60] rounded-full w-10 h-10 md:w-12 md:h-12 p-0 transition-all duration-300 hover:scale-110 shadow-lg",
                            "aria-label": "Next slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 md:w-6 md:h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/home/trending-comics.tsx",
                                lineNumber: 163,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 156,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "relative overflow-hidden mx-auto max-w-4xl",
                            onMouseDown: (e)=>handleStart(e.clientX),
                            onMouseMove: (e)=>handleMove(e.clientX),
                            onMouseUp: handleEnd,
                            onMouseLeave: handleEnd,
                            onTouchStart: (e)=>handleStart(e.touches[0].clientX),
                            onTouchMove: (e)=>handleMove(e.touches[0].clientX),
                            onTouchEnd: handleEnd,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                initial: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 300
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -300
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    },
                                    className: "flex justify-center",
                                    children: (()=>{
                                        const item = trendingComicsConfig[currentIndex];
                                        const comic = item.comic;
                                        if (!comic || !comic.series) return null;
                                        const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMagazineTitle"])(language, comic.series, comic.rank || 1);
                                        const seriesName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesName"])(language, comic.series);
                                        // Use the pdfFile from the comic object, or construct it properly based on series
                                        let pdfUrl = comic.pdfFile;
                                        if (!pdfUrl && comic.series && comic.rank) {
                                            const rank = comic.rank;
                                            if (comic.series === "batman") {
                                                pdfUrl = `${COMICS_API_BASE}/content/comics/batman/bmp${rank}/bms${rank}.pdf`;
                                            } else if (comic.series === "donald_duck") {
                                                pdfUrl = `${COMICS_API_BASE}/content/comics/donald_duck/ddp${rank}/dds${rank}.pdf`;
                                            } else if (comic.series === "mickey_mouse") {
                                                pdfUrl = `${COMICS_API_BASE}/content/comics/mickey_mouse/mmp${rank}/mms${rank}.pdf`;
                                            }
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: `group bg-[#1E1E2F] border-[#FF4C60] comic-shadow w-64 md:w-72 transition-all duration-500`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex justify-center items-center h-72 overflow-hidden bg-[#050509]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                                                                src: item.image || "/placeholder.svg",
                                                                alt: title,
                                                                width: 218,
                                                                height: 288,
                                                                className: "w-full h-full object-cover transition-transform duration-300",
                                                                sizes: "(max-width: 768px) 256px, 288px"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "top-2 right-2 absolute",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    className: "bg-[#FFD93D] text-[#121212] text-xs px-2 py-1",
                                                                    children: seriesName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/trending-comics.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "top-2 left-2 absolute bg-[#FF4C60] px-2 py-1 rounded-full font-bold text-white text-xs",
                                                                children: item.trend
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/trending-comics.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 md:p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "mb-3 font-bold text-lg md:text-xl transition-colors text-[#FFD93D]",
                                                                children: title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: "fill-current w-5 h-5 text-[#FFD93D]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-white text-base",
                                                                                children: item.rating
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                                lineNumber: 236,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/home/trending-comics.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                        className: "w-5 h-5 text-[#FF4C60]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home/trending-comics.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 12
                                                            }, this),
                                                            pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `/reader/${item.slug}?file=${encodeURIComponent(pdfUrl)}`,
                                                                className: "inline-block bg-[#FF4C60] hover:bg-[#FF4C60]/90 px-4 py-2.5 rounded text-white text-sm md:text-base font-medium transition w-full text-center",
                                                                children: translations.common.readNow
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 14
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/trending-comics.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/trending-comics.tsx",
                                                lineNumber: 210,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/trending-comics.tsx",
                                            lineNumber: 209,
                                            columnNumber: 10
                                        }, this);
                                    })()
                                }, currentIndex, false, {
                                    fileName: "[project]/components/home/trending-comics.tsx",
                                    lineNumber: 179,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/trending-comics.tsx",
                                lineNumber: 178,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 167,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-2 mt-8 z-30",
                            children: trendingComicsConfig.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentIndex(index),
                                    className: `h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#FF4C60] w-8' : 'bg-[#FF4C60]/30 hover:bg-[#FF4C60]/60 w-2'}`,
                                    "aria-label": `Go to slide ${index + 1}`
                                }, index, false, {
                                    fileName: "[project]/components/home/trending-comics.tsx",
                                    lineNumber: 260,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/trending-comics.tsx",
                            lineNumber: 258,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/trending-comics.tsx",
                    lineNumber: 144,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/trending-comics.tsx",
            lineNumber: 125,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/trending-comics.tsx",
        lineNumber: 124,
        columnNumber: 3
    }, this);
}
_s(TrendingComics, "gDWbjmg2Ms27QZAB2gkI5BiQ14c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TrendingComics;
var _c;
__turbopack_context__.k.register(_c, "TrendingComics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/trending-comics.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/home/trending-comics.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_d9087e68._.js.map