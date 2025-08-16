import { Link } from "react-router-dom";
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">Gatimbi Library Portal</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Serving the Central Imenti community with quality educational resources and services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/books" className="hover:text-primary-foreground transition-colors">Books</Link></li>
              <li><Link to="/register" className="hover:text-primary-foreground transition-colors">Register</Link></li>
              <li><Link to="/login" className="hover:text-primary-foreground transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Book Borrowing</li>
              <li>Digital Access</li>
              <li>Community Programs</li>
              <li>Educational Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Central Imenti, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 700 000000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@gatimbilibrary.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Gatimbi Library Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;