import { Button } from "@/components/ui/button";
import { MessageSquare, Download, Phone } from "lucide-react";

export function Hero() {
  const whatsappClick = () => {
    window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I'm%20interested%20in%20your%20services.", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            {/* Portfolio Photo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="/portfolio.jpeg" 
                alt="Ahmad Ashraf - Professional Photo" 
                className="w-40 h-40 object-cover rounded-full shadow-2xl border-4 border-primary/20"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Ahmad <span className="text-accent">Ashraf</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Senior Dispatch Head | Logistics & IT Services Provider
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              A Computer Science graduate with over 5 years of experience leading logistics operations 
              and building scalable IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-lg px-8 py-4"
              >
                <MessageSquare className="mr-2 h-6 w-6" />
                Contact Me
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Ahmad_Ashraf_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-lg px-8 py-4"
              >
                <Download className="mr-2 h-6 w-6" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - Hero SVG */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/hero.svg" 
              alt="Hero illustration" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}