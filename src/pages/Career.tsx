import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, DollarSign } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "We're looking for an experienced frontend developer to join our growing team and help build amazing user experiences."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Join our design team to create intuitive and beautiful interfaces that users love."
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $110k",
      description: "Lead our digital marketing efforts and help us reach new audiences through innovative campaigns."
    },
    {
      id: 4,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Build scalable backend systems that power our platform and serve millions of users."
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Boston",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Drive product strategy and work with cross-functional teams to deliver exceptional products."
    },
    {
      id: 6,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      salary: "$50k - $70k",
      description: "Create compelling content that engages our audience and drives our brand forward."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible work schedule",
    "Remote work options",
    "Professional development budget",
    "Generous vacation policy",
    "Team building events",
    "Latest tech equipment"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Build your career with us and make an impact on millions of users worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We believe in creating an environment where everyone can thrive and do their best work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <p className="font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.description}</CardDescription>
                      </div>
                      <Button className="md:self-start whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Match?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our team.
            </p>
            <Button size="lg">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
