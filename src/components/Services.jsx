import React from 'react';
import {  Layout, Rocket, Server, Zap, ArrowRight, CheckCircle2  } from './GoogleIcons';
import { SERVICES_DATA } from '../data/constants';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={24} />;
      case 'Rocket': return <Rocket size={24} />;
      case 'Server': return <Server size={24} />;
      case 'Zap': return <Zap size={24} />;
      default: return <Layout size={24} />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900 dark:text-white mb-4">
              <span className="text-amber-600 dark:text-amber-500">05.</span> Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              Specialized technical services tailored for startups and businesses.
              I deliver high-quality, scalable solutions with a focus on speed and performance.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-amber-600 dark:text-amber-500 font-semibold hover:gap-3 transition-all"
          >
            Start a project <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 overflow-hidden hover:border-gray-400 dark:hover:border-white/20 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="h-[2px] w-full bg-gray-200 dark:bg-white/10 group-hover:bg-amber-500 transition-colors duration-300" />

              <div className="p-8">
                {/* Header: Icon + Index */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-600 mt-1">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 pt-5 border-t border-gray-100 dark:border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-1 h-1 bg-amber-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12 text-center md:text-left relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to launch your next big idea?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Me and my team are available for freelance projects and consulting. Let's discuss how we can build something amazing together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 font-bold transition-all transform hover:scale-105"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-5 text-center">
                <div className="text-amber-600 dark:text-amber-400 font-bold text-xl mb-1">Super</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-5 text-center">
                <div className="text-amber-600 dark:text-amber-400 font-bold text-xl mb-1">Best</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Support</div>
              </div>
              <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-5 text-center">
                <div className="text-amber-600 dark:text-amber-400 font-bold text-xl mb-1">Fast</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Delivery</div>
              </div>
              <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-5 text-center">
                <div className="text-amber-600 dark:text-amber-400 font-bold text-xl mb-1">Clean</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Code Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
