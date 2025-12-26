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
  ThumbsUp
} from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import LazySection from './components/LazySection';
import SocialSidebar from './components/SocialSidebar';
// ScrollToTop is non-critical, lazy load it
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
import ScrollProgress from './components/ScrollProgress';
import ClickSpark from './components/ClickSpark';

// Lazy Load Section Components
// About is now lazy loaded
const About = React.lazy(() => import('./components/About'));
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


import useIsMobile from './hooks/useIsMobile';

/**
 * MAIN APP
 */
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const isMobile = useIsMobile();

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

  const navItems = React.useMemo(() => [
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
  ], []);

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

  const scrollToSection = React.useCallback((id) => {
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
  }, []);

  // Wrap content conditionally based on mobile check for click spark
  const content = (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">

      {/* Scroll Progress Bar - Disable on mobile */}
      {!isMobile && <ScrollProgress />}


      {/* Social Sidebar - Hide on mobile */}
      {!isMobile && <SocialSidebar />}

      {/* ScrollToTop - Non-critical, lazy load */}
      <React.Suspense fallback={null}>
        <ScrollToTop />
      </React.Suspense>

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

        {/* HERO - Eager Loaded */}
        <Home scrollToSection={scrollToSection} />

        {/* ABOUT - Lazy Loaded */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <About />
          </React.Suspense>
        </LazySection>

        {/* PROJECTS */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Projects />
          </React.Suspense>
        </LazySection>

        {/* SKILLS */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Skills />
          </React.Suspense>
        </LazySection>

        {/* CODING PROFILE */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <CodingProfile />
          </React.Suspense>
        </LazySection>

        {/* SERVICES */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Services />
          </React.Suspense>
        </LazySection>

        {/* EDUCATION & JOURNEY */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Education />
          </React.Suspense>
        </LazySection>

        {/* CERTIFICATIONS */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Certifications />
          </React.Suspense>
        </LazySection>

        {/* TESTIMONIALS */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Testimonials />
          </React.Suspense>
        </LazySection>

        {/* BLOG */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Blog />
          </React.Suspense>
        </LazySection>

        {/* FAQ */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <FAQs />
          </React.Suspense>
        </LazySection>

        {/* CONTACT FORM */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Contact />
          </React.Suspense>
        </LazySection>

        {/* FEEDBACK */}
        <LazySection>
          <React.Suspense fallback={<div className="h-96" />}>
            <Feedback />
          </React.Suspense>
        </LazySection>

        <LazySection>
          <React.Suspense fallback={<div className="h-20" />}>
            <Footer />
          </React.Suspense>
        </LazySection>

      </main>

    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <ClickSpark
      sparkColor="#FFD700"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {content}
    </ClickSpark>
  );
};

export default App;