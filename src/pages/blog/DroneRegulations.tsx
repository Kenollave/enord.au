import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import regulations from "@/assets/blog-regulations.jpg";

const DroneRegulations = () => {
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
                Regulations
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Understanding Australian Drone Regulations
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  March 5, 2024
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 min read
                </span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={regulations} 
                alt="Drone Regulations"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Operating drones safely and legally in Australia requires understanding and complying with regulations set by the Civil Aviation Safety Authority (CASA). This comprehensive guide will help you navigate these requirements.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Recreational vs Commercial Operations</h2>
              <p className="mb-6">
                CASA distinguishes between recreational and commercial drone operations. Recreational flying is for sport or hobby purposes only. Any operation where you receive payment, use the footage for business purposes, or conduct work-related activities requires commercial certification.
              </p>
              <p className="mb-6">
                Recreational flyers must follow the standard operating conditions but don't need specific licenses for drones under 2kg. Commercial operations require either a Remote Pilot License (RePL) or operation under an excluded category with appropriate training and documentation.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Standard Operating Conditions</h2>
              <p className="mb-6">
                All drone operators in Australia must adhere to standard operating conditions. You must only fly during daylight hours and keep your drone within visual line of sight at all times. The maximum altitude is 120 meters (400 feet) above ground level unless you have special approval.
              </p>
              <p className="mb-6">
                Stay at least 30 meters away from other people, and never fly over or above people who are not part of your operation. Maintain a distance of at least 5.5 kilometers from controlled airports and don't fly in prohibited or restricted areas without permission. Always give way to manned aircraft—they have right of way in all circumstances.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Remote Pilot License (RePL)</h2>
              <p className="mb-6">
                For professional drone operations, obtaining a Remote Pilot License is often necessary. This requires completing approved training with a CASA-certified organization, passing both theoretical and practical assessments, and demonstrating competency in emergency procedures and risk management.
              </p>
              <p className="mb-6">
                The RePL training covers aviation theory, meteorology, flight operations, and regulatory requirements. It typically takes several weeks to complete and requires ongoing currency through regular flying and periodic renewals. Holding a RePL demonstrates professionalism and commitment to safe operations.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">ReOC - Remote Operator Certificate</h2>
              <p className="mb-6">
                A Remote Operator Certificate (ReOC) is required for commercial drone operations conducted by organizations or businesses. This certificate allows operations beyond standard conditions and can include permissions for flying over people, in controlled airspace, or beyond visual line of sight with appropriate approvals.
              </p>
              <p className="mb-6">
                Obtaining a ReOC requires demonstrating robust operational procedures, safety management systems, and qualified personnel. It involves a detailed application process and ongoing compliance with CASA requirements, including regular audits and documentation reviews.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Excluded Category Operations</h2>
              <p className="mb-6">
                The excluded category provides a simplified path for certain low-risk commercial operations. Operators of drones under 2kg can conduct commercial work by completing an approved online course and following standard operating conditions. This is ideal for photographers, videographers, and small business operators.
              </p>
              <p className="mb-6">
                While excluded category operations have fewer requirements than a full ReOC, operators must still maintain comprehensive records, conduct pre-flight risk assessments, and ensure they have appropriate insurance coverage. The excluded category doesn't permit operations beyond standard conditions.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Insurance Requirements</h2>
              <p className="mb-6">
                While not legally mandated for all operations, comprehensive insurance is essential for commercial drone work. Public liability insurance protects you from claims related to property damage or injury caused by your drone operations. Hull insurance covers damage to your own equipment.
              </p>
              <p className="mb-6">
                Many clients, especially government agencies and large corporations, require proof of insurance before engaging drone services. Typical coverage starts at $10 million for public liability. Ensure your policy specifically covers commercial drone operations and matches your operating scope.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Airspace Classifications and Approvals</h2>
              <p className="mb-6">
                Australian airspace is divided into different classifications, each with specific requirements. Controlled airspace around airports requires approval from air traffic control before operations. Using apps like OpenSky or Can I Fly There helps identify restricted areas and airspace classifications.
              </p>
              <p className="mb-6">
                For operations in controlled airspace, submit applications well in advance through CASA's portal. Emergency services no-fly zones, national parks, and military areas often require additional approvals from relevant authorities. Always check current NOTAMs (Notices to Airmen) before flying.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Privacy and Legal Considerations</h2>
              <p className="mb-6">
                Drone operators must respect privacy laws and property rights. While you can generally fly over private property, capturing images or video may have legal implications depending on circumstances. Be transparent about your operations and respect requests from property owners when possible.
              </p>
              <p className="mb-6">
                Commercial operators should have clear privacy policies and data handling procedures. Inform people when conducting aerial photography in public spaces where practical. Some states have specific surveillance laws that may apply to drone operations, so familiarize yourself with local regulations.
              </p>

              <div className="bg-muted/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Compliant and Professional Drone Services</h3>
                <p className="text-muted-foreground mb-6">
                  All our operations are fully licensed, insured, and CASA compliant. Partner with professionals you can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta">
                    <Link to="/#quote-form">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services">Our Services</Link>
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

export default DroneRegulations;
