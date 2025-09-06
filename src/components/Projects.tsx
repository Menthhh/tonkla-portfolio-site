import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI for Benign Nevus Classification",
      period: "2025– Present",
      description:
        "Medical AI project supervised by the Faculty of Medicine, KMITL, including dermatology professors and medical students.",
      highlights: [
        "Dataset of 61 patients (Thai & Lao, ages 23–58) collected and annotated by medical students under dermatologist supervision",
        "Designed multi-modal deep learning pipeline (ConvNeXt, MLP, embeddings) for benign nevus subtype classification",
        "Established baseline F1-score of 0.95 with ongoing research for performance improvement",
        "Expanding to malignant melanoma, seborrheic keratosis, and atypical lesions for clinical deployment",
      ],
      technologies: ["PyTorch", "ConvNeXt", "MLP", "Computer Vision", "Medical AI"],
      status: "In Progress",
      category: "Medical AI",
      codeUrl: "",
      demoUrl: "",
    },
    {
      title: "Acne Detection & Severity Grading",
      period: "2025– Present",
      description:
        "Collaborative project with Faculty of Medicine, KMITL for automated acne detection and severity assessment.",
      highlights: [
        "Clinical acne dataset collection under dermatologist supervision with IRB approval in drafting",
        "Established baseline detection pipeline using YOLO11",
        "Developing mobile application for streamlined dataset collection under standardized protocols",
        "Long-term goal to deploy mobile app for public use enabling real-time acne detection and self-assessment",
      ],
      technologies: ["YOLO11", "PyTorch", "Roboflow", "Mobile Development", "Computer Vision", "Medical AI"],
      status: "In Progress",
      category: "Medical AI",
      codeUrl: "",
      demoUrl: "",
    },
    {
      title: "SafeCall – Thai Scam Call Detector",
      period: "2024",
      description:
        "AI-powered system to detect and flag scam behavior in real-time during Thai-language phone conversations.",
      highlights: [
        "Designed lightweight AI for web-based scam detection system",
        "Built speech recognition pipeline for transcription with encoder model for semantic context extraction",
        "Applied Knowledge Representation and Reasoning (KRR) techniques against structured fraud knowledge base",
        "Enabled early scam detection without cloud resources, improving accessibility and privacy for Thai users",
      ],
      technologies: ["Python", "HuggingFace", "Prolog", "Speech Recognition", "KRR"],
      status: "Completed",
      category: "NLP & Security",
      codeUrl: "",
      demoUrl: "",
    },
    {
      title: "Brain Tumor Classification – Kaggle",
      period: "2025",
      description:
        "Deep learning pipeline for brain tumor type classification using MRI images, developed and benchmarked on Kaggle.",
      highlights: [
        "Implemented DenseNet121 and ResNet50 architectures for multi-class brain tumor classification",
        "Utilized Grad-CAM to visualize discriminative regions and improve model interpretability",
        "Achieved high accuracy on Kaggle dataset",
        "Explored model performance trade-offs between deeper and lightweight CNN architectures",
      ],
      technologies: ["PyTorch", "DenseNet121", "ResNet50", "Grad-CAM", "Computer Vision", "Kaggle", "Medical AI"],
      status: "Completed",
      category: "Medical AI",
      codeUrl: "",
      demoUrl: "",
    },
    {
      title: "Electronics Preventive Maintenance System",
      period: "2024",
      description:
        "Full-stack web system for managing monthly preventive maintenance of machine operations within the company.",
      highlights: [
        "Designed and implemented the entire system including backend, frontend, and database structure",
        "Developed core modules for scheduling, logging, and reporting preventive maintenance tasks",
        "Streamlined preventive maintenance processes, improving efficiency of data entry and reporting"
      ],
      technologies: ["Next.js", "MongoDB", "TypeScript", "Full-Stack Development"],
      status: "Completed",
      category: "Full-Stack Web",
      codeUrl: "", // add repo if available
      demoUrl: "", // add demo link if available
    },
      {
    title: "AI Bangkok Transit Optimizer",
    period: "2024",
    description:
      "AI-powered route optimization system for Bangkok’s MRT, BTS, Red Line, and Airport Rail Link networks.",
    highlights: [
      "Developed algorithms to minimize travel time, cost, and line transfers across Bangkok’s major transit systems",
      "Implemented A* search algorithm in Python for efficient route planning",
      "Integrated Prolog for knowledge-based reasoning on transit line rules and constraints",
      "Engineered a system capable of suggesting optimal routes balancing multiple travel objectives"
    ],
    technologies: ["Python", "Prolog", "A* Algorithm", "AI Search", "Route Optimization"],
    status: "Completed",
    category: "AI & Optimization",
    codeUrl: "", // add GitHub repo if you have it
    demoUrl: ""  // add demo/visualization link if available
  }

  ];


  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-tech-accent/10 text-tech-accent";
      case "Completed":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Medical AI":
        return "bg-primary/10 text-primary";
      case "NLP & Security":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI research and Web development projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{project.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-muted/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.codeUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Learn More
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
