(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/yedek/src/components/FaqSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yedek/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FAQS = [
    {
        q: "Bursa'da mobil asansör kiralama fiyatları ne kadar?",
        a: "Bursa merkez ve ilçelerinde kiralık asansör fiyatları, asansörün kurulacağı kat yüksekliğine, kiralama süresine (saatlik veya günlük) ve taşınacak eşya hacmine göre değişiklik göstermektedir. Kesin fiyat için ücretsiz ekspertiz hizmetimizden yararlanabilirsiniz."
    },
    {
        q: "Evden eve nakliyat sürecinde asansör kullanmak zorunlu mu?",
        a: "Eğer binanızın merdiven boşlukları dar ise veya site yönetiminiz bina içi yolcu asansöründe eşya taşınmasını yasaklamışsa dış cephe asansörü kullanmak en güvenli ve yasal yoldur. Ayrıca eşyalarınızın çizilme riskini sıfıra indirir."
    },
    {
        q: "Dış cephe asansörleriniz en fazla kaçıncı kata ulaşabiliyor?",
        a: "Bursa Mobil Asansör filomuzda bulunan son teknoloji teleskopik araçlarımız sayesinde 15. kata kadar (yaklaşık 45-50 metre) güvenle ve sarsıntısız bir şekilde ulaşabilmekteyiz."
    },
    {
        q: "Saatlik asansör kiralama hizmetiniz var mı?",
        a: "Evet, özellikle beyaz eşya, klima motoru, cam/pvc veya mobilya gibi tek parça eşya taşıtacak müşterilerimiz ve inşaat firmaları için saatlik mobil asansör kiralama seçeneğimiz mevcuttur."
    },
    {
        q: "Bursa'nın her ilçesine asansörlü taşıma hizmeti veriyor musunuz?",
        a: "Nilüfer, Osmangazi, Yıldırım, Mudanya, Gürsu, Kestel başta olmak üzere Bursa'nın tüm ilçelerine 7/24 kesintisiz kiralık mobil asansör altyapısı sağlamaktayız."
    },
    {
        q: "Asansör kurulması için evin önünde ne kadar alan olmalı?",
        a: "Aracımızın yanaşması ve hidrolik ayaklarını açabilmesi için bina önünde veya sokağınızda standart bir kamyonun park edebileceği kadar alan olması genelde yeterlidir. Dar sokaklar için özel manevra tekniklerimiz bulunmaktadır."
    },
    {
        q: "Rüzgarlı ve yağmurlu havalarda asansörlü nakliyat yapılır mı?",
        a: "Yağmurlu havalarda eşyalarınız özel brandalarla korunduğu için taşıma yapılabilir. Ancak saatte 10-12 metreyi aşan şiddetli lodos ve fırtınalarda iş güvenliği kuralları gereği (rüzgar sensörü uyarısıyla) işlem ertelenir."
    },
    {
        q: "Eşyaların güvenliğini nasıl sağlıyorsunuz?",
        a: "Düzenli bakımı yapılan son teknoloji asansörlerimiz ve deneyimli operatörlerimiz sayesinde taşıma esnasında insan gücüne dayalı hasar riski sıfıra indirilmekte, eşyalarınız özenle taşınmaktadır."
    },
    {
        q: "Moloz indirme veya inşaat malzemesi taşıma için asansör kiralanır mı?",
        a: "Kesinlikle. İnşaat cephe asansörlerimiz ile yüksek katlara tuğla, çimento, alçıpan, kiremit çıkartabilir veya tadilat sonrası çuvallanmış molozları dakikalar içinde aşağı indirebilirsiniz."
    },
    {
        q: "Taşınma işleminden kaç gün önce nakliye randevusu almalıyım?",
        a: "Özellikle yaz ayları ve hafta sonları çok yoğun olabilmektedir. Sorunsuz bir planlama ve yasal izinler (sokak kapatma vb.) için en az 1 hafta önceden bizimle iletişime geçmenizi tavsiye ederiz."
    }
];
function FaqSection() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Generate standard Google FAQ Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq)=>({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-20 bg-slate-50 dark:bg-background/50 overflow-hidden content-visibility-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative sticky top-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-3xl overflow-hidden shadow-2xl group aspect-square md:aspect-[4/3]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/asansorlu-nakliyat-faq.png",
                                        alt: "Sıkça Sorulan Sorular - Asansörlü Nakliyat",
                                        fill: true,
                                        className: "object-cover transform group-hover:scale-105 transition-transform duration-700",
                                        sizes: "(max-width: 1024px) 100vw, 50vw"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-6 left-6 right-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Aklınızda Soru Kalmasın"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-200",
                                                    children: "Taşınma sürecinizi en şeffaf şekilde yönetmek için merak ettiğiniz tüm detayları derledik."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-5xl font-display font-black text-slate-900 mb-4",
                                            children: [
                                                "Sıkça Sorulan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: "Sorular"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 dark:text-slate-300 text-lg",
                                            children: "Mobil asansör kiralama ve taşımacılık hizmetlerimiz hakkında Bursa'daki müşterilerimizin en çok sorduğu soruların yanıtları."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: FAQS.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `border border-border dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-50 dark:bg-navy-light shadow-md' : 'bg-white dark:bg-navy/30'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOpenIndex(openIndex === idx ? null : idx),
                                                    className: "w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none",
                                                    "aria-expanded": openIndex === idx,
                                                    "aria-controls": `faq-answer-${idx}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-900 dark:text-white pr-8 text-sm sm:text-base",
                                                            children: faq.q
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `faq-answer-${idx}`,
                                                    role: "region",
                                                    className: `grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "px-6 pb-5 text-gray-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed",
                                                            children: faq.a
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yedek$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yedek/src/components/FaqSection.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(FaqSection, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_yedek_src_components_FaqSection_tsx_07~88rb._.js.map