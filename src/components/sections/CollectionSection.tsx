import { cn } from "@/lib/utils";
import Image from "next/image";

const collection = [
    {
        name: "Kobra / Haki",
        desc: "Zorlu orman kampları için...",
        image: "/images/product-1.jpg",
        alignment: "self-start"
    },
    {
        name: "Balıksırtı / Kum",
        desc: "Gündelik dağ yürüyüşleri...",
        image: "/images/product-2.jpg",
        alignment: "self-center scale-110"
    },
    {
        name: "Kutu / Ateş",
        desc: "Yoldan çıkmayı sevenlere...",
        image: "/images/product-3.jpg",
        alignment: "self-end"
    }
];

export default function CollectionSection() {
    return (
        <section id="koleksiyon" className="py-24 md:py-40 bg-background text-foreground relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border/30 pb-10">
                    <div className="max-w-xl space-y-4">
                        <span className="text-primary/60 font-medium tracking-[0.2em] text-xs uppercase uppercase">Öne Çıkanlar</span>
                        <h2 className="text-5xl lg:text-7xl font-serif leading-[1]">
                            Sınırları <br /> Aşanlar
                        </h2>
                    </div>
                    <p className="max-w-sm text-foreground/70 font-sans font-light text-base mt-6 md:mt-0 text-right">
                        Her doğa tutkunu için özel olarak seçilmiş, Solivagus&apos;un en ikonik örgüleri.
                    </p>
                </div>

                {/* Polaroids */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full justify-center min-h-[600px] mt-12 py-12">
                    {collection.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group relative w-full md:w-1/3 aspect-[3/4] bg-white p-4 shadow-xl shadow-black/5 hover:z-10 transition-all duration-500 ease-out hover:-translate-y-4",
                                item.alignment,
                                idx === 0 ? "md:-rotate-3" : idx === 1 ? "md:z-10" : "md:rotate-3"
                            )}
                        >
                            <div className="relative w-full h-full overflow-hidden bg-muted/20">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            {/* Tooltip Overlay */}
                            <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-background/95 backdrop-blur-sm p-4 text-center border border-border">
                                <h4 className="font-serif text-lg tracking-wide uppercase text-foreground">{item.name}</h4>
                                <p className="text-xs text-foreground/60 font-light mt-1 font-sans">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
