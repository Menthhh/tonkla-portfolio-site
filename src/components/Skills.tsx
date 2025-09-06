import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "SQL", "JavaScript/TypeScript", "C/C++", "Java"],
      color: "primary"
    },
    {
      title: "AI Tools & Frameworks", 
      icon: <Database className="h-6 w-6" />,
      skills: [
        "PyTorch", "TensorFlow", "HuggingFace", "Pandas", 
        "Matplotlib", "OpenCV", "LLM providers", "Unsloth", 
        "LlamaIndex", "CrewAI"
      ],
      color: "accent"
    },
    {
      title: "Web & DevOps Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "NodeJS", "NextJS", "tRPC", "RestAPI", "FastAPI", 
        "MySQL", "PostgreSQL", "Supabase", "MongoDB", 
        "Linux", "HPC environment"
      ],
      color: "tech-accent"
    },
    {
      title: "Development Materials",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Jira", "SourceTree", "Git", "Bitbucket", "Turbo repo"],
      color: "primary"
    }
  ];

  const getSkillColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "accent": 
        return "bg-accent/10 text-accent hover:bg-accent/20";
      case "tech-accent":
        return "bg-tech-accent/10 text-tech-accent hover:bg-tech-accent/20";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "accent":
        return "text-accent"; 
      case "tech-accent":
        return "text-tech-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI/ML, web development, and modern tech stack
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                  <div className={getIconColor(category.color)}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className={`${getSkillColor(category.color)} transition-colors cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Qualifications */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Additional Qualifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Language Proficiency</h4>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    IELTS 6.0/9.0
                  </Badge>
                  <span className="text-muted-foreground">English (2022)</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Teaching Experience</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Python & Scratch Programming Tutor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">AI Development Fundamentals Instructor</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;