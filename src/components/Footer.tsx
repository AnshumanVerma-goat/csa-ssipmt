import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CSA - SSIPMT</h3>
            <p className="text-sm opacity-90">
              Computer Science Association of SSIPMT, fostering innovation and
              excellence in technology education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-accent transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link
                  to="/certificates"
                  className="hover:text-accent transition-colors"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="/clubs"
                  className="hover:text-accent transition-colors"
                >
                  Clubs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Call: 0771-3501600</li>
              <li>Email: info@ssipmt.com</li>
              <li>SSIPMT Campus, Raipur</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} Computer Science Association,
            SSIPMT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
