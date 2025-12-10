import { Card } from "@/components/ui/card";
import { DollarSign, Instagram, Video, Globe, TrendingUp, Mail, Search, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Paid Traffic Campaign",
      description: "Experience the power of data-driven decisions with ROI-Driven Advertising. We design our paid traffic campaigns for the greatest return on investment, ensuring that each click generates significant outcomes.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "LinkedIn Advertising",
        "Performance Analytics",
      ],
    },
    {
      icon: <Instagram className="w-12 h-12" />,
      title: "Social Media Marketing",
      description: "Create, Connect, Convert is our straightforward yet effective social media marketing approach. We assist you in producing engaging content, building genuine connections with your audience, and turning followers into loyal clients.",
      features: [
        "Content Strategy",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Analytics",
      ],
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Turning Moments into Masterpieces: Our video editing services give your film new life by expertly fusing narrative with images to create a cinematic effect.",
      features: [
        "Commercial Video Production",
        "Social Media Content",
        "Motion Graphics",
        "Color Grading",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Development",
      description: "Trust our website development services for a fast and safe online presence. Security and speed together. We use best practices to maintain the speed and security of your website.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "SEO Optimization",
        "Maintenance & Support",
      ],
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Services",
      description: "Boost your online visibility with our comprehensive SEO strategies. We help your business rank higher in search results and attract more organic traffic.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Technical SEO",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Growth Strategy",
      description: "Strategic planning and execution to scale your business effectively. We analyze your market position and create actionable plans for sustainable growth.",
      features: [
        "Market Analysis",
        "Growth Planning",
        "Performance Tracking",
        "Business Consulting",
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Marketing",
      description: "Engage your audience with targeted email campaigns that convert. We create compelling content and automated workflows to nurture your leads.",
      features: [
        "Campaign Design",
        "List Management",
        "A/B Testing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Marketing",
      description: "Maximize your app's visibility and downloads with our specialized mobile app marketing services.",
      features: [
        "App Store Optimization",
        "User Acquisition",
        "Retention Strategies",
        "App Analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 space-y-6 border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
              >
                <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Contact us today to discuss your project.
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

export default Services;
