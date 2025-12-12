import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { BLOG_DATA } from '../data/constants';
// Adjust this import path based on where you saved TiltCard
import TiltCard from './TiltCard';

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-orange-500">09.</span> Latest Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <TiltCard
              key={post.id}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col h-full hover:border-orange-500/30"
            >
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} /> {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-orange-400 text-sm font-medium hover:gap-3 transition-all py-2">
                Read Article <ExternalLink size={16} />
              </button>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;