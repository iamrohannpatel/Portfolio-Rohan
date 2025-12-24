import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Engineer, TechCorp",
    content: "Rohan is an incredibly dedicated developer. His ability to solve complex problems and his eye for design make him a valuable asset to any team.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Fellow Student",
    content: "Working with Rohan on the hackathon project was amazing. He leads with code and is always willing to help others learn.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Project Manager",
    content: "The level of polish in Rohan's work is outstanding. He doesn't just deliver features; he delivers experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    gradient: "from-yellow-400 to-orange-500"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 relative overflow-hidden bg-white/50 dark:bg-black/40 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto mb-8 md:mb-1 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="text-amber-600 dark:text-amber-500">08.</span> Testimonials
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            What people say about <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-200 dark:to-orange-500">
              my work
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 font-medium text-lg max-w-lg mx-auto lg:mx-0">
            I pride myself on not just writing code, but building lasting relationships and solving real business problems.
          </p>


        </div>

        {/* Right Stacked Carousel */}
        <div className="relative h-[400px] w-full flex items-center justify-center lg:justify-end perspective-1000">
          {testimonials.map((testimonial, index) => {
            // Logic to determine stack position (0 = active, 1 = next, 2 = last)
            const position = (index - activeIndex + testimonials.length) % testimonials.length;

            // Only render visible items to keep DOM clean
            if (position > 2) return null;

            return (
              <div
                key={testimonial.id}
                className="absolute w-full max-w-[380px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  zIndex: 30 - position,
                  transform: `
translateY(${position * 40}px)
scale(${1 - position * 0.05})
translateZ(${- position * 50}px)
                                `,
                  opacity: 1 - position * 0.4,
                  filter: `blur(${position * 2}px)`,
                }}
              >
                <div className="bg-white dark:bg-[#0f1115] border border-gray-200 dark:border-white/10 p-6 rounded-3xl shadow-2xl relative overflow-hidden group transition-colors">

                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`} />

                  <Quote className="text-gray-300 dark:text-white/10 mb-4" size={40} />

                  <p className="text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-white/10"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}


          {/* Cyberpunk 'Corner Clamps' Controls */}
          <div className="absolute -bottom-10 left-0 w-full flex justify-between items-center px-4 z-40 pointer-events-none">

            {/* Prev Button (Left Clamp) */}
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className={`pointer-events-auto group flex items-center gap-2 pl-4 pr-6 py-3 bg-white dark:bg-[#0f1115] border-t border-r border-gray-200 dark:border-white/10 rounded-tr-3xl clip-path-polygon transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:border-amber-500/30 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''} shadow-lg dark:shadow-none`}
              style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
            >
              <ChevronLeft className={`text-gray-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors ${activeIndex === 0 ? '' : 'group-hover:-translate-x-1 transition-transform'}`} size={20} />
              <span className="text-xs font-mono text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors hidden sm:inline-block">PREV</span>
            </button>

            {/* Central Digital Counter */}
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold font-mono text-gray-900 dark:text-white">0{activeIndex + 1}</span>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-600">/ 0{testimonials.length}</span>
              </div>
              <div className="w-24 h-0.5 bg-gray-200 dark:bg-white/10 mt-2 relative overflow-hidden rounded-full">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                  style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Next Button (Right Clamp) */}
            <button
              onClick={() => setActiveIndex((prev) => Math.min(testimonials.length - 1, prev + 1))}
              disabled={activeIndex === testimonials.length - 1}
              className={`pointer-events-auto group flex items-center gap-2 pl-6 pr-4 py-3 bg-white dark:bg-[#0f1115] border-t border-l border-gray-200 dark:border-white/10 rounded-tl-3xl clip-path-polygon transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:border-orange-500/30 ${activeIndex === testimonials.length - 1 ? 'opacity-30 cursor-not-allowed' : ''} shadow-lg dark:shadow-none`}
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
            >
              <span className="text-xs font-mono text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors hidden sm:inline-block">NEXT</span>
              <ChevronRight className={`text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors ${activeIndex === testimonials.length - 1 ? '' : 'group-hover:translate-x-1 transition-transform'}`} size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;