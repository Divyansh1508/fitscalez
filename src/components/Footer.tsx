import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">FITSCALEZ</h3>
            <p className="text-muted-foreground">
              Fitness Experts for your Business. Creative agency helping brands scale to new heights.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/scgs" className="text-muted-foreground hover:text-primary transition-colors">SCGS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span> fitscalezofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91-9311439493,9891002658</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span> 24, Shri Ram Road, Civil Lines, Delhi-
                110054, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fitscalez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
