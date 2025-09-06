import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "tonklapokaew@gmail.com",
      href: "mailto:tonklapokaew@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "(+66) 064 898 0721",
      href: "tel:+66648980721",
      color: "accent"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Pathum Thani, Thailand",
      href: "#",
      color: "tech-accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      href: "https://github.com/Menthhh",
      color: "bg-foreground text-background hover:bg-foreground/90"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",  
      href: "https://www.linkedin.com/in/tonkla-pokaew-018371255",
      color: "bg-primary text-white hover:bg-primary/90"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "Let's Chat",
      href: "mailto:tonklapokaew@gmail.com",
      color: "bg-accent text-white hover:bg-accent/90"
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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in AI/ML, software development, and research collaborations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 ${getIconBgColor(method.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={getIconColor(method.color)}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <a 
                  href={method.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {method.value}
                </a>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for an AI engineer, software developer, or research partner, 
              I'm always excited to work on innovative projects that make a real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <Button 
                  key={index}
                  asChild
                  className={link.color}
                >
                  <a href={link.href} target={link.name !== "Let's Chat" ? "_blank" : undefined} rel="noopener noreferrer">
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* Availability Notice */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;