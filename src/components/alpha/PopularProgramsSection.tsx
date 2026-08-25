import React from 'react';
import { motion } from 'motion/react';
import { AcademicProgram, Language } from '../../types/alpha';
import { academicPrograms } from '../../data/alphaData';
import { ArrowRight, Star, Clock, Users, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

interface PopularProgramsSectionProps {
  currentLang: Language;
  onSelectProgram: (program: AcademicProgram) => void;
  onBookDemo: (program: AcademicProgram) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export const PopularProgramsSection: React.FC<PopularProgramsSectionProps> = ({
  currentLang,
  onSelectProgram,
  onBookDemo
}) => {
  return (
    <section id="programs" className="relative bg-[#FAF8FD] py-24 sm:py-32 px-4 sm:px-8">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Centered Heading Block with Motion Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 text-xs font-body font-bold text-[#7652B8] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'hi' ? 'विशेष शैक्षणिक पाठ्यक्रम' : 'CURATED CURRICULUM'}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight">
            {currentLang === 'hi' ? 'लोकप्रिय कोर्सेज एवं बैचेज' : 'ACADEMIC PROGRAMS'}
          </h2>
          <p className="text-sm font-body text-[#666666] max-w-lg mx-auto">
            {currentLang === 'hi' ? 'कक्षा 6 से 12 एवं कॉलेज स्तर तक गणित और वाणिज्य की सम्पूर्ण तैयारी' : 'From Foundation classes 6-10 to Advanced Board & College Honours.'}
          </p>
        </motion.div>

        {/* 4 Vertical Program Cards Grid with Staggered Scroll Reveal - 32px rounded white cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {academicPrograms.map((prog) => (
            <motion.div
              key={prog.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => onSelectProgram(prog)}
              className="group relative flex flex-col justify-between h-[460px] sm:h-[490px] rounded-[32px] overflow-hidden cursor-pointer bg-white border border-[#C2A9E0]/30 hover:border-[#7652B8] transition-all duration-500 shadow-[0_10px_30px_rgba(118,82,184,0.06)] hover:shadow-[0_20px_45px_rgba(118,82,184,0.14)]"
            >
              {/* Photo Image Banner (Top Half) */}
              <div className="relative w-full h-[52%] overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title[currentLang]}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Top Pill - Duration & Rating */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-body font-bold text-[#111111] shadow-sm">
                    {prog.feeInfo}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#7652B8] shadow-sm">
                    <Star className="w-3 h-3 fill-[#7652B8]" />
                    <span>{prog.rating}</span>
                  </div>
                </div>

                {/* Program Number Badge */}
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-0.5 rounded-full bg-[#7652B8] text-white text-[10px] font-heading font-bold uppercase tracking-wider shadow-sm">
                    {prog.programNumber}
                  </span>
                </div>
              </div>

              {/* Bottom Card Content (Bottom Half in Clean Crisp White) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div className="space-y-1.5">
                  <h3 className="font-heading font-black text-xl text-[#111111] uppercase tracking-tight group-hover:text-[#7652B8] transition-colors line-clamp-2 leading-tight">
                    {prog.title[currentLang]}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2 font-body">
                    {prog.subtitle[currentLang]}
                  </p>
                </div>

                {/* Bottom Metadata & CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-body">
                  <div className="flex items-center gap-1.5 text-[#777777]">
                    <BookOpen className="w-3.5 h-3.5 text-[#9F83D0]" />
                    <span className="font-medium">{prog.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-[#7652B8] group-hover:text-[#111111] transition-colors">
                    <span>{currentLang === 'hi' ? 'विवरण' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Custom Batch & Demo Class Banner - 32px rounded */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-[32px] bg-white border border-[#C2A9E0]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_12px_40px_rgba(118,82,184,0.08)]"
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#7652B8]" />
              <span className="text-xs font-body font-bold uppercase tracking-widest text-[#7652B8]">
                {currentLang === 'hi' ? 'मुफ्त डेमो क्लास एवं व्यक्तिगत मार्गदर्शन' : 'Free Demo Class & Personal Mentorship'}
              </span>
            </div>
            <p className="text-base sm:text-lg font-heading font-bold text-[#111111]">
              {currentLang === 'hi'
                ? 'दीपक सर के साथ 1-on-1 डेमो क्लास और विषयवार रणनीति के लिए अभी संपर्क करें!'
                : 'Experience Mr. Deepak’s concept-first coaching method with a risk-free 1-on-1 trial session.'}
            </p>
          </div>
          <button
            onClick={() => onBookDemo(academicPrograms[0])}
            className="px-8 py-3.5 rounded-full bg-[#7652B8] hover:bg-[#9F83D0] text-white text-xs font-bold font-body uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-[0_8px_25px_rgba(118,82,184,0.3)] hover:shadow-[0_12px_30px_rgba(118,82,184,0.45)]"
          >
            {currentLang === 'hi' ? 'डेमो क्लास बुक करें' : 'Book Free Trial Class'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
