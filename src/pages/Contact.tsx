
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Mail, Phone, Clock, ChevronDown } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact: React.FC = () => {
  const faqData = [
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed price, time and materials, and dedicated team arrangements. We'll recommend the best approach based on your project requirements and provide transparent, detailed quotes with no hidden costs."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple applications can be delivered in 4-8 weeks, while enterprise solutions may take 3-6 months. We provide detailed project plans with milestones and delivery schedules during the proposal phase."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance services including bug fixes, feature updates, performance monitoring, and 24/7 technical support to ensure your application continues to perform optimally."
    },
    {
      question: "How do you ensure the security of client data?",
      answer: "We follow industry best practices for data security, including secure coding standards, encryption, regular security audits, and strict access controls. We comply with GDPR, HIPAA, and other relevant data protection regulations."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern tech stacks including React, Node.js, Python, AWS, Azure, microservices architecture, and cloud-native solutions. Our team stays updated with the latest technologies to deliver cutting-edge solutions."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely! We excel at collaborating with existing teams, whether you need additional resources, specialized expertise, or want us to take over specific components of your project while maintaining seamless integration."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Toaster />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-brand-darkBlue to-brand-blue py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-blue-100">
                Get in touch with our team to discuss how we can help your business thrive in the digital age
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact details sidebar */}
              <div className="lg:col-span-2 bg-gray-50 rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Office Location</h3>
                      <p className="text-gray-600">
                        3rd Floor Sri Durga Sai Hub, 301, 13th phase rd,<br/>
                        opposite prajay megapolis, kukatpally housing board colony<br/>
                        Hyderabad, Telangana 500072<br/>
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@gorantlainfotech.com" className="text-brand-blue hover:underline">
                          info@gorantlainfotech.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+918939444844" className="text-brand-blue hover:underline">
                          +91 89394 44844
                        </a> (India)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-darkBlue transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-darkBlue transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.68 14-14.36 0-.22 0-.43-.02-.65A10 10 0 0 0 24 4.37z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-darkBlue transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form & Map */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-8">
                  {/* Form */}
                  <ContactForm />
                  
                  {/* Map */}
                  <div className="h-80 rounded-xl overflow-hidden shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3392368751676!2d78.3985!3d17.4850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzA2LjAiTiA3OMKwMjMnNTQuNiJF!5e0!3m2!1sen!2sin!4v1620120000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gorantla Infotech Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modern FAQ Section with enhanced design */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-brand-blue font-semibold text-sm mb-6 shadow-sm">
                <span className="mr-2 text-lg">❓</span>
                Got Questions? We Have Answers
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Find quick answers to common questions about working with us and our services
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-6">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-3xl shadow-lg border-0 px-8 py-4 hover:shadow-xl transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-8 [&[data-state=open]>div>div:last-child]:rotate-180">
                      <div className="flex items-center w-full">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-brand-blue font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 pr-4 group-hover:text-brand-blue transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                          <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <div className="ml-18 pr-12">
                        <div className="w-full h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* Enhanced CTA at the bottom of FAQ */}
              <motion.div 
                className="mt-16 text-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-brand-blue via-brand-darkBlue to-indigo-600 rounded-3xl shadow-2xl p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium text-sm mb-4 backdrop-blur-sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Need More Help?
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Still have questions?
                    </h3>
                    <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                      Our expert team is here to help you every step of the way. Get personalized answers to your specific questions.
                    </p>
                    <a 
                      href="mailto:info@gorantlainfotech.com"
                      className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Get in Touch with Our Experts
                      <Mail className="ml-3 h-5 w-5" />
                    </a>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
