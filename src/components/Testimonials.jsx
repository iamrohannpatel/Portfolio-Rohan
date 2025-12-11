
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-white">
          <span className="text-yellow-500">07.</span> Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 relative hover:border-yellow-500/30 transition-colors">
            <Quote className="absolute top-8 right-8 text-white/10" size={64} />
            <p className="text-gray-300 italic mb-6 relative z-10 text-lg">
              "Rohan is an incredibly dedicated developer. His ability to solve complex problems and his eye for design make him a valuable asset to any team."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shrink-0" />
              <div>
                <div className="font-bold text-white">Alex Johnson</div>
                <div className="text-sm text-gray-500">Senior Engineer, TechCorp</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 relative hover:border-yellow-500/30 transition-colors">
            <Quote className="absolute top-8 right-8 text-white/10" size={64} />
            <p className="text-gray-300 italic mb-6 relative z-10 text-lg">
              "Working with Rohan on the hackathon project was amazing. He leads with code and is always willing to help others learn."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0" />
              <div>
                <div className="font-bold text-white">Sarah Lee</div>
                <div className="text-sm text-gray-500">Fellow Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;