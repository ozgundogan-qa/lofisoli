import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
import CollectionSection from "@/components/sections/CollectionSection";
import FooterCTASection from "@/components/sections/FooterCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      
      <StorySection />
      
      <CraftsmanshipSection />
      
      <CollectionSection />
      
      <FooterCTASection />
      
    </main>
  );
}
