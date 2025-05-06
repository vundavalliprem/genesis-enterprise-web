
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            className="text-center max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-blue mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
            </p>
            <Link to="/">
              <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white px-6 py-2.5 rounded-md">
                <ArrowLeft className="mr-2" size={18} />
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
