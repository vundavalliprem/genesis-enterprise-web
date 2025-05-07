
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechnologyItem {
  name: string;
  logo: string;
  category: string;
}

const TechnologiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Define technology items with categories
  const technologies: TechnologyItem[] = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
    
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", category: "Backend" },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend" },
    
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud" },
    { name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg", category: "Cloud" },
    
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database" },
    
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "DevOps" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "DevOps" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps" }
  ];
  
  // Filter categories
  const categories = ["All", "Frontend", "Backend", "Cloud", "Database", "DevOps"];
  
  // Filter technologies based on active filter
  const filteredTechnologies = activeFilter === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-blue-50 border border-blue-100 text-brand-blue rounded-full text-sm font-medium mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Master</span>
          </h2>
          <p className="text-lg text-gray-600">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for our clients.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Technologies grid with animation */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
              }}
              layout
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain" 
                  loading="lazy" 
                />
              </div>
              <h3 className="text-center font-medium text-gray-900">{tech.name}</h3>
              <span className="text-xs text-gray-500 mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
