import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Code, 
  Users, 
  Phone, 
  Bot, 
  Database, 
  MessageSquare,
  Mail
} from "lucide-react";

export function Services() {
  const whatsappClick = () => {
    window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I'm%20interested%20in%20your%20logistics%20services.", "_blank");
  };

  const techQuoteClick = () => {
    window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I%20have%20arrived%20from%20your%20website%20to%20ask%20for%20a%20quote%20on%20a%20project%20or%20to%20schedule%20a%20call.%20I%20want%20to%20know%20more%20about%20your%20tech%20services.", "_blank");
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence through leadership and technology in both logistics and IT solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Logistics Services */}
          <Card className="bg-gradient-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-in">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                <Truck className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary mb-4">
                🚚 Logistics & Dispatch Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Sales Coordination</h4>
                    <p className="text-muted-foreground">Expert sales representation for logistics companies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Dispatch Team Leadership</h4>
                    <p className="text-muted-foreground">Currently managing 5+ dispatch members</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Carrier Relations</h4>
                    <p className="text-muted-foreground">Load board optimization and carrier onboarding expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Client Negotiations</h4>
                    <p className="text-muted-foreground">Direct shipper and customer relationship management</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                onClick={whatsappClick}
                className="w-full mt-8"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp for Logistics Services
              </Button>
            </CardContent>
          </Card>

          {/* IT Services */}
          <Card className="bg-gradient-card border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-slide-in">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6 p-4 bg-accent/10 rounded-full w-fit">
                <Code className="h-12 w-12 text-accent" />
              </div>
              <CardTitle className="text-3xl font-bold text-accent mb-4">
                💻 IT & Technology Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Custom Web Development</h4>
                    <p className="text-muted-foreground">WordPress, React, Node.js - Full-stack solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Data Scraping & Automation</h4>
                    <p className="text-muted-foreground">Python, Selenium scripts and workflow automation tools</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Cold Calling & Sales</h4>
                    <p className="text-muted-foreground">Professional outreach and lead generation services</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">AI Chatbots & CRM</h4>
                    <p className="text-muted-foreground">Custom GPTs, N8N, Make.com, GHL</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="accent" 
                size="lg" 
                onClick={techQuoteClick}
                className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-blue-600 hover:from-yellow-500 hover:to-blue-700 text-white border-0"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request IT Services Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}