
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { solutionsData } from '@/data/solutionsData';
import { ArrowLeft, Check } from 'lucide-react';

const SolutionDetail: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = solutionsData.find(s => s.id === solutionId);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link to="/solutions" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back to Solutions</span>
              </Link>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {solution.title}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {solution.details}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Key Benefits
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solution.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Check className="h-5 w-5 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {solution.title} Solutions
              </motion.h2>
              
              <div className="space-y-16">
                {solution.subSolutions?.map((subSolution, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-gray-900 mb-4">
                      {subSolution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {subSolution.description}
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-heading font-medium text-gray-900 mb-4">
                        What We Offer:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {subSolution.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Ready to Transform Your Business with Our {solution.title} Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our experts today to discuss your specific requirements and how we can help you achieve your technology goals.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-md hover:bg-brand-darkBlue transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionDetail;
