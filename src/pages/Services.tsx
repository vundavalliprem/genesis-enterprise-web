
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Code, Database, FileSearch, Globe, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'application-development',
    title: "Application Development",
    description: "Custom-built applications tailored to your unique business requirements and goals.",
    icon: <Code className="h-10 w-10 text-brand-blue" />,
    details: "Our application development services deliver custom software solutions that address complex enterprise challenges. We specialize in creating scalable, secure, and user-friendly applications using modern technologies and best practices.",
    features: [
      "Custom enterprise applications",
      "Web and mobile app development",
      "Legacy system modernization",
      "API development and integration",
      "UI/UX design and implementation",
      "Maintenance and support"
    ]
  },
  {
    id: 'software-consulting',
    title: "Software Consulting",
    description: "Strategic guidance and expertise to help you navigate your digital transformation journey.",
    icon: <Briefcase className="h-10 w-10 text-brand-blue" />,
    details: "Our software consulting services provide strategic guidance to help organizations navigate complex technology decisions. We work closely with your team to understand business objectives and develop tailored technology strategies.",
    features: [
      "Technology strategy development",
      "Digital transformation roadmapping",
      "Technical debt assessment",
      "Architecture design and review",
      "Vendor selection assistance",
      "IT governance and compliance"
    ]
  },
  {
    id: 'cloud-services',
    title: "Amazon Cloud Services",
    description: "Harness the power of AWS with our expert deployment and optimization services.",
    icon: <Database className="h-10 w-10 text-brand-blue" />,
    details: "As an AWS partner, we help organizations migrate, optimize, and manage their cloud infrastructure. Our cloud services enable businesses to leverage the full potential of AWS for improved scalability, security, and cost efficiency.",
    features: [
      "Cloud migration and strategy",
      "AWS architecture and deployment",
      "Cloud cost optimization",
      "DevOps implementation",
      "Managed cloud services",
      "Security and compliance"
    ]
  },
  {
    id: 'qa-testing',
    title: "QA & Testing Services",
    description: "Comprehensive quality assurance to ensure your software meets the highest standards.",
    icon: <FileSearch className="h-10 w-10 text-brand-blue" />,
    details: "Our QA and testing services ensure your software performs flawlessly in real-world conditions. We implement rigorous testing methodologies to identify issues early and ensure your applications meet quality standards.",
    features: [
      "Automated and manual testing",
      "Performance and load testing",
      "Security testing",
      "Mobile and cross-browser testing",
      "Test automation frameworks",
      "QA process consulting"
    ]
  },
  {
    id: 'project-management',
    title: "Project Management",
    description: "End-to-end project coordination with proven methodologies for on-time, on-budget delivery.",
    icon: <Globe className="h-10 w-10 text-brand-blue" />,
    details: "Our project management services ensure successful delivery of complex IT initiatives. We employ industry-standard methodologies and best practices to manage scope, schedule, resources, and risks effectively.",
    features: [
      "Agile and traditional methodologies",
      "Resource planning and allocation",
      "Risk management",
      "Status reporting and communication",
      "Budget monitoring and control",
      "Stakeholder management"
    ]
  },
  {
    id: 'offshore-development',
    title: "Offshore Development",
    description: "Access skilled global talent pools with our dedicated offshore development teams.",
    icon: <Users className="h-10 w-10 text-brand-blue" />,
    details: "Our offshore development services provide access to skilled talent at competitive rates. We manage dedicated teams that integrate seamlessly with your in-house resources for efficient project delivery.",
    features: [
      "Dedicated development teams",
      "Staff augmentation",
      "Follow-the-sun development model",
      "Transparent communication",
      "Knowledge transfer",
      "Quality control and oversight"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg text-blue-100">
                Comprehensive enterprise technology services to accelerate your digital transformation journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col md:flex-row gap-8 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 md:mt-2">
                    {service.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.details}
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="font-heading font-semibold text-lg mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-brand-blue">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-5 py-2 bg-brand-blue text-white rounded hover:bg-brand-darkBlue transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
