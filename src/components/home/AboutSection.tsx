
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const keyPoints = [
    "Industry-leading technical expertise",
    "Global delivery capabilities",
    "Agile methodology for rapid delivery",
    "Proven track record of client success"
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            ref={ref}
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1 px-4 bg-blue-50 text-brand-blue rounded-full text-sm font-medium mb-5"
            >
              About Us
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              Driving Digital Transformation For Enterprises
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6"
            >
              Gorantla Infotech Solutions is a future-ready technology company specializing in enterprise-grade IT solutions. Founded in April 2018, we help businesses navigate their digital transformation journeys with a focus on innovation and excellence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-8">
              <ul className="space-y-3">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={18} className="text-brand-blue mr-3" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/about">
                <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white px-6 py-2.5 rounded-md">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <motion.img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Team collaborating at Gorantla Infotech"
                className="w-full h-auto"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
