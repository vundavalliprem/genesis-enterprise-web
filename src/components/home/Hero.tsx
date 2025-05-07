
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Shield, ArrowUpRight } from 'lucide-react';
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
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-brand-darkBlue pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Modern abstract background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-brand-darkBlue/90"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/20 mix-blend-overlay"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-indigo-500/20 mix-blend-overlay"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-700/20 mix-blend-overlay"></div>
        </div>
        
        {/* Digital circuit pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="3" fill="white" />
              <path d="M50,50 L70,50 L70,20" fill="none" stroke="white" strokeWidth="1" />
              <path d="M50,50 L30,50 L30,70" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column - Text content */}
          <motion.div
            ref={ref}
            className="lg:col-span-6 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center py-1.5 px-4 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2 text-blue-300" />
                <span>Enterprise Technology Solutions</span>
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white"
              variants={itemVariants}
            >
              Empowering Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Excellence</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              We craft innovative technology solutions that transform enterprises, streamline operations, and drive sustainable growth in today's digital landscape.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
              variants={itemVariants}
            >
              <Link to="/services">
                <Button className="bg-white hover:bg-blue-50 text-brand-darkBlue px-8 py-6 rounded-md font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white/70 text-white hover:bg-white/10 px-8 py-6 rounded-md font-medium text-base transition-all duration-300">
                  Talk to an Expert
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-8"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">7+</div>
                <div className="text-xs md:text-sm text-blue-200">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">23+</div>
                <div className="text-xs md:text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">12+</div>
                <div className="text-xs md:text-sm text-blue-200">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Professional imagery */}
          <motion.div
            className="lg:col-span-6 relative h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Modern technology dashboard representation */}
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Enterprise Technology Dashboard"
                className="w-full h-full object-cover rounded-lg shadow-inner"
              />
              
              {/* Overlay UI elements for tech feel */}
              <div className="absolute inset-0 p-4 md:p-6">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md py-1 px-3 rounded-full text-xs text-white border border-white/30">
                  Enterprise Analytics Platform
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/30">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-white font-medium">System Performance</div>
                    <div className="text-green-400 text-sm">98.7% Uptime</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-300 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 left-10 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/30 hidden md:block">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg -z-10 blur-sm"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -z-10 blur-sm"></div>
          </motion.div>
        </div>

        <motion.a
          href="#core-values"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-200 hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-sm mb-2">Discover Our Values</span>
          <ChevronDown className="animate-bounce" />
        </motion.a>
      </div>

      <style>
        {`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
