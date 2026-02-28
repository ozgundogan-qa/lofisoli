"use client";

import Link from "next/link";
import { Mountain, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 md:px-10 transition-colors duration-300",
                isScrolled
                    ? "border-border/50 bg-background/80 backdrop-blur-md"
                    : "border-transparent bg-transparent"
            )}
        >
            <div className="flex items-center gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                    <Mountain className="h-8 w-8 text-primary" strokeWidth={2.5} />
                    <h2 className="text-xl font-extrabold leading-tight tracking-tight">
                        Lofisoli
                    </h2>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-white/80 hover:text-primary transition-colors text-sm font-semibold"
                    >
                        Ana Sayfa
                    </Link>
                    <Link
                        href="/urunler"
                        className="text-white/80 hover:text-primary transition-colors text-sm font-semibold"
                    >
                        Ürünler
                    </Link>
                    <Link
                        href="/hikayemiz"
                        className="text-white/80 hover:text-primary transition-colors text-sm font-semibold"
                    >
                        Hikayemiz
                    </Link>
                    <Link
                        href="/tasarla"
                    >
                        <Button className="h-9 px-5 text-sm font-bold shadow-[0_0_15px_rgba(19,236,91,0.3)] hover:shadow-[0_0_25px_rgba(19,236,91,0.5)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 rounded-full">
                            Kendin Yap
                        </Button>
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
                <div className="hidden md:flex relative w-full flex-1 max-w-64 items-center group">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                        className="pl-9 bg-card border-none text-white focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground h-10 w-full"
                        placeholder="Arama..."
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white hover:text-primary hover:bg-card"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link href="/siparis" className="hidden md:flex">
                        <Button
                            className="h-10 px-5 text-sm font-bold shadow-[0_0_15px_rgba(19,236,91,0.3)] hover:shadow-[0_0_25px_rgba(19,236,91,0.5)] transition-all hover:scale-105 rounded-full"
                        >
                            Sipariş Ver
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white hover:text-primary hover:bg-card"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
