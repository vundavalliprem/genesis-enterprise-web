
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Globe, FileText, ChartBar, Briefcase, FileCode, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsData } from '@/data/solutionsData';

// Helper function to get the icon component based on icon name
const getIconByName = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Globe": <Globe className="h-10 w-10 text-brand-blue" />,
    "FileText": <FileText className="h-10 w-10 text-brand-blue" />,
    "ChartBar": <ChartBar className="h-10 w-10 text-brand-blue" />,
    "Briefcase": <Briefcase className="h-10 w-10 text-brand-blue" />,
    "FileCode": <FileCode className="h-10 w-10 text-brand-blue" />,
    "Building": <Building className="h-10 w-10 text-brand-blue" />
  };
  
  return iconMap[iconName] || <Globe className="h-10 w-10 text-brand-blue" />;
};

const Solutions: React.FC = () => {
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
                Enterprise Solutions
              </h1>
              <p className="text-lg text-blue-100">
                Strategic technology solutions tailored to industry-specific challenges
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionsData.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getIconByName(solution.iconName)}
                    </div>
                    
                    <div>
                      <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
                        {solution.title}
                      </h2>
                      <p className="text-gray-500 mb-1">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700 mb-4">
                      {solution.details}
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="font-heading font-semibold text-gray-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-brand-blue">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link 
                        to={`/solutions/${solution.id}`}
                        className="inline-flex items-center px-5 py-2 bg-brand-blue text-white rounded hover:bg-brand-darkBlue transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
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

export default Solutions;
