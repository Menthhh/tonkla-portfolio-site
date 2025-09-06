import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tonkla <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">Pokaew</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            AI Engineer & Software Developer
            <br />
            <span className="text-primary-glow">Super AI Engineer Season 5 Participant</span>
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6">
              <div className="text-3xl font-bold text-accent mb-2">14+</div>
              <div className="text-sm text-white/80">AI Hackathons</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">4+</div>
              <div className="text-sm text-white/80">Industry Internships</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6">
              <div className="text-3xl font-bold text-tech-accent mb-2">3+</div>
              <div className="text-sm text-white/80">Research Projects</div>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Pathum Thani, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(+66) 064 898 0721</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>tonklapokaew@gmail.com</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;