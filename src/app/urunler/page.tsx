"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Star, Eye, Filter, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "The Survivor 550",
        rating: 4.9,
        color: "Forest Green / Steel",
        image: "/images/p_survivor.png",
        badge: "ÇOK SATAN",
    },
    {
        id: 2,
        name: "Tactical Blackout",
        rating: 4.8,
        color: "Midnight Black / Cobra",
        image: "/images/p_tactical.png",
    },
    {
        id: 3,
        name: "Alpine Micro-Cord",
        rating: 4.5,
        color: "Blaze Orange / Micro",
        image: "/images/p_alpine.png",
        badge: "YENİ",
        badgeStyle: "bg-white text-black"
    },
    {
        id: 4,
        name: "Woodland Camo",
        rating: 5.0,
        color: "Camo / Cobra Weave",
        image: "/images/p_woodland.png",
    },
    {
        id: 5,
        name: "River Stone",
        rating: 4.7,
        color: "Blue & Grey / Fishtail",
        image: "/images/p_river.png",
    },
    {
        id: 6,
        name: "Emergency Flare",
        rating: 4.6,
        color: "Red / King Cobra",
        image: "/images/p_flare.png",
    }
];

export default function StorePage() {
    return (
        <div className="w-full flex-grow flex flex-col pt-8">
            {/* Title & Header */}
            <div className="px-4 sm:px-10 py-8 max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/urunler" className="text-white font-medium">Ürünler</Link>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">Koleksiyon</h1>
                            <p className="text-muted-foreground max-w-xl">Dayanıklı, çevreci ve zorlu şartlar için üretildi. Vahşi doğa için tasarlanmış paracord serimizi keşfedin.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="px-4 sm:px-10 pb-20 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="hidden lg:block w-64 shrink-0 space-y-8 h-fit sticky top-24">
                    <Accordion type="multiple" defaultValue={["color", "thickness"]} className="w-full">
                        <AccordionItem value="color" className="border-border">
                            <AccordionTrigger className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm">Renk</AccordionTrigger>
                            <AccordionContent className="pt-2 flex flex-col gap-3">
                                {["Orman Yeşili", "Ateş Turuncusu", "Gece Siyahı"].map((color) => (
                                    <label key={color} className="flex items-center gap-3 cursor-pointer group/item">
                                        <div className="relative flex h-5 w-5 items-center justify-center rounded-md border border-muted-foreground bg-transparent group-hover/item:border-primary transition-colors">
                                            <input type="checkbox" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" />
                                            <Check className="h-3 w-3 text-primary opacity-0 peer-checked:opacity-100" />
                                        </div>
                                        <span className="text-muted-foreground text-sm group-hover/item:text-white transition-colors">{color}</span>
                                    </label>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="thickness" className="border-border">
                            <AccordionTrigger className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm">İp Kalınlığı</AccordionTrigger>
                            <AccordionContent className="pt-2 flex flex-col gap-3">
                                {["Type III (550)", "Micro Cord"].map((thickness) => (
                                    <label key={thickness} className="flex items-center gap-3 cursor-pointer group/item">
                                        <div className="relative flex h-5 w-5 items-center justify-center rounded-md border border-muted-foreground bg-transparent group-hover/item:border-primary transition-colors">
                                            <input type="checkbox" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" />
                                            <Check className="h-3 w-3 text-primary opacity-0 peer-checked:opacity-100" />
                                        </div>
                                        <span className="text-muted-foreground text-sm group-hover/item:text-white transition-colors">{thickness}</span>
                                    </label>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </aside>

                {/* Product Grid Area */}
                <div className="flex-1">
                    {/* Sorting Bar */}
                    <div className="hidden lg:flex justify-between items-center mb-6 pb-4 border-b border-border">
                        <p className="text-muted-foreground text-sm"><span className="text-white font-bold">{products.length}</span> Ürün Bulundu</p>
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-muted-foreground">Sırala:</label>
                            <Select defaultValue="featured">
                                <SelectTrigger className="w-[180px] bg-card border-none text-white focus:ring-1 focus:ring-primary rounded-lg">
                                    <SelectValue placeholder="Sırala" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="featured">Öne Çıkanlar</SelectItem>
                                    <SelectItem value="newest">En Yeniler</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-xs text-primary font-medium">
                            Orman Yeşili
                            <button className="hover:text-white"><Check className="h-3 w-3" /></button>
                        </div>
                        <button className="text-xs text-muted-foreground hover:text-white underline decoration-muted-foreground underline-offset-4 ml-2">Tümünü Temizle</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {products.map((product, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                key={product.id}
                                className="group flex flex-col bg-card rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]"
                            >
                                <div className="relative aspect-square overflow-hidden bg-[#0a160f]">
                                    <img
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={product.image}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg" title="İncele">
                                            <Eye className="h-5 w-5" />
                                        </button>
                                    </div>
                                    {product.badge && (
                                        <div className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded ${product.badgeStyle || 'bg-primary text-black'}`}>
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                            <span className="text-xs text-muted-foreground">{product.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{product.color}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold tracking-wide uppercase rounded-lg">
                            Daha Fazla Yükle
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
