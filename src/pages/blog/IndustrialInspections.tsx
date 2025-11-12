import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import inspections from "@/assets/blog-inspections.jpg";

const IndustrialInspections = () => {
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
                Industrial
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Industrial Inspections: The Drone Advantage
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  February 22, 2024
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  8 min read
                </span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={inspections} 
                alt="Industrial Drone Inspections"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Drones are revolutionizing industrial inspection workflows, offering safer, faster, and more cost-effective solutions compared to traditional methods. Industries worldwide are embracing this technology for its transformative capabilities.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Safety First: Eliminating High-Risk Work</h2>
              <p className="mb-6">
                Traditional inspection methods often require workers to access dangerous locations using scaffolding, rope access, or elevated work platforms. These activities carry inherent risks including falls, equipment failures, and exposure to hazardous environments. Drones eliminate the need for personnel to enter these high-risk zones.
              </p>
              <p className="mb-6">
                By keeping inspection personnel safely on the ground, drones significantly reduce workplace incidents and associated costs. They can access confined spaces, extreme heights, and hazardous areas with zero risk to human safety. This is particularly crucial for inspecting telecommunications towers, industrial chimneys, and offshore platforms.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Infrastructure Inspection Applications</h2>
              <p className="mb-6">
                Bridges, towers, and large structures benefit immensely from drone inspections. High-resolution cameras and sensors capture detailed imagery of structural components, revealing cracks, corrosion, and deterioration that might be missed during visual inspections from the ground. Thermal imaging identifies moisture intrusion and insulation failures.
              </p>
              <p className="mb-6">
                Drone inspections provide comprehensive documentation through 3D models and orthomosaic maps. These deliverables enable accurate measurements, progress tracking, and historical comparison. Infrastructure managers can identify maintenance priorities, allocate budgets effectively, and schedule interventions before minor issues become major problems.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Energy Sector Applications</h2>
              <p className="mb-6">
                The renewable energy sector has particularly embraced drone technology. Solar farm inspections using thermal cameras identify underperforming panels and electrical hotspots across vast installations. This targeted approach dramatically reduces inspection time while improving defect detection rates compared to manual methods.
              </p>
              <p className="mb-6">
                Wind turbine inspections showcase drone capabilities at their best. Capturing high-resolution images of blades at altitude used to require technicians to climb towers or use expensive crane equipment. Drones now complete these inspections in hours rather than days, capturing millimeter-level detail of blade surfaces to identify erosion, lightning damage, and structural issues.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Construction Monitoring and Progress Tracking</h2>
              <p className="mb-6">
                Construction sites benefit from regular drone surveys providing stakeholders with up-to-date site information. Aerial imagery tracks progress against project timelines, verifies work completion, and identifies potential issues early. This transparency improves communication between contractors, project managers, and clients.
              </p>
              <p className="mb-6">
                Volumetric calculations from drone data enable accurate measurement of stockpiles, excavations, and material movement. This information feeds directly into project management systems, helping maintain schedules and budgets. Comparing sequential surveys highlights changes over time, ensuring work proceeds according to specifications.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Asset Management and Documentation</h2>
              <p className="mb-6">
                Creating comprehensive digital twins of industrial facilities through drone surveys provides invaluable asset management tools. These detailed 3D models serve as references for maintenance planning, renovation projects, and facility modifications. They capture current conditions with precision that traditional surveying methods struggle to match.
              </p>
              <p className="mb-6">
                Regular drone inspections build historical records showing how assets age and deteriorate over time. This data informs predictive maintenance strategies, optimizes inspection intervals, and justifies capital expenditure decisions. Facilities managers gain insights that simply weren't available before drone technology.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Cost-Effectiveness and Efficiency</h2>
              <p className="mb-6">
                The financial benefits of drone inspections extend beyond eliminating expensive access equipment. Inspections that previously took days or weeks can often be completed in hours. This efficiency reduces operational downtime, a critical factor for facilities where every hour of shutdown represents significant lost revenue.
              </p>
              <p className="mb-6">
                The detail captured by drones often reveals issues that would go unnoticed until they became serious problems. Early detection enables planned maintenance interventions, avoiding costly emergency repairs and unscheduled shutdowns. Over time, drone inspection programs typically deliver substantial return on investment through improved asset reliability.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Advanced Sensor Technology</h2>
              <p className="mb-6">
                Modern inspection drones carry sophisticated sensors beyond standard cameras. Thermal imaging identifies temperature anomalies indicating electrical faults, insulation deficiencies, or mechanical issues. LiDAR sensors create precise 3D models useful for structural analysis and deformation monitoring.
              </p>
              <p className="mb-6">
                Multispectral cameras detect issues invisible to the naked eye, such as material degradation or vegetation stress. Gas detection sensors identify leaks in pipelines and processing facilities. This sensor diversity makes drones incredibly versatile tools adaptable to almost any inspection requirement.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Data Analysis and Reporting</h2>
              <p className="mb-6">
                The value of drone inspections extends beyond data capture to comprehensive analysis and reporting. Specialized software processes drone imagery to identify defects automatically, measure dimensions accurately, and track changes over time. This analytical capability transforms raw inspection data into actionable intelligence.
              </p>
              <p className="mb-6">
                Professional drone inspection services provide detailed reports with annotated imagery, priority rankings for identified issues, and recommendations for remediation. These reports integrate seamlessly with asset management systems and maintenance planning workflows, ensuring inspection findings drive appropriate actions.
              </p>

              <div className="bg-muted/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Professional Industrial Drone Inspections</h3>
                <p className="text-muted-foreground mb-6">
                  Our certified inspection services combine advanced drone technology with expert analysis to deliver actionable insights for your facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta">
                    <Link to="/#quote-form">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services/inspections">Inspection Services</Link>
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

export default IndustrialInspections;
