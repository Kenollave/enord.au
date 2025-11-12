import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-drone-sydney.jpg";
import rentalImage from "@/assets/real-estate-drone.jpg";
import inspectionImage from "@/assets/inspection-infrastructure.jpg";
import photographyImage from "@/assets/photography-commercial.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const valueProps = [
    {
      icon: Shield,
      title: "Local Expertise You Can Count On",
      description: "Certified UAV operators serving Greater Sydney with years of industry experience."
    },
    {
      icon: Award,
      title: "Top-Quality Equipment",
      description: "CASA-compliant drones maintained to the highest standards for commercial use."
    },
    {
      icon: Clock,
      title: "Flexible Hire Options",
      description: "Daily, weekly, or monthly rentals tailored to Sydney businesses and creators."
    },
    {
      icon: HeadphonesIcon,
      title: "Outstanding Local Support",
      description: "Sydney-based team available to guide you from booking to flying."
    }
  ];

  const services = [
    {
      title: "Drone Rentals",
      description: "Professional-grade drones available for daily, weekly, or monthly hire with comprehensive insurance coverage.",
      image: rentalImage,
      link: "/services/rentals"
    },
    {
      title: "Drone Inspections",
      description: "Comprehensive aerial inspections for construction, infrastructure, and environmental monitoring.",
      image: inspectionImage,
      link: "/services/inspections"
    },
    {
      title: "Drone Photography",
      description: "Stunning aerial photography and videography for real estate, events, and commercial projects.",
      image: photographyImage,
      link: "/services/photography"
    }
  ];

  const steps = [
    { number: "01", title: "Choose Your Drone", description: "Browse Sydney's most reliable hire options." },
    { number: "02", title: "Select Your Period", description: "Daily, weekly, or monthly rental terms." },
    { number: "03", title: "Book Online", description: "Quick and easy booking with our Sydney team." },
    { number: "04", title: "Start Flying", description: "Expert guidance always one call away." }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden py-12">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional drone flying over Sydney Harbour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sydney Drone Hire Made Easy
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Fully Insured, Flexible, Ready When You Are
              </p>
              <p className="text-lg mb-8 text-white/80">
                Trusted by Sydney's construction, real estate, and creative industries
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="cta">
                  <Link to="/services/rentals">Rent a Drone in Sydney Today</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="quote-form" className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-2">Get a Quote</h2>
              <p className="text-muted-foreground mb-6">Tell us about your project</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Enord UAV Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sydney's trusted drone hire service with everything you need for successful aerial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary rounded-lg">
            <div className="flex items-center justify-center gap-3 text-center">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg font-semibold">
                Fully Insured & CASA Compliant — Peace of mind with coverage and compliance to Australian aviation laws
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional drone hire for every Sydney project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-white font-semibold text-base hover:text-primary transition-colors underline underline-offset-4">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="cta">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and professional drone hire in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals / Case Studies */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Across Sydney</h2>
              <p className="text-lg text-primary-foreground/90">
                From Sydney CBD to Northern Beaches, Western Sydney to Inner West — we serve them all
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Construction Sites</h3>
                  <p className="text-gray-700 mb-4">
                    "Progress documentation saved us weeks of project delays"
                  </p>
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Real Estate</h3>
                  <p className="text-gray-700 mb-4">
                    "Property views increased by 40% with aerial footage"
                  </p>
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Events</h3>
                  <p className="text-gray-700 mb-4">
                    "Stunning coverage of our Darling Harbour event"
                  </p>
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why Sydney businesses trust Enord UAV Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => {
                const quoteForm = document.getElementById('quote-form');
                if (quoteForm) {
                  quoteForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setTimeout(() => {
                    quoteForm.classList.add('highlight-quote-form');
                    setTimeout(() => {
                      quoteForm.classList.remove('highlight-quote-form');
                    }, 2000);
                  }, 300);
                }
              }}
            >
              Get a Free Quote
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
