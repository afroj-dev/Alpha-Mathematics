import React, { useState } from 'react';
import { Search, Globe, Phone, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { Language } from '../../types/alpha';
import { instituteMeta } from '../../data/alphaData';

interface AlphaNavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const AlphaNavbar: React.FC<AlphaNavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenSearch,
  onOpenBooking,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', en: 'HOME', hi: 'मुख्य पृष्ठ' },
    { id: 'about', en: 'ABOUT US', hi: 'संस्थान परिचय' },
    { id: 'programs', en: 'PROGRAMS', hi: 'कोर्सेज' },
    { id: 'results', en: 'RESULTS', hi: 'टॉपर्स' },
    { id: 'lectures', en: 'DEMO LECTURES', hi: 'डेमो क्लास' },
    { id: 'reviews', en: 'REVIEWS', hi: 'रिव्यूज' },
    { id: 'contacts', en: 'CONTACT', hi: 'संपर्क' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#C2A9E0]/40 select-none shadow-[0_4px_20px_rgba(118,82,184,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo with Goddess Saraswati Emblem and Alpha Typography */}
        <a 
          href="#home"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#7652B8] shadow-[0_0_15px_rgba(159,131,208,0.4)] group-hover:border-[#9F83D0] group-hover:shadow-[0_0_20px_rgba(118,82,184,0.5)] transition-all bg-[#F3EFFB] p-0.5">
              <img 
                src={instituteMeta.logo} 
                alt="Alpha Mathematics Institute Logo" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#7652B8] border-2 border-white shadow-sm" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-[#111111] uppercase group-hover:text-[#7652B8] transition-colors leading-none">
              ALPHA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#7652B8] uppercase font-bold mt-0.5">
              {currentLang === 'hi' ? 'मैथेमेटिक्स इंस्टीट्यूट' : 'MATHEMATICS'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-body text-xs font-semibold tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-1.5 transition-colors uppercase cursor-pointer ${
                  isActive ? 'text-[#7652B8] font-bold' : 'text-[#555555] hover:text-[#111111]'
                }`}
              >
                {link[currentLang]}
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#7652B8] rounded-full shadow-[0_2px_8px_rgba(118,82,184,0.4)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons: Search, Language Toggle, Call / Demo CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 hover:border-[#9F83D0] hover:bg-[#FAF8FD] text-[#111111] transition-all cursor-pointer shadow-sm"
            aria-label="Search courses and subjects"
            title="Search subjects & courses"
          >
            <Search className="w-4 h-4 text-[#7652B8] hover:text-[#111111]" />
          </button>

          {/* Language Switcher (EN / HI) */}
          <div className="flex items-center p-1 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 font-body text-[11px] font-bold">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#7652B8] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                currentLang === 'hi'
                  ? 'bg-[#7652B8] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              HI
            </button>
          </div>

          {/* Call & Book Demo Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7652B8] hover:bg-[#9F83D0] text-white font-body text-xs font-bold tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(118,82,184,0.25)] hover:shadow-[0_10px_25px_rgba(118,82,184,0.35)] cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{currentLang === 'hi' ? 'डेमो क्लास बुक करें' : 'Book Free Demo'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/50 text-[#111111] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#7652B8]" /> : <Menu className="w-5 h-5 text-[#7652B8]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#C2A9E0]/40 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-body text-xs uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#333333] hover:text-[#7652B8] py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link[currentLang]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9F83D0]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#7652B8] text-white font-body text-xs font-bold uppercase tracking-wider text-center shadow-md"
            >
              {currentLang === 'hi' ? 'मुफ्त डेमो क्लास बुक करें' : 'Book Free Demo Class'}
            </button>
            <a
              href={`tel:${instituteMeta.phone1Raw}`}
              className="w-full py-2.5 rounded-full bg-[#F3EFFB] border border-[#C2A9E0]/60 text-[#111111] font-body text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#7652B8]" />
              <span>{instituteMeta.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
