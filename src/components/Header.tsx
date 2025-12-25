import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Certificates", path: "/certificates" },
    { name: "Clubs", path: "/clubs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <div className="flex gap-3 items-center mr-4">
              <motion.a 
                href="https://www.instagram.com/computer_science_association/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
            <span>Call: 0771-3501600</span>
            <span>Email: info@ssipmt.com</span>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="secondary" size="sm" className="hover:scale-105 transition-transform" asChild>
              <Link to="/events">Events</Link>
            </Button>
            <Button variant="secondary" size="sm" className="hover:scale-105 transition-transform" asChild>
              <Link to="/gallery">Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img 
                src="/images/institute/csa upscaled ig.png" 
                alt="CSA Logo" 
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              />
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  Computer Science Association
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-bold">
                  Execute with Perfection
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navigation.map((item) => (
                <motion.div key={item.path} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.path}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden py-4 space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="block py-2 text-foreground hover:text-accent transition-colors font-medium hover:translate-x-2 transform duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
