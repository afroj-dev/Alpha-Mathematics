import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, BookOpen, User } from 'lucide-react';
import { VideoLectureShowcase, Language } from '../../types/alpha';

interface VideoLectureModalProps {
  video: VideoLectureShowcase | null;
  currentLang: Language;
  onClose: () => void;
}

export const VideoLectureModal: React.FC<VideoLectureModalProps> = ({
  video,
  currentLang,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      <div 
        className="relative w-full max-w-4xl bg-[#0E0A1A] border border-[#7652B8]/40 rounded-[32px] overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Title & Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9F83D0] animate-pulse" />
            <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-slate-100 truncate max-w-md">
              {video.title[currentLang]} • {video.topic}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#7652B8] text-white transition-all cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={video.thumbnail}
            alt={video.title[currentLang]}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlaying ? 'scale-105 filter brightness-90' : 'scale-100 filter brightness-70'
            }`}
          />

          {/* Color Grading Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Playing Simulation Animation */}
          {isPlaying && (
            <div className="absolute top-6 right-6 flex items-center gap-2 px-3.5 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-[#9F83D0]/40 text-xs font-body font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE CONCEPT MASTERCLASS</span>
            </div>
          )}

          {/* Central Play/Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7652B8] hover:bg-[#9F83D0] text-white flex items-center justify-center shadow-[0_0_30px_rgba(118,82,184,0.7)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-1" />
            )}
          </button>

          {/* Video Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-t from-black via-black/80 to-transparent z-20 text-xs font-body">
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#9F83D0]" />}
              </button>

              <span className="text-slate-400 text-[11px] font-mono">04:15 / {video.duration}</span>
            </div>

            {/* Simulated Progress Bar */}
            <div className="hidden sm:block flex-1 mx-6 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#9F83D0] w-1/4 rounded-full shadow-[0_0_8px_rgba(159,131,208,0.8)]" />
            </div>

            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <span>{currentLang === 'hi' ? 'दीपक सर की क्लास' : 'Instructor: Mr. Deepak'}</span>
            </div>
          </div>
        </div>

        {/* Video Caption & Story */}
        <div className="p-6 bg-[#0E0A1A] space-y-2">
          <p className="text-sm text-slate-300 font-body leading-relaxed">
            {video.description[currentLang]}
          </p>
          <div className="flex items-center gap-4 pt-2 text-xs font-body text-[#C2A9E0]/80">
            <span className="font-semibold text-white">Key Principle: {video.keyTakeaway}</span>
            <span>•</span>
            <span>Alpha Mathematics Institute, Khayala</span>
          </div>
        </div>

      </div>
    </div>
  );
};
