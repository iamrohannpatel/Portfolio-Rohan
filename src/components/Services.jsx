import React from 'react';
import { Globe, Server, Palette } from 'lucide-react';
import TiltCard from './TiltCard'; // Ensure this path is correct based on your folder structure

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-pink-500">05.</span> What I Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
          {/* Service 1: Web Development */}
          <TiltCard className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-400">
              Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.
            </p>
          </TiltCard>

          {/* Service 2: Backend Systems */}
          <TiltCard className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <Server size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Backend Systems</h3>
            <p className="text-gray-400">
              Designing robust APIs and database architectures using Node.js, Express, and SQL/NoSQL databases.
            </p>
          </TiltCard>

          {/* Service 3: UI/UX Design */}
          <TiltCard className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-400 mb-6">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-400">
              Creating intuitive and visually stunning user interfaces that provide an exceptional user experience.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Services;