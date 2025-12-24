import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { BLOG_DATA } from '../data/constants';
// Adjust this import path based on where you saved TiltCard
import TiltCard from './TiltCard';

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-20 px-4 bg-white/50 dark:bg-black/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="text-amber-600 dark:text-amber-500">09.</span> Latest Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <TiltCard
              key={post.id}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl flex flex-col h-full hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-colors shadow-lg dark:shadow-none"
            >
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} /> {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-medium hover:gap-3 transition-all py-2">
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