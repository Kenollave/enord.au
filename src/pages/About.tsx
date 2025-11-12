import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import droneImage from "@/assets/hero-drone-sydney.jpg";
import constructionImage from "@/assets/construction-drone.jpg";
import photographyImage from "@/assets/photography-wedding.jpg";
import inspectionImage from "@/assets/inspection-infrastructure.jpg";
import sergioHeadshot from "@/assets/sergio-headshot.webp";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver consistent, dependable service you can trust for every project."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge drone technology and techniques that push boundaries."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work alongside you to achieve your vision and goals."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every flight and every frame."
    }
  ];

  const services = [
    {
      title: "Drone Rentals",
      description: "Daily and monthly drone rental services in Sydney with flexible options for professionals and businesses.",
      image: droneImage
    },
    {
      title: "Drone Inspections",
      description: "Accurate inspection services for hard-to-reach or hazardous areas, saving time, cost, and risk.",
      image: inspectionImage
    },
    {
      title: "Aerial Photography",
      description: "Breathtaking aerial photography for weddings, real estate, events, and commercial projects.",
      image: photographyImage
    },
    {
      title: "Custom Solutions",
      description: "Expert team designing and building drones tailored to your exact requirements.",
      image: constructionImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elevating Possibilities in Drone Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Capture, Inspect & Create with Enord
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                At Enord, we soar beyond boundaries, ushering in a new era of possibilities through our comprehensive suite of drone services. As a pioneering force in the industry, we bring to you a blend of precision, innovation, and commitment.
              </p>
              <p className="text-lg leading-relaxed">
                Enord doesn't just stop at business solutions; we extend our passion for drones to capture life's most precious moments. Elevate your special day with our expert drone hire and wedding photography services. Whether it's weddings, events, or personal celebrations, our skilled pilots deliver breathtaking aerial shots that turn memories into timeless treasures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As we take our maiden flight into the world of drone excellence, we invite you to join us on this exciting journey. Enord is more than a name — it's a promise of reliability, innovation, and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Whether you're a professional, a business, or someone new to drone technology, Enord offers flexible drone solutions tailored to your needs. At Enord, we don't just provide services, we help you explore new heights.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary text-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="h-32 w-32 rounded-full bg-white overflow-hidden flex items-center justify-center">
                      <img 
                        src={sergioHeadshot} 
                        alt="Sergio Abbattista" 
                        className="w-full h-auto translate-y-3"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg italic mb-4 text-muted-foreground">
                      "I am Sergio, the driving force behind Enord. I embody unwavering determination, relentless hard work, and an unyielding pursuit of perfection in every endeavor. With pride in every job we undertake, I assure you of our steadfast commitment to excellence."
                    </blockquote>
                    <div className="text-right">
                      <p className="font-bold text-xl text-white">Sergio Abbattista</p>
                      <p className="text-muted-foreground font-medium">CEO, Enord</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              At Enord, we soar beyond boundaries, ushering in a new era of possibilities through our comprehensive suite of drone services. Whether you seek unparalleled drone inspections, seamless drone rentals, or bespoke drone solutions, Enord is your trusted partner, ready to elevate your expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Service</h3>
                  <p className="text-gray-700 mb-4">
                    "Exceptional drone services that exceeded our expectations."
                  </p>
                  <div className="flex justify-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Reliable Partner</h3>
                  <p className="text-gray-700 mb-4">
                    "Their commitment to excellence is evident in every project."
                  </p>
                  <div className="flex justify-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Outstanding Results</h3>
                  <p className="text-gray-700 mb-4">
                    "Innovative solutions and breathtaking aerial photography."
                  </p>
                  <div className="flex justify-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
