"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-serif font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity"
        >
          SOLIVAGUS
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-foreground/80">
          <li>
            <a href="#hikayemiz" className="hover:text-primary transition-colors">
              Hikayemiz
            </a>
          </li>
          <li>
            <a href="#kalite" className="hover:text-primary transition-colors">
              Zanaat
            </a>
          </li>
          <li>
            <a href="#koleksiyon" className="hover:text-primary transition-colors">
              Koleksiyon
            </a>
          </li>
        </ul>

        {/* CTA (Mobile & Desktop) */}
        <div className="flex items-center space-x-4">
          <a
            href="#satin-al"
            className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
          >
            Siparişe Geç
          </a>
          
          {/* Mobile Menu Button - Minimal Line */}
          <button className="md:hidden flex flex-col space-y-1.5 p-2">
            <span className="w-6 h-[2px] bg-foreground block"></span>
            <span className="w-6 h-[2px] bg-foreground block"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
