import { Card, CardContent } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional user experiences through code
          </p>
        </div>
        
        <div className="grid items-center">
          {/* About Content - centered and full width */}
          <div className="w-full flex justify-center animate-fade-in">
            <Card className="bg-gradient-card border-primary/20 shadow-card w-full max-w-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                  Frontend Engineer & Tech Enthusiast
                </h3>
                <div className="space-y-4 text-foreground/90 text-center">
                  <p>
                    Based in <span className="text-primary font-semibold">Hyderabad, India</span>, I'm a dedicated Software Engineer 
                    with over 3.5 years of experience specializing in frontend development.
                  </p>
                  <p>
                    At <span className="text-primary font-semibold">Vir Innovations Pvt. Ltd.</span>, I spearhead frontend architecture 
                    for real-time applications across robotics, IoT, and embedded platforms, working on mission-critical 
                    projects in defense and industrial automation.
                  </p>
                  <p>
                    I have successfully delivered <span className="text-primary font-semibold">6+ cross-functional projects</span> including 
                    Tactical Combat Robot systems, Smart Poultry monitoring applications, and AI surveillance platforms.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-primary/20">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">3.5+ Years</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Projects</h4>
                      <p className="text-sm text-muted-foreground">6+ Delivered</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Focus</h4>
                      <p className="text-sm text-muted-foreground">Frontend Development</p>
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
};

export default About;