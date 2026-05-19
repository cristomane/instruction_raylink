import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Stats from './sections/Stats';
import Pricing from './sections/Pricing';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import OfferPage from './pages/OfferPage';
import PrivacyPage from './pages/PrivacyPage';

import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Main page component
const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router basename="/raylink-site">
      <div className="min-h-screen bg-dark text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
