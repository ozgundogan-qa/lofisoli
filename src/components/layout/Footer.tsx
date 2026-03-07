import Link from "next/link";
import { Mountain, Instagram, Twitter, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-[#0b1810] border-t border-border pt-16 pb-8">
            <div className="px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                            <Mountain className="h-6 w-6 text-primary" strokeWidth={2.5} />
                            <h2 className="text-xl font-extrabold tracking-tight">Solivagus Outdoor</h2>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Vahşi doğanın kalbinde, elde dokunan zarafet. Doğadan ilham alan el yapımı premium paracord bileklikler.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5 fill-current" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5 fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                            Mağaza
                        </h4>
                        <Link href="/magaza" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Tüm Bileklikler
                        </Link>
                        <Link href="/yeni" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Yeni Gelenler
                        </Link>
                        <Link href="/aksesuar" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Aksesuarlar
                        </Link>
                        <Link href="/hediye-karti" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Hediye Kartı
                        </Link>
                    </div>

                    {/* Links Column 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                            Destek
                        </h4>
                        <Link href="/kargo" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Kargo Takibi
                        </Link>
                        <Link href="/garanti" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Garanti Şartları
                        </Link>
                        <Link href="/iade" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            İade ve Değişim
                        </Link>
                        <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            İletişim
                        </Link>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                            Bültene Katılın
                        </h4>
                        <p className="text-muted-foreground text-sm">
                            İlk siparişinizde %10 indirim kazanın ve yeni ürünlerden ilk siz haberdar olun.
                        </p>
                        <form className="flex flex-col gap-3">
                            <Input
                                className="h-12 bg-card border-none text-white focus-visible:ring-1 focus-visible:ring-primary px-4 placeholder:text-muted-foreground"
                                placeholder="E-posta adresiniz"
                                type="email"
                                required
                            />
                            <Button type="submit" className="h-12 w-full font-bold">
                                Abone Ol
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()} Solivagus Outdoor. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/gizlilik" className="text-muted-foreground hover:text-white text-xs transition-colors">
                            Gizlilik Politikası
                        </Link>
                        <Link href="/kosullar" className="text-muted-foreground hover:text-white text-xs transition-colors">
                            Kullanım Koşulları
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
