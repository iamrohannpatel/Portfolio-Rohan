import React from 'react';
import {  Quote, Star, User  } from './GoogleIcons';
import TiltCard from './TiltCard';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Engineer, TechCorp",
    content: "Rohan is an incredibly dedicated developer. His ability to solve complex problems and his eye for design make him a valuable asset to any team.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Fellow Student",
    content: "Working with Rohan on the hackathon project was amazing. He leads with code and is always willing to help others learn.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Project Manager",
    content: "The level of polish in Rohan's work is outstanding. He doesn't just deliver features; he delivers experiences.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 relative overflow-hidden bg-white/50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <span className="text-amber-600 dark:text-amber-500">08.</span> Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
             What people say about my work. I pride myself on not just writing code, but building lasting relationships and solving real business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TiltCard
              key={testimonial.id}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 h-full flex flex-col group hover:border-amber-500 dark:hover:border-amber-500 transition-colors relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-amber-500 transition-colors duration-300" />
              
              <Quote className="text-gray-300 dark:text-white/10 mb-6" size={40} />
              
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 border border-gray-200 dark:border-white/10 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 shrink-0">
                  <User size={24} />
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;