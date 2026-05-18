import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Share2, Camera, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-image.jpg";
import teamMember from "@/assets/team-member.jpg";

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Information Technology (IT) Solutions",
      description:
        "We offer complete IT solutions including website development, mobile app development, custom software, UI/UX design, e-commerce platforms, cloud services, cybersecurity, IT support, and API integration—helping businesses grow with secure, scalable, and innovative technology.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Digital Marketing & Media Management",
      description:
        "We provide result-driven Digital Marketing & Media Management solutions, including social media handling, content creation, branding, SEO, ads, and analytics—helping businesses grow, engage audiences, and build a powerful online presence.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Product Shoots & Creative Content Production",
      description:
        "We deliver high-quality Product Shoots and Creative Content Production that showcase your brand with clarity and impact. From photos and videos to storytelling visuals, we create content that boosts engagement, enhances appeal, and drives customer interest.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Research & Business Intelligence",
      description:
        "We craft elite Market Research and Business Intelligence frameworks that decode markets with precision, reveal deep consumer intent, and illuminate untapped opportunities. Our insights empower leaders to make visionary decisions.",
    },
  ];

  const trustedBy = ["Company A", "Company B", "Company C", "Company D"];

  const teamMembers = [
    {
      name: "Mr. Hariom Saini",
      title: "Founder Of Fitscalez &\nDirector of  Pvt. Ltd.",
      image: teamMember,
    },
    {
      name: "Ms. Anshul Sharma",
      title: "Partner Of Fitscalez",
      image: teamMember,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-lg md:text-xl font-medium text-primary tracking-wide animate-fade-in">
              Fitness Experts for your Business
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              FITSCALEZ
            </h1>
            <div className="h-1 w-32 bg-primary mx-auto" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Digital, IT & Cyber Tech Solutions Fitscalez
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold">
                Welcome to FISCALL
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                FISCALL stands committed to setting new industry standards and
                driving transformative growth for businesses across PAN-India
                and global markets. We combine innovation, expertise, and
                strategic thinking to deliver solutions that truly make a
                difference.
              </p>
              <Link to="/about">
                <Button className="group">
                  Know more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Us"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What do we do?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help your brand with everything we know in order to scale-up
              your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="group">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sales & Marketing Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sales & Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium solutions designed for trusted, proven, and results-driven
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Premium Offerings</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our business delivers premium, high-value, and best-selling
                solutions designed to give every customer a trusted, proven, and
                results-driven experience. With feature-rich, user-friendly, and
                innovative offerings, we ensure a reliable, high-performance,
                and cost-effective journey for individuals and enterprises.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our exclusive, limited-time, value-packed deals guarantee
                instant savings, hassle-free usage, and a truly enhanced
                experience. Whether you seek customizable, scalable, or
                next-generation solutions, we deliver a complete, secure, and
                industry-leading service that maximizes efficiency and increases
                ROI.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-semibold text-primary">
                Choose the smart choice today with our top-rated, early-access,
                special-discount, and must-have offerings designed for growth,
                performance, and long-term success.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-primary/20 hover:border-primary transition-colors">
                <h4 className="text-xl font-bold mb-4">
                  Digital Marketing Excellence
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our digital marketing solutions are designed to deliver
                  powerful visibility, consistent engagement, and measurable
                  growth for every brand.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Data-driven strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Audience-focused campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">High-converting content</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-primary/20 hover:border-primary transition-colors">
                <h4 className="text-xl font-bold mb-4">Strategic Advantage</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our team ensures optimized performance, smart targeting, and
                  scalable results through SEO, social media, paid ads, and
                  automation. Whether you want brand elevation, lead
                  acceleration, or revenue expansion, we provide the strategic
                  advantage needed to outperform competitors and dominate your
                  digital space.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Specialized Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {member.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
