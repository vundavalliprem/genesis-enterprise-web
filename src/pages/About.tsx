
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  // Example company stats
  const stats = [
    { label: "Years in business", value: "15+" },
    { label: "Global clients", value: "200+" },
    { label: "Team members", value: "500+" },
    { label: "Projects delivered", value: "1000+" }
  ];

  // Example team members
  const teamMembers = [
    { 
      name: "Aditya Gorantla", 
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    },
    { 
      name: "Priya Sharma", 
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
    },
    { 
      name: "Rajesh Kumar", 
      title: "VP of Operations",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    },
    { 
      name: "Sarah Johnson", 
      title: "Director of Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
    }
  ];

  // Example values
  const values = [
    { 
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: "Excellence",
      description: "We strive for excellence in every project, consistently delivering high-quality solutions that exceed client expectations."
    },
    { 
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to ensure their success."
    },
    { 
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Innovation",
      description: "We embrace innovation, continuously exploring new technologies and approaches to solve complex business challenges."
    },
    { 
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Integrity",
      description: "We operate with unwavering integrity, fostering trust and building lasting relationships with our clients and partners."
    }
  ];

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
                About Gorantla Infotech
              </h1>
              <p className="text-lg text-blue-100">
                Empowering enterprises with innovative technology solutions since 2008
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2008, Gorantla Infotech Solutions has grown from a small team of passionate technologists to a global enterprise solution provider serving clients across industries.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With our headquarters in Hyderabad and offices across North America, Europe, and Asia, we bring together diverse perspectives and technical expertise to solve complex business challenges.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our mission is to empower enterprises by delivering innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                    alt="Gorantla Infotech office"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-100 rounded-lg -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700">
                The principles that guide our work and define our culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-700">
                Meet the experts guiding our vision and strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-brand-blue">{member.title}</p>
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

export default About;
