
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <motion.div 
        className="relative h-10 w-10 mr-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Modern abstract logo shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 rounded-lg shadow-lg transform rotate-45">
          <div className="absolute inset-1 bg-white/10 rounded-lg backdrop-blur-sm"></div>
        </div>
        
        {/* Circle accent */}
        <div className="absolute right-0 top-0 h-5 w-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform translate-x-1 -translate-y-1 shadow-md"></div>
        
        {/* Triangle accent */}
        <div className="absolute left-1 bottom-1 h-4 w-4 bg-blue-600 transform rotate-45"></div>
      </motion.div>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-base md:text-lg font-heading font-bold bg-gradient-to-r from-brand-darkBlue via-indigo-500 to-blue-500 bg-clip-text text-transparent tracking-wide"
          whileHover={{ scale: 1.03 }}
        >
          GORANTLA
        </motion.span>
        <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent tracking-wider">
          INFOTECH SOLUTIONS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
