"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Typewriter } from "@/components/react-bits/Typewriter";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export function HeroScrollVideo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const frameCount = 181;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    const drawFrame = useCallback((indexRatio: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || images.length === 0) return;

        const index = Math.min(Math.max(1, Math.round(indexRatio)), frameCount) - 1;
        let img = images[index];

        // Fallback to first frame if current isn't loaded yet
        if (!img || !img.complete || img.naturalHeight === 0) {
            img = images[0];
        }

        if (img && img.complete && img.naturalHeight > 0) {
            const aspect = img.width / img.height;
            let drawWidth = canvas.width;
            let drawHeight = canvas.width / aspect;

            if (drawHeight < canvas.height) {
                drawHeight = canvas.height;
                drawWidth = canvas.height * aspect;
            }

            const x = (canvas.width - drawWidth) / 2;
            const y = (canvas.height - drawHeight) / 2;

            ctx.drawImage(img, x, y, drawWidth, drawHeight);
        }
    }, [images]);

    useEffect(() => {
        let mounted = true;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const numStr = i.toString().padStart(3, '0');
            img.src = `/solivagus-hero-new/ezgif-frame-${numStr}.jpg`;
            loadedImages.push(img);

            if (i === 1) {
                img.onload = () => {
                    if (mounted) setIsLoaded(true);
                };
                // If image is already cached, trigger immediately
                if (img.complete) {
                    setTimeout(() => { if (mounted) setIsLoaded(true); }, 0);
                }
            }
        }

        setImages(loadedImages);
        return () => { mounted = false; };
    }, []);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawFrame(frameIndex.get());
        }
    }, [drawFrame, frameIndex]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        const unsubscribe = frameIndex.on('change', drawFrame);
        return () => unsubscribe();
    }, [drawFrame, frameIndex]);

    useEffect(() => {
        if (isLoaded) {
            // Force a redraw when the first frame finishes loading
            handleResize();
        }
    }, [isLoaded, handleResize]);

    return (
        <div ref={containerRef} className="relative h-[250vh] w-full bg-[#050a07]">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
                {/* Fallback pattern while canvas prepares */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-[#050a07] animate-pulse z-0 flex items-center justify-center">
                        <span className="text-primary/50 text-sm font-medium tracking-widest uppercase">Yükleniyor...</span>
                    </div>
                )}

                {/* Canvas Background */}
                <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full object-cover" />

                {/* Overlay Gradients */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-[#0a150e]/90" />

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="relative z-20 flex max-w-[960px] flex-col items-center gap-8 px-4 text-center mt-16"
                >
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
                        <Link href="/urunler">
                            <Button
                                className="h-14 min-w-[200px] text-base font-bold shadow-[0_0_20px_rgba(19,236,91,0.4)] hover:shadow-[0_0_30px_rgba(19,236,91,0.6)] hover:scale-105 transition-all duration-300 rounded-full"
                            >
                                Koleksiyonu Keşfet
                            </Button>
                        </Link>
                        <Link href="/hikayemiz">
                            <Button
                                variant="outline"
                                className="h-14 min-w-[200px] bg-white/10 backdrop-blur-sm border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all rounded-full"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Hikayeyi İzle
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
