
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Globe, FileText, ChartBar, Briefcase, FileCode, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutionsData = [
  {
    id: 'digital-transformation',
    title: "Digital Transformation",
    description: "Enterprise digital strategy and execution",
    icon: <Globe className="h-10 w-10 text-brand-blue" />,
    details: "Our comprehensive digital transformation solutions help enterprises evolve their business models, processes, and customer experiences through strategic implementation of modern technologies.",
    benefits: [
      "Streamlined business operations",
      "Enhanced customer experiences",
      "Data-driven decision making",
      "Increased business agility",
      "Improved competitive advantage"
    ]
  },
  {
    id: 'cloud-devops',
    title: "Cloud & DevOps Enablement",
    description: "Accelerate your development pipeline",
    icon: <FileText className="h-10 w-10 text-brand-blue" />,
    details: "Our Cloud & DevOps solutions help organizations implement modern software delivery practices, automate infrastructure, and optimize their cloud environments for maximum efficiency.",
    benefits: [
      "Faster release cycles",
      "Improved reliability and uptime",
      "Automated infrastructure management",
      "Reduced operational costs",
      "Enhanced security posture"
    ]
  },
  {
    id: 'data-analytics',
    title: "Data Analytics & AI",
    description: "Insights-driven business decisions",
    icon: <ChartBar className="h-10 w-10 text-brand-blue" />,
    details: "Our data analytics and AI solutions transform raw data into actionable insights, enabling organizations to make informed decisions, identify trends, and gain competitive advantages.",
    benefits: [
      "Real-time business intelligence",
      "Predictive analytics capabilities",
      "Enhanced customer understanding",
      "Optimized operational efficiency",
      "Data-driven product development"
    ]
  },
  {
    id: 'fintech',
    title: "Fintech Solutions",
    description: "Technology for financial services",
    icon: <Briefcase className="h-10 w-10 text-brand-blue" />,
    details: "Our fintech solutions help financial institutions modernize their technology infrastructure, enhance security, and deliver innovative customer experiences in an increasingly digital industry.",
    benefits: [
      "Regulatory compliance automation",
      "Enhanced fraud detection",
      "Seamless payment processing",
      "Improved customer engagement",
      "Modernized banking experiences"
    ]
  },
  {
    id: 'healthcare',
    title: "Healthcare Solutions",
    description: "Digital healthcare innovations",
    icon: <FileCode className="h-10 w-10 text-brand-blue" />,
    details: "Our healthcare technology solutions help organizations deliver better patient care, streamline operations, and ensure compliance with healthcare regulations and standards.",
    benefits: [
      "Enhanced patient engagement",
      "Streamlined clinical workflows",
      "Secure health data management",
      "Remote care capabilities",
      "Interoperability with healthcare systems"
    ]
  },
  {
    id: 'retail',
    title: "Retail Technology",
    description: "Omnichannel retail experiences",
    icon: <Building className="h-10 w-10 text-brand-blue" />,
    details: "Our retail technology solutions help businesses create seamless omnichannel experiences, optimize supply chain operations, and leverage data for personalized customer engagement.",
    benefits: [
      "Unified customer experience",
      "Inventory optimization",
      "Advanced analytics and insights",
      "Supply chain visibility",
      "Personalized marketing capabilities"
    ]
  }
];

const Solutions: React.FC = () => {
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
                Enterprise Solutions
              </h1>
              <p className="text-lg text-blue-100">
                Strategic technology solutions tailored to industry-specific challenges
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionsData.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {solution.icon}
                    </div>
                    
                    <div>
                      <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
                        {solution.title}
                      </h2>
                      <p className="text-gray-500 mb-1">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700 mb-4">
                      {solution.details}
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="font-heading font-semibold text-gray-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-brand-blue">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link 
                        to={`/solutions/${solution.id}`}
                        className="inline-flex items-center px-5 py-2 bg-brand-blue text-white rounded hover:bg-brand-darkBlue transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
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

export default Solutions;
