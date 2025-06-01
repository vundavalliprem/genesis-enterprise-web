
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Home, Briefcase, Globe, FileSearch, ChartBar, Building, FileText, Users, Code, Database, FileCode } from "lucide-react";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  viewAllLink: string;
  onClose: () => void;
}

const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    "home": <Home size={20} className="text-brand-blue" />,
    "briefcase": <Briefcase size={20} className="text-brand-blue" />,
    "globe": <Globe size={20} className="text-brand-blue" />,
    "file-search": <FileSearch size={20} className="text-brand-blue" />,
    "chart-bar": <ChartBar size={20} className="text-brand-blue" />,
    "building": <Building size={20} className="text-brand-blue" />,
    "file-text": <FileText size={20} className="text-brand-blue" />,
    "users": <Users size={20} className="text-brand-blue" />,
    "folder": <Home size={20} className="text-brand-blue" />,
    "code": <Code size={20} className="text-brand-blue" />,
    "database": <Database size={20} className="text-brand-blue" />,
    "file-code": <FileCode size={20} className="text-brand-blue" />
  };

  return icons[iconName] || <Home size={20} className="text-brand-blue" />;
};

const NavDropdown: React.FC<NavDropdownProps> = ({ items, viewAllLink, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-1 gap-1 p-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={item.href}
              className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              onClick={() => {
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex-shrink-0 mr-4 mt-1">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
        
        <Link
          to={viewAllLink}
          className="flex items-center justify-between mt-2 p-3 text-brand-blue font-medium text-sm hover:bg-blue-50 rounded-md transition-colors duration-200"
          onClick={() => {
            onClose();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span>View All</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default NavDropdown;
