import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Rocket,
  Building,
  Globe
} from "lucide-react";

export function About() {
  const skills = [
    "Leadership", "Logistics Operations", "Digital Marketing", "Web Development", 
    "AI Tools", "Team Management", "Sales Strategy", "Data Analysis"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Ahmad</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "I believe in delivering excellence through leadership and technology."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <Card className="bg-gradient-card border-2 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Professional Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Education</h4>
                      <p className="text-muted-foreground">BS Computer Science (2019-2023)</p>
                      <p className="text-sm text-muted-foreground">Superior University, Gold Campus Lahore</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Self Employed (2019-2021)</h4>
                      <p className="text-muted-foreground">Data Scraping, Python automation, Web development, SEO & IT sales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Falcon Tech Solutions (Apr-Dec 2021)</h4>
                      <p className="text-muted-foreground">Dispatch Executive (Internee)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Alpha Enterprises (Jan 2022-Aug 2023)</h4>
                      <p className="text-muted-foreground">Sales Executive → Sales Manager</p>
                      <p className="text-sm text-muted-foreground">Closed $52k+ business, led 12 members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Southshore Logistics (Sep-Dec 2023)</h4>
                      <p className="text-muted-foreground">Dispatch Manager - Led 6 member team</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-card border-2 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Current Role</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    <span className="font-semibold text-lg">Brother Dispatch LLC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-accent" />
                    <span className="text-muted-foreground">Lead Strategist - Logistics Dispatch & IT Solutions</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                  7+ US logistics clients, IT outsourcing agency
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-2 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}