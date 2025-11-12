import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import choosingDrone from "@/assets/blog-choosing-drone.jpg";

const ChoosingDrone = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                Guides
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choosing the Right Drone for Your Business
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  February 15, 2024
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 min read
                </span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={choosingDrone} 
                alt="Choosing the Right Drone"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Selecting the right drone for your business needs requires careful consideration of multiple factors. This guide will help you navigate the options and make an informed decision that aligns with your operational requirements and budget.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Understanding Your Requirements</h2>
              <p className="mb-6">
                Start by clearly defining your business objectives and use cases. Are you conducting inspections, capturing marketing content, surveying land, or monitoring construction progress? Different applications demand different capabilities. A real estate photographer needs excellent camera quality, while an infrastructure inspector prioritizes flight time and sensor options.
              </p>
              <p className="mb-6">
                Consider your operational environment. Urban areas with obstacles require advanced collision avoidance systems. Windy coastal locations demand robust flight stability. Working in remote areas necessitates longer flight times and reliable return-to-home functions. Your environment significantly influences which drone features are essential versus nice-to-have.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Camera and Sensor Specifications</h2>
              <p className="mb-6">
                Camera quality is often the primary consideration for commercial drones. Resolution is important, but sensor size, low-light performance, and dynamic range matter equally. A 1-inch sensor typically provides better image quality than smaller sensors, even at similar megapixel counts. Consider whether 4K video is sufficient or if your applications demand higher resolutions.
              </p>
              <p className="mb-6">
                For specialized applications, evaluate sensor options. Thermal cameras are essential for building inspections and solar panel surveys. Multispectral sensors serve agricultural and environmental monitoring. LiDAR enables precise 3D mapping. Some drones offer interchangeable payloads, providing versatility for businesses with varied requirements.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Flight Performance and Battery Life</h2>
              <p className="mb-6">
                Flight time directly impacts productivity. Consumer drones typically fly for 20-30 minutes, while professional models may exceed 45 minutes. Remember that manufacturer specifications represent optimal conditions—real-world flight times are often 20-30% shorter when accounting for wind, camera operation, and maintaining safe battery reserves.
              </p>
              <p className="mb-6">
                Maximum wind resistance indicates how reliably the drone operates in challenging conditions. Professional-grade drones often handle winds up to 12-15 m/s, ensuring you can work consistently even in less-than-perfect weather. Maximum speed and altitude capabilities should align with your operational needs while staying within regulatory limits.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Build Quality and Reliability</h2>
              <p className="mb-6">
                Professional operations demand reliable equipment. Research the manufacturer's reputation, user reviews, and warranty terms. Established brands like DJI typically offer better support networks, readily available parts, and proven reliability. Consider the availability of local service and repair options—downtime directly impacts your ability to serve clients.
              </p>
              <p className="mb-6">
                Weather resistance varies significantly across drone models. Some drones operate comfortably in light rain, while others fail immediately upon moisture exposure. If you expect to work in challenging conditions, invest in weather-resistant models even if they cost more initially. The ability to work when competitors cannot provides competitive advantages.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Automation and Intelligent Features</h2>
              <p className="mb-6">
                Advanced autonomous features enhance operational efficiency and consistency. Automated flight planning software enables repeatable inspections for progress monitoring and change detection. Obstacle avoidance systems prevent costly accidents and enable confident operation in complex environments. ActiveTrack features benefit videography and sports coverage applications.
              </p>
              <p className="mb-6">
                Waypoint navigation and orbit modes streamline repetitive inspection tasks. Some drones offer AI-powered subject recognition and automatic framing, useful for dynamic shooting scenarios. Evaluate which automated features align with your workflows—complex features you never use don't justify higher prices.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Portability and Transport</h2>
              <p className="mb-6">
                Consider how you'll transport equipment to job sites. Folding designs maximize portability for traveling professionals. Larger professional drones may require dedicated cases and vehicle space but often justify these inconveniences with superior performance. Balance portability requirements against the capabilities you need.
              </p>
              <p className="mb-6">
                Setup time affects operational efficiency. Quick-deploy drones get airborne faster, valuable when working with time-sensitive subjects or narrow weather windows. Factor in the complete system—controller, batteries, cases, and accessories. A compact drone with bulky support equipment may not actually save transport space.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Budget Considerations and Total Cost of Ownership</h2>
              <p className="mb-6">
                Purchase price represents just part of ownership costs. Factor in insurance, which can cost thousands annually for commercial operations. Budget for multiple battery sets—having 4-6 batteries enables full-day operations without long charging breaks. Include memory cards, filters, landing pads, and protective cases in your initial investment.
              </p>
              <p className="mb-6">
                Consider ongoing costs including software subscriptions, training, and maintenance. Some manufacturers offer care plans covering accidental damage—worthwhile for expensive equipment. Calculate total cost of ownership over 2-3 years rather than focusing solely on upfront purchase price. Sometimes paying more initially for reliable equipment reduces long-term costs.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Future-Proofing Your Investment</h2>
              <p className="mb-6">
                Technology evolves rapidly, but some features indicate longer operational life. Support for firmware updates ensures continued compatibility with regulations and software. Manufacturers with strong track records typically support products longer. Consider whether the drone platform supports future accessory releases or sensor upgrades.
              </p>
              <p className="mb-6">
                Evaluate the drone's capacity to grow with your business. Can it handle more demanding applications if your service offerings expand? Models with interchangeable payloads or software upgrade paths provide flexibility as requirements evolve. Sometimes paying more for capabilities you might need later proves more economical than replacing entire systems.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Rent Before You Buy</h2>
              <p className="mb-6">
                Consider renting drones before committing to purchase. This approach lets you test equipment in real-world applications, ensuring it meets your needs before significant investment. Rental periods help identify must-have features versus nice-to-haves, informing better purchase decisions.
              </p>
              <p className="mb-6">
                For businesses with occasional drone requirements, renting might prove more economical than purchasing. You access latest technology without obsolescence concerns, and rental costs are immediately tax-deductible business expenses. This flexibility enables using different drones for different projects, matching equipment precisely to each job's requirements.
              </p>

              <div className="bg-muted/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Professional Drone Rental Services</h3>
                <p className="text-muted-foreground mb-6">
                  Try before you buy with our comprehensive drone rental service. Access professional equipment without the upfront investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta">
                    <Link to="/#quote-form">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services/rentals">View Rental Options</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ChoosingDrone;
