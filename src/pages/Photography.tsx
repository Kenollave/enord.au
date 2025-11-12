import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import weddingImage from "@/assets/photography-wedding.jpg";
import commercialImage from "@/assets/photography-commercial.jpg";
import printsImage from "@/assets/photography-prints.jpg";

const Photography = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 w-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6 mx-auto">
              <Camera className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drone Photography
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We bring your vision to life from the sky with cinematic, high-quality aerial photography
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/#quote-form">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Our drone photography goes beyond standard snapshots – we bring your vision to life from the sky. Whether you're hosting an event, launching a property, or simply want to capture nature from above, our professional aerial photography services in Sydney ensure you receive high-quality, cinematic visuals tailored to your purpose. We use state-of-the-art drones and experienced UAV pilots to deliver clear, sharp images that stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Photography Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden">
              <img 
                src={weddingImage} 
                alt="Drone wedding photography"
                className="w-full h-[400px] object-cover"
              />
            </Card>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Drone Wedding Photography Services in Sydney
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Make your big day unforgettable with Enord's drone wedding photography services in Sydney. Our aerial footage captures wide landscapes, emotional crowd moments, venue layouts, and couple portraits from stunning perspectives.
              </p>
              <p className="text-muted-foreground">
                With a dedicated focus on detail, coordination with your wedding planner or photographer, and discreet operations, we ensure every moment is preserved beautifully – without interrupting the flow of your special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Event Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Commercial & Event Drone Photography
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our drone photography service in Sydney is ideal for commercial applications — real estate promotions, marketing campaigns, corporate functions, and product launches. Need crowd coverage at a festival or overhead shots of an outdoor setup?
              </p>
              <p className="text-muted-foreground">
                We provide flexible packages that cater to both short and extended shoots, with quick delivery and edit-ready formats. Our team works closely with clients to understand the visual goals and produce images that make an impact.
              </p>
            </div>
            <Card className="overflow-hidden">
              <img 
                src={commercialImage} 
                alt="Commercial event photography"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Aerial Prints Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden">
              <img 
                src={printsImage} 
                alt="Aerial photography prints"
                className="w-full h-[400px] object-cover"
              />
            </Card>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Buy Aerial Prints or Book Custom Shoots
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking for a standout gift or statement piece? Explore our collection of drone-captured prints – featuring landscapes, seascapes, and cityscapes — available for purchase. These high-resolution images are perfect for home decor or meaningful gifts.
              </p>
              <p className="text-muted-foreground">
                We also offer custom drone photo sessions if you'd like a unique aerial view of your property, business, or a location that matters to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Enord */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Choose Enord for Drone Photography?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Trusted, Professional & Passionate About Every Shot
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">High-end UAV technology</h3>
                  <p className="text-muted-foreground">Crystal-clear imagery with professional equipment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Skilled and CASA-certified drone operators</h3>
                  <p className="text-muted-foreground">Licensed professionals you can trust</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Personalised packages</h3>
                  <p className="text-muted-foreground">For weddings, events, or marketing needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">On-time delivery</h3>
                  <p className="text-muted-foreground">With optional post-processing included</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Creative vision combined with technical excellence</h3>
                  <p className="text-muted-foreground">You're partnering with passionate professionals who care about storytelling, visual quality, and client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Drone Photography Services Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to capture your next event or property from above? Our drone photography experts are here to guide you from planning to final delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Photography;
