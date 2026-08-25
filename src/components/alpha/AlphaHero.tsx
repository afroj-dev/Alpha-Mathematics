import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowRight, Calculator, Award, Phone, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { HeroSlide, Language } from '../../types/alpha';
import { heroSlides, instituteMeta } from '../../data/alphaData';

interface AlphaHeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenDetails: (slide: HeroSlide) => void;
}

export const AlphaHero: React.FC<AlphaHeroProps> = ({
  currentLang,
  onOpenBooking,
  onOpenDetails
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Bind scroll progress across the multi-height sticky hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollPercent(latest);
    // Map latest (0 to 1) into 5 slide indices [0, 1, 2, 3, 4]
    const numSlides = heroSlides.length;
    const computedIndex = Math.min(
      numSlides - 1,
      Math.max(0, Math.floor(latest * numSlides * 0.999))
    );
    if (computedIndex !== activeSlideIndex) {
      setActiveSlideIndex(computedIndex);
    }
  });

  const currentSlide = heroSlides[activeSlideIndex] || heroSlides[0];

  // Helper to scroll to a specific slide index on click
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (heroSlides.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative w-full h-[360vh] bg-[#07090C]"
    >
      {/* Sticky Fullscreen Frame that stays pinned while user scrolls through all 5 slides */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0D12] text-white pt-16 sm:pt-20 pb-2 sm:pb-3 select-none">
        
        {/* Background Images with smooth cinematic cross-fade */}
        {heroSlides.map((slide, idx) => {
          const isActive = idx === activeSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none -z-10'
              }`}
            >
              <img
                src={slide.bgImage}
                alt={slide.titleSecondary}
                className="w-full h-full object-cover object-center brightness-[0.38] contrast-115"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Deep Editorial Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-[#0A0D12]/70" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#0A0D12]/30 to-[#0A0D12]/85" />
            </div>
          );
        })}

        {/* Top Minimalist Editorial Status Bar */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 flex items-center justify-between pt-1 sm:pt-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C2A9E0]/30 text-xs font-body tracking-wider text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#9F83D0] shadow-[0_0_8px_rgba(159,131,208,0.8)]" />
              <span className="font-bold text-white tracking-widest uppercase">
                № {String(activeSlideIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-[#C2A9E0] font-semibold">
                {currentSlide.badge}
              </span>
            </div>
          </div>

          {/* Segmented Timeline Indicator */}
          <div className="flex items-center gap-1.5 hidden sm:flex">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className="group p-1 cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeSlideIndex 
                      ? 'w-10 bg-[#9F83D0] shadow-[0_0_8px_rgba(159,131,208,0.8)]' 
                      : 'w-3 bg-white/25 group-hover:bg-white/45'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Mid Section Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 flex-1 flex items-center my-auto py-1 sm:py-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            
            {/* Left Hero Title & Streetwear Editorial Typography */}
            <div className="lg:col-span-8 space-y-2 sm:space-y-3">
              
              {/* Tagline / Subtitle */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`badge-${currentSlide.id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <span className="px-3 py-0.5 rounded-full bg-[#7652B8]/80 border border-[#C2A9E0]/50 text-[11px] sm:text-xs font-body font-bold tracking-widest text-[#FAF8FD] uppercase shadow-sm">
                    {currentSlide.badge} • {currentSlide.tagline}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Giant Display Title - Poppins Ultra Bold Scaled for Optimal Viewport Fit */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`title-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-0"
                >
                  <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase text-white leading-[0.95] drop-shadow-2xl">
                    {currentSlide.titlePrimary}
                  </h1>
                  <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase text-white leading-[0.95] drop-shadow-2xl">
                    {currentSlide.titleSecondary}
                  </h1>
                </motion.div>
              </AnimatePresence>

              {/* Minimalist Icon Bar & Key Stats */}
              <div className="flex items-center gap-3 sm:gap-5 pt-1 text-slate-200">
                <div 
                  className="w-8 h-8 rounded-full border border-[#C2A9E0]/40 bg-white/5 flex items-center justify-center hover:border-[#9F83D0] hover:text-[#9F83D0] transition-colors cursor-pointer"
                  title="Mathematics & Logical Concepts"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#C2A9E0]" />
                </div>
                <div 
                  className="w-8 h-8 rounded-full border border-[#C2A9E0]/40 bg-white/5 flex items-center justify-center hover:border-[#9F83D0] hover:text-[#9F83D0] transition-colors cursor-pointer"
                  title="99 & 98 Board Toppers & Honors"
                >
                  <Award className="w-3.5 h-3.5 text-[#C2A9E0]" />
                </div>
                <div 
                  className="w-8 h-8 rounded-full border border-[#C2A9E0]/40 bg-white/5 flex items-center justify-center hover:border-[#9F83D0] hover:text-[#9F83D0] transition-colors cursor-pointer"
                  title="1-on-1 Personal Mentorship by Mr. Deepak"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C2A9E0]" />
                </div>
                <span className="text-[11px] sm:text-xs font-body text-slate-300 font-medium tracking-wide hidden sm:inline-block">
                  {currentSlide.stats.experience} • {currentSlide.stats.rating} • {currentSlide.stats.students}
                </span>
              </div>
            </div>

            {/* Right Vertical Slide Pagination: 01 02 03 04 05 */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="flex flex-row lg:flex-col items-center lg:items-end gap-2.5 sm:gap-3.5 font-heading">
                {heroSlides.map((slide, index) => {
                  const isActive = index === activeSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => scrollToSlide(index)}
                      className={`group flex items-center gap-2 sm:gap-3 cursor-pointer focus:outline-none transition-all ${
                        isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {/* Active Extended Line */}
                      {isActive && (
                        <motion.span 
                          layoutId="activeSlideLine"
                          className="hidden lg:inline-block w-8 xl:w-12 h-[2.5px] bg-[#9F83D0] shadow-[0_0_10px_rgba(159,131,208,0.9)] rounded-full" 
                        />
                      )}
                      <span
                        className={`transition-all ${
                          isActive
                            ? 'text-xl sm:text-2xl font-black text-white scale-110'
                            : 'text-xs sm:text-sm font-semibold'
                        }`}
                      >
                        {slide.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Summary Feature Cards with Streetwear Purple Accent */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-1.5 sm:pt-2">
          <div className="flex md:grid md:grid-cols-3 gap-2.5 sm:gap-4 overflow-x-auto md:overflow-visible pb-1 md:pb-0 scrollbar-none snap-x border-t border-white/10 pt-2 sm:pt-2.5">
            {currentSlide.features[currentLang].map((feature, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  onClick={() => onOpenDetails(currentSlide)}
                  className="min-w-[230px] md:min-w-0 snap-center group relative cursor-pointer space-y-1 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-all border border-white/5 hover:border-[#C2A9E0]/40"
                >
                  {/* Purple Active Underline for the primary card */}
                  {isFirst && (
                    <div className="absolute -top-[9px] sm:-top-[11px] left-0 right-0 h-[2.5px] bg-[#9F83D0] rounded-full shadow-[0_0_8px_rgba(159,131,208,0.8)]" />
                  )}

                  <div className="space-y-0.5">
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-[#C2A9E0] transition-colors flex items-center gap-1.5 truncate">
                      <span>{feature.title}</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-snug font-body line-clamp-1 sm:line-clamp-2">
                      {feature.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-body font-bold tracking-wider text-white uppercase group-hover:text-[#9F83D0] transition-colors pt-0.5"
                  >
                    <span>{currentLang === 'hi' ? 'विवरण देखें' : 'LEARN MORE'}</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform text-[#9F83D0]" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Subtle Footer Controls & Scroll Cue */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 flex items-center justify-between pt-1 pb-1">
          <div 
            onClick={() => {
              if (activeSlideIndex < heroSlides.length - 1) {
                scrollToSlide(activeSlideIndex + 1);
              } else {
                const progEl = document.getElementById('programs');
                if (progEl) progEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-slate-300 hover:text-[#9F83D0] transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F83D0]" />
            <span>
              {activeSlideIndex < heroSlides.length - 1
                ? (currentLang === 'hi' ? 'अगला स्लाइड' : 'Next Showcase')
                : (currentLang === 'hi' ? 'कोर्सेज देखें' : 'View Programs')}
            </span>
          </div>

          {/* Clean Desktop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scrollToSlide(activeSlideIndex === 0 ? heroSlides.length - 1 : activeSlideIndex - 1)}
              className="p-1.5 rounded-full bg-white/10 border border-[#C2A9E0]/30 hover:bg-[#7652B8] hover:border-[#7652B8] text-white transition-all cursor-pointer"
              aria-label="Previous stream slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollToSlide((activeSlideIndex + 1) % heroSlides.length)}
              className="p-1.5 rounded-full bg-white/10 border border-[#C2A9E0]/30 hover:bg-[#7652B8] hover:border-[#7652B8] text-white transition-all cursor-pointer"
              aria-label="Next stream slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

