import React from 'react';
import { X, Check, Star, BookOpen, Clock, ShieldCheck, Users } from 'lucide-react';
import { AcademicProgram, Language } from '../../types/alpha';

interface ProgramDetailModalProps {
  program: AcademicProgram | null;
  currentLang: Language;
  onClose: () => void;
  onBook: (program: AcademicProgram) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  currentLang,
  onClose,
  onBook
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#C2A9E0]/40 rounded-[32px] shadow-2xl text-[#111111] scrollbar-thin scrollbar-thumb-[#7652B8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#7652B8] text-white transition-all cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title[currentLang]}
            className="w-full h-full object-cover brightness-[0.60]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#7652B8] text-white font-body font-bold text-xs uppercase tracking-widest">
                {program.programNumber}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                {program.title[currentLang]}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-body font-semibold text-slate-300 uppercase">
                {currentLang === 'hi' ? 'फीस संरचना' : 'Fee Structure'}
              </span>
              <p className="font-heading font-black text-xl sm:text-2xl text-white">{program.feeInfo}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Facts Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F3EFFB] border border-[#C2A9E0]/40 text-center font-body text-xs">
            <div>
              <p className="text-[#666666] text-[11px] uppercase font-semibold">{currentLang === 'hi' ? 'अवधि' : 'Duration'}</p>
              <p className="font-bold text-[#111111] mt-0.5">{program.duration}</p>
            </div>
            <div>
              <p className="text-[#666666] text-[11px] uppercase font-semibold">{currentLang === 'hi' ? 'बैच आकार' : 'Batch Size'}</p>
              <p className="font-bold text-[#111111] mt-0.5">{program.batchSize}</p>
            </div>
            <div>
              <p className="text-[#666666] text-[11px] uppercase font-semibold">{currentLang === 'hi' ? 'रेटिंग' : 'Rating'}</p>
              <p className="font-bold text-[#7652B8] mt-0.5">{program.rating} ★ ({program.reviewsCount}+)</p>
            </div>
          </div>

          {/* Subjects Covered */}
          <div className="space-y-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-wider text-[#7652B8]">
              {currentLang === 'hi' ? 'शामिल विषय' : 'SUBJECTS COVERED IN THIS PROGRAM'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.subjects.map((sub, i) => (
                <span key={i} className="px-3.5 py-1 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 text-xs font-body font-semibold text-[#111111]">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-wider text-[#7652B8]">
              {currentLang === 'hi' ? 'पाठ्यक्रम का विवरण' : 'CURRICULUM & METHODOLOGY'}
            </h4>
            <p className="text-sm text-[#555555] font-body leading-relaxed">
              {program.description[currentLang]}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-wider text-[#7652B8]">
              {currentLang === 'hi' ? 'मुख्य विशेषताएं एवं फायदे' : 'KEY PROGRAM HIGHLIGHTS'}
            </h4>
            <div className="space-y-2">
              {program.highlights[currentLang].map((hl, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#333333]">
                  <div className="w-5 h-5 rounded-full bg-[#F3EFFB] text-[#7652B8] flex items-center justify-center shrink-0 border border-[#C2A9E0]/40">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guaranteed Value */}
          <div className="p-4 rounded-2xl bg-[#F3EFFB]/60 border border-[#C2A9E0]/40 text-xs text-[#555555] space-y-1">
            <p className="font-bold text-[#7652B8] uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <ShieldCheck className="w-4 h-4 text-[#7652B8]" />
              <span>{currentLang === 'hi' ? 'अल्फा गारंटी एवं सपोर्ट' : 'ALPHA QUALITY COMMITMENT'}</span>
            </p>
            <p className="font-body leading-relaxed">
              {currentLang === 'hi'
                ? 'साप्ताहिक मूल्यांकन, पिछले 10 साल के बोर्ड प्रश्न, पर्सनलाइज्ड डाउट सेशन और अभिभावक-अध्यापक नियमित संवाद।'
                : 'Weekly evaluated testing, chapter-wise analytical question banks, 1-on-1 doubt solving, and continuous progress reporting.'}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-body font-bold text-[#555555] uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              {currentLang === 'hi' ? 'बंद करें' : 'Close'}
            </button>

            <button
              onClick={() => {
                onClose();
                onBook(program);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#7652B8] hover:bg-[#9F83D0] text-white text-xs font-body font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(118,82,184,0.3)] hover:shadow-[0_6px_25px_rgba(118,82,184,0.5)] transition-all cursor-pointer text-center"
            >
              {currentLang === 'hi' ? 'मुफ्त डेमो क्लास बुक करें' : 'Book Free Demo Class'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
