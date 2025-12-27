import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import SocialSidebar from './components/SocialSidebar';
import ScrollProgress from './components/ScrollProgress';
import ClickSpark from './components/ClickSpark';
import LazySection from './components/LazySection';

// Lazy Load Components
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const CodingProfile = lazy(() => import('./components/CodingProfile'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const FAQs = lazy(() => import('./components/FAQs'));
const Contact = lazy(() => import('./components/Contact'));
const Feedback = lazy(() => import('./components/Feedback'));
const Footer = lazy(() => import('./components/Footer'));
const Skills = lazy(() => import('./components/Skills'));
// New Component
const AllProjects = lazy(() => import('./components/AllProjects'));

// Section Wrapper Component
const SectionWrapper = ({ id, children, className = '', minHeight = '100vh' }) => (
  <section
    id={id}
    className={`relative w-full ${className}`}
    style={{ minHeight }}
  >
    {children}
  </section>
);

// Loading placeholder component
const LoadingPlaceholder = ({ height = '100px' }) => (
  <div className="w-full flex items-center justify-center" style={{ height }}>
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);


import useIsMobile from './hooks/useIsMobile';

/**
 * MAIN APP LAYOUT (For the Landing Page)
 */
const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const isMobile = useIsMobile();
  const location = useLocation();

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
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

  // Handle smooth scrolling
  const scrollToSection = React.useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerHeight - 20);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  }, []);

  // Handle hash scrolling on mount or change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location.hash, scrollToSection]);

  const content = (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">
      <ScrollProgress />
      {!isMobile && <SocialSidebar />}

      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>

      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
        theme={theme}
        toggleTheme={toggleTheme}
      />



      <main className="relative z-10">
        <SectionWrapper id="home" className="pt-20">
          <Home scrollToSection={scrollToSection} />
        </SectionWrapper>

        <SectionWrapper id="about">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <About />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="projects">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Projects />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="skills">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Skills />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="coding">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <CodingProfile />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="services">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Services />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="education">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Education />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="certifications">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Certifications />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="testimonials">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Testimonials />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="blog">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Blog />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="faq">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <FAQs />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="contact">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Contact />
            </Suspense>
          </LazySection>
        </SectionWrapper>

        <SectionWrapper id="feedback">
          <LazySection>
            <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
              <Feedback />
            </Suspense>
          </LazySection>
        </SectionWrapper>
      </main>

      <Suspense fallback={null}>
        <LazySection height="auto" rootMargin="100px">
          <Footer />
        </LazySection>
      </Suspense>

      <ClickSpark />
    </div>
  );

  if (isMobile) return content;

  return (
    <ClickSpark sparkColor="#FFD700" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      {content}
    </ClickSpark>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route
        path="/all-projects"
        element={
          <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
            <AllProjects />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;