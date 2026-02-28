"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/react-bits/SplitText";
import { BlurText } from "@/components/react-bits/BlurText";
import { Leaf, Anchor, MountainSnow } from "lucide-react";

export default function BrandStoryPage() {
    return (
        <div className="w-full flex-grow flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCqR4lMvJ2j1_mS35-iW4QkF9-y91a2Oa4A7J8Lq7Z5J2kYcI1pC3H7p9m8Tj02mC3Z1R2M3D4F5G6H7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        <SplitText text="Vahşi Doğadan" delay={0.05} />
                        <br />
                        <BlurText text="Şehir Hayatına." delay={0.5} className="text-primary mt-2" />
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                        Lofisoli, doğanın zor şartlarında hayatta kalma arzusuyla doğan, estetik ve dayanıklılığı birleştiren premium paracord markasıdır.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 px-4 md:px-10 max-w-[1200px] mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary text-sm font-bold w-fit">
                            HİKAYEMİZ
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Sadece bir aksesuar değil, <br />
                            <span className="text-muted-foreground">hayatta kalma aracı.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Her Lofisoli bilekliği, 250 kg çekme kuvvetine dayanıklı ABD askeri standartlarında 550 Tip III paracord ip kullanılarak elde üretilir. Acil bir durumda çözüldüğünde 3 metre uzunluğunda hayat kurtaran bir ipe dönüşür.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Maceracılar, dağcılar ve günlük hayatında outdoor ruhunu hissetmek isteyenler için tasarlandı.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1636&auto=format&fit=crop"
                                alt="Crafting Paracord"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability core values */}
            <section className="py-24 bg-[#0a150e] border-y border-border px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sürdürülebilirlik Taahhüdümüz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Doğadan aldığımız ilhamla üretim yaparken doğayı korumak en büyük görevimiz.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Leaf className="h-8 w-8 text-primary" />,
                                title: "Geri Dönüştürülmüş",
                                desc: "Ambalajlarımız tamamen geri dönüştürülmüş ve doğada çözünebilir malzemelerden üretilir."
                            },
                            {
                                icon: <Anchor className="h-8 w-8 text-primary" />,
                                title: "Uzun Ömürlü Tasarım",
                                desc: "Kullan at kültürüne karşıyız. Lofisoli bileklikleri ömür boyu kullanmanız için tasarlandı."
                            },
                            {
                                icon: <MountainSnow className="h-8 w-8 text-primary" />,
                                title: "Doğa Temizliği",
                                desc: "Her satışın %1'i orman ve okyanus temizliği yapan sivil toplum kuruluşlarına bağışlanır."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
                            >
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
