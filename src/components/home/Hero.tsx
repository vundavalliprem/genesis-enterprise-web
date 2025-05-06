
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

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
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-full h-full"
        >
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-indigo-200 mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 rounded-full bg-blue-300 mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        </motion.div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Text content */}
          <motion.div
            ref={ref}
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1.5 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-brand-blue rounded-full text-sm font-medium mb-6">
                Enterprise Technology Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-darkBlue">Digital Innovation</span> For Enterprise Success
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
              variants={itemVariants}
            >
              Strategic technology services and solutions that transform enterprises, streamline operations, and accelerate growth in the digital era.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={itemVariants}
            >
              <Link to="/services">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-darkBlue hover:from-brand-darkBlue hover:to-brand-blue text-white px-8 py-6 rounded-md font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-6 rounded-md font-medium text-base transition-all duration-300">
                  Talk to an Expert
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Image and floating elements */}
          <motion.div
            className="relative h-full min-h-[400px] lg:min-h-[500px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main image */}
            <motion.div
              className="absolute inset-0 z-10 rounded-lg overflow-hidden shadow-2xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Enterprise Technology Solutions" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-lg p-4 shadow-lg z-20 border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Enterprise-grade</div>
                  <div className="text-sm text-gray-500">Technology Solutions</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-lg z-20 border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Proven Results</div>
                  <div className="text-sm text-gray-500">Trusted by Global Brands</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#services"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-sm mb-2">Explore Our Services</span>
          <ChevronDown className="animate-bounce" />
        </motion.a>
      </div>

      {/* Fix: Remove the jsx attribute from the style tag */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
