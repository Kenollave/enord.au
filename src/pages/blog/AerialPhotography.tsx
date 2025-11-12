import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import aerialPhotography from "@/assets/blog-aerial-photography.jpg";

const AerialPhotography = () => {
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
                Photography
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Art of Aerial Photography: Tips from the Pros
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  March 15, 2024
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  5 min read
                </span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={aerialPhotography} 
                alt="Aerial Photography"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Aerial photography has revolutionized the way we capture the world around us. From stunning landscapes to dynamic urban scenes, drones have opened up new creative possibilities for photographers and videographers alike.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Understanding the Basics</h2>
              <p className="mb-6">
                Before you can master aerial photography, it's essential to understand the fundamentals. This includes knowing your equipment inside and out, understanding flight regulations, and developing an eye for composition from a bird's-eye view.
              </p>
              <p className="mb-6">
                The key to exceptional aerial photography lies in planning and preparation. Scout your locations beforehand, check weather conditions, and always have a backup plan. The golden hours of sunrise and sunset provide the most dramatic lighting conditions for aerial shots.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Essential Camera Settings</h2>
              <p className="mb-6">
                When shooting from a drone, your camera settings need to be optimized for stability and clarity. Use a fast shutter speed to eliminate motion blur—typically 1/500s or faster. Keep your ISO as low as possible to minimize noise, and shoot in RAW format for maximum post-processing flexibility.
              </p>
              <p className="mb-6">
                For landscape shots, use a smaller aperture (f/8 to f/11) to maximize depth of field. When capturing moving subjects, prioritize shutter speed over aperture. Remember that drones can introduce vibration, so using built-in gimbal stabilization is crucial for sharp images.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Composition Techniques</h2>
              <p className="mb-6">
                Aerial photography offers unique compositional opportunities. Look for patterns, textures, and geometric shapes that are only visible from above. Leading lines become even more powerful when shooting from altitude, guiding the viewer's eye through the frame.
              </p>
              <p className="mb-6">
                Don't be afraid to shoot straight down—the "bird's-eye" perspective can transform ordinary scenes into abstract art. Experiment with different altitudes to find the sweet spot where your subject is most compelling. Remember the rule of thirds applies just as much in aerial photography as it does on the ground.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Working with Light</h2>
              <p className="mb-6">
                Light is the photographer's most important tool, and this holds true for aerial work. The direction and quality of light can make or break an aerial shot. Side lighting creates depth and dimension, while backlighting can produce dramatic silhouettes.
              </p>
              <p className="mb-6">
                Overcast days can actually be ideal for certain types of aerial photography, providing even, diffused lighting that eliminates harsh shadows. This is particularly useful for real estate photography and infrastructure inspections where detail visibility is paramount.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Post-Processing Tips</h2>
              <p className="mb-6">
                Even the best aerial photographs benefit from thoughtful post-processing. Start with lens correction to fix any distortion from your drone's wide-angle lens. Adjust exposure and contrast to bring out details in shadows and highlights.
              </p>
              <p className="mb-6">
                Color grading can enhance the mood of your aerial shots—cooler tones work well for urban scenes, while warmer tones complement natural landscapes. Don't over-sharpen, as this can introduce artifacts and make your images look artificial. Subtle adjustments yield the most professional results.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Safety and Ethics</h2>
              <p className="mb-6">
                Professional aerial photographers prioritize safety above all else. Always maintain visual line of sight with your drone, respect privacy laws, and never fly in restricted airspace. In Australia, CASA regulations must be followed strictly for commercial operations.
              </p>
              <p className="mb-6">
                Be mindful of wildlife and people when flying. Give them plenty of space and never disturb natural habitats for the sake of a photograph. Building trust with clients and the community means being a responsible drone operator first and a photographer second.
              </p>

              <div className="bg-muted/50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Capture Stunning Aerial Shots?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need professional aerial photography services or want to rent equipment for your own projects, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta">
                    <Link to="/#quote-form">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services/photography">Our Photography Services</Link>
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

export default AerialPhotography;
