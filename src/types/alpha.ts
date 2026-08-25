export type Language = 'en' | 'hi';

export interface HeroSlide {
  id: string;
  number: string;
  badge: string;
  titlePrimary: string;
  titleSecondary: string;
  tagline: string;
  bgImage: string;
  features: {
    en: { title: string; desc: string }[];
    hi: { title: string; desc: string }[];
  };
  stats: {
    experience: string;
    rating: string;
    students: string;
  };
}

export interface AcademicProgram {
  id: string;
  programNumber: string;
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  image: string;
  feeInfo: string;
  duration: string;
  batchSize: string;
  rating: number;
  reviewsCount: number;
  subjects: string[];
  highlights: {
    en: string[];
    hi: string[];
  };
  description: {
    en: string;
    hi: string;
  };
}

export interface VideoLectureShowcase {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  duration: string;
  thumbnail: string;
  topic: string;
  description: {
    en: string;
    hi: string;
  };
  keyTakeaway: string;
}

export interface StudentTestimonial {
  id: string;
  name: string;
  scoreOrCollege: string;
  avatar: string;
  rating: number;
  batch: string;
  date: string;
  comment: {
    en: string;
    hi: string;
  };
}

export interface TopScorer {
  name: string;
  score: number;
  subject: string;
  category: string;
}

export interface CollegePlacement {
  student: string;
  college: string;
  university: string;
}
