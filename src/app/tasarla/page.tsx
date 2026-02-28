"use client";

import { useState } from "react";
import { Check, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the 3D bracelet component to avoid loading heavy 3D libraries on initial page load
const DynamicBracelet3D = dynamic(() => import("@/components/Bracelet3D"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a150e]">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground text-sm">3D Model Yükleniyor...</p>
        </div>
    )
});

const colors = [
    { id: "forest", name: "Orman Yeşili", hex: "#143A23" },
    { id: "neon", name: "Neon Yeşili", hex: "#13ec5b" },
    { id: "black", name: "Gece Siyahı", hex: "#111111" },
    { id: "coyote", name: "Çöl Rengi", hex: "#8A7969" },
    { id: "navy", name: "Derin Mavi", hex: "#1D2B45" },
    { id: "orange", name: "Arama Kurtarma", hex: "#FF4500" },
];

const clasps = [
    { id: "steel", name: "Paslanmaz Çelik", desc: "Klasik parlak kaplama", price: 0 },
    { id: "black", name: "Mat Siyah Cerakote", desc: "Taktiksel ve parlamaz", price: 5 },
    { id: "brass", name: "Eskitme Pirinç", desc: "Zamanla patina alır", price: 8 },
];

export default function BuilderPage() {
    const [baseColor, setBaseColor] = useState(colors[0]);
    const [accentColor, setAccentColor] = useState(colors[2]);
    const [slctClasp, setSlctClasp] = useState(clasps[0]);

    const basePrice = 35.00;
    const totalPrice = basePrice + slctClasp.price;

    return (
        <div className="w-full flex-grow flex flex-col pt-8 bg-background">
            <div className="px-4 sm:px-10 pb-20 max-w-[1440px] mx-auto w-full">

                {/* Header */}
                <div className="mb-10text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary text-sm font-bold w-fit mb-4">
                        TASARIM STÜDYOSU
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                        Kendi Tarzını Yarat
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Seni yansıtan bilekliği adım adım tasarla. Binlerce farklı kombinasyon seni bekliyor.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">

                    {/* Left Column: 3D Preview */}
                    <div className="sticky top-24 rounded-2xl border border-border bg-[#0a150e] aspect-square lg:aspect-auto lg:h-[700px] overflow-hidden flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 z-0 bg-primary/5 mix-blend-overlay pointer-events-none"></div>

                        {/* 3D Bracelet Component */}
                        <div className="absolute inset-0 z-10">
                            <DynamicBracelet3D
                                baseColor={baseColor.hex}
                                accentColor={accentColor.hex}
                                claspType={slctClasp.id}
                            />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-sm text-muted-foreground bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none z-20">
                            <span className="flex items-center gap-2"><Info className="h-4 w-4" /> 3D Canlı Önizleme</span>
                            <span>El Yapımı</span>
                        </div>
                    </div>

                    {/* Right Column: Builder Controls */}
                    <div className="flex flex-col gap-10">

                        {/* Step 1 */}
                        <section>
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-sm">1</span>
                                    Ana İp Rengi
                                </h3>
                                <span className="text-muted-foreground text-sm font-medium">{baseColor.name}</span>
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                {colors.map((c) => (
                                    <button
                                        key={'base-' + c.id}
                                        onClick={() => setBaseColor(c)}
                                        className={`aspect-square rounded-full border-2 transition-all duration-200 ${baseColor.id === c.id ? "border-primary scale-110 shadow-[0_0_15px_rgba(19,236,91,0.3)]" : "border-transparent hover:scale-105"
                                            }`}
                                        style={{ backgroundColor: c.hex }}
                                        title={c.name}
                                    >
                                        {baseColor.id === c.id && <Check className="mx-auto h-5 w-5 text-white mix-blend-difference" />}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Step 2 */}
                        <section>
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-sm">2</span>
                                    Vurgu İp Rengi
                                </h3>
                                <span className="text-muted-foreground text-sm font-medium">{accentColor.name}</span>
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                {colors.map((c) => (
                                    <button
                                        key={'accent-' + c.id}
                                        onClick={() => setAccentColor(c)}
                                        className={`aspect-square rounded-full border-2 transition-all duration-200 ${accentColor.id === c.id ? "border-primary scale-110 shadow-[0_0_15px_rgba(19,236,91,0.3)]" : "border-transparent hover:scale-105"
                                            }`}
                                        style={{ backgroundColor: c.hex }}
                                        title={c.name}
                                    >
                                        {accentColor.id === c.id && <Check className="mx-auto h-5 w-5 text-white mix-blend-difference" />}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Step 3 */}
                        <section>
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-sm">3</span>
                                    Toka Seçimi
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                {clasps.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => setSlctClasp(c)}
                                        className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${slctClasp.id === c.id
                                            ? "border-primary bg-primary/5"
                                            : "border-border bg-card hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="flex gap-4 items-center">
                                            <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${slctClasp.id === c.id ? "border-primary" : "border-muted-foreground"}`}>
                                                {slctClasp.id === c.id && <div className="h-3 w-3 rounded-full bg-primary" />}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">{c.name}</div>
                                                <div className="text-muted-foreground text-sm">{c.desc}</div>
                                            </div>
                                        </div>
                                        {c.price > 0 ? (
                                            <span className="text-primary font-medium">+${c.price.toFixed(2)}</span>
                                        ) : (
                                            <span className="text-muted-foreground text-sm">Dahil</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Summary & Checkout */}
                        <div className="rounded-2xl border border-primary/30 bg-[#0a150e] p-6 mt-4 shadow-[0_0_30px_rgba(19,236,91,0.05)]">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <div className="text-muted-foreground text-sm uppercase tracking-widest font-bold mb-1">Toplam Tutar</div>
                                    <div className="text-4xl font-black text-white">${totalPrice.toFixed(2)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-primary flex items-center gap-1 justify-end font-medium">
                                        <Check className="h-4 w-4" /> Ücretsiz Kargo
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">2-4 iş günü üretim süresi</div>
                                </div>
                            </div>

                            <Button className="w-full h-14 text-lg font-bold shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)] transition-all group">
                                Sepete Ekle
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
