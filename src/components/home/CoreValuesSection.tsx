
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award, Lightbulb, Shield, Zap } from 'lucide-react';

const CoreValuesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="core-values" className="py-20 md:py-28 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 bg-blue-50 border border-blue-100 text-brand-blue rounded-full text-sm font-medium mb-3">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Guiding Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Define Us</span>
          </h2>
          <p className="text-lg text-gray-600">
            Since our founding in April 2018, we've built our company on strong values that guide our decisions, actions, and relationships with clients and partners.
          </p>
        </motion.div>
      
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-xl border border-blue-50 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-7 w-7 text-brand-blue" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              
              <p className="text-gray-600 mb-6">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-brand-blue" />
                  <p className="text-gray-700 font-medium">
                    Driving digital transformation through excellence and innovation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-xl border border-blue-50 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7 text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
              
              <p className="text-gray-600 mb-6">
                To be recognized as a trusted technology partner that consistently delivers innovative solutions, helping clients lead in their respective industries through digital excellence.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-indigo-600" />
                  <p className="text-gray-700 font-medium">
                    Building a future where technology enhances business value and human experiences
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-xl border border-blue-50 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-7 w-7 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Values</h3>
              
              <ul className="space-y-4 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-blue font-bold text-sm">1</span>
                  </div>
                  <span><strong className="text-gray-800">Excellence</strong>: Delivering high-quality solutions that exceed expectations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-indigo-600 font-bold text-sm">2</span>
                  </div>
                  <span><strong className="text-gray-800">Innovation</strong>: Embracing emerging technologies to solve complex problems</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <span><strong className="text-gray-800">Integrity</strong>: Operating with transparency and building lasting trust</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
