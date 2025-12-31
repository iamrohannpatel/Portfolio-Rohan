import React from 'react';
import { Layout, Rocket, Server, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/constants';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={32} />;
      case 'Rocket': return <Rocket size={32} />;
      case 'Server': return <Server size={32} />;
      case 'Zap': return <Zap size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-50/50 dark:to-white/5 -z-10" />

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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                <div className="text-3xl font-bold text-gray-100 dark:text-white/5 select-none -mt-4 -mr-4">
                  0{service.id}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Benefits / Why Hire Me */}
        <div className="bg-gray-900 dark:bg-white/5 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to launch your next big idea?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Me and my team are available for freelance projects and consulting. Let's discuss how we can build something amazing together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-amber-400 font-bold text-xl mb-1">Super</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-amber-400 font-bold text-xl mb-1">Best</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-amber-400 font-bold text-xl mb-1">Fast</div>
                <div className="text-gray-300 text-sm">Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-amber-400 font-bold text-xl mb-1">Clean</div>
                <div className="text-gray-300 text-sm">Code Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
