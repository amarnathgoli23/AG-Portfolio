import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amarnathgoli23@gmail.com",
      href: "mailto:amarnathgoli23@gmail.com",
      color: "tech-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9652308910",
      href: "tel:+919652308910",
      color: "tech-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "tech-purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/amarnath-goli-765aa5227",
      color: "tech-cyan"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Let's Connect
              </h3>
              <p className="text-foreground/80">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in frontend development, especially in robotics, IoT, and real-time applications.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
                  >
                    <div className={`p-3 rounded-lg bg-${item.color}/10 border border-${item.color}/20 group-hover:animate-glow`}>
                      <IconComponent className={`h-5 w-5 text-${item.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 shadow-card animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    className="bg-background/50 border-primary/20 focus:border-primary min-h-32"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;