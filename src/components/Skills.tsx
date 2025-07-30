import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "tech-blue",
      skills: ["JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Frontend",
      icon: Globe,
      color: "tech-purple",
      skills: ["React.js", "Ionic React", "QML", "Tailwind CSS", "SASS/SCSS", "CSS3", "HTML5"]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "tech-cyan",
      skills: ["Git", "Redux", "Axios", "UI Debugging", "Data Visualization", "REST API Integration"]
    },
    {
      title: "Database",
      icon: Database,
      color: "tech-green",
      skills: ["MongoDB", "MySQL"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 group-hover:animate-glow`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-center mb-4 text-primary">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/20 border-secondary/30 hover:bg-secondary/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;