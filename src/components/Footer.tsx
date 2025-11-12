import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="text-lg font-bold text-primary">Enord UAV Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sydney's trusted drone hire service for construction, real estate, events, and creative projects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/rentals" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Drone Rentals
                </Link>
              </li>
              <li>
                <Link to="/services/inspections" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Drone Inspections
                </Link>
              </li>
              <li>
                <Link to="/services/photography" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Drone Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Melrose Park, NSW</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:0422237421">0422 237 421</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@enord.com.au">info@enord.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enord UAV Solutions. All rights reserved. CASA-compliant drone services.</p>
          <p className="mt-2">Website & Marketing by <a href="https://www.soudcoh.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SoudCoh</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
