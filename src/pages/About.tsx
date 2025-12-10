import { Card } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower businesses with innovative solutions that drive sustainable growth and success in the digital landscape.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions for our clients.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in building strong partnerships with our clients, working together to achieve extraordinary results.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Quality is at the heart of everything we do. We strive for perfection in every project we undertake.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Fitscalez</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutImage} 
                alt="Our Story" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fitscalez was founded with a vision to redefine business development as a dynamic path towards sustainable growth and success. We understand that in today's fast-paced digital world, businesses need more than just strategies – they need a reliable partner who can navigate the complexities of the modern market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unwavering dedication to quality and our enthusiasm for creativity make us the ideal collaborator for businesses looking to scale. We combine industry expertise with innovative thinking to deliver solutions that not only meet but exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 space-y-4 border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to transform your vision into reality and achieve sustainable growth.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
