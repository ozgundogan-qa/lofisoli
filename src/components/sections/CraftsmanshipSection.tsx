import Image from "next/image";

export default function CraftsmanshipSection() {
    return (
        <section id="kalite" className="py-24 md:py-32 bg-secondary/50 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center space-y-12 mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
                        Suskun Zanaat
                    </h2>
                    <p className="max-w-2xl text-lg font-light text-foreground/80 font-sans leading-relaxed">
                        Ormanın derinliklerinde, ekipmanınıza güvenmek bir seçenek değil, zorunluluktur. Bu yüzden yalnızca en sert şartlara dayanacak malzemeleri kullanıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Feature 1 */}
                    <div className="group flex flex-col items-center text-center space-y-6">
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm mb-4">
                            <Image
                                src="/images/craft-1.jpg"
                                alt="550 Paracord detayı"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-serif tracking-wide uppercase text-foreground">
                            Amerikan 550 Paracord
                        </h3>
                        <p className="text-sm text-foreground/70 font-light leading-relaxed px-4">
                            Yaklaşık 250 kg taşıma kapasitesine sahip, paraşüt iplerinin altın standardı. Her doğa macerasında hayat kurtarabilecek bir güç.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group flex flex-col items-center text-center space-y-6 md:-translate-y-12">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-4">
                            <Image
                                src="/images/craft-2.jpg"
                                alt="El dokuması detayı"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-serif tracking-wide uppercase text-foreground">
                            Geleneksel Düğüm
                        </h3>
                        <p className="text-sm text-foreground/70 font-light leading-relaxed px-4">
                            Makinenin değil, nasırlı ellerin eseri. Sıkı, estetik ve hiçbir koşulda gevşemeyen simetrik bir örgü tekniği.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group flex flex-col items-center text-center space-y-6">
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm mb-4">
                            <Image
                                src="/images/craft-3.jpg"
                                alt="Paslanmaz toka detayı"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-serif tracking-wide uppercase text-foreground">
                            Taktiksel Donanım
                        </h3>
                        <p className="text-sm text-foreground/70 font-light leading-relaxed px-4">
                            Suya, çamura ve pasa dayanıklı tokalar. Kamp ateşini yakacak gizli magnezyum çubukları veya acil durum düdükleri.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
