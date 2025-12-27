
import React from 'react';
import { Globe, Server, Palette } from 'lucide-react';
import TiltCard from './TiltCard'; // Ensure this path is correct based on your folder structure

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="text-amber-600 dark:text-amber-500">05.</span> Services
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
          {/* Service 1: Web Development */}
          <TiltCard className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-none transition-colors">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 dark:bg-amber-500/20 rounded-lg flex items-center justify-center dark:text-amber-400 mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.
            </p>
          </TiltCard>

          {/* Service 2: Backend Systems */}
          <TiltCard className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-none transition-colors">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 dark:bg-orange-500/20 rounded-lg flex items-center justify-center dark:text-orange-400 mb-6">
              <Server size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend Systems</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Designing robust APIs and database architectures using Node.js, Express, and SQL/NoSQL databases.
            </p>
          </TiltCard>

          {/* Service 3: UI/UX Design */}
          <TiltCard className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-none transition-colors">
            <div className="w-16 h-16 bg-rose-100 text-rose-600 dark:bg-rose-500/20 rounded-lg flex items-center justify-center dark:text-rose-400 mb-6">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Creating intuitive and visually stunning user interfaces that provide an exceptional user experience.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Services;