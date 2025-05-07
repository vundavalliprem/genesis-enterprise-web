
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Code, Database, FileSearch, Globe, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';

// Helper function to get the icon component based on icon name
const getIconByName = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Code": <Code className="h-10 w-10 text-brand-blue" />,
    "Briefcase": <Briefcase className="h-10 w-10 text-brand-blue" />,
    "Database": <Database className="h-10 w-10 text-brand-blue" />,
    "FileSearch": <FileSearch className="h-10 w-10 text-brand-blue" />,
    "Globe": <Globe className="h-10 w-10 text-brand-blue" />,
    "Users": <Users className="h-10 w-10 text-brand-blue" />
  };
  
  return iconMap[iconName] || <Code className="h-10 w-10 text-brand-blue" />;
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg text-blue-100">
                Comprehensive enterprise technology services to accelerate your digital transformation journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col md:flex-row gap-8 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 md:mt-2">
                    {getIconByName(service.iconName)}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.details}
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="font-heading font-semibold text-lg mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-brand-blue">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-5 py-2 bg-brand-blue text-white rounded hover:bg-brand-darkBlue transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
