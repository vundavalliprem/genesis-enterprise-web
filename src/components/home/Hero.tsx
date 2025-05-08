
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
                <div className="text-2xl md:text-3xl font-bold text-white">45+</div>
                <div className="text-xs md:text-sm text-blue-200">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Digital Transformation Visualization */}
          <motion.div
            className="lg:col-span-6 relative h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* 3D isometric representation of digital transformation */}
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 shadow-2xl">
              {/* Main visualization image */}
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Digital Transformation Ecosystem"
                className="w-full h-full object-cover rounded-lg shadow-inner"
              />
              
              {/* Interactive overlay elements */}
              <div className="absolute inset-0">
                {/* Floating tech nodes */}
                <div className="absolute top-5 left-[40%] flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="mt-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg">
                    Analytics
                  </div>
                </div>
                
                <div className="absolute bottom-10 right-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-500/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div className="mt-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg">
                    Connectivity
                  </div>
                </div>
                
                <div className="absolute top-1/3 left-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-indigo-600/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="mt-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg">
                    Processing
                  </div>
                </div>
                
                {/* Connection lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="45%" y1="10%" x2="18%" y2="33%" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="18%" y1="33%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="45%" y1="10%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>
              
              {/* Information panel */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-white font-medium">Digital Transformation Hub</div>
                  <div className="text-green-400 text-sm">Active Projects: 7</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/20 rounded-md px-2 py-1">
                    <div className="text-xs text-blue-100">Cloud Migration</div>
                    <div className="w-full bg-white/30 h-1.5 mt-1 rounded-full">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-300 h-1.5 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/20 rounded-md px-2 py-1">
                    <div className="text-xs text-blue-100">DevOps Pipeline</div>
                    <div className="w-full bg-white/30 h-1.5 mt-1 rounded-full">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-300 h-1.5 rounded-full" style={{width: '82%'}}></div>
                    </div>
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
