import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, TrendingUp, Users, Award, BookOpen, Truck, Shield, UserPlus, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Portfolio() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const rsvClick = () => {
    window.open("https://rsvlogisticsinc.com", "_blank");
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isImageModalOpen) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isImageModalOpen]);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing excellence in logistics operations and digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          
          {/* Freight Broker Course */}
          <div className="animate-slide-in">
            <Card className="bg-gradient-card border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-accent">Freight Broker Certification</CardTitle>
                    <p className="text-sm text-muted-foreground">The Midnight Freight Broker</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <img 
                      src="/course.png" 
                      alt="Freight Broker Basic Course Certificate" 
                      className="w-full max-w-32 h-auto rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={openImageModal}
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Completed comprehensive Freight Broker Basic Course covering essential skills 
                    for logistics operations and freight brokering.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Learning Areas:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5"></div>
                        Freight Brokering & Load Coordination
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5"></div>
                        Carrier Procurement & Relationship Management
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5"></div>
                        Customer Acquisition & Sales Strategy
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open("https://www.linkedin.com/company/the-midnight-freight-broker/", "_blank")}
                  className="w-full mt-auto"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Course Provider
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in">
            <Card className="bg-gradient-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">RSV Logistics Inc.</CardTitle>
                    <p className="text-sm text-muted-foreground">Digital Transformation Project</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leading the complete digital transformation of RSV Logistics Inc., including 
                    website development, SEO optimization, Google Ads management, and establishing 
                    a strong global digital presence.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-accent mx-auto mb-1" />
                      <p className="font-semibold text-sm">SEO Optimization</p>
                      <p className="text-xs text-muted-foreground">Enhanced visibility</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Users className="h-6 w-6 text-primary mx-auto mb-1" />
                      <p className="font-semibold text-sm">Team Leadership</p>
                      <p className="text-xs text-muted-foreground">Dispatch operations</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={rsvClick}
                  className="w-full mt-auto"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit
                </Button>
              </CardContent>
            </Card>
          </div>

          

          {/* Carrier Services */}
          <div className="animate-slide-in">
            <Card className="bg-gradient-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Carrier Services</CardTitle>
                    <p className="text-sm text-muted-foreground">Transportation Solutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive carrier support services helping transportation companies 
                    streamline operations and grow their business.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Factoring & Insurance</p>
                        <p className="text-xs text-muted-foreground">Onboarding new carriers to our affiliated factoring companies & commercial insurance agencies</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <UserPlus className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold text-sm">Driver Recruitment</p>
                        <p className="text-xs text-muted-foreground">New driver recruitment for transportation companies</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I%20need%20help%20with%20carrier%20services%20-%20factoring,%20insurance,%20or%20driver%20recruitment.", "_blank")}
                  className="w-full mt-auto"
                >
                  <Truck className="mr-2 h-4 w-4" />
                  Get Carrier Support
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <Card className="bg-gradient-card border-2 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-accent">Project Highlights</CardTitle>
                    <p className="text-sm text-muted-foreground">Key Achievements</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Website Development & Maintenance</h4>
                      <p className="text-xs text-muted-foreground">Full-stack development and ongoing optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Digital Marketing Strategy</h4>
                      <p className="text-xs text-muted-foreground">SEO, content strategy, and Google Ads management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Operations Leadership</h4>
                      <p className="text-xs text-muted-foreground">Managing dispatch operations while driving digital growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Global Presence Expansion</h4>
                      <p className="text-xs text-muted-foreground">Establishing international market reach and brand recognition</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open("http://upwork.com/freelancers/~0138dfea3c35d86649", "_blank")}
                  className="w-full mt-auto"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Upwork Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 animate-fade-in">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how I can help optimize your logistics operations or build your digital presence.
              </p>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I'd%20like%20to%20discuss%20a%20project.", "_blank")}
                className="bg-white/20 hover:bg-white/30 border border-white/30"
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <img 
              src="/course.png" 
              alt="Freight Broker Basic Course Certificate" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}