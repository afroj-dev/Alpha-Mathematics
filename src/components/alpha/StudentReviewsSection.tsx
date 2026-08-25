import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { studentTestimonials } from '../../data/alphaData';
import { Language } from '../../types/alpha';

interface StudentReviewsSectionProps {
  currentLang: Language;
}

const reviewsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const reviewCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = ({ currentLang }) => {
  return (
    <section id="reviews" className="relative bg-[#FAF8FD] py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 text-[#7652B8] text-xs font-body font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#7652B8]" />
            <span>{currentLang === 'hi' ? 'छात्रों एवं अभिभावकों के विचार' : 'TESTIMONIALS & TRUST'}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight">
            {currentLang === 'hi' ? 'गूगल वेरिफाइड रिव्यूज (4.9★)' : 'GOOGLE VERIFIED REVIEWS'}
          </h2>
          <p className="text-sm font-body text-[#666666] max-w-lg mx-auto">
            {currentLang === 'hi' ? '127+ वास्तविक विद्यार्थियों और अभिभावकों का 4.9 स्टार विश्वास' : 'Over 127+ verified student ratings and parent recommendations.'}
          </p>
        </motion.div>

        {/* Reviews Cards Grid with Staggered Scroll Animation - 32px rounded white cards */}
        <motion.div 
          variants={reviewsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {studentTestimonials.map((rev) => (
            <motion.div
              key={rev.id}
              variants={reviewCardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 rounded-[32px] bg-white border border-[#C2A9E0]/30 hover:border-[#7652B8] transition-all duration-300 flex flex-col justify-between space-y-6 relative group shadow-[0_8px_30px_rgba(118,82,184,0.06)] hover:shadow-[0_16px_40px_rgba(118,82,184,0.14)]"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#7652B8] text-[#7652B8]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C2A9E0]/40 group-hover:text-[#7652B8]/40 transition-colors" />
                </div>

                {/* Batch Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#F3EFFB] text-xs font-body font-bold text-[#7652B8] border border-[#C2A9E0]/40">
                  {rev.scoreOrCollege}
                </span>

                {/* Review Text */}
                <p className="text-sm text-[#444444] font-body leading-relaxed italic">
                  "{rev.comment[currentLang]}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#9F83D0]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-black text-sm text-[#111111]">{rev.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-[#777777] font-body font-medium">
                    <span>{rev.batch}</span>
                    <span>•</span>
                    <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      {rev.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
