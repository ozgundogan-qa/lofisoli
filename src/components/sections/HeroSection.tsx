import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Yumuşak Overlay */}
                <Image
                    src="/images/hero.jpg"
                    alt="Ormanda kamp deneyimi"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center space-y-6 px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest animate-fade-in-up">
                    SOLIVAGUS
                </h1>
                <p className="text-lg md:text-2xl font-sans text-white/90 max-w-xl mx-auto font-light tracking-wide opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
                    Vahşi doğanın kalbinde, elde dokunan zarafet.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
                <span className="text-white/70 text-sm tracking-widest uppercase font-medium">Keşfet</span>
                <div className="w-[1px] h-12 bg-white/50 overflow-hidden relative">
                    <div className="w-full h-1/2 bg-white absolute top-0 animate-[bounce_2s_infinite]" />
                </div>
            </div>
        </section>
    );
}
