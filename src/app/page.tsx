import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Menu } from "@/components/sections/Menu";
import { Delivery } from "@/components/sections/Delivery";
import { Staff } from "@/components/sections/Staff";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Marquee />
        <Menu />
        <Delivery />
        <Staff />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
