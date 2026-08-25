import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Phone, User, BookOpen, Clock, Sparkles } from 'lucide-react';
import { AcademicProgram, Language } from '../../types/alpha';
import { instituteMeta } from '../../data/alphaData';

interface DemoBookingModalProps {
  initialProgram: AcademicProgram | null;
  currentLang: Language;
  onClose: () => void;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  initialProgram,
  currentLang,
  onClose
}) => {
  const [studentName, setStudentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedClass, setSelectedClass] = useState(
    initialProgram ? initialProgram.title[currentLang] : 'Class XI & XII Commerce (Accounts & Maths)'
  );
  const [learningMode, setLearningMode] = useState<'offline' | 'online'>('offline');
  const [preferredTime, setPreferredTime] = useState('Evening (4:00 PM - 7:00 PM)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classOptions = [
    'Class XI & XII Commerce (Accounts, Eco, Maths, BST)',
    'Class XI & XII Science (Maths, Physics, Chemistry)',
    'Class XI & XII Humanities / Arts (Pol. Sci, History, Eco)',
    'Class IX & X Board Foundation (Maths & Science)',
    'Class VI to VIII Junior Foundation',
    'College Degrees (B.Com, B.A., B.Sc) / NIOS Coaching'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !phoneNumber) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg bg-[#0E1319] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#FF5722] text-white transition-all cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header with Logo */}
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF5722]/80 shadow-[0_0_15px_rgba(255,87,34,0.4)] bg-amber-950/40 p-0.5 shrink-0">
                <img 
                  src={instituteMeta.logo} 
                  alt="Alpha Mathematics Institute" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF5722]">
                    {currentLang === 'hi' ? '1-ऑन-1 मुफ्त डेमो क्लास' : '1-on-1 Free Demo Session'}
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
                  {currentLang === 'hi' ? 'सीट आरक्षित करें' : 'Book Free Trial Class'}
                </h3>
                <p className="text-xs text-slate-300 font-body">
                  {currentLang === 'hi'
                    ? 'दीपक सर के साथ डेमो क्लास के लिए विवरण भरें। हम तुरंत आपसे संपर्क करेंगे।'
                    : 'Experience personalized concept coaching directly with Mr. Deepak at Alpha Institute.'}
                </p>
              </div>
            </div>

            {/* Student Name Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                {currentLang === 'hi' ? 'विद्यार्थी का नाम' : 'Student Name'} *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder={currentLang === 'hi' ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF5722] focus:bg-white/10 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                {currentLang === 'hi' ? 'मोबाइल नंबर / व्हाट्सएप' : 'Phone / WhatsApp Number'} *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="099993 91793"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF5722] focus:bg-white/10 text-sm text-white placeholder-slate-500 outline-none transition-colors font-mono"
                />
              </div>
            </div>

            {/* Class / Subject Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                {currentLang === 'hi' ? 'कक्षा एवं विषय' : 'Select Class / Stream'}
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#090D12] border border-white/10 focus:border-[#FF5722] text-xs font-mono text-white outline-none"
              >
                {classOptions.map((opt, idx) => (
                  <option key={idx} value={opt} className="bg-[#0E1319] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode: Offline Khayala Centre vs Online Alpha App */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                {currentLang === 'hi' ? 'अध्ययन माध्यम' : 'Learning Mode'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLearningMode('offline')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                    learningMode === 'offline'
                      ? 'bg-[#FF5722]/20 border-[#FF5722] text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {currentLang === 'hi' ? 'ऑफलाइन (ख्याला सेंटर)' : 'Offline (Khayala Centre)'}
                </button>
                <button
                  type="button"
                  onClick={() => setLearningMode('online')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                    learningMode === 'online'
                      ? 'bg-[#FF5722]/20 border-[#FF5722] text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {currentLang === 'hi' ? 'अल्फा मोबाइल ऐप' : 'Alpha Digital App'}
                </button>
              </div>
            </div>

            {/* Preferred Slot */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                {currentLang === 'hi' ? 'पसंदीदा समय स्लॉट' : 'Preferred Demo Timing'}
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090D12] border border-white/10 focus:border-[#FF5722] text-xs font-mono text-white outline-none"
              >
                <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                <option value="Late Evening (7:00 PM - 9:30 PM)">Late Evening (7:00 PM - 9:30 PM)</option>
              </select>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,87,34,0.5)] cursor-pointer"
            >
              {currentLang === 'hi' ? 'डेमो क्लास कन्फर्म करें' : 'Confirm Free Demo Class'}
            </button>

            <div className="text-center">
              <p className="text-[11px] font-mono text-slate-400">
                Or call directly:{' '}
                <a href={`tel:${instituteMeta.phone1Raw}`} className="text-[#FF5722] font-bold hover:underline">
                  {instituteMeta.phone1}
                </a>
              </p>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-black text-2xl uppercase text-white">
                {currentLang === 'hi' ? 'डेमो क्लास अनुरोध प्राप्त हुआ!' : 'Demo Class Requested!'}
              </h3>
              <p className="text-xs text-slate-300 font-body max-w-sm mx-auto">
                {currentLang === 'hi'
                  ? `धन्यवाद ${studentName}! दीपक सर या संस्थान प्रतिनिधि जल्द ही ${phoneNumber} पर आपसे संपर्क करेंगे।`
                  : `Thank you ${studentName}! Mr. Deepak or the institute coordinator will contact you at ${phoneNumber} shortly.`}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 space-y-1 text-left">
              <p><strong>Selected Program:</strong> {selectedClass}</p>
              <p><strong>Mode:</strong> {learningMode === 'offline' ? 'Offline (Khayala Centre)' : 'Online (Alpha App)'}</p>
              <p><strong>Time Slot:</strong> {preferredTime}</p>
              <p><strong>Centre:</strong> {instituteMeta.addressMain}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${instituteMeta.phone1Raw}`}
                className="flex-1 py-3 rounded-xl bg-[#FF5722] text-white text-xs font-mono font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Deepak Sir</span>
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
