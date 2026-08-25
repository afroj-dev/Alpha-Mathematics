import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Phone, Mail, MapPin, Send, Smartphone, Clock, Sparkles } from 'lucide-react';
import { Language } from '../../types/alpha';
import { instituteMeta } from '../../data/alphaData';

interface AlphaFooterProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AlphaFooter: React.FC<AlphaFooterProps> = ({ currentLang, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="relative bg-[#0E0A1A] text-white pt-20 pb-14 overflow-hidden border-t border-[#7652B8]/20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16"
      >
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#9F83D0] shadow-[0_0_15px_rgba(159,131,208,0.4)] bg-[#1A1330] p-0.5 shrink-0">
                <img 
                  src={instituteMeta.logo} 
                  alt="Alpha Mathematics Institute Logo" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-wider text-white uppercase leading-tight">
                  ALPHA MATHEMATICS
                </span>
                <span className="text-[10px] font-body tracking-widest text-[#9F83D0] uppercase font-bold">
                  {currentLang === 'hi' ? 'ख्याला, नई दिल्ली • 17+ वर्ष' : 'ESTD. 2007 • NEW DELHI'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-body max-w-sm">
              {currentLang === 'hi'
                ? 'ख्याला, नई दिल्ली में 17+ वर्षों से गणित एवं शैक्षणिक कोचिंग का विश्वसनीय संस्थान। श्री दीपक के मार्गदर्शन में कक्षा 6 से 12वीं एवं कॉलेज विद्यार्थियों का उज्ज्वल भविष्य।'
                : 'Premier mathematics & academic coaching institute in Khayala, Vishnu Garden, Delhi. 17+ years of dedicated teaching excellence led by Mr. Deepak.'}
            </p>

            <div className="pt-2 text-xs font-body text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9F83D0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Main Centre:</strong> {instituteMeta.addressMain}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2A9E0]/60 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Branch:</strong> {instituteMeta.addressBranch}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9F83D0] shrink-0" />
                <a href={`tel:${instituteMeta.phone1Raw}`} className="hover:text-[#C2A9E0] transition-colors font-medium">
                  {instituteMeta.phone1}
                </a>
                <span>/</span>
                <a href={`tel:${instituteMeta.phone2Raw}`} className="hover:text-[#C2A9E0] transition-colors font-medium">
                  {instituteMeta.phone2}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9F83D0] shrink-0" />
                <span>Open Daily • Closes 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-[#9F83D0]">
              {currentLang === 'hi' ? 'नेविगेशन' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-sm font-body text-slate-300">
              <li><a href="#home" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'संस्थान परिचय (17+ वर्ष)' : 'About Mr. Deepak'}</a></li>
              <li><a href="#programs" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'कोर्सेज एवं बैचेज' : 'Academic Programs'}</a></li>
              <li><a href="#results" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'बोर्ड टॉपर्स (99 & 98)' : 'Results & Placements'}</a></li>
              <li><a href="#lectures" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'डेमो वीडियो लेक्चर्स' : 'Demo Lectures'}</a></li>
              <li><a href="#reviews" className="hover:text-[#C2A9E0] transition-colors">{currentLang === 'hi' ? 'गूगल 4.9★ रिव्यूज' : 'Student Reviews'}</a></li>
            </ul>
          </div>

          {/* Direct Callback / App Enquiry (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-[#9F83D0]">
              {currentLang === 'hi' ? 'मुफ्त डेमो क्लास अनुरोध' : 'BOOK TRIAL CLASS'}
            </h4>
            <p className="text-xs text-slate-300 font-body leading-relaxed">
              {currentLang === 'hi'
                ? 'दीपक सर के साथ 1-on-1 परामर्श और अपनी क्लास के लिए डेमो सेशन बुक करें।'
                : 'Directly schedule a 1-on-1 counseling session and secure your free concept trial class.'}
            </p>
            <div className="space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-full bg-[#7652B8] hover:bg-[#9F83D0] text-white text-xs font-bold font-body uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(118,82,184,0.4)] hover:shadow-[0_6px_25px_rgba(118,82,184,0.6)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>{currentLang === 'hi' ? 'डेमो क्लास फॉर्म खोलें' : 'Open Booking Form'}</span>
              </button>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-[#7652B8]/30 flex items-center gap-3 text-xs font-body text-slate-300">
                <Smartphone className="w-4 h-4 text-[#9F83D0] shrink-0" />
                <span>{instituteMeta.appNotice}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-slate-400">
          <p>© {new Date().getFullYear()} ALPHA MATHEMATICS INSTITUTE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-400">KHAYALA • VISHNU GARDEN • DELHI - 110018</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#7652B8] text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
