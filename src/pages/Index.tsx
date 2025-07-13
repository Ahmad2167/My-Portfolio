import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DarkModeToggle />
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="portfolio">
        <Portfolio />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
