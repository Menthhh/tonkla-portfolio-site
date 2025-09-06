import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Software Engineering International Program (SIIE)",
      school: "King Mongkut's Institute of Technology Ladkrabang KMITL",
      location: "Bangkok, Thailand",
      period: "Expected graduate 2026",
      gpa: "3.06",
      coursework: [
        "Advanced Topic in Database system",
        "Data Structures & Algorithms", 
        "Operating Systems",
        "Software Engineering Principles",
        "Machine Learning",
        "Deep Learning",
        "Computer Networks"
      ],
      type: "current"
    },
    {
      degree: "Vocational Certificate in Electrical Engineering",
      school: "King Mongkut's university KMUTNB",
      location: "Bangkok, Thailand", 
      period: "2022",
      gpa: "3.60",
      coursework: [
        "Electrical Systems Design",
        "Control Cabinet Assembly",
        "IoT for Automation", 
        "Electrical Wiring",
        "Hands-on Electrical Lab Training"
      ],
      type: "completed"
    }
  ];

  return (
    <section className="py-20 bg-experience-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in software engineering and electrical systems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <Badge variant={edu.type === 'current' ? 'default' : 'secondary'} className={edu.type === 'current' ? 'bg-primary' : ''}>
                      {edu.type === 'current' ? 'Current' : 'Completed'}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="text-3xl font-bold text-accent mb-1">{edu.gpa}</div>
                  <div className="text-sm text-muted-foreground">GPA</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Key Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;