
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-heading font-bold mb-6 text-white">GORANTLA INFOTECH</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              A future-ready technology company specializing in enterprise-grade IT solutions, driving digital transformation and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services/application-development" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Application Development</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/software-consulting" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Software Consulting</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/cloud-services" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Amazon Cloud Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/qa-testing" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>QA & Testing</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-brand-blue hover:text-blue-400 transition-colors duration-300 flex items-center font-medium"
                  onClick={handleLinkClick}
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Solutions</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  onClick={handleLinkClick}
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-brand-blue" />
                <span className="text-gray-400">3rd Floor Sri Durga Sai Hub, 301, 13th phase rd,<br />
                opposite prajay megapolis, kukatpally housing board colony<br />
                Hyderabad, Telangana 500072<br />
                India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-brand-blue" />
                <a href="tel:+918939444844" className="text-gray-400 hover:text-white transition-colors duration-300">+91 89394 44844 (India)</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-blue" />
                <a href="mailto:info@gorantlainfotech.com" className="text-gray-400 hover:text-white transition-colors duration-300">info@gorantlainfotech.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2018 Gorantla Infotech Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
