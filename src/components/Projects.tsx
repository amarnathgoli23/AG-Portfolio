import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Poultry App",
      description: "React.js web dashboard for monitoring environmental sensor data (CO₂, temperature, humidity, ammonia, etc.) across 20+ farms with real-time trends and historical analytics.",
      technologies: ["React.js", "REST APIs", "Data Visualization", "Real-time Monitoring"],
      category: "IoT Dashboard"
    },
    {
      title: "Tactical Combat Robot (TCR)",
      description: "PyQt-based Ground Control Station to operate robotic rover via RF, with live feeds from zoom/day/night cameras, GPS, and diagnostics.",
      technologies: ["PyQt", "Real-time Video", "GPS Integration", "RF Communication"],
      category: "Defense Technology"
    },
    {
      title: "Truck Management System",
      description: "Full-stack dashboard built using React and MongoDB to manage vehicle data, repair tracking, defect analytics with bar graphs, and equipment status monitoring.",
      technologies: ["React.js", "MongoDB", "Data Analytics", "Full-stack"],
      category: "Fleet Management"
    },
    {
      title: "ASTRA AI Surveillance",
      description: "Python UI for Jetson Orin to visualize camera-based AI detections, handled flashing, configuration, and device integration.",
      technologies: ["Python", "AI Integration", "Jetson Orin", "Computer Vision"],
      category: "AI Surveillance"
    },
    {
      title: "ResQ Watch",
      description: "Real-time monitoring UI showing vitals (pulse, oxygen, body temp) of field personnel on a live map with alert system.",
      technologies: ["React.js", "Real-time Data", "Maps Integration", "Alert Systems"],
      category: "Health Monitoring"
    },
    {
      title: "Alcohol Dispenser (AD)",
      description: "Responsive UI using React, SASS, and REST APIs for monitoring liquid levels, dispensing logs, and device status with live data visuals and alert systems.",
      technologies: ["React.js", "SASS", "REST APIs", "Industrial Safety"],
      category: "Industrial IoT"
    }
  ];

  const categoryColors = {
    "IoT Dashboard": "tech-blue",
    "Defense Technology": "tech-purple",
    "Fleet Management": "tech-green",
    "AI Surveillance": "tech-cyan",
    "Health Monitoring": "tech-blue",
    "Industrial IoT": "tech-green"
  };

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications across robotics, IoT, defense, and industrial automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    className={`bg-${categoryColors[project.category as keyof typeof categoryColors]}/10 text-${categoryColors[project.category as keyof typeof categoryColors]} border-${categoryColors[project.category as keyof typeof categoryColors]}/20`}
                  >
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-1 hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <p className="text-foreground/80 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-secondary/30 text-secondary-foreground hover:bg-secondary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;