import { HeroSlide, AcademicProgram, VideoLectureShowcase, StudentTestimonial, TopScorer, CollegePlacement } from '../types/alpha';
import saraswatiLogo from '../assets/images/saraswati_logo_1787668796634.jpg';

export const instituteMeta = {
  name: "Alpha Mathematics Institute",
  hindiName: "अल्फा मैथेमेटिक्स इंस्टीट्यूट",
  tagline: "Where Mathematics Becomes Simple",
  hindiTagline: "जहाँ गणित बन जाता है आसान",
  teacher: "Mr. Deepak",
  logo: saraswatiLogo,
  experience: "17+ Years Experience",
  rating: 4.9,
  reviewsCount: 127,
  phone1: "099993 91793",
  phone1Raw: "+919999391793",
  phone2: "099905 88293",
  phone2Raw: "+919990588293",
  addressMain: "5C/9, 1st Floor, Gali No. 3, Vishnu Garden, Khyala, New Delhi - 110018",
  addressBranch: "B-20, DDA Colony, Block G, Khayala, Vishnu Garden, Delhi - 110018",
  plusCode: "M34W+2H Delhi",
  appNotice: "Online Classes & Practice Tests also available on Alpha Mathematics App"
};

export const alphaImages = {
  // Dark, moody, high-end educational and architectural imagery
  heroMain: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop", // Modern study / mathematics board
  heroStudy: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop", // Digital classroom / focus
  heroCalculus: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop", // Mathematical geometry & physics
  heroUniversity: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop", // University campus / library
  heroLibrary: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop", // Majestic library hall
  milkyWayBackdrop: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop", // Deep cosmic mountain night
  videoThumb1: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", // Student solving complex math
  videoThumb2: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"  // Classroom chalkboard discussion
};

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-01",
    number: "01",
    badge: "SENIOR SECONDARY",
    titlePrimary: "CLASS XI & XII",
    titleSecondary: "BOARD MASTERY",
    tagline: "COMMERCE • SCIENCE • ARTS • CBSE & NIOS",
    bgImage: alphaImages.heroMain,
    features: {
      en: [
        {
          title: "99 & 98 Board Toppers",
          desc: "Vivek scored 99 in Economics and 98 in Maths. High-yield board exam practice and personalized doubt clearance."
        },
        {
          title: "Commerce & Science Streams",
          desc: "Comprehensive coaching in Accounts, Economics, Business Studies, Maths, Physics, and Chemistry."
        },
        {
          title: "Proven Delhi University Track",
          desc: "Alumni successfully placed in Shaheed Sukhdev (SSCBS), CVS, ARSD, Daulat Ram, and IP University."
        }
      ],
      hi: [
        {
          title: "99 और 98 बोर्ड टॉपर्स",
          desc: "विवेक ने इकोनॉमिक्स में 99 और मैथ्स में 98 अंक हासिल किए। बोर्ड परीक्षा के लिए विशेष अभ्यास और पर्सनल डाउट सेशन।"
        },
        {
          title: "कॉमर्स और साइंस स्ट्रीम",
          desc: "अकाउंट्स, इकोनॉमिक्स, बिजनेस स्टडीज, मैथ्स, फिजिक्स और केमिस्ट्री की संपूर्ण और आसान तैयारी।"
        },
        {
          title: "दिल्ली यूनिवर्सिटी में एडमिशन्स",
          desc: "शहीद सुखदेव (SSCBS), CVS, ARSD, दौलत राम कॉलेज और IP यूनिवर्सिटी में सफल प्रवेश।"
        }
      ]
    },
    stats: {
      experience: "17+ Yrs Dedicated Teaching",
      rating: "4.9★ Google Rating",
      students: "1,400+ Successful Students"
    }
  },
  {
    id: "slide-02",
    number: "02",
    badge: "FOUNDATION ACADEMY",
    titlePrimary: "CLASS VI TO X",
    titleSecondary: "CONCEPT FIRST",
    tagline: "MATHS • SCIENCE • ENGLISH • SST • HINDI",
    bgImage: alphaImages.heroCalculus,
    features: {
      en: [
        {
          title: "Strong Conceptual Roots",
          desc: "Understanding the intuition and principles before formulas, building lifelong analytical confidence."
        },
        {
          title: "Class 10 Board Excellence",
          desc: "Jaismeet 96 in Science, Gulshan 95 in Maths, Kartik 93 in Maths with consistent 90%+ scores."
        },
        {
          title: "Weekly Chapter Tests",
          desc: "Continuous evaluation and structured revision cycles to identify and resolve weak areas early."
        }
      ],
      hi: [
        {
          title: "मजबूत कॉन्सेप्ट और लॉजिक",
          desc: "फॉर्मूले रटने से पहले कॉन्सेप्ट को गहराई से समझना ताकि विद्यार्थी हर सवाल खुद हल कर सकें।"
        },
        {
          title: "10वीं बोर्ड में शानदार परिणाम",
          desc: "जसमीत 96 (साइंस), गुलशन 95 (मैथ्स), कार्तिक 93 (मैथ्स) के साथ लगातार 90%+ स्कोर।"
        },
        {
          title: "साप्ताहिक टेस्ट और रिवीजन",
          desc: "हर हफ्ते टेस्ट और मूल्यांकन जिससे कमजोरियों को समय रहते दूर किया जा सके।"
        }
      ]
    },
    stats: {
      experience: "Class 6-10 Specialized",
      rating: "96% Top Science Score",
      students: "Weekly Practice Tests"
    }
  },
  {
    id: "slide-03",
    number: "03",
    badge: "PREMIER COACHING INSTITUTE",
    titlePrimary: "STUDY WITH",
    titleSecondary: "MR. DEEPAK",
    tagline: "WHERE MATHEMATICS BECOMES SIMPLE • KHAYALA, DELHI",
    bgImage: alphaImages.heroStudy,
    features: {
      en: [
        {
          title: "We Don't Speak, Our Result Speaks",
          desc: "17+ years of relentless dedication transforming students' fear of numbers into academic mastery."
        },
        {
          title: "Step-by-Step Logic Breakdown",
          desc: "Complex calculus, trigonometry, accounting ledgers, and economic models made crystal clear."
        },
        {
          title: "Offline & Alpha Mobile App",
          desc: "Attend interactive classroom sessions in Khayala, Vishnu Garden plus online recorded lectures."
        }
      ],
      hi: [
        {
          title: "हम नहीं बोलते, हमारा परिणाम बोलता है",
          desc: "17+ वर्षों का समर्पित अनुभव जो बच्चों के गणित के डर को आत्मविश्वास और सफलता में बदलता है।"
        },
        {
          title: "सरल और स्पष्ट व्याख्या",
          desc: "कैलकुलस, त्रिकोणमिति, अकाउंट्स लेजर और इकोनॉमिक्स के जटिल टॉपिक्स को आसान चरणों में समझना।"
        },
        {
          title: "ऑफलाइन और अल्फा मोबाइल ऐप",
          desc: "ख्याला, विष्णु गार्डन में क्लासरूम कोचिंग के साथ अल्फा मोबाइल ऐप पर ऑनलाइन क्लासेस।"
        }
      ]
    },
    stats: {
      experience: "17+ Years of Mastery",
      rating: "4.9★ Google (127 Reviews)",
      students: "Khayala, Vishnu Garden"
    }
  },
  {
    id: "slide-04",
    number: "04",
    badge: "HIGHER EDUCATION",
    titlePrimary: "COLLEGE & NIOS",
    titleSecondary: "UNDERGRADUATE",
    tagline: "B.A. • B.COM • B.SC MATHS • CUET ASSISTANCE",
    bgImage: alphaImages.heroUniversity,
    features: {
      en: [
        {
          title: "Degree-Level Mathematics",
          desc: "Business Mathematics, Advanced Statistics, Financial Accounting, and Macroeconomics for colleges."
        },
        {
          title: "NIOS Open Schooling",
          desc: "Complete syllabus guidance, TMA support, and practical exam preparation for NIOS students."
        },
        {
          title: "CUET & Entrance Support",
          desc: "Speed arithmetic techniques, mock test series, and personalized university counselling."
        }
      ],
      hi: [
        {
          title: "कॉलेज डिग्री लेवल कोचिंग",
          desc: "B.A., B.Com, B.Sc के लिए बिजनेस मैथ्स, स्टैटिस्टिक्स और फाइनेंशियल अकाउंट्स की स्पेशल कोचिंग।"
        },
        {
          title: "NIOS ओपन स्कूलिंग सहायता",
          desc: "NIOS विद्यार्थियों के लिए सम्पूर्ण सिलेबस, असाइनमेंट और प्रैक्टिकल एग्जाम की पूरी तैयारी।"
        },
        {
          title: "CUET और एंट्रेंस गाइडेंस",
          desc: "स्पीड कैलकुलेशन ट्रिक्स, मॉक टेस्ट और कॉलेज एडमिशन के लिए व्यक्तिगत मार्गदर्शन।"
        }
      ]
    },
    stats: {
      experience: "Delhi University Aligned",
      rating: "CUET Ready Batches",
      students: "NIOS Special Assistance"
    }
  },
  {
    id: "slide-05",
    number: "05",
    badge: "DIGITAL ECOSYSTEM",
    titlePrimary: "ALPHA APP &",
    titleSecondary: "TEST SERIES",
    tagline: "HYBRID LEARNING • EVALUATED ASSESSMENTS",
    bgImage: alphaImages.heroLibrary,
    features: {
      en: [
        {
          title: "Anytime Doubt Clearing",
          desc: "Students can ask questions in class or connect directly on WhatsApp with Mr. Deepak for guidance."
        },
        {
          title: "Rigorous Weekly Test Series",
          desc: "Exam-simulated test papers with detailed correction, score analytics, and parent progress updates."
        },
        {
          title: "Small Batch Sizes",
          desc: "Focused groups ensuring every student receives 1-on-1 attention without getting lost in the crowd."
        }
      ],
      hi: [
        {
          title: "कभी भी डाउट क्लीयरेंस",
          desc: "क्लास में सवाल पूछें या सीधे दीपक सर से व्हाट्सएप पर अपने डाउट्स का समाधान पाएं।"
        },
        {
          title: "सख्त साप्ताहिक टेस्ट सीरीज",
          desc: "एग्जाम पैटर्न पर टेस्ट, विस्तृत जांच और अभिभावकों को नियमित रिपोर्ट।"
        },
        {
          title: "सीमित बैच साइज",
          desc: "हर विद्यार्थी पर पूरा व्यक्तिगत ध्यान ताकि कोई भी बच्चा पीछे न छूटे।"
        }
      ]
    },
    stats: {
      experience: "Weekly Progress Reports",
      rating: "1-on-1 Mentorship",
      students: "Alpha Mathematics App"
    }
  }
];

export const academicPrograms: AcademicProgram[] = [
  {
    id: "prog-01",
    programNumber: "PROGRAM №1",
    title: {
      en: "Class XI & XII Commerce & Science",
      hi: "कक्षा 11वीं और 12वीं (कॉमर्स एवं साइंस)"
    },
    subtitle: {
      en: "Accounts, Economics, BST, Maths & Science • Board Exam Mastery",
      hi: "अकाउंट्स, इकोनॉमिक्स, बिजनेस स्टडीज, मैथ्स और साइंस"
    },
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    feeInfo: "Affordable Monthly Fee",
    duration: "Full Academic Year",
    batchSize: "Max 15-20 Students",
    rating: 4.98,
    reviewsCount: 68,
    subjects: ["Accounts", "Economics", "Mathematics", "Business Studies", "Physics", "Chemistry"],
    highlights: {
      en: [
        "Record 99 in Economics and 98 in Maths in CBSE Board exams",
        "Chapter-wise analytical worksheets with 10-year previous questions",
        "Rigorous mock tests evaluated with CBSE board marking scheme",
        "Personal doubt solving sessions directly with Mr. Deepak"
      ],
      hi: [
        "CBSE बोर्ड में इकोनॉमिक्स में 99 और मैथ्स में 98 का रिकॉर्ड स्कोर",
        "पिछले 10 वर्षों के बोर्ड प्रश्नों के साथ चैप्टर-वाइज वर्कशीट्स",
        "CBSE बोर्ड मार्किंग स्कीम के अनुसार मॉक टेस्ट का मूल्यांकन",
        "दीपक सर के साथ सीधे व्यक्तिगत डाउट क्लीयरिंग सेशन"
      ]
    },
    description: {
      en: "Comprehensive senior secondary coaching designed to build rock-solid concepts in Accounts, Economics, Business Studies, and Mathematics. We focus on numerical precision, step-by-step presentation, and speed management to secure top college placements.",
      hi: "कक्षा 11वीं और 12वीं के विद्यार्थियों के लिए विशेष कोचिंग जो अकाउंट्स, इकोनॉमिक्स, बिजनेस स्टडीज और मैथ्स के कॉन्सेप्ट्स को मजबूत बनाती है। बोर्ड में 95%+ स्कोर और दिल्ली यूनिवर्सिटी के टॉप कॉलेजों में एडमिशन के लिए तैयार किया जाता है।"
    }
  },
  {
    id: "prog-02",
    programNumber: "PROGRAM №2",
    title: {
      en: "Class VI to X Academic Foundation",
      hi: "कक्षा 6वीं से 10वीं (फाउंडेशन बैच)"
    },
    subtitle: {
      en: "Maths, Science, English, SST & Hindi • Special High-Focus Batches",
      hi: "गणित, विज्ञान, अंग्रेजी, सामाजिक विज्ञान एवं हिंदी"
    },
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    feeInfo: "Affordable Monthly Fee",
    duration: "Full Academic Year",
    batchSize: "Interactive Groups",
    rating: 4.95,
    reviewsCount: 54,
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi"],
    highlights: {
      en: [
        "Class 10 Board Toppers: 96 in Science, 95 in Maths, 96 in SST",
        "Foundation focus: eliminating the fear of geometry and algebraic proofs",
        "Weekly assessment tests with parent progress updates",
        "Special foundation bridge for Class 9 and 10 board prep"
      ],
      hi: [
        "10वीं बोर्ड टॉपर्स: 96 साइंस में, 95 मैथ्स में, 96 सोशल साइंस में",
        "ज्यामिति (Geometry) और बीजगणित (Algebra) के डर को पूरी तरह खत्म करना",
        "साप्ताहिक टेस्ट और अभिभावकों के साथ प्रगति रिपोर्ट",
        "9वीं और 10वीं बोर्ड की मजबूत नींव के लिए विशेष ध्यान"
      ]
    },
    description: {
      en: "A structured curriculum that nurtures curiosity and fundamental clarity across all core subjects. Mr. Deepak personally guides young learners to grasp complex theorems through relatable real-life examples and logical deductions.",
      hi: "कक्षा 6 से 10 के विद्यार्थियों के लिए आधारभूत कोचिंग जहाँ हर विषय की बुनियादी बातें सरल और रोचक तरीके से सिखाई जाती हैं ताकि भविष्य में साइंस या कॉमर्स चुनते समय आत्मविश्वास बना रहे।"
    }
  },
  {
    id: "prog-03",
    programNumber: "PROGRAM №3",
    title: {
      en: "Class XI & XII Humanities & Arts",
      hi: "कक्षा 11वीं और 12वीं (ह्यूमैनिटीज़ / आर्ट्स)"
    },
    subtitle: {
      en: "History, Political Science, English & Economics • 98 In Pol. Sci",
      hi: "इतिहास, राजनीति विज्ञान, अंग्रेजी और अर्थशास्त्र"
    },
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
    feeInfo: "Affordable Monthly Fee",
    duration: "Full Academic Year",
    batchSize: "Focused Cohort",
    rating: 4.96,
    reviewsCount: 39,
    subjects: ["Political Science", "History", "Economics", "English"],
    highlights: {
      en: [
        "Prince scored 98 in Political Science and 93 in History",
        "Structured answer-writing techniques for high-scoring subjective questions",
        "Timeline mapping and conceptual constitutional breakdowns",
        "CUET General Test and Domain subject coaching"
      ],
      hi: [
        "प्रिंस ने पॉलिटिकल साइंस में 98 और हिस्ट्री में 93 अंक हासिल किए",
        "फुल मार्क्स पाने के लिए सही उत्तर-लेखन (Answer Writing) तकनीक",
        "संविधान और ऐतिहासिक घटनाओं की सरल व्याख्या",
        "CUET एंट्रेंस परीक्षा और कॉलेज एडमिशन की तैयारी"
      ]
    },
    description: {
      en: "Dedicated stream preparation for Humanities scholars. We train students in analytical writing, flowcharts, historical timeline synthesis, and CUET domain preparation for premier DU colleges like Hindu, Miranda, and Ramjas.",
      hi: "आर्ट्स और ह्यूमैनिटीज़ के विद्यार्थियों के लिए विशेष बैच जहाँ इतिहास, राजनीति विज्ञान और अर्थशास्त्र में उच्च अंक प्राप्त करने के लिए सटीक उत्तर लेखन और कॉन्सेप्ट्स सिखाए जाते हैं।"
    }
  },
  {
    id: "prog-04",
    programNumber: "PROGRAM №4",
    title: {
      en: "B.A., B.Com, B.Sc & NIOS Coaching",
      hi: "B.A., B.Com, B.Sc एवं NIOS ओपन स्कूल"
    },
    subtitle: {
      en: "University Mathematics, Business Stats, Financial Accounts & NIOS",
      hi: "कॉलेज डिग्री मैथमेटिक्स, स्टैटिस्टिक्स और NIOS असिस्टेंस"
    },
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    feeInfo: "Flexible Per Semester",
    duration: "Semester / Year",
    batchSize: "Personal Mentorship",
    rating: 4.94,
    reviewsCount: 42,
    subjects: ["Business Maths", "Statistics", "Financial Accounting", "NIOS Secondary/Sr Secondary"],
    highlights: {
      en: [
        "Specialized notes tailored to Delhi University and IP University syllabus",
        "Comprehensive TMA assignments and practical assistance for NIOS",
        "Step-by-step problem breakdown for non-maths background college students",
        "Evening and weekend flexible batches"
      ],
      hi: [
        "दिल्ली यूनिवर्सिटी और IP यूनिवर्सिटी के अनुसार स्पेशल कॉलेज नोट्स",
        "NIOS विद्यार्थियों के लिए TMA असाइनमेंट और प्रैक्टिकल में पूरा सहयोग",
        "नॉन-मैथ्स बैकग्राउंड वाले छात्रों के लिए स्टेप-बाय-स्टेप गाइडेंस",
        "शाम और वीकेंड के लिए लचीले बैच उपलब्ध"
      ]
    },
    description: {
      en: "Advanced level guidance for undergraduate college degrees requiring quantitative acumen. Also provides comprehensive end-to-end coaching for NIOS students to successfully pass their Class 10 and 12 board examinations.",
      hi: "कॉलेज स्तर के गणित, बिजनेस स्टैटिस्टिक्स और अकाउंटिंग के लिए उच्च स्तरीय कोचिंग। साथ ही NIOS के छात्रों के लिए विशेष मार्गदर्शन ताकि वे बोर्ड परीक्षा में आसानी से सफल हो सकें।"
    }
  }
];

export const videoLectures: VideoLectureShowcase[] = [
  {
    id: "lec-01",
    title: {
      en: "How to Solve Calculus & Trigonometry Without Fear",
      hi: "कैलकुलस और त्रिकोणमिति को बिना डर के कैसे हल करें"
    },
    duration: "14:20 min",
    thumbnail: alphaImages.videoThumb1,
    topic: "Mr. Deepak Masterclass",
    description: {
      en: "Watch Mr. Deepak break down multi-step trigonometric substitutions and derivative applications into intuitive logical patterns that stick forever.",
      hi: "देखें कैसे दीपक सर त्रिकोणमिति और अवकलन (Calculus) के कठिन सवालों को आसान ट्रिक्स और लॉजिक से पलक झपकते हल कराते हैं।"
    },
    keyTakeaway: "Concept clarity over rote memorization"
  },
  {
    id: "lec-02",
    title: {
      en: "Score 95+ in Board Accounts & Economics",
      hi: "बोर्ड परीक्षा में अकाउंट्स और इकोनॉमिक्स में 95+ कैसे लाएं"
    },
    duration: "18:45 min",
    thumbnail: alphaImages.videoThumb2,
    topic: "Board Strategy & Presentation",
    description: {
      en: "A strategic overview of balancing cash flow statements, partnership revaluation, and macroeconomics demand-supply curve adjustments with zero errors.",
      hi: "अकाउंट्स और इकोनॉमिक्स में बोर्ड परीक्षा में पूरे अंक पाने के लिए सही फॉर्मेट, टाइम मैनेजमेंट और ग्राफ प्रेजेंटेशन की रणनीति।"
    },
    keyTakeaway: "CBSE board marking scheme insights"
  }
];

export const studentTestimonials: StudentTestimonial[] = [
  {
    id: "rev-01",
    name: "Mamta Mathur",
    scoreOrCollege: "Parent & Student Verified",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    batch: "Class 10 & 12 Batch",
    date: "Google Verified Review",
    comment: {
      en: "Classes with Mr. Deepak have been fun. His way of teaching and making difficult things easier so that one can understand and remember everything. I recommend Him to everyone.",
      hi: "दीपक सर की क्लासेस बहुत शानदार रही हैं। उनका कठिन से कठिन टॉपिक को इतना आसान बना देना कि सब कुछ समझ में आ जाए और याद रहे, काबिले तारीफ है। मैं सभी को यहाँ पढ़ने की सलाह देती हूँ।"
    }
  },
  {
    id: "rev-02",
    name: "Vivek Upadhyay",
    scoreOrCollege: "99 Eco • 98 Maths (Shaheed Sukhdev CBS)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    batch: "Class XII Commerce Topper",
    date: "Google Verified Review",
    comment: {
      en: "I met Deepak sir to learn English and Maths. My skill has improved significantly compared to before. He uses logic for teaching and gives correct guidance. I can easily understand and apply concepts.",
      hi: "दीपक सर से गणित और अंग्रेजी पढ़ने के बाद मेरी स्किल्स में बहुत बड़ा सुधार आया। वह हमेशा लॉजिक से पढ़ाते हैं और सही दिशा दिखाते हैं। उन्हीं के मार्गदर्शन से मैं शहीद सुखदेव कॉलेज (SSCBS) में सिलेक्ट हुआ।"
    }
  },
  {
    id: "rev-03",
    name: "Muskan Kumari",
    scoreOrCollege: "95 in Business Studies (Class XII)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    batch: "Class XII Board Batch",
    date: "Google Verified Review",
    comment: {
      en: "Deepak sir is a great teacher in my life. It is my goodness that I am studying in this tuition. His encouragement and dedication to every single student is unmatched.",
      hi: "दीपक सर मेरे जीवन के सबसे बेहतरीन अध्यापक हैं। मेरा सौभाग्य है कि मुझे इस संस्थान में पढ़ने का अवसर मिला। उनका हर विद्यार्थी पर व्यक्तिगत ध्यान देना सबसे खास बात है।"
    }
  }
];

export const topBoardScorers: TopScorer[] = [
  { name: "Vivek", score: 99, subject: "Economics", category: "Class XII" },
  { name: "Vivek", score: 98, subject: "Mathematics", category: "Class XII" },
  { name: "Prince", score: 98, subject: "Political Science", category: "Class XII" },
  { name: "Jaismeet", score: 96, subject: "Class X Science", category: "Class X" },
  { name: "Jaismeet", score: 96, subject: "Social Science", category: "Class X" },
  { name: "Vivek", score: 96, subject: "Business Studies", category: "Class XII" },
  { name: "Priyanka", score: 95, subject: "Accounts", category: "Class XII" },
  { name: "Soniya", score: 95, subject: "Mathematics", category: "Class XII" },
  { name: "Gulshan", score: 95, subject: "Class X Maths", category: "Class X" },
  { name: "Tushar", score: 95, subject: "Economics", category: "Class XII" },
  { name: "Kartik", score: 93, subject: "Class X Maths", category: "Class X" },
  { name: "Akansh", score: 93, subject: "Social Science", category: "Class X" }
];

export const collegePlacements: CollegePlacement[] = [
  { student: 'VIVEK', college: 'Shaheed Sukhdev College of Business Studies (SSCBS)', university: 'Delhi University' },
  { student: 'GAURAV', college: 'College of Vocational Studies (CVS)', university: 'Delhi University' },
  { student: 'SONIYA', college: 'Bhim Rao Ambedkar College', university: 'Delhi University' },
  { student: 'NEETU', college: 'Sri Aurobindo College', university: 'Delhi University' },
  { student: 'ANJALI', college: 'Aditi Mahavidyalaya', university: 'Delhi University' },
  { student: 'KIRAN', college: 'Kalindi College', university: 'Delhi University' },
  { student: 'PRIYANKA', college: 'Vivekananda College', university: 'Delhi University' },
  { student: 'BHAVLEEN', college: 'Guru Gobind Singh Indraprastha University (IPU)', university: 'IP University' },
  { student: 'KHUSHI', college: 'Daulat Ram College', university: 'Delhi University' },
  { student: 'HIMANSHU', college: 'Atma Ram Sanatan Dharma College (ARSD)', university: 'Delhi University' }
];

export const institutePillars = [
  {
    number: "01",
    title: {
      en: "Concept-First Methodology",
      hi: "कॉन्सेप्ट-फर्स्ट पद्धति"
    },
    desc: {
      en: "We believe in understanding the fundamental logic and core intuition before memorizing any formula or step.",
      hi: "फॉर्मूले रटने से पहले बुनियादी लॉजिक और कॉन्सेप्ट को समझना ताकि छात्र किसी भी नए सवाल को खुद हल कर सकें।"
    }
  },
  {
    number: "02",
    title: {
      en: "We Don't Speak, Our Result Speaks",
      hi: "हम नहीं बोलते, हमारा रिजल्ट बोलता है"
    },
    desc: {
      en: "Consistently delivering 95-99% board exam scores and placing students into Delhi University's prestigious colleges.",
      hi: "हर साल बोर्ड परीक्षा में 95% से 99% तक के टॉप अंक और दिल्ली यूनिवर्सिटी के प्रतिष्ठित कॉलेजों में एडमिशन्स।"
    }
  },
  {
    number: "03",
    title: {
      en: "Weekly Evaluated Testing & Mentorship",
      hi: "साप्ताहिक टेस्ट और व्यक्तिगत मार्गदर्शन"
    },
    desc: {
      en: "Strict weekly assessment tests, error-log breakdowns, and 1-on-1 mentorship directly under Mr. Deepak.",
      hi: "नियमित साप्ताहिक टेस्ट, गलतियों का विश्लेषण और सीधे दीपक सर के द्वारा व्यक्तिगत डाउट समाधान।"
    }
  }
];
