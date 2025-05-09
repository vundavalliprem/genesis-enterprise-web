
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Code, Database, FileSearch, Globe, Briefcase, Users, CheckCircle, ArrowRight, Layers, Shield, Award, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';

// Helper function to get the icon component based on icon name
const getIconByName = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Code": <Code className="h-12 w-12 text-brand-blue" />,
    "Briefcase": <Briefcase className="h-12 w-12 text-brand-blue" />,
    "Database": <Database className="h-12 w-12 text-brand-blue" />,
    "FileSearch": <FileSearch className="h-12 w-12 text-brand-blue" />,
    "Globe": <Globe className="h-12 w-12 text-brand-blue" />,
    "Users": <Users className="h-12 w-12 text-brand-blue" />
  };
  
  return iconMap[iconName] || <Code className="h-12 w-12 text-brand-blue" />;
};

const Services: React.FC = () => {
  // Scroll to top of contact page when clicking contact button
  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-darkBlue to-brand-blue py-20 md:py-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-blue-800 opacity-20 blur-3xl"></div>
            <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block px-4 py-1.5 bg-blue-900/30 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Enterprise-Grade Solutions
              </motion.span>
              
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
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-20 md:gap-32">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-full md:w-2/5">
                        <div className="relative">
                          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                            <div className={`w-full aspect-[4/3] bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} flex items-center justify-center p-8`}>
                              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full">
                                {getIconByName(service.iconName)}
                              </div>
                            </div>
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-blue-100"></div>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-3/5">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-2">
                            {service.tag || "Enterprise Solution"}
                          </span>
                          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            {service.title}
                          </h2>
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                          {service.details}
                        </p>
                        
                        {/* Premium Feature Cards */}
                        <div className="mb-10">
                          <h3 className="text-xl font-heading font-bold text-gray-800 mb-6 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-brand-blue" />
                            Enterprise-Grade Capabilities
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div 
                                key={idx} 
                                className="flex p-4 border border-gray-100 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-brand-blue" />
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <p className="font-medium text-gray-800">{feature}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technology Showcase */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-blue-100/50 mb-8 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-blue-100 rounded-full opacity-50"></div>
                          <div className="relative z-10">
                            <div className="flex items-center mb-4">
                              <Server className="h-5 w-5 text-brand-blue mr-2" />
                              <h4 className="font-heading font-semibold text-lg text-gray-900">Cutting-Edge Technology Stack</h4>
                            </div>
                            <p className="text-gray-700">
                              Our {service.title.toLowerCase()} leverages industry-leading technologies and frameworks, ensuring enterprise-grade scalability, security, and performance.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {['Microservices', 'Cloud-Native', 'API-First', 'Enterprise Security'].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-white/70 backdrop-blur-sm text-sm text-gray-700 rounded-full border border-gray-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Results & Metrics */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg mb-10">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-blue-300 mr-2" />
                            <h4 className="font-heading font-semibold text-lg">Proven Business Outcomes</h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                            <div className="text-center p-3">
                              <p className="text-2xl md:text-3xl font-bold text-blue-300">99.9%</p>
                              <p className="text-sm text-gray-300">Uptime</p>
                            </div>
                            <div className="text-center p-3">
                              <p className="text-2xl md:text-3xl font-bold text-blue-300">40%</p>
                              <p className="text-sm text-gray-300">Cost Reduction</p>
                            </div>
                            <div className="text-center p-3">
                              <p className="text-2xl md:text-3xl font-bold text-blue-300">60%</p>
                              <p className="text-sm text-gray-300">Faster Delivery</p>
                            </div>
                            <div className="text-center p-3">
                              <p className="text-2xl md:text-3xl font-bold text-blue-300">24/7</p>
                              <p className="text-sm text-gray-300">Support</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <Link to={`/services/${service.id}`}>
                            <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          
                          <Link to="/contact" onClick={handleContactClick}>
                            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                              Contact Us
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    {index < servicesData.length - 1 && (
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12 md:my-16"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Ready to accelerate your digital transformation?
                </h2>
                <p className="text-blue-100 text-lg">
                  Partner with Gorantla Infotech to unlock the full potential of your technology investments.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Link to="/contact" onClick={handleContactClick}>
                  <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
