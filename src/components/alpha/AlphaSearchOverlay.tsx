import React, { useState } from 'react';
import { Search, X, BookOpen, User, Phone, MapPin, Award, ArrowRight } from 'lucide-react';
import { Language, AcademicProgram } from '../../types/alpha';
import { academicPrograms, topBoardScorers, instituteMeta } from '../../data/alphaData';

interface AlphaSearchOverlayProps {
  currentLang: Language;
  onClose: () => void;
  onSelectProgram: (prog: AcademicProgram) => void;
}

export const AlphaSearchOverlay: React.FC<AlphaSearchOverlayProps> = ({
  currentLang,
  onClose,
  onSelectProgram
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickTags = [
    'Class 12 Accounts',
    'Class 12 Maths',
    'Class 10 Science',
    'Economics (99/100)',
    'Mr. Deepak',
    'Khayala Centre',
    'NIOS Coaching',
    'Free Demo Class'
  ];

  const filteredPrograms = academicPrograms.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.en.toLowerCase().includes(q) ||
      p.title.hi.toLowerCase().includes(q) ||
      p.subjects.some((s) => s.toLowerCase().includes(q)) ||
      p.description.en.toLowerCase().includes(q)
    );
  });

  const filteredToppers = topBoardScorers.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#C2A9E0]/50 rounded-[32px] p-6 sm:p-8 shadow-2xl text-[#111111] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-[#7652B8] hover:text-white text-[#555555] transition-all cursor-pointer"
          aria-label="Close search"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Search Header Input */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7652B8]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#7652B8]">
              {currentLang === 'hi' ? 'अल्फा खोज पोर्टल' : 'Alpha Knowledge Search'}
            </span>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7652B8]" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'hi' ? 'विषय, कक्षा, टॉपर्स या संस्थान खोजें...' : 'Search subjects, classes, toppers, timings...'}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F3EFFB] border border-[#C2A9E0]/50 focus:border-[#7652B8] text-base text-[#111111] placeholder-slate-400 outline-none transition-colors"
            />
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {quickTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setSearchQuery(tag)}
                className="px-3.5 py-1 rounded-full bg-[#F3EFFB] hover:bg-[#7652B8] hover:text-white border border-[#C2A9E0]/40 text-xs font-body font-semibold text-[#555555] transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Container */}
        <div className="pt-6 space-y-6">
          
          {/* Matched Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-black uppercase tracking-wider text-[#7652B8] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#7652B8]" />
              <span>{currentLang === 'hi' ? 'संबंधित कोर्सेज' : 'ACADEMIC PROGRAMS'} ({filteredPrograms.length})</span>
            </h4>

            {filteredPrograms.length > 0 ? (
              <div className="space-y-2">
                {filteredPrograms.map((prog) => (
                  <div
                    key={prog.id}
                    onClick={() => {
                      onClose();
                      onSelectProgram(prog);
                    }}
                    className="p-4 rounded-2xl bg-[#FAF8FD] hover:bg-[#F3EFFB] border border-[#C2A9E0]/30 hover:border-[#7652B8] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h5 className="font-heading font-black text-sm text-[#111111] group-hover:text-[#7652B8] transition-colors">
                        {prog.title[currentLang]}
                      </h5>
                      <p className="text-xs text-[#666666] line-clamp-1 font-body">{prog.subtitle[currentLang]}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#7652B8] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#777777] italic font-body">No matching programs found.</p>
            )}
          </div>

          {/* Matched Toppers & Records */}
          {filteredToppers.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-heading font-black uppercase tracking-wider text-[#7652B8] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#7652B8]" />
                <span>{currentLang === 'hi' ? 'टॉपर्स रिकॉर्ड' : 'TOPPERS RECORD'}</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {filteredToppers.slice(0, 4).map((top, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8FD] border border-[#C2A9E0]/30 text-xs font-body">
                    <p className="font-bold text-[#111111]">{top.name} • {top.category}</p>
                    <p className="text-[#666666]">{top.subject}: <span className="text-[#7652B8] font-bold">{top.score}/100</span></p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Address & Contact Card in Search */}
          <div className="p-4 rounded-2xl bg-[#F3EFFB] border border-[#C2A9E0]/40 text-xs font-body text-[#333333] space-y-2">
            <div className="flex items-center gap-2 text-[#111111] font-heading font-bold">
              <MapPin className="w-4 h-4 text-[#7652B8]" />
              <span>{instituteMeta.name} • {instituteMeta.teacher}</span>
            </div>
            <p className="text-xs text-[#666666]">{instituteMeta.addressMain}</p>
            <div className="flex items-center gap-2 text-[#7652B8] font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>{instituteMeta.phone1} / {instituteMeta.phone2}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
