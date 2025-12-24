import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/constants';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="text-amber-600 dark:text-amber-500">10.</span> FAQs
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openFaq === index ? (
                  <Minus size={20} className="text-amber-600 dark:text-amber-400" />
                ) : (
                  <Plus size={20} className="text-gray-400 dark:text-gray-500" />
                )}
              </button>
              <div
                className={`px-6 text-gray-600 dark:text-gray-400 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;