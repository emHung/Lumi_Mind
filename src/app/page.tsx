import React from 'react';
import Navbar from '@/components/landing/navbar';
import HeroSection from '@/components/landing/hero-section';
import FeaturesGrid from '@/components/landing/features-grid';
import SolutionsGrid from '@/components/landing/solutions-grid';
import TestimonialsSection from '@/components/landing/text';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <TestimonialsSection />
        <SolutionsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;