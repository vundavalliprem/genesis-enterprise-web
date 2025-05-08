
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-brand-darkBlue overflow-hidden pt-24 pb-20 md:py-32">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-brand-blue/20 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 bottom-0 right-0 blur-3xl"></div>
        <svg className="absolute opacity-20" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-3 py-1 text-sm font-medium text-white bg-brand-blue/30 rounded-full inline-block mb-6">
              Innovate. Transform. Succeed.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Enterprise Solutions <span className="text-brand-blue">Tailored</span> For Your Business
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              We deliver strategic IT and software solutions that transform businesses, drive growth, and create competitive advantage in today's digital economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/services')}
                size="lg" 
                className="bg-white hover:bg-gray-100 text-brand-blue font-medium px-8"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-400 mb-3">Trusted by organizations worldwide</p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-white text-sm">
                  <span className="font-semibold block mb-1">Enterprise-Grade Solutions</span>
                  <p>Powering mission-critical operations for businesses across industries with 99.9% uptime guarantee</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              {/* Modern professional visualization */}
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-indigo-700 p-1 rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Enterprise technology dashboard" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                          ))}
                        </div>
                        <div className="bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-medium text-white">Enterprise Analytics</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-full h-full -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg opacity-50 blur-lg"></div>
              
              {/* Floating UI elements */}
              <div className="absolute w-32 h-32 top-10 -right-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl flex flex-col justify-center items-center p-4 rotate-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="h-2 w-full bg-white/30 rounded mb-1"></div>
                <div className="h-2 w-2/3 bg-white/30 rounded"></div>
              </div>
              
              <div className="absolute w-24 h-24 -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl flex flex-col justify-center items-center p-3 -rotate-12">
                <div className="w-8 h-8 bg-green-500 rounded-full mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="h-1.5 w-full bg-white/30 rounded mb-1"></div>
                <div className="h-1.5 w-4/5 bg-white/30 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
