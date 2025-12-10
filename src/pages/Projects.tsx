import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      description: "Complete redesign and development of a modern e-commerce platform with improved user experience and conversion rates.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "bg-gradient-to-br from-primary/20 to-secondary",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media Marketing",
      description: "Successful multi-platform social media campaign that increased brand awareness by 300% and engagement by 250%.",
      tags: ["Instagram", "Facebook", "Content Strategy"],
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
    },
    {
      title: "Corporate Video Production",
      category: "Video Editing",
      description: "High-quality corporate video showcasing company values and services, resulting in improved brand perception.",
      tags: ["Video Production", "Motion Graphics", "Storytelling"],
      image: "bg-gradient-to-br from-secondary to-muted",
    },
    {
      title: "SEO Optimization Project",
      category: "Digital Marketing",
      description: "Comprehensive SEO strategy that improved organic traffic by 400% and search rankings across key terms.",
      tags: ["SEO", "Content Marketing", "Analytics"],
      image: "bg-gradient-to-br from-primary/30 to-accent/20",
    },
    {
      title: "Mobile App Development",
      category: "App Development",
      description: "Feature-rich mobile application with intuitive UI/UX design and seamless performance across devices.",
      tags: ["React Native", "UI/UX", "Mobile"],
      image: "bg-gradient-to-br from-accent/30 to-secondary/20",
    },
    {
      title: "Brand Identity Redesign",
      category: "Branding",
      description: "Complete brand identity overhaul including logo design, color palette, and brand guidelines.",
      tags: ["Branding", "Design", "Strategy"],
      image: "bg-gradient-to-br from-primary/20 to-muted",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses grow
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
              >
                <div className={`aspect-video ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to See Your Project Here?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Get in touch to start your project.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
