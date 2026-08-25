import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Users, Sparkles, BookOpenCheck, BrainCircuit } from 'lucide-react';
import { Language } from '../../types/alpha';
import { instituteMeta, institutePillars } from '../../data/alphaData';

interface AboutInstituteSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AboutInstituteSection: React.FC<AboutInstituteSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const icons = [BrainCircuit, Award, BookOpenCheck];

  return (
    <section id="about" className="relative bg-[#FAF8FD] py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 text-[#7652B8] text-xs font-body font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'hi' ? 'संस्थान एवं शिक्षक परिचय' : 'PEDAGOGY & FOUNDER'}</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase tracking-tight leading-[1.1]">
              {currentLang === 'hi' 
                ? 'जहाँ गणित और अकाउंट्स बन जाते हैं आसान' 
                : 'Where Mathematics Becomes Simple & Intuitive'}
            </h2>

            <p className="text-sm sm:text-base text-[#666666] font-body leading-relaxed">
              {currentLang === 'hi'
                ? 'अल्फा मैथेमेटिक्स इंस्टीट्यूट में पिछले 17+ वर्षों से श्री दीपक जी के मार्गदर्शन में कक्षा 6वीं से 12वीं, कॉलेज डिग्री और NIOS के विद्यार्थियों को उच्च गुणवत्ता की शिक्षा प्रदान की जा रही है। हमारा मुख्य उद्देश्य विद्यार्थियों में रटने की जगह लॉजिक और समझ विकसित करना है।'
                : 'Led personally by Mr. Deepak for over 17 years in Khayala, Vishnu Garden, Alpha Mathematics Institute has nurtured generations of board toppers and university scholars. Our pedagogical philosophy centers on deep conceptual clarity rather than rote memorization.'}
            </p>

            {/* 3 Experience and Trust Numbers with Motion Stagger */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="font-heading font-black text-3xl sm:text-4xl text-[#111111]">17+</p>
                <p className="text-xs font-body text-[#777777] font-semibold mt-0.5">{currentLang === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience'}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-heading font-black text-3xl sm:text-4xl text-[#7652B8]">1,400+</p>
                <p className="text-xs font-body text-[#777777] font-semibold mt-0.5">{currentLang === 'hi' ? 'सफल छात्र' : 'Guided Students'}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="font-heading font-black text-3xl sm:text-4xl text-[#111111]">4.9★</p>
                <p className="text-xs font-body text-[#777777] font-semibold mt-0.5">{currentLang === 'hi' ? 'गूगल रेटिंग (127+)' : 'Google Score'}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Cards Stack with Staggered Scroll Reveal - 28px rounded white cards */}
          <div className="lg:col-span-6 space-y-4">
            {institutePillars.map((pillar, i) => {
              const Icon = icons[i] || Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-[28px] bg-white border border-[#C2A9E0]/30 hover:border-[#7652B8] transition-all duration-300 flex items-start gap-5 shadow-[0_8px_30px_rgba(118,82,184,0.06)] hover:shadow-[0_12px_35px_rgba(118,82,184,0.12)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EFFB] border border-[#C2A9E0]/50 flex items-center justify-center shrink-0 text-[#7652B8] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-black text-lg text-[#111111] uppercase tracking-tight">
                      {pillar.title[currentLang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body font-medium">
                      {pillar.desc[currentLang]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
