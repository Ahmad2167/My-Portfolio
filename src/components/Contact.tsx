import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Github,
  ExternalLink
} from "lucide-react";

export function Contact() {
  const whatsappClick = () => {
    window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I'm%20interested%20in%20your%20services.", "_blank");
  };

  const emailClick = () => {
    window.open("mailto:ahmadch2167@gmail.com?subject=Inquiry%20about%20your%20services", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your logistics operations or build innovative IT solutions? 
            Let's start a conversation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in">
            <Card className="bg-gradient-card border-2 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Phone className="h-8 w-8" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-semibold">WhatsApp (Preferred)</p>
                      <p className="text-muted-foreground">+1 (760) 284-8322</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">ahmadch2167@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Pakistan / USA</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="border-2 border-muted hover:border-primary/50"
                    onClick={() => window.open("https://www.linkedin.com/in/ahmad-ashraf003/", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="border-2 border-muted hover:border-accent/50"
                    onClick={() => window.open("https://github.com/ahmadch2167", "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="border-2 border-muted hover:border-primary/50"
                    onClick={() => window.open("https://ahmadashraf.tiiny.site", "_blank")}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Current Availability</h3>
                <p className="mb-6 text-blue-100">
                  I'm currently accepting new projects and consultations. Whether you need 
                  logistics optimization or custom IT solutions, I'm here to help.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <Card className="bg-gradient-card border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Quick Contact</CardTitle>
                <p className="text-muted-foreground">
                  Choose your preferred way to connect with me
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={whatsappClick}
                  className="w-full text-lg py-6"
                >
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Chat on WhatsApp
                </Button>
                
                <Button 
                  variant="accent" 
                  size="lg" 
                  onClick={emailClick}
                  className="w-full text-lg py-6"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Send an Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-lg py-6 border-2 hover:border-primary/50"
                  onClick={() => window.open("tel:+17602848322", "_self")}
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Direct Call +1 (760) 284-8322
                </Button>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-center">Services Available</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-primary">Logistics</div>
                      <div className="text-muted-foreground">Dispatch & Operations</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-accent">Technology</div>
                      <div className="text-muted-foreground">Web & Automation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}