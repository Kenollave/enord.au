import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import aerialPhotography from "@/assets/blog-aerial-photography.jpg";
import droneTechnology from "@/assets/blog-drone-technology.jpg";
import regulations from "@/assets/blog-regulations.jpg";
import realEstateTips from "@/assets/blog-real-estate-tips.jpg";
import inspections from "@/assets/blog-inspections.jpg";
import choosingDrone from "@/assets/blog-choosing-drone.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Aerial Photography: Tips from the Pros",
    excerpt: "Discover professional techniques for capturing stunning aerial photographs that stand out from the crowd.",
    image: aerialPhotography,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Photography",
    slug: "aerial-photography-tips"
  },
  {
    id: 2,
    title: "Latest Drone Technology Trends in 2024",
    excerpt: "Explore cutting-edge innovations in drone technology that are transforming industries across Australia.",
    image: droneTechnology,
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    slug: "drone-technology-trends"
  },
  {
    id: 3,
    title: "Understanding Australian Drone Regulations",
    excerpt: "A comprehensive guide to navigating CASA regulations and ensuring compliance for commercial drone operations.",
    image: regulations,
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Regulations",
    slug: "drone-regulations"
  },
  {
    id: 4,
    title: "Maximizing Property Value with Drone Photography",
    excerpt: "Learn how professional aerial imagery can dramatically increase engagement and sales in real estate listings.",
    image: realEstateTips,
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Real Estate",
    slug: "real-estate-tips"
  },
  {
    id: 5,
    title: "Industrial Inspections: The Drone Advantage",
    excerpt: "Discover how drones are revolutionizing safety and efficiency in industrial inspection workflows.",
    image: inspections,
    date: "February 22, 2024",
    readTime: "8 min read",
    category: "Industrial",
    slug: "industrial-inspections"
  },
  {
    id: 6,
    title: "Choosing the Right Drone for Your Business",
    excerpt: "An expert guide to selecting the perfect drone equipment for your specific commercial needs and budget.",
    image: choosingDrone,
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Guides",
    slug: "choosing-drone"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drone Insights & News
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest trends, tips, and innovations in the world of aerial technology
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our expert team bring your vision to life with professional drone services
              </p>
              <Button asChild variant="cta" size="lg">
                <Link to="/services">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
