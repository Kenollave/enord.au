import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Rentals", path: "/services/rentals" },
    { name: "Inspections", path: "/services/inspections" },
    { name: "Photography", path: "/services/photography" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center bg-gray-100/95 backdrop-blur px-4 h-16 -ml-4">
          <img src={logo} alt="Enord UAV Solutions" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              to="/services"
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>
            {isServicesOpen && (
              <div className="absolute top-full left-0 pt-2 -mt-2 w-56 z-50">
                <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:0422237421" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>0422 237 421</span>
          </a>
          <Button 
            variant="cta"
            onClick={() => {
              if (window.location.pathname === '/') {
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
              } else {
                window.location.href = '/#quote-form';
              }
            }}
          >
            Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="cta" 
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                if (window.location.pathname === '/') {
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
                } else {
                  window.location.href = '/#quote-form';
                }
              }}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
