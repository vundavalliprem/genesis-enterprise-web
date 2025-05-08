
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
                onClick={() => navigate('/contact')}
                size="lg" 
                className="bg-brand-blue hover:bg-brand-darkBlue text-white px-8 font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => navigate('/services')}
                size="lg" 
                variant="outline"
                className="border-gray-400 text-white hover:bg-white/10 hover:text-white"
              >
                Explore Our Services
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-400 mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8">
                <div className="bg-white/10 h-12 w-24 rounded-md flex items-center justify-center">
                  <div className="text-white text-sm font-semibold">Client 1</div>
                </div>
                <div className="bg-white/10 h-12 w-24 rounded-md flex items-center justify-center">
                  <div className="text-white text-sm font-semibold">Client 2</div>
                </div>
                <div className="bg-white/10 h-12 w-24 rounded-md flex items-center justify-center">
                  <div className="text-white text-sm font-semibold">Client 3</div>
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
              {/* Main visual element */}
              <div className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-800 p-1 rounded-lg shadow-2xl">
                <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-800 rounded"></div>
                    <div className="h-4 w-5/6 bg-brand-blue/30 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-800 rounded"></div>
                    <div className="h-4 w-full bg-gray-800 rounded"></div>
                    <div className="h-20 w-full bg-gradient-to-r from-brand-blue/20 to-purple-500/20 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-24 bg-brand-blue rounded"></div>
                      <div className="h-8 w-16 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-full h-full -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg opacity-50 blur-lg"></div>
              <div className="absolute w-24 h-24 top-1/2 -left-12 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg"></div>
              <div className="absolute w-16 h-16 bottom-12 -right-8 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg"></div>
              <div className="absolute w-8 h-20 top-8 -right-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-md opacity-60 blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
