(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/yedek/src/components/ServiceMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const mapStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "1.5rem"
};
const generateRandomPoints = (count, bbox)=>{
    const points = [];
    for(let i = 0; i < count; i++){
        const lat = Math.random() * (bbox.maxLat - bbox.minLat) + bbox.minLat;
        const lng = Math.random() * (bbox.maxLng - bbox.minLng) + bbox.minLng;
        points.push([
            lat,
            lng
        ]);
    }
    return points;
};
const TOOLTIP_MESSAGES = [
    "7. Kata Kurulum Tamamlandı",
    "Nilüfer Asansör Kiralama",
    "12. Kata Eşya Taşıma Aktif",
    "Osmangazi Dış Cephe Asansörü Kuruldu",
    "Yıldırım 5. Kat İhtiyacı Karşılandı",
    "Mudanya 10. Kata Nakliyat",
    "Kestel Yeni Randevu Başarı ile Tamamlandı",
    "15. Kata Makine Kurulumu Yapıldı"
];
const getRandomMessage = ()=>TOOLTIP_MESSAGES[Math.floor(Math.random() * TOOLTIP_MESSAGES.length)];
function ServiceMap() {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceMap.useEffect": ()=>{
            if (!mapRef.current || mapInstanceRef.current) return;
            const initMap = {
                "ServiceMap.useEffect.initMap": ()=>{
                    if (!mapRef.current) return;
                    const bursaCenter = [
                        40.1828,
                        29.0667
                    ];
                    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                        center: bursaCenter,
                        zoom: 11,
                        zoomControl: false,
                        scrollWheelZoom: false
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.zoom({
                        position: "bottomright"
                    }).addTo(map);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        className: "map-tiles-filter"
                    }).addTo(map);
                    const customIconHtml = `
        <div class="relative flex items-center justify-center w-6 h-6" role="img" aria-label="Asansör Kurulum Noktası">
          <div class="absolute w-full h-full bg-primary/30 rounded-full"></div>
          <div class="relative w-3 h-3 bg-primary rounded-full border-2 border-white shadow-md"></div>
        </div>
      `;
                    const customIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        html: customIconHtml,
                        className: "custom-leaflet-icon",
                        iconSize: [
                            24,
                            24
                        ],
                        iconAnchor: [
                            12,
                            12
                        ]
                    });
                    const osmangaziPoints = generateRandomPoints(70, {
                        minLat: 40.18,
                        maxLat: 40.23,
                        minLng: 28.98,
                        maxLng: 29.08
                    });
                    const niluferPoints = generateRandomPoints(60, {
                        minLat: 40.20,
                        maxLat: 40.25,
                        minLng: 28.88,
                        maxLng: 28.98
                    });
                    const yildirimPoints = generateRandomPoints(40, {
                        minLat: 40.17,
                        maxLat: 40.21,
                        minLng: 29.08,
                        maxLng: 29.15
                    });
                    const allPoints = [
                        ...osmangaziPoints,
                        ...niluferPoints,
                        ...yildirimPoints
                    ];
                    const markers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup();
                    allPoints.forEach({
                        "ServiceMap.useEffect.initMap": ([lat, lng], idx)=>{
                            const marker = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                                lat,
                                lng
                            ], {
                                icon: customIcon,
                                title: "Asansör Kurulum Noktası"
                            });
                            if (idx < 25) {
                                marker.bindPopup(`<div class="font-sans text-sm font-semibold text-slate-800 p-1">${getRandomMessage()}</div>`);
                            }
                            markers.addLayer(marker);
                        }
                    }["ServiceMap.useEffect.initMap"]);
                    markers.addTo(map);
                    mapInstanceRef.current = map;
                    setIsLoaded(true);
                }
            }["ServiceMap.useEffect.initMap"];
            let idleHandle;
            if ('requestIdleCallback' in window) {
                idleHandle = window.requestIdleCallback({
                    "ServiceMap.useEffect": ()=>initMap()
                }["ServiceMap.useEffect"], {
                    timeout: 2000
                });
            } else {
                setTimeout(initMap, 1000);
            }
            return ({
                "ServiceMap.useEffect": ()=>{
                    if (idleHandle) window.cancelIdleCallback(idleHandle);
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["ServiceMap.useEffect"];
        }
    }["ServiceMap.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white dark:border-navy-light h-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
          .dark .map-tiles-filter { filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%); }
          .custom-leaflet-icon { background: transparent; border: none; }
          .leaflet-popup-content-wrapper { border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
          .leaflet-popup-content { margin: 10px 14px; }
        `
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: mapRef,
                        style: mapStyle,
                        className: "z-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-100 dark:bg-navy-light animate-pulse rounded-3xl flex items-center justify-center text-slate-400",
                children: "Harita yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
                lineNumber: 128,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yedek/src/components/ServiceMap.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(ServiceMap, "6Zh7X2w3GBphvq0rsaSEbVLTkVI=");
_c = ServiceMap;
var _c;
__turbopack_context__.k.register(_c, "ServiceMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/yedek/src/components/ServiceMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/yedek/src/components/ServiceMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_yedek_src_components_ServiceMap_tsx_10z1iz-._.js.map