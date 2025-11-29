import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import CodingProfile from './components/CodingProfile';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Blog from './components/Blog';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import SocialSidebar from './components/SocialSidebar';

/**
 * MAIN APP
 */
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'coding', label: 'Coding' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'education', label: 'Education' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-[100]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <ParticleBackground />
      <SocialSidebar />

      {/* Navigation */}
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
      />

      <main className="relative z-10 pt-20">

        {/* HERO */}
        <Home scrollToSection={scrollToSection} />

        {/* ABOUT & SKILLS */}
        <About />

        {/* SERVICES */}
        <Services />

        {/* CODING PROFILE */}
        <CodingProfile />

        {/* PROJECTS */}
        <Projects />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* EDUCATION & JOURNEY */}
        <Education />

        {/* BLOG */}
        <Blog />

        {/* FAQ */}
        <FAQs />

        {/* CONTACT FORM */}
        <Contact />

        <Footer />

      </main>

    </div>
  );
};

export default App;