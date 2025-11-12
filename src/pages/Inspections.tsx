import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import constructionImage from "@/assets/construction-drone.jpg";
import infrastructureImage from "@/assets/inspection-infrastructure.jpg";
import constructionMonitoringImage from "@/assets/inspection-construction.jpg";
import environmentalImage from "@/assets/inspection-environmental.jpg";

const Inspections = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 w-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6 mx-auto">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drone Inspections
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Step into the future of inspections with advanced drone inspection services in Sydney
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/#quote-form">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Are Drone Inspections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Are Drone Inspection Services?
            </h2>
            <p className="text-lg text-muted-foreground">
              Drone inspection services use unmanned aerial vehicles (UAVs) to capture high-resolution images, videos, and sensor data from above. They replace or complement traditional inspection methods, allowing businesses to assess assets, infrastructure, and environments without putting workers at risk or causing costly downtime. From roofs and bridges to construction sites and farmland, drones make inspections faster, safer, and more detailed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Drone Inspection Services?
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional inspections often require scaffolding, cranes, or costly shutdowns. With Enord, you can inspect hard-to-reach areas quickly and safely, without disrupting your operations. Our drones capture high-resolution images and videos, offering a clear and detailed perspective that ground inspections simply cannot match. This means reduced risks, lower costs, and better decision-making.
              </p>
            </div>
            <div>
              <Card className="overflow-hidden">
                <img 
                  src={constructionImage} 
                  alt="Drone inspection advantages"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Applications of Our Drone Inspection Services in Sydney
          </h2>
          
          <div className="space-y-16">
            {/* Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="overflow-hidden order-2 lg:order-1">
                <img 
                  src={infrastructureImage} 
                  alt="Infrastructure inspections"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
              <div className="order-1 lg:order-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Infrastructure Assessments</h3>
                    <p className="text-lg text-muted-foreground">
                      From bridges to high-rise buildings, our drones can reach challenging spots and provide detailed visuals for structural evaluation. This ensures issues are identified early, helping you prevent costly repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Construction Progress Monitoring</h3>
                    <p className="text-lg text-muted-foreground">
                      Stay informed with real-time aerial updates. We help project managers track progress, identify potential delays, and maintain accurate records for stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <Card className="overflow-hidden">
                <img 
                  src={constructionMonitoringImage} 
                  alt="Construction monitoring"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
            </div>

            {/* Environmental */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="overflow-hidden order-2 lg:order-1">
                <img 
                  src={environmentalImage} 
                  alt="Environmental surveys"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
              <div className="order-1 lg:order-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Environmental & Land Surveys</h3>
                    <p className="text-lg text-muted-foreground">
                      Our drone inspections offer valuable insights for land mapping, environmental monitoring, and site planning, reducing manual labour and improving accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enord Advantage */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Enord Advantage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">High-Resolution Data</h3>
                  <p className="text-muted-foreground">Crisp aerial imagery and 4K video capture</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Certified Pilots</h3>
                  <p className="text-muted-foreground">Experienced, licensed, and safety-focused</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Custom Solutions</h3>
                  <p className="text-muted-foreground">Tailored inspection packages to suit your needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Fast Turnaround</h3>
                  <p className="text-muted-foreground">Quick deployment and timely delivery of results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Drone Inspection Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're looking for reliable drone inspection services in Sydney, Enord is your trusted partner. Our blend of innovation, skill, and dedication ensures your inspections are carried out with precision and care.
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

export default Inspections;
