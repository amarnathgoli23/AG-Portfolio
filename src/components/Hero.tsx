import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
      {/* Background */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/70" />
      </div> */}
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Amarnath Goli
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Specialized in building responsive and scalable web applications with 3.5+ years of experience in React.js, TypeScript, and modern frontend technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:amarnathgoli23@gmail.com">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary transition-all duration-300"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/amarnath-goli-765aa5227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:amarnathgoli23@gmail.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-float"
        >
          <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default Hero;