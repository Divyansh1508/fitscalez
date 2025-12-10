import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Users,
  Headphones,
  MessageSquare,
  TrendingUp,
  Award,
  Globe,
  Target,
} from "lucide-react";

const Scgs = () => {
  const bpoServices = [
    {
      title: "Inbound Process",
      description:
        "Handle incoming customer interactions with professional expertise",
      icon: <Phone className="h-8 w-8 text-primary" />,
      services: [
        "Customer Support / Helpdesk",
        "Query Resolution",
        "Order Tracking & Status Updates",
        "Complaint Handling",
        "Technical Support",
        "Toll-Free / Customer Care Calls",
        "Appointment & Service Requests",
      ],
    },
    {
      title: "Outbound Process",
      description:
        "Focus on outgoing customer communication and lead generation",
      icon: <Users className="h-8 w-8 text-primary" />,
      services: [
        "Telemarketing & Sales Calls",
        "Lead Generation & Lead Qualification",
        "Payment / Collection Calls",
        "Feedback & Survey Calls",
        "Follow-Up & Reminder Calls",
        "Product/Service Upselling & Cross-selling",
      ],
    },
    {
      title: "Blended Process",
      description:
        "Combined inbound and outbound processes handled by the same team",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      services: [
        "Unified Customer Support & Follow-Up",
        "Sales Support + Query Handling",
        "Order Processing + Confirmation Calls",
        "Service Requests + Feedback Collection",
        "Helpdesk + Lead Nurturing",
        "Mixed Customer Service & Telemarketing",
      ],
    },
  ];

  const projects = [
    {
      company: "Bharti Airtel",
      title: "Bilingual Online Registration",
      description:
        "NivioTechnologies Collaboration for online storage space services",
      features: [
        "Data filtration according to individual states",
        "Activation and generation of DSL IDs and passwords",
        "Customer awareness for online storage usage",
        "Online registration assistance for 10 GB free storage",
        "N-drive software download assistance",
        "Online Desktop Computing information",
      ],
    },
    {
      company: "Rishabh Hyundai",
      title: "Best Hyundai Dealer in Delhi",
      description: "Complete CRM and inbound process management",
      features: [
        "Attendance of all dealership calls",
        "Call distribution to various departments",
        "Customer Care services",
        "Insurance Renewal handling",
        "Service Bookings management",
      ],
    },
    {
      company: "WYN CABS",
      title: "Taxi Management System",
      description: "24/7 inbound process for taxi dispatch and management",
      features: [
        "Customer call reception through IVR",
        "Data collection and query dispatch",
        "24/7 inbound process (7 days a week)",
        "HR Management",
        "Manual/Automated Dispatch System",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4">SCGS Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            BPO - Inbound Outbound & Blended
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our BPO services deliver seamless customer experiences through
            expertly managed inbound, outbound, and blended processes, all
            executed under strict SCGS (Sure Call Global Services Pvt. Ltd.)
            standards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              Contact Sales
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Award className="h-4 w-4" />
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SCGS BPO Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure accuracy, professionalism, and efficiency at every
              touchpoint with trained agents and advanced communication systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">PAN-India Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Extensive reach across India and global markets
              </p>
            </Card>
            <Card className="text-center p-6">
              <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock customer service excellence
              </p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quality Driven</h3>
              <p className="text-sm text-muted-foreground">
                Strict quality control and monitoring
              </p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Results Focused</h3>
              <p className="text-sm text-muted-foreground">
                Boost conversions and customer satisfaction
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* BPO Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our BPO Service Processes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your customer interaction needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bpoServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our BPO Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Success stories across various industries
            </p>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="mb-2">{project.company}</Badge>
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Customer Operations?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with SCGS for professional, efficient, and results-driven
            BPO services that enhance customer satisfaction and boost your
            business growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scgs;
