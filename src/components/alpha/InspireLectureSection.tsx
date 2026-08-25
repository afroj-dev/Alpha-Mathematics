import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, BookOpen, Calculator, Award } from 'lucide-react';
import { VideoLectureShowcase, Language } from '../../types/alpha';
import { alphaImages, videoLectures } from '../../data/alphaData';

interface InspireLectureSectionProps {
  currentLang: Language;
  onPlayVideo: (video: VideoLectureShowcase) => void;
}

export const InspireLectureSection: React.FC<InspireLectureSectionProps> = ({
  currentLang,
  onPlayVideo
}) => {
  return (
    <section id="lectures" className="relative min-h-[600px] lg:min-h-[680px] flex items-center py-24 sm:py-32 px-4 sm:px-8 overflow-hidden bg-[#0A0713]">
      
      {/* Deep Cosmic Starry Backdrop with Purple Cast */}
      <div className="absolute inset-0 z-0">
        <img
          src={alphaImages.milkyWayBackdrop}
          alt="Cosmic Night Sky"
          className="w-full h-full object-cover object-bottom brightness-[0.32] contrast-125"
          loading="lazy"
        />
        {/* Subtle purple gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713] via-[#0A0713]/60 to-[#0A0713]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0713]/95 via-[#0A0713]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Heading + Play Video Trigger + Diagonal Line + Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7652B8]/40 border border-[#C2A9E0]/40 text-xs font-body font-bold text-[#C2A9E0] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'hi' ? 'कांसेप्ट क्लैरिटी मास्टरक्लास' : 'CONCEPT FIRST METHODOLOGY'}</span>
            </div>

            {/* Big Headline: WHERE MATHEMATICS BECOMES SIMPLE */}
            <div className="space-y-1">
              <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[1.02] drop-shadow-2xl">
                WHERE<br />
                MATHEMATICS<br />
                <span className="text-[#9F83D0]">BECOMES SIMPLE</span>
              </h2>
            </div>

            {/* Play Video Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onPlayVideo(videoLectures[0])}
                className="group flex items-center gap-4 text-xs sm:text-sm font-bold tracking-widest text-white uppercase cursor-pointer hover:text-[#C2A9E0] transition-colors focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full bg-[#7652B8] border border-[#C2A9E0]/50 flex items-center justify-center group-hover:bg-[#9F83D0] group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(118,82,184,0.6)]">
                  <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                </div>
                <span className="font-body font-bold">{currentLang === 'hi' ? 'डेमो लेक्चर देखें' : 'Watch Demo Lecture'}</span>
              </button>
            </div>

            {/* Diagonal Aesthetic Divider Line */}
            <div className="relative w-48 sm:w-64 h-10">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-[2px] bg-gradient-to-r from-[#9F83D0] to-transparent rotate-[-12deg] origin-left" 
              />
            </div>

            {/* Left Description Paragraph */}
            <div className="max-w-md">
              <p className="text-sm text-slate-300 font-body leading-relaxed">
                {currentLang === 'hi'
                  ? 'दीपक सर के साथ समझें कि कैसे कठिन से कठिन कैलकुलस, त्रिकोणमिति और अकाउंट्स के सिद्धांतों को आसान तार्किक चरणों में हल किया जाता है।'
                  : 'Experience how Mr. Deepak deconstructs difficult mathematics, accounts, and economics concepts into intuitive, easy-to-master mental models.'}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Two Video Thumbnail Cards with 28px rounded containers */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-end justify-end gap-6">
            {videoLectures.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
                onClick={() => onPlayVideo(video)}
                className="group relative w-full sm:w-60 md:w-68 h-40 sm:h-44 rounded-[28px] overflow-hidden cursor-pointer border border-[#C2A9E0]/30 hover:border-[#9F83D0] transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
              >
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-[0.60]"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#7652B8]/90 backdrop-blur-sm border border-[#C2A9E0]/50 flex items-center justify-center group-hover:bg-[#9F83D0] group-hover:scale-110 transition-all shadow-lg">
                    <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Video Title & Duration */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-body text-white">
                  <span className="truncate max-w-[150px] font-semibold">{video.topic}</span>
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10">{video.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
