
import React from 'react';
import { Link } from 'react-router-dom';
import { Server } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="mr-2 bg-gradient-to-r from-brand-blue to-brand-darkBlue p-1.5 rounded-md">
        <Server className="text-white h-5 w-5" />
      </div>
      <span className="text-lg font-heading font-bold text-brand-darkBlue">
        GORANTLA <span className="text-brand-blue">INFOTECH</span>
      </span>
    </Link>
  );
};

export default Logo;
