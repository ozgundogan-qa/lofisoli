"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, MessageCircle, Star, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiparisPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Sipariş Ver</span>
                    </div>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Özel Üretim Bilekliklerinize <span className="text-primary block mt-2">Hemen Sahip Olun</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Solivagus Outdoor olarak her bir bilekliği size özel, el işçiliğiyle üretiyoruz. Siparişlerinizi ve özel tasarım taleplerinizi aşağıdaki resmi satış kanallarımız üzerinden güvenle oluşturabilirsiniz.
                    </p>
                </motion.div>

                {/* Sales Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {/* Shopier Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative bg-[#1E293B]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#F97316]/50 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                        <div className="h-16 w-16 bg-[#F97316]/20 rounded-2xl flex items-center justify-center mb-6 text-[#F97316]">
                            <ShoppingBag className="h-8 w-8" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">Shopier Mağazamız</h2>
                        <p className="text-muted-foreground mb-8">Kredi kartına taksit imkanı ve %100 güvenli ödeme altyapısıyla anında sipariş verin.</p>

                        <Button
                            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full px-8 py-6 w-full text-lg shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all group-hover:scale-105"
                            asChild
                        >
                            <Link href="https://shopier.com/solivagusoutdoor" target="_blank" rel="noopener noreferrer">
                                Mağazaya Git <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Instagram/WhatsApp Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group relative bg-[#1E293B]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                        <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <MessageCircle className="h-8 w-8" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">Özel Tasarım & İletişim</h2>
                        <p className="text-muted-foreground mb-8">Havale/EFT ile ödeme, özel renk talepleri ve aklınıza takılan her şey için bize yazın.</p>

                        <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 w-full text-lg font-bold shadow-[0_0_15px_rgba(19,236,91,0.3)] hover:shadow-[0_0_25px_rgba(19,236,91,0.5)] transition-all group-hover:scale-105"
                            asChild
                        >
                            <Link href="https://instagram.com/solivagusoutdoor" target="_blank" rel="noopener noreferrer">
                                Bize Ulaşın <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Social Proof Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-black/40 border border-white/5 rounded-3xl p-8 md:p-12 mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-muted-foreground">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-white font-bold mb-2">Güvenli Alışveriş</h3>
                            <p className="text-sm">Tüm ödemeleriniz 256-bit SSL güvencesi altındadır.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
                                <Star className="h-6 w-6 fill-primary text-primary" />
                            </div>
                            <h3 className="text-white font-bold mb-2">%100 El İşçiliği</h3>
                            <p className="text-sm">Her ürün sipariş üzerine özel olarak hazırlanır.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
                                <Truck className="h-6 w-6" />
                            </div>
                            <h3 className="text-white font-bold mb-2">Hızlı Teslimat</h3>
                            <p className="text-sm">Ürünleriniz özenle paketlenip kapınıza kadar ulaşır.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Return Policy Notice */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-xs text-muted-foreground max-w-xl mx-auto"
                >
                    * Özel tasarım ve kişiye özel ölçülü siparişlerde iade veya değişim yapılamamaktadır. Standart siparişler için iade koşullarımızı Shopier sayfamızda bulabilirsiniz.
                </motion.p>
            </div>
        </main>
    );
}
