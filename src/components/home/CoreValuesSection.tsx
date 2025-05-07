
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
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
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-16 -mr-16 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              
              <p className="text-gray-600 mb-6">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-700 font-medium italic">
                  "We're committed to transforming businesses through technology excellence and exceptional service."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-16 -mr-16 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
              
              <p className="text-gray-600 mb-6">
                To be recognized as a trusted technology partner that consistently delivers innovative solutions, helping clients lead in their respective industries through digital excellence.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-700 font-medium italic">
                  "We envision a world where technology seamlessly enhances business value and human experiences."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-16 -mr-16 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Values</h3>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-2">→</span>
                  <span><strong>Excellence</strong>: Consistently delivering high-quality solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-2">→</span>
                  <span><strong>Innovation</strong>: Embracing new technologies and approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-2">→</span>
                  <span><strong>Integrity</strong>: Operating with honesty and transparency</span>
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
