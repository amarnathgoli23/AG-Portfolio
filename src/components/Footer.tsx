import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/20 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Amarnath Goli
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/amarnath-goli-765aa5227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="mailto:amarnathgoli23@gmail.com"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="#"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:animate-glow"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;