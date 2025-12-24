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
  Mail,
  Award,
  ThumbsUp,
  Loader2
} from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import SocialSidebar from './components/SocialSidebar';
import ScrollToTop from './components/ScrollToTop';
import ClickSpark from './components/ClickSpark';

// Lazy Load Section Components
const Services = React.lazy(() => import('./components/Services'));
const CodingProfile = React.lazy(() => import('./components/CodingProfile'));
const Projects = React.lazy(() => import('./components/Projects'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Blog = React.lazy(() => import('./components/Blog'));
const FAQs = React.lazy(() => import('./components/FAQs'));
const Contact = React.lazy(() => import('./components/Contact'));
const Feedback = React.lazy(() => import('./components/Feedback'));
const Footer = React.lazy(() => import('./components/Footer'));
const Skills = React.lazy(() => import('./components/Skills'));



/**
 * MAIN APP
 */
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState('dark');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'coding', label: 'Coding', icon: <Code2 size={20} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={20} /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen size={20} /> },
    { id: 'faq', label: 'FAQs', icon: <HelpCircle size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
    { id: 'feedback', label: 'Feedback', icon: <ThumbsUp size={20} /> },
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
      const offset = 60; // Exact/tight header height to remove gaps
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <ClickSpark
      sparkColor="#FFD700"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">

        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 z-[100]"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        {/* <ParticleBackground /> */}
        <SocialSidebar />
        <ScrollToTop />

        {/* Navigation */}
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navItems={navItems}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="relative z-10 pt-20">

          {/* HERO */}
          <Home scrollToSection={scrollToSection} />

          {/* ABOUT */}
          <About />

          {/* PROJECTS */}
          <React.Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-amber-500" size={40} /></div>}>
            <Projects />
          </React.Suspense>

          {/* SKILLS */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Skills />
          </React.Suspense>

          {/* CODING PROFILE */}
          <React.Suspense fallback={<div className="h-96" />}>
            <CodingProfile />
          </React.Suspense>

          {/* SERVICES */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Services />
          </React.Suspense>

          {/* EDUCATION & JOURNEY */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Education />
          </React.Suspense>

          {/* CERTIFICATIONS */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Certifications />
          </React.Suspense>

          {/* TESTIMONIALS */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Testimonials />
          </React.Suspense>

          {/* BLOG */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Blog />
          </React.Suspense>

          {/* FAQ */}
          <React.Suspense fallback={<div className="h-96" />}>
            <FAQs />
          </React.Suspense>

          {/* CONTACT FORM */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Contact />
          </React.Suspense>

          {/* FEEDBACK */}
          <React.Suspense fallback={<div className="h-96" />}>
            <Feedback />
          </React.Suspense>

          <React.Suspense fallback={<div className="h-20" />}>
            <Footer />
          </React.Suspense>

        </main>

      </div>
    </ClickSpark>
  );
};

export default App;