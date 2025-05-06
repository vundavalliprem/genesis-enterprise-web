
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
