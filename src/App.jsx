import React, { useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  User,
  Cpu,
  Briefcase,
  Code2,
  FolderGit2,
  MessageSquareQuote,
  GraduationCap,
  BookOpen,
  HelpCircle,
  Mail
} from 'lucide-react';
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
import Skills from './components/Skills';

/**
 * MAIN APP
 */
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'coding', label: 'Coding', icon: <Code2 size={20} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={20} /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen size={20} /> },
    { id: 'faq', label: 'FAQs', icon: <HelpCircle size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

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

        {/* ABOUT */}
        <About />

        {/* PROJECTS */}
        <Projects />

        {/* SKILLS */}
        <Skills />

        {/* CODING PROFILE */}
        <CodingProfile />

        {/* SERVICES */}
        <Services />

        {/* EDUCATION & JOURNEY */}
        <Education />

        {/* TESTIMONIALS */}
        <Testimonials />

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