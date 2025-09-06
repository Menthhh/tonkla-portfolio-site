import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "#1 Ranked Junior Men's Sabre Fencer in Thailand (2018)",
      description: "Nationally ranked top in junior men's sabre; recognized for competitive excellence, discipline, and strategic focus.",
      category: "Sports Achievement",
      year: "2018",
      color: "tech-accent"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Multiple Hackathon Winner",
      description: "Consistently placing in top positions across 14+ AI hackathons including winner and runner-up positions in national competitions.",
      category: "Competition",
      year: "2025",
      color: "primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Python & AI Instructor",
      description: "Teaching Scratch programming at private institute and providing private Python tutoring with focus on AI development fundamentals.",
      category: "Teaching",
      year: "Ongoing",
      color: "accent"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Research Contributions",
      description: "Contributing to multimodal AI research at CMKL University and medical AI applications with real-world clinical impact.",
      category: "Research",
      year: "2024-2025",
      color: "primary"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "accent":
        return "bg-accent/10";
      case "tech-accent":
        return "bg-tech-accent/10";
      default:
        return "bg-muted/10";
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

  const getBadgeColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "tech-accent":
        return "bg-tech-accent/10 text-tech-accent";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-experience-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notable Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in competitive sports, academic research, and technical competitions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl ${getIconBgColor(achievement.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={getIconColor(achievement.color)}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getBadgeColor(achievement.color)}>
                      {achievement.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Freelance Experience Card */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Freelance Development</h3>
              <Badge className="bg-primary/10 text-primary">Remote | Self-employed | 2024</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Online Learning Platform</h4>
                <p className="text-sm text-muted-foreground">Website used by thousands of users</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">POS System</h4>
                <p className="text-sm text-muted-foreground">Part-time developer for startup businesses</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-tech-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-tech-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Government System</h4>
                <p className="text-sm text-muted-foreground">Steel Testing System for Thailand Royal Irrigation Department</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;