import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Trust } from "@/sections/Trust";
import { Products } from "@/sections/Products";
import { About } from "@/sections/About";
import { Process } from "@/sections/Process";
import { WhyChoose } from "@/sections/WhyChoose";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFab />
      <main>
        <Hero />
        <Trust />
        <Products />
        <About />
        <Process />
        <WhyChoose />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
