
import React from 'react';
import { Link } from 'react-router-dom';
import { Server } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="mr-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center">
        <Server className="text-white h-4 w-4 md:h-5 md:w-5" />
      </div>
      <div className="flex flex-col md:flex-row items-baseline">
        <span className="text-base md:text-lg font-heading font-bold bg-gradient-to-r from-brand-darkBlue to-brand-blue bg-clip-text text-transparent">
          GORANTLA
        </span>
        <span className="text-sm md:text-base font-medium text-gray-600 md:ml-1">
          INFOTECH
        </span>
      </div>
    </Link>
  );
};

export default Logo;
