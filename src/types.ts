export interface Review {
  id: string;
  name: string;
  rating: number;
  date?: string;
  text: string;
  highlight: string;
  role?: string;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface CourseProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
  iconName: string;
}

export interface WhyUsBenefit {
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface StudentScore {
  name: string;
  score: number;
}

export interface SubjectResult {
  category: 'Class XII' | 'Class X';
  subject: string;
  color: string;
  bgGradient: string;
  students: StudentScore[];
}

export interface CollegePlacement {
  student: string;
  college: string;
  university: string;
}

export interface InstituteInfo {
  name: string;
  hindiName: string;
  tagline: string;
  motto: string;
  subMotto: string;
  teacher: string;
  experience: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    pincode: string;
    fullText: string;
    bannerAddress: string;
  };
  phone: string;
  phoneRaw: string;
  phone2: string;
  phone2Raw: string;
  plusCode: string;
  hours: string;
  rating: number;
  reviewCount: number;
  appNotice: string;
}

