
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Server, Cloud } from 'lucide-react';

// Technology data organized by category
const technologies = {
  all: [
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'Django', category: 'backend' },
    { name: 'Flask', category: 'backend' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Azure', category: 'cloud' },
    { name: 'Google Cloud', category: 'cloud' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'Jenkins', category: 'devops' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'Redis', category: 'database' },
    { name: 'Python', category: 'backend' },
    { name: 'Java', category: 'backend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'GraphQL', category: 'backend' },
    { name: 'Terraform', category: 'devops' },
    { name: 'Ansible', category: 'devops' }
  ],
  frontend: [],
  backend: [],
  cloud: [],
  database: [],
  devops: []
};

// Populate category arrays
Object.keys(technologies).forEach(key => {
  if (key !== 'all') {
    technologies[key] = technologies.all.filter(tech => tech.category === key);
  }
});

// Define category icons
const categoryIcons = {
  all: <Server className="h-5 w-5" />,
  frontend: <Code className="h-5 w-5" />,
  backend: <Globe className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  devops: <Server className="h-5 w-5" />
};

const TechnologySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedTechnologies, setDisplayedTechnologies] = useState(technologies.all);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    setDisplayedTechnologies(technologies[activeCategory]);
  }, [activeCategory]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-4 bg-blue-50 text-brand-blue rounded-full text-sm font-medium mb-5"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6"
          >
            Technologies We Master
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for our clients.
          </motion.p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{categoryIcons[category.id]}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Forces re-animation when category changes
        >
          {displayedTechnologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={itemVariants}
              className="bg-white border border-gray-100 hover:border-brand-blue p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="h-14 w-14 mb-4 flex items-center justify-center">
                <img 
                  src={`https://cdn.simpleicons.org/${encodeURIComponent(tech.name.toLowerCase().replace('.js', '').replace('.', ''))}/0f172a`} 
                  alt={tech.name}
                  className="max-h-full max-w-full transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback for icons that might not be found
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpath d='M14 2v6h6'/%3E%3Cpath d='M16 13H8'/%3E%3Cpath d='M16 17H8'/%3E%3Cpath d='M10 9H8'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h3 className="text-gray-900 font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
