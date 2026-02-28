"use client";

import { Typewriter } from "@/components/react-bits/Typewriter";
import { Button } from "@/components/ui/button";
import { PlayCircle, ShieldCheck, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-[15000ms] ease-in-out hover:scale-105"
          style={{
            backgroundImage:
              'url("/images/paracord_hero_bg.png")',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative z-20 flex max-w-[960px] flex-col items-center gap-8 px-4 text-center mt-16">
          <div className="flex flex-col gap-4 items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-bold tracking-wider uppercase text-sm animate-pulse"
            >
              Yeni Sezon Koleksiyonu
            </motion.span>

            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl drop-shadow-lg flex flex-col items-center overflow-hidden py-1">
              <Typewriter text="Vahşi Doğa İçin" className="block" speed={0.05} />
              <Typewriter text="Sürdürülebilir Tarz" delay={0.8} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mt-3" speed={0.06} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md mt-6"
            >
              Modern kaşifler için tasarlanmış çevre dostu paracord bileklikler.
              Bir sonraki maceranız için üstün dayanıklılık.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6"
          >
            <Button
              className="h-14 min-w-[200px] text-base font-bold shadow-[0_0_20px_rgba(19,236,91,0.4)] hover:shadow-[0_0_30px_rgba(19,236,91,0.6)] hover:scale-105 transition-all duration-300 rounded-full"
            >
              Koleksiyonu Keşfet
            </Button>
            <Button
              variant="outline"
              className="h-14 min-w-[200px] bg-white/10 backdrop-blur-sm border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all rounded-full"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Hikayeyi İzle
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-background overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 mb-20 text-center md:text-left"
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest">
              Neden Biz?
            </h2>
            <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Doğa için Üretildi.<br />
              Dünya için Tasarlandı.
            </h3>
          </motion.div>

          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-video md:aspect-square lg:aspect-[4/3] border border-border shadow-2xl"
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img
                src="/images/paracord_material.png"
                alt="Paracord Material"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="order-1 md:order-2 flex flex-col gap-6 p-6 md:pr-0"
            >
              <div className="h-14 w-14 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(19,236,91,0.15)] group-hover:shadow-[0_0_20px_rgba(19,236,91,0.3)] transition-all duration-500">
                <Recycle className="h-8 w-8" />
              </div>
              <h4 className="text-white text-2xl md:text-4xl font-bold transition-colors group-hover:text-white">
                Geri Dönüştürülmüş Okyanus Plastiği
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Doğayı sadece keşfetmiyoruz; onu koruyoruz. Özel "Eco-Core" ipimiz, okyanuslarımızdan kurtarılan %100 geri dönüştürülmüş plastiklerden üretilir.
              </p>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col gap-6 p-6 md:pl-0"
            >
              <div className="h-14 w-14 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-2 shadow-[0_0_15px_rgba(19,236,91,0.15)] group-hover:shadow-[0_0_20px_rgba(19,236,91,0.3)] transition-all duration-500">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="text-white text-2xl md:text-4xl font-bold transition-colors group-hover:text-white">
                Askeri Seviyede Dayanıklılık
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                İşler zorlaştığında güvenebileceğiniz ekipmanlara ihtiyacınız var. Bilekliklerimiz, acil durumlar için her an hazır olan 250 kg taşıma kapasiteli, 3 metrelik ipe dönüşür.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square lg:aspect-[4/3] border border-border shadow-2xl"
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img
                src="/images/paracord_durability.png"
                alt="Paracord Use"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Builder CTA */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary text-sm font-bold mb-6 hover:bg-primary/20 transition-colors">
            KENDİN TASARLA STÜDYOSU
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Senin Maceran.<br />
            <span className="text-primary tracking-normal drop-shadow-[0_0_20px_rgba(19,236,91,0.3)]">Senin Renklerin.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ekipmanınla eşleşen bilekliği tasarla. 50'den fazla ip rengi, 3 farklı toka tipi ve özel ölçülerle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/tasarla">
              <Button className="h-14 min-w-[200px] text-lg font-bold transition-transform hover:scale-105 hover:-translate-y-1 shadow-[0_0_25px_rgba(19,236,91,0.5)] rounded-full border border-primary/50">
                Stüdyoyu Başlat
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
