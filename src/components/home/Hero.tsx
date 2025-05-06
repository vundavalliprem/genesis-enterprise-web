
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
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute -top-24 -right-24 lg:-top-36 lg:-right-36 w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-blue-50 opacity-50"></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 rounded-full bg-blue-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-4 bg-blue-50 text-brand-blue rounded-full text-sm font-medium mb-6">
              Future-Ready Technology Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6"
            variants={itemVariants}
          >
            Enterprise-Grade <span className="text-brand-blue">Technology Solutions</span> For Your Business
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl"
            variants={itemVariants}
          >
            Transforming enterprises with cutting-edge technology services and strategic IT solutions that deliver measurable business value.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            variants={itemVariants}
          >
            <Link to="/services">
              <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white px-8 py-6 rounded-md font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-6 rounded-md font-medium text-base transition-all duration-300">
                Talk to Us
              </Button>
            </Link>
          </motion.div>

          <motion.a
            href="#services"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-16 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-sm mb-2">Scroll to learn more</span>
            <ChevronDown className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Abstract shape decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50"></div>
    </section>
  );
};

export default Hero;
