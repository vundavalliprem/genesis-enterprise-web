
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NavDropdown from "./NavDropdown";
import Logo from "./Logo";

// Services dropdown data
const servicesItems = [
  {
    title: "Application Development",
    description: "Custom software solutions for enterprise needs",
    href: "/services/application-development",
    icon: "folder",
  },
  {
    title: "Software Consulting",
    description: "Expert guidance on software strategies",
    href: "/services/software-consulting",
    icon: "briefcase",
  },
  {
    title: "Amazon Cloud Services",
    description: "AWS deployment and optimization",
    href: "/services/cloud-services",
    icon: "globe",
  },
  {
    title: "QA & Testing Services",
    description: "Comprehensive quality assurance",
    href: "/services/qa-testing",
    icon: "file-search",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination",
    href: "/services/project-management",
    icon: "chart-bar",
  },
  {
    title: "Offshore Software Development",
    description: "Dedicated offshore development teams",
    href: "/services/offshore-development",
    icon: "building",
  },
];

// Solutions dropdown data
const solutionsItems = [
  {
    title: "Digital Transformation",
    description: "Enterprise digital strategy and execution",
    href: "/solutions/digital-transformation",
    icon: "globe",
  },
  {
    title: "Cloud & DevOps Enablement",
    description: "Accelerate your development pipeline",
    href: "/solutions/cloud-devops",
    icon: "file-text",
  },
  {
    title: "Data Analytics & AI",
    description: "Insights-driven business decisions",
    href: "/solutions/data-analytics",
    icon: "chart-bar",
  },
  {
    title: "Fintech Solutions",
    description: "Technology for financial services",
    href: "/solutions/fintech",
    icon: "briefcase",
  },
  {
    title: "Healthcare Solutions",
    description: "Digital healthcare innovations",
    href: "/solutions/healthcare",
    icon: "file-text",
  },
  {
    title: "Retail Technology",
    description: "Omnichannel retail experiences",
    href: "/solutions/retail",
    icon: "building",
  },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-brand-darkBlue/95 to-brand-blue/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Mobile menu button */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  activeDropdown === "services" 
                    ? "text-white" 
                    : "text-blue-100 hover:text-white"
                }`}
                onMouseEnter={() => toggleDropdown("services")}
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    activeDropdown === "services" ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <NavDropdown 
                    items={servicesItems}
                    viewAllLink="/services"
                    onClose={closeDropdown}
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  activeDropdown === "solutions" 
                    ? "text-white" 
                    : "text-blue-100 hover:text-white"
                }`}
                onMouseEnter={() => toggleDropdown("solutions")}
                onClick={() => toggleDropdown("solutions")}
              >
                <span>Solutions</span>
                <ChevronDown 
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeDropdown === "solutions" ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <NavDropdown 
                    items={solutionsItems}
                    viewAllLink="/solutions"
                    onClose={closeDropdown}
                  />
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className="font-medium transition-colors duration-200 text-blue-100 hover:text-white"
              onClick={closeDropdown}
            >
              About Us
            </Link>

            <Link
              to="/careers"
              className="font-medium transition-colors duration-200 text-blue-100 hover:text-white"
              onClick={closeDropdown}
            >
              Careers
            </Link>

            <Link to="/contact">
              <Button 
                className="bg-white text-brand-blue hover:bg-gray-100 px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
            >
              <div className="flex flex-col space-y-4 py-4">
                <div>
                  <button
                    className="flex justify-between w-full text-left px-4 py-2 text-white font-medium"
                    onClick={() => toggleDropdown("services")}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === "services" ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 py-2 space-y-2"
                      >
                        {servicesItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            className="block px-4 py-2 text-blue-100 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-4 py-2 text-white font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          → View All Services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    className="flex justify-between w-full text-left px-4 py-2 text-white font-medium"
                    onClick={() => toggleDropdown("solutions")}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === "solutions" ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "solutions" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 py-2 space-y-2"
                      >
                        {solutionsItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            className="block px-4 py-2 text-blue-100 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                        <Link
                          to="/solutions"
                          className="block px-4 py-2 text-white font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          → See All Solutions
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/about"
                  className="px-4 py-2 text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  to="/careers"
                  className="px-4 py-2 text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>

                <Link
                  to="/contact"
                  className="px-4 py-2 text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
