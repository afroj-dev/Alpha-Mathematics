import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Trophy, GraduationCap, Star, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { topBoardScorers, collegePlacements } from '../../data/alphaData';
import { Language } from '../../types/alpha';

interface ResultsScoreboardSectionProps {
  currentLang: Language;
}

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export const ResultsScoreboardSection: React.FC<ResultsScoreboardSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'toppers' | 'colleges'>('toppers');

  return (
    <section id="results" className="relative bg-[#FAF8FD] py-24 sm:py-32 px-4 sm:px-8">
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
            <Trophy className="w-3.5 h-3.5" />
            <span>{currentLang === 'hi' ? 'प्रमाणित बोर्ड परिणाम' : 'PROVEN TRACK RECORD'}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight">
            {currentLang === 'hi' ? 'हम नहीं बोलते, हमारा रिजल्ट बोलता है' : "OUR STUDENTS' RESULTS SPEAK"}
          </h2>
          <p className="text-sm font-body text-[#666666] max-w-lg mx-auto">
            {currentLang === 'hi' ? 'प्रत्येक वर्ष 95%+ अंक और शीर्ष दिल्ली विश्वविद्यालय कॉलेजों में चयन' : 'Consistent 95%+ board scores and top Delhi University college placements.'}
          </p>
        </motion.div>

        {/* Tab Switcher: Board Toppers vs University Placements */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 font-body text-xs flex gap-2 shadow-sm">
            <button
              onClick={() => setActiveTab('toppers')}
              className={`px-6 py-2.5 rounded-full transition-all cursor-pointer font-bold ${
                activeTab === 'toppers'
                  ? 'bg-[#7652B8] text-white shadow-md'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              {currentLang === 'hi' ? 'बोर्ड टॉपर्स (95% - 99%)' : 'Board Toppers (95% - 99%)'}
            </button>
            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-6 py-2.5 rounded-full transition-all cursor-pointer font-bold ${
                activeTab === 'colleges'
                  ? 'bg-[#7652B8] text-white shadow-md'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              {currentLang === 'hi' ? 'दिल्ली यूनिवर्सिटी एडमिशन्स' : 'Delhi University Placements'}
            </button>
          </div>
        </div>

        {/* Tab 1: Board Exam High Scorers Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'toppers' && (
            <motion.div 
              key="toppers"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
            >
              {topBoardScorers.map((scorer, i) => {
                const isTopTier = scorer.score >= 98;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className={`p-6 rounded-[28px] border transition-all duration-300 relative group flex flex-col justify-between ${
                      isTopTier
                        ? 'bg-white border-[#7652B8] shadow-[0_12px_35px_rgba(118,82,184,0.12)]'
                        : 'bg-white border-[#C2A9E0]/30 hover:border-[#9F83D0] shadow-[0_8px_25px_rgba(0,0,0,0.03)]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-body text-[#777777] uppercase tracking-wider font-semibold">
                          {scorer.category}
                        </span>
                        {isTopTier && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#7652B8] text-white text-[10px] font-body font-bold shadow-sm">
                            TOPPER
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-black text-xl text-[#111111] group-hover:text-[#7652B8] transition-colors leading-tight">
                        {scorer.name}
                      </h3>
                      <p className="text-xs text-[#666666] font-body font-medium">{scorer.subject}</p>
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex items-baseline justify-between mt-4">
                      <span className="text-[10px] font-body text-[#777777] uppercase font-semibold">Board Score</span>
                      <span className="font-heading font-black text-3xl text-[#7652B8]">
                        {scorer.score}
                        <span className="text-xs text-[#777777] font-normal">/100</span>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Tab 2: College Admissions */}
          {activeTab === 'colleges' && (
            <motion.div 
              key="colleges"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {collegePlacements.map((plc, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-6 rounded-[28px] bg-white border border-[#C2A9E0]/30 hover:border-[#7652B8] transition-all flex items-start gap-4 shadow-[0_8px_30px_rgba(118,82,184,0.06)] hover:shadow-[0_15px_35px_rgba(118,82,184,0.12)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EFFB] border border-[#C2A9E0]/50 flex items-center justify-center shrink-0 text-[#7652B8] shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-black text-base text-[#111111]">{plc.student}</h4>
                      <span className="text-[10px] font-body font-bold text-[#7652B8] px-2.5 py-0.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/40">
                        {plc.university}
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed font-body font-medium">
                      {plc.college}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
