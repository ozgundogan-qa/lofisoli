import Image from "next/image";

export default function StorySection() {
    return (
        <section id="hikayemiz" className="py-24 md:py-40 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Sol Görsel - Asimetrik Yerleşim */}
                    <div className="relative h-[600px] w-full lg:w-4/5 ml-auto hidden lg:block">
                        <div className="absolute inset-0 bg-secondary/30 transform translate-x-4 translate-y-4 rounded-sm" />
                        <div className="relative h-full w-full overflow-hidden rounded-sm">
                            <Image
                                src="/images/story.jpg"
                                alt="El örgüsü paracord detayları"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>

                    {/* Sağ Metin - Hikaye */}
                    <div className="flex flex-col space-y-8 max-w-xl">
                        <div className="space-y-4">
                            <span className="text-primary/60 font-medium tracking-[0.2em] text-xs uppercase uppercase">Başlangıç Noktamız</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1]">
                                Doğanın ritmini takip et.
                            </h2>
                        </div>

                        <div className="space-y-6 text-foreground/80 font-sans font-light leading-relaxed text-lg">
                            <p>
                                Solivagus, Latince&apos;de &quot;yalnız dolaşan&quot; anlamına gelir. Biz, rotasını kendi çizenlerin, ateşin etrafında sessizliği dinleyenlerin ve vahşi doğada huzur bulanların hikayesini örüyoruz.
                            </p>
                            <p>
                                Sadece bir bileklik üretmiyoruz. Her bir düğüm; geçirdiğimiz saatlerin, aşılmaz sandığımız patikaların ve doğayla olan sarsılmaz bağımızın bir yansıması. Şehirden uzaklaştığınızda bileğinize bakıp ormanın çağrısını hatırlamanız için, en sert koşullara dayanacak şekilde elde dokuyoruz.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-border/30">
                            <p className="font-serif text-xl md:text-2xl text-foreground italic">
                                &quot;Her düğümde bir kilometre.&quot;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
