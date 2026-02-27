export default function FooterCTASection() {
    return (
        <section id="satin-al" className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center space-y-12">

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-wide leading-tight max-w-3xl">
                    Doğada asla yalnız değilsin.
                </h2>

                <p className="text-primary-foreground/80 font-sans font-light text-lg md:text-xl max-w-xl">
                    Hikayeni bileğinde taşı. Zorlu koşullar için örülmüş, zarafetle tamamlanmış parçalara göz at.
                </p>

                <a
                    href="#"
                    className="inline-flex items-center justify-center px-10 py-5 bg-background text-foreground font-medium uppercase tracking-widest text-sm hover:bg-background/90 transition-all duration-300 hover:scale-105"
                >
                    Koleksiyonu İncele
                </a>

                {/* Minimal Footer */}
                <div className="pt-24 mt-12 border-t border-primary-foreground/20 w-full flex flex-col md:flex-row justify-between items-center text-sm font-light text-primary-foreground/60 space-y-4 md:space-y-0">
                    <p>© {new Date().getFullYear()} Solivagus Outdoor.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
                        <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
                        <a href="#" className="hover:text-primary-foreground transition-colors">İletişim</a>
                    </div>
                </div>
            </div>

            {/* Subtle Background Pattern/Texture */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </section>
    );
}
