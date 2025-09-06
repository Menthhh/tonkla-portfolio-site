import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Super AI Engineer Season 5",
      role: "Participant, Kiddee Member",
      company: "AIAT",
      location: "Pathumthani, Thailand",
      period: "2025",
      highlights: [
        "Selected as a top participant in Thailand's national Super AI Engineer Season 5 program",
        "Competed in 14+ AI hackathons covering Data Science, Deep Learning, NLP & LLMs, IoT, and Image Processing",
        "Built and deployed AI models using High Performance Computing (HPC) SiamAI, Lanta Cluster, and Huawei Cloud",
        "Winner – Sales & Demand Forecasting Challenge by CP Axtra",
        "2nd Runner-Up – IoT Coastal Erosion Mitigation Challenge",
        "1st Runner-Up – Cognitive Profiling Prediction (Action Recognition)",
        "Advanced to the final round of the SCBX x SCB10X International Online Hackathon 2025"
      ],
      tags: ["AI/ML", "Deep Learning", "HPC", "Hackathons", "Competition"]
    },
    {
      title: "AI-Engineer Internship",
      role: "AI Engineer Intern",
      company: "Natachat Co.,Ltd.",
      location: "Bangkok, Thailand",
      period: "Aug 2025 – Present (ending Sep 2025)",
      highlights: [
        "Developing a Customer Service AI product leveraging LLMs, fine-tuning, RAG, and agent-based architectures",
        "Deployed solutions on AWS EC2 for production use",
        "Delivered workshop for MEA on fine-tuning, few-shot prompting, and LLM evaluation",
        "Serving as project lead intern, contributing to all development phases"
      ],
      tags: ["LLMs", "RAG", "AWS", "Fine-tuning", "Customer Service AI"]
    },
    {
      title: "Research Assistant Internship",
      role: "Data Engineer",
      company: "CMKL University",
      location: "Bangkok, Thailand",
      period: "Nov 2024 - Feb 2025",
      highlights: [
        "Joint research institute between Carnegie Mellon University and KMITL",
        "Contributed to development of a multimodal AI model specialized in Thai language",
        "Responsible for collecting Thai-language datasets from verified and trusted sources",
        "Utilized Cluster Computer APEX for model training and data processing"
      ],
      tags: ["Multimodal AI", "Thai NLP", "Data Engineering", "Research"]
    },
    {
      title: "Software Engineer Intern",
      role: "Software Engineer",
      company: "MOHARA",
      location: "Bangkok, Thailand",
      period: "Apr 2025 - Jun 2025",
      highlights: [
        "Collaborated with international Agile team using Jira and Bitbucket",
        "Designed and developed web-based products for real client needs",
        "Contributed to frontend and backend development with modern frameworks",
        "Implemented responsive UIs and end-to-end APIs with tRPC"
      ],
      tags: ["Agile", "Full-Stack", "tRPC", "Frontend", "Backend"]
    },
    {
      title: "Full Stack Developer Intern",
      role: "Full Stack Developer",
      company: "Good Application",
      location: "Bangkok, Thailand",
      period: "Jun 2024 – Dec 2024",
      highlights: [
        "Led development of the company’s core product, managing backend, frontend, and database implementation",
        "Oversaw end-to-end feature delivery, ensuring system reliability and scalability",
        "Coordinated project tasks and collaborated with team members for timely delivery"
      ],
      tags: ["Full-Stack", "Backend", "Frontend", "Database Management", "Team Collaboration"]
    },
    {
      title: "Web Developer Intern",
      role: "Full stack Developer",
      company: "Western Digital Technologies, Inc.",
      location: "Ayutthaya, Thailand",
      period: "Apr 2024 - Jun 2024",
      highlights: [
        "Designed and developed internal Preventive Maintenance Web Application",
        "Replaced manual, paper-based workflows across Thai headquarters",
        "Built cross-device compatible system for desktop, tablet, and mobile",
        "Delivered digitized solution actively used across multiple departments"
      ],
      tags: ["Web Development", "Cross-platform", "Internal Tools", "Process Automation"]
    }
  ];

  return (
    <section className="py-20 bg-experience-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI research to production systems, building solutions across diverse domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{exp.role}</p>
                  <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;