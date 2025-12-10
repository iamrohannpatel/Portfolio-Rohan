import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/constants';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-blue-500">09.</span> FAQs
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openFaq === index ? (
                  <Minus size={20} className="text-cyan-400" />
                ) : (
                  <Plus size={20} className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
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