import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import RoadmapSection from './components/RoadmapSection';
import Services from './components/Services';
import Results from './components/Results';
import CoursesSection from './components/CoursesSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="w-full overflow-hidden bg-gray-950">
      <Header />
      <Hero />
      <Vision />
      <RoadmapSection />
      <Services />
      <Results />
      <CoursesSection />
      <Testimonials />
      <CTA />
      <Footer />
      <BottomNav />
    </div>
  );
}