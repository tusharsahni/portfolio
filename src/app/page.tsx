import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import HorizontalScroll from "@/components/HorizontalScroll";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground  ">
      <CustomCursor />
      
      {/* Navbar */}
      <Navbar/>
      
      <section id="hero">
  <Hero />
</section>
      <section id="about">
  <About />
</section>
     <section id="projects">
      <HorizontalScroll />
      </section>
            <Skills />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
