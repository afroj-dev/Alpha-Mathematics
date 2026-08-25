import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { AlphaNavbar } from './components/alpha/AlphaNavbar';
import { AlphaHero } from './components/alpha/AlphaHero';
import { PopularProgramsSection } from './components/alpha/PopularProgramsSection';
import { InspireLectureSection } from './components/alpha/InspireLectureSection';
import { ResultsScoreboardSection } from './components/alpha/ResultsScoreboardSection';
import { AboutInstituteSection } from './components/alpha/AboutInstituteSection';
import { StudentReviewsSection } from './components/alpha/StudentReviewsSection';
import { AlphaFooter } from './components/alpha/AlphaFooter';
import { ProgramDetailModal } from './components/alpha/ProgramDetailModal';
import { VideoLectureModal } from './components/alpha/VideoLectureModal';
import { DemoBookingModal } from './components/alpha/DemoBookingModal';
import { AlphaSearchOverlay } from './components/alpha/AlphaSearchOverlay';
import { Language, AcademicProgram, VideoLectureShowcase, HeroSlide } from './types/alpha';
import { academicPrograms } from './data/alphaData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll Progress Bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedProgramForDetail, setSelectedProgramForDetail] = useState<AcademicProgram | null>(null);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState<AcademicProgram | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoLectureShowcase | null>(null);

  // Monitor scroll position for active nav links and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'results', 'lectures', 'reviews', 'contacts'];
      const scrollPos = window.scrollY + 200;

      setShowScrollTop(window.scrollY > 400);

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (program?: AcademicProgram) => {
    setSelectedProgramForBooking(program || academicPrograms[0]);
    setIsBookingOpen(true);
  };

  const handleOpenSlideDetails = (slide: HeroSlide) => {
    const matched = academicPrograms.find((p) => p.programNumber.includes(slide.number)) || academicPrograms[0];
    setSelectedProgramForDetail(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FD] text-[#111111] font-body selection:bg-[#9F83D0]/30 selection:text-[#7652B8]">
      
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#9F83D0] via-[#7652B8] to-[#C2A9E0] z-50 origin-left shadow-[0_0_10px_rgba(159,131,208,0.6)]"
        style={{ scaleX }}
      />

      {/* 1. Top Navbar */}
      <AlphaNavbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Section - "STUDY WITH MR. DEEPAK" / "ALPHA MATHEMATICS" & 01..05 Slider */}
        <AlphaHero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          onOpenDetails={handleOpenSlideDetails}
        />

        {/* 3. "POPULAR ACADEMIC PROGRAMS" - 4 Tall Vertical Photo Cards with Staggered Scroll Reveal */}
        <PopularProgramsSection
          currentLang={currentLang}
          onSelectProgram={(program) => setSelectedProgramForDetail(program)}
          onBookDemo={(program) => handleOpenBooking(program)}
        />

        {/* 4. "WHERE MATHEMATICS BECOMES SIMPLE" - Deep Starry Sky & Video Lecture Masterclasses */}
        <InspireLectureSection
          currentLang={currentLang}
          onPlayVideo={(video) => setActiveVideo(video)}
        />

        {/* 5. Board Toppers (99 & 98) & Delhi University Placements */}
        <ResultsScoreboardSection
          currentLang={currentLang}
        />

        {/* 6. About Mr. Deepak (17+ Years) & 3 Teaching Pillars */}
        <AboutInstituteSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Student & Parent Testimonials (Google 4.9★) */}
        <StudentReviewsSection
          currentLang={currentLang}
        />
      </main>

      {/* 8. Comprehensive Footer with Addresses & Contact */}
      <AlphaFooter
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Scroll To Top Button with AnimatePresence */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white border border-[#C2A9E0] text-[#111111] shadow-[0_10px_25px_rgba(118,82,184,0.18)] hover:bg-[#7652B8] hover:border-[#7652B8] hover:text-white transition-all cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 text-[#7652B8] group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Overlays & Modals */}
      {selectedProgramForDetail && (
        <ProgramDetailModal
          program={selectedProgramForDetail}
          currentLang={currentLang}
          onClose={() => setSelectedProgramForDetail(null)}
          onBook={(prog) => handleOpenBooking(prog)}
        />
      )}

      {activeVideo && (
        <VideoLectureModal
          video={activeVideo}
          currentLang={currentLang}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {isBookingOpen && (
        <DemoBookingModal
          initialProgram={selectedProgramForBooking}
          currentLang={currentLang}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {isSearchOpen && (
        <AlphaSearchOverlay
          currentLang={currentLang}
          onClose={() => setIsSearchOpen(false)}
          onSelectProgram={(prog) => setSelectedProgramForDetail(prog)}
        />
      )}

    </div>
  );
}
