import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGallery from "@/components/ProductGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import AvailablePacks from "@/components/AvailablePacks";
import HowToOrder from "@/components/HowToOrder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#5A2B18] relative selection:bg-[#B8893C] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Our Churma Prasad */}
      <ProductGallery />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Available Packs */}
      <AvailablePacks />

      {/* 7. How to Order */}
      <HowToOrder />

      {/* 8. Contact / Get In Touch */}
      <Contact />

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
