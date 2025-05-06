
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Database, FileSearch, Globe, Briefcase, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const serviceData = [
  {
    title: "Application Development",
    description: "Custom-built applications tailored to your unique business requirements and goals.",
    icon: <Code className="h-6 w-6 text-brand-blue" />,
    link: "/services/application-development"
  },
  {
    title: "Software Consulting",
    description: "Strategic guidance and expertise to help you navigate your digital transformation journey.",
    icon: <Briefcase className="h-6 w-6 text-brand-blue" />,
    link: "/services/software-consulting"
  },
  {
    title: "Amazon Cloud Services",
    description: "Harness the power of AWS with our expert deployment and optimization services.",
    icon: <Database className="h-6 w-6 text-brand-blue" />,
    link: "/services/cloud-services"
  },
  {
    title: "QA & Testing Services",
    description: "Comprehensive quality assurance to ensure your software meets the highest standards.",
    icon: <FileSearch className="h-6 w-6 text-brand-blue" />,
    link: "/services/qa-testing"
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination with proven methodologies for on-time, on-budget delivery.",
    icon: <Globe className="h-6 w-6 text-brand-blue" />,
    link: "/services/project-management"
  },
  {
    title: "Offshore Development",
    description: "Access skilled global talent pools with our dedicated offshore development teams.",
    icon: <Users className="h-6 w-6 text-brand-blue" />,
    link: "/services/offshore-development"
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all duration-300 hover:translate-y-[-5px] group"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-darkBlue transition-colors duration-200"
      >
        Learn more
        <ChevronRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-4 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-5"
          >
            Our Services
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6"
          >
            Comprehensive Enterprise IT Solutions
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            We deliver a full spectrum of technology services designed to help businesses thrive in the digital age.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-brand-blue font-medium hover:text-brand-darkBlue transition-colors duration-200"
          >
            View all our services
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
