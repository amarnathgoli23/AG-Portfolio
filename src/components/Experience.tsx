import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions in cutting-edge technology domains
          </p>
        </div>
        
        <Card className="bg-gradient-card border-primary/20 shadow-card animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Software Engineer</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Building className="h-4 w-4" />
                  <span className="font-medium">Vir Innovations Pvt. Ltd.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Feb 2022 – Present</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mt-4 md:mt-0">
                3.5+ Years
              </Badge>
            </div>
            
            <div className="space-y-4 text-foreground/90">
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-primary">Spearheading frontend architecture</span> for real-time applications across robotics, IoT, and embedded platforms.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Built <span className="font-semibold text-primary">production-grade dashboards</span> and UI modules in over 10+ cross-functional projects, including Tactical Combat Robot, Smart Poultry App, Truck Management System, and ASTRA AI Surveillance.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Developed <span className="font-semibold text-primary">highly responsive interfaces</span> using React.js, TypeScript, SASS, and REST APIs, optimized for low-latency data rendering.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Implemented <span className="font-semibold text-primary">live tracking, real-time graphs, and map-based telemetry</span> for field-deployable applications.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Led <span className="font-semibold text-primary">mentoring for junior developers</span> and actively contributed to code reviews, testing, and deployment automation.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Designed and implemented <span className="font-semibold text-primary">reusable UI components</span>, improving development velocity by 40% and enhancing code consistency across teams.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary/20">
              <h4 className="font-semibold text-primary mb-3">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "TypeScript", "SASS", "REST APIs", "Redux", "Real-time Data", "IoT", "Robotics"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;