import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Discover the latest trends and strategies that will shape digital marketing in the coming year.",
      author: "John Smith",
      date: "March 15, 2025",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      excerpt: "Learn best practices for creating web applications that can grow with your business needs.",
      author: "Sarah Johnson",
      date: "March 10, 2025",
      category: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "UX Design Principles That Matter",
      excerpt: "Explore essential UX design principles that create memorable user experiences.",
      author: "Michael Brown",
      date: "March 5, 2025",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "SEO Strategies for E-commerce Success",
      excerpt: "Master the art of SEO to drive more organic traffic to your online store.",
      author: "Emily Davis",
      date: "February 28, 2025",
      category: "SEO",
      image: "https://www.webhopers.com/wp-content/uploads/2024/06/Top-10-SEO-Strategies-for-eCommerce-Websites-4-900x480.png"
    },
    {
      id: 5,
      title: "Cloud Computing: A Complete Guide",
      excerpt: "Everything you need to know about leveraging cloud technologies for your business.",
      author: "David Wilson",
      date: "novmber 20, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Mobile-First Design Approach",
      excerpt: "Why starting with mobile design leads to better overall user experiences.",
      author: "Lisa Anderson",
      date: "December 15, 2025",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and stories from our team of experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:border-primary transition-all duration-300">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="text-primary font-semibold">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline">Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
