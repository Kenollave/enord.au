import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Radio, Camera, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import constructionImage from "@/assets/construction-drone.jpg";
import realEstateImage from "@/assets/real-estate-drone.jpg";
import eventImage from "@/assets/event-drone.jpg";

const Services = () => {
  const services = [
    {
      icon: Radio,
      title: "Drone Rentals Sydney",
      description: "Professional drone equipment rentals for all your aerial projects",
      image: eventImage,
      link: "/services/rentals",
      features: [
        "Latest DJI drone models",
        "Flexible rental periods",
        "Full equipment insurance",
        "Technical support included",
        "Delivery and pickup available",
        "Training sessions available"
      ]
    },
    {
      icon: Building2,
      title: "Drone Inspections Sydney",
      description: "Comprehensive aerial inspections for infrastructure and property assessments",
      image: constructionImage,
      link: "/services/inspections",
      features: [
        "Building and roof inspections",
        "Infrastructure assessments",
        "Solar panel surveys",
        "Thermal imaging capabilities",
        "Detailed reporting",
        "Compliance documentation"
      ]
    },
    {
      icon: Camera,
      title: "Drone Photography Sydney",
      description: "Professional aerial photography services for stunning visual content",
      image: realEstateImage,
      link: "/services/photography",
      features: [
        "Real estate photography",
        "Event coverage",
        "Landscape and nature shots",
        "4K video production",
        "Twilight photography",
        "Professional editing included"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sydney Drone Hire Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            From Construction to Content — Professional Drone Hire for Every Project
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book Your Drone Today</Link>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`mb-20 last:mb-0 ${index % 2 === 1 ? 'bg-secondary' : ''} ${index % 2 === 1 ? 'py-12 -mx-4 px-4' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="cta">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certified Operators */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certified Operator Hire Available
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Need a fully qualified pilot? Our CASA-certified operators can handle all your aerial requirements with precision and professionalism.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Enquire About Operator Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our Sydney team today for a free quote and expert advice
          </p>
          <Button asChild size="lg" variant="cta">
            <Link to="/#quote-form">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
