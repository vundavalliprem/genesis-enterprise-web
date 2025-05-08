
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
        {/* Modern geometric logo */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Diamond shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 scale-[0.7] translate-y-[2px]"></div>
          
          {/* Letter G */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl transform -rotate-0">G</span>
          </div>
          
          {/* Small accent line */}
          <div className="absolute bottom-1 left-1 right-1 h-[2px] bg-cyan-400 rounded-full"></div>
        </div>
      </motion.div>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-base md:text-lg font-heading font-bold text-white tracking-wide"
          whileHover={{ scale: 1.03 }}
        >
          GORANTLA
        </motion.span>
        <span className="text-xs md:text-sm font-medium text-blue-100 tracking-wider">
          INFOTECH SOLUTIONS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
