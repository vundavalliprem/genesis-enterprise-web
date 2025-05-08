
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
            <div className="grid grid-cols-1 gap-16 md:gap-24">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col md:flex-row gap-8 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 md:mt-2">
                    {getIconByName(service.iconName)}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
                      <h3 className="font-heading font-semibold text-xl mb-6 text-gray-900">Enterprise-Grade Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                            <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4 mt-0.5">
                              <span className="text-brand-blue">✓</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-heading font-semibold text-lg mb-3 text-gray-900">Client Success Stories</h4>
                        <p className="text-gray-600">Our {service.title.toLowerCase()} services have helped numerous enterprises achieve operational excellence and strategic growth. Discover how we can transform your business too.</p>
                      </div>
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-heading font-semibold text-lg mb-3 text-gray-900">Technology Stack</h4>
                        <p className="text-gray-600">We leverage industry-leading technologies and frameworks to ensure robust, secure, and scalable solutions tailored to your business needs.</p>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-darkBlue transition-colors duration-200"
                    >
                      Learn More About {service.title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
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
