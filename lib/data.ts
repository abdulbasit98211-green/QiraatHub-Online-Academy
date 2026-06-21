// Site content. Editing here updates pages, navigation and schema markup.

export type Course = {
  slug: string;
  title: string;
  short: string;
  description: string;
  level: string;
  duration: string;
  ageRange: string;
  benefits: string[];
  curriculum: { title: string; detail: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const courses: Course[] = [
  {
    slug: "nazra-quran-reading",
    title: "Nazra Quran Reading",
    short:
      "Read the Quran fluently and correctly by looking at the script, with proper pronunciation.",
    description:
      "Nazra is the foundation of Quran learning — reading directly from the Mushaf with correct pronunciation and flow. Our teachers build your confidence letter by letter, word by word, until you can recite any page smoothly and accurately.",
    level: "Beginner to Intermediate",
    duration: "4–8 months (3–5 classes/week)",
    ageRange: "Ages 5+ and adults",
    benefits: [
      "Read any page of the Quran with confidence",
      "Correct pronunciation of every Arabic letter (Makharij)",
      "Smooth, fluent recitation without hesitation",
      "Strong foundation for Tajweed and Hifz",
    ],
    curriculum: [
      { title: "Arabic letters & sounds", detail: "Recognising and pronouncing all 28 letters from their correct points of articulation." },
      { title: "Joining letters & words", detail: "Connecting letters into words and reading short verses with vowel marks." },
      { title: "Fluency building", detail: "Reading longer passages, building speed and accuracy across full pages." },
      { title: "Full Mushaf reading", detail: "Independent reading from any part of the Quran with teacher correction." },
    ],
    outcomes: [
      "Independently read the entire Quran from the script",
      "Apply correct articulation points consistently",
      "Be ready to progress to a dedicated Tajweed course",
    ],
    faqs: [
      { q: "My child cannot read Arabic at all — can they start here?", a: "Yes. Many students begin with no prior Arabic. We start from the very first letter and progress at your child's pace." },
      { q: "How long until I can read fluently?", a: "Most students read fluently within 4–8 months, depending on starting level and class frequency." },
    ],
  },
  {
    slug: "tajweed-course",
    title: "Tajweed Course",
    short:
      "Master the rules of correct Quranic recitation — the way the Quran was revealed.",
    description:
      "Tajweed is the science of reciting the Quran exactly as it was revealed. This course teaches the rules of articulation, elongation, nasalisation and stopping, so every verse is recited beautifully and correctly. Suitable for anyone who can already read the Quran.",
    level: "Intermediate to Advanced",
    duration: "6–12 months (2–4 classes/week)",
    ageRange: "Ages 8+ and adults",
    benefits: [
      "Recite the Quran with accurate, beautiful Tajweed",
      "Understand and apply every major rule of recitation",
      "Correct common recitation mistakes permanently",
      "Build the foundation needed to lead prayers confidently",
    ],
    curriculum: [
      { title: "Makharij & Sifaat", detail: "Articulation points and characteristics of the Arabic letters." },
      { title: "Rules of Noon & Meem", detail: "Idghaam, Ikhfaa, Iqlaab, Izhaar and the rules of Ghunnah." },
      { title: "Madd (elongation)", detail: "The types of elongation and their correct counts." },
      { title: "Stopping & starting", detail: "Rules of Waqf and Ibtida for fluent, correct recitation." },
    ],
    outcomes: [
      "Recite any portion of the Quran with full Tajweed",
      "Self-correct recitation using learned rules",
      "Achieve a measurable improvement in recitation quality",
    ],
    faqs: [
      { q: "Do I need to finish Nazra first?", a: "You should be able to read the Quran from the script before starting Tajweed. If you are not there yet, we recommend the Nazra course first." },
      { q: "Can adults take this course?", a: "Absolutely. A large share of our Tajweed students are adults improving lifelong recitation habits." },
    ],
  },
  {
    slug: "hifz-ul-quran",
    title: "Hifz-ul-Quran",
    short:
      "Memorise the Holy Quran with a structured plan, daily revision and one-to-one guidance.",
    description:
      "Our Hifz programme guides students through full or partial memorisation of the Quran with a proven daily structure of new memorisation (Sabaq), recent revision (Sabqi) and long-term revision (Manzil). Each student is paired with a dedicated Hafiz teacher and tracked closely.",
    level: "Intermediate to Advanced",
    duration: "2–4 years (5 classes/week recommended)",
    ageRange: "Ages 7+ and motivated adults",
    benefits: [
      "Structured memorisation with proven revision cycles",
      "Strong, lasting retention through daily Manzil",
      "One-to-one accountability with a dedicated Hafiz",
      "Detailed progress tracking for parents",
    ],
    curriculum: [
      { title: "Foundation & method", detail: "Establishing reading accuracy and the daily Sabaq / Sabqi / Manzil routine." },
      { title: "New memorisation (Sabaq)", detail: "Daily new portions memorised with the teacher's correction." },
      { title: "Revision cycles", detail: "Structured short-term and long-term revision to lock in retention." },
      { title: "Consolidation", detail: "Full-Quran revision and preparation to lead Taraweeh confidently." },
    ],
    outcomes: [
      "Memorise the Quran (full or chosen Juz) with strong retention",
      "Maintain memorisation through a sustainable revision habit",
      "Recite memorised portions with correct Tajweed",
    ],
    faqs: [
      { q: "How many classes per week are needed for Hifz?", a: "We recommend five classes per week for steady progress. Lighter schedules are available for part-time memorisation." },
      { q: "Will parents see progress?", a: "Yes. Parents receive regular progress updates covering new memorisation and revision quality." },
    ],
  },
  {
    slug: "madani-qaidah",
    title: "Madani Qaidah",
    short:
      "The perfect starting point for absolute beginners and young children learning Arabic letters.",
    description:
      "The Madani Qaidah (Noorani Qaidah) is the classic primer for learning to read Arabic and the Quran from scratch. It teaches letters, sounds, vowel marks and joining rules step by step — the essential first stage before Nazra reading.",
    level: "Absolute Beginner",
    duration: "2–4 months (3–5 classes/week)",
    ageRange: "Ages 4+ and adult beginners",
    benefits: [
      "Learn every Arabic letter and its correct sound",
      "Understand vowel marks, Tanween and Sukoon",
      "Begin joining letters into words and short verses",
      "Build a confident foundation for Quran reading",
    ],
    curriculum: [
      { title: "Letters & shapes", detail: "Recognising letters in their isolated and joined forms." },
      { title: "Harakaat & Tanween", detail: "Short vowels, double vowels and their pronunciation." },
      { title: "Sukoon & Shaddah", detail: "Rules for silent letters and emphasised letters." },
      { title: "Reading practice", detail: "Reading words and short verses to prepare for Nazra." },
    ],
    outcomes: [
      "Read simple Arabic words and short verses accurately",
      "Pronounce letters from their correct articulation points",
      "Be fully ready to begin the Nazra Quran Reading course",
    ],
    faqs: [
      { q: "Is this suitable for a 4-year-old?", a: "Yes. Our teachers are experienced with young children and keep lessons short, gentle and engaging." },
      { q: "I'm an adult revert — is this the right start?", a: "It is the ideal starting point. The Qaidah builds reading from the very first letter at your own pace." },
    ],
  },
];

export const steps = [
  {
    n: 1,
    title: "Book a Free Trial",
    detail:
      "Tell us about the student and your preferred timing. It takes under a minute and there's no payment required.",
  },
  {
    n: 2,
    title: "Meet Your Teacher",
    detail:
      "We match you with a qualified teacher who fits your level, gender preference and schedule for a free one-to-one session.",
  },
  {
    n: 3,
    title: "Start Learning",
    detail:
      "Begin regular one-to-one classes with a personalised plan and ongoing progress tracking you can follow.",
  },
];

export type Teacher = {
  name: string;
  gender: "male" | "female";
  title: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  specialties: string[];
  initials: string;
};

export const teachers: Teacher[] = [
  {
    name: "Ustadh Ahmad Raza",
    gender: "male",
    title: "Hafiz & Qari — Tajweed Specialist",
    qualifications: ["Hafiz-ul-Quran", "Ijazah in Tajweed (Hafs)", "Alim Course Graduate"],
    experience: "12+ years teaching online & in-person",
    languages: ["English", "Arabic", "Urdu"],
    specialties: ["Tajweed", "Nazra", "Adult learners"],
    initials: "AR",
  },
  {
    name: "Ustadha Maryam Saleh",
    gender: "female",
    title: "Female Quran Teacher — Kids & Sisters",
    qualifications: ["Ijazah in Quran Recitation", "BA Islamic Studies", "Certified Noorani Qaidah Tutor"],
    experience: "9+ years teaching children & sisters",
    languages: ["English", "Arabic"],
    specialties: ["Madani Qaidah", "Nazra", "Children"],
    initials: "MS",
  },
  {
    name: "Ustadh Bilal Khan",
    gender: "male",
    title: "Hifz Coach — Memorisation Programme",
    qualifications: ["Hafiz-ul-Quran", "Ijazah (Sanad) in Hifz", "10 years as Hifz instructor"],
    experience: "10+ years guiding Hifz students",
    languages: ["English", "Urdu", "Arabic"],
    specialties: ["Hifz-ul-Quran", "Revision systems", "Teens"],
    initials: "BK",
  },
  {
    name: "Ustadha Aisha Rahman",
    gender: "female",
    title: "Female Tajweed Tutor — Sisters & Reverts",
    qualifications: ["Ijazah in Tajweed", "Diploma in Arabic", "Revert-focused teaching certificate"],
    experience: "8+ years with reverts & beginners",
    languages: ["English", "Arabic"],
    specialties: ["Tajweed", "Revert support", "Beginners"],
    initials: "AR",
  },
  {
    name: "Ustadh Yusuf Patel",
    gender: "male",
    title: "Qari — Recitation & Pronunciation",
    qualifications: ["Qari with Ijazah", "Diploma in Quranic Sciences", "Online teaching certified"],
    experience: "11+ years online teaching",
    languages: ["English", "Gujarati", "Arabic"],
    specialties: ["Nazra", "Tajweed", "Pronunciation"],
    initials: "YP",
  },
  {
    name: "Ustadha Khadijah Noor",
    gender: "female",
    title: "Female Teacher — Young Children",
    qualifications: ["Certified Quran Tutor", "Early-years teaching background", "Noorani Qaidah specialist"],
    experience: "7+ years with young learners",
    languages: ["English", "Arabic", "Urdu"],
    specialties: ["Madani Qaidah", "Children", "Patience-first method"],
    initials: "KN",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  country: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sumayya A.",
    role: "Parent of two students",
    country: "United Kingdom",
    quote:
      "My children went from struggling with letters to reading full pages confidently. The teachers are patient, professional and genuinely care about progress.",
    rating: 5,
  },
  {
    name: "Omar H.",
    role: "Adult Tajweed student",
    country: "United States",
    quote:
      "I'm 34 and always wanted to fix my recitation. My teacher corrected mistakes I'd had for years. The one-to-one format made all the difference.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    role: "Revert sister",
    country: "Canada",
    quote:
      "As a revert I felt nervous starting out. My female teacher made me feel completely comfortable and I can now read the Quran — something I never imagined.",
    rating: 5,
  },
  {
    name: "Imran S.",
    role: "Parent — Hifz programme",
    country: "Australia",
    quote:
      "The Hifz structure and weekly progress updates keep my son accountable. We can see exactly how much he's memorised and revised each week.",
    rating: 5,
  },
  {
    name: "Ayesha M.",
    role: "Parent of a 6-year-old",
    country: "Germany",
    quote:
      "Finding a female teacher who's great with young kids was the dream. The Qaidah lessons are short, fun and my daughter looks forward to them.",
    rating: 5,
  },
  {
    name: "Bilal T.",
    role: "Adult learner",
    country: "Netherlands",
    quote:
      "Flexible evening classes that fit around my work, and a teacher who actually understands adult beginners. Highly recommend the free trial.",
    rating: 5,
  },
];

export const countries = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
];

export const faqs = [
  {
    q: "How do online Quran classes work?",
    a: "Classes are one-to-one over video call at a time you choose. Your teacher shares the Quran on screen, listens to your recitation, corrects mistakes live and sets a plan for the next lesson. All you need is a phone, tablet or computer with internet.",
  },
  {
    q: "Are the classes really one-to-one?",
    a: "Yes. Every student gets a dedicated teacher and full attention in each session — no group classes. This is the fastest way to learn and the reason our students progress quickly.",
  },
  {
    q: "Can I request a female teacher for my daughter or for sisters?",
    a: "Absolutely. We have qualified female teachers for sisters and girls, and qualified male teachers for brothers and boys. You choose your preference when booking.",
  },
  {
    q: "What ages do you teach?",
    a: "We teach children from age 4 and adults of any age, including complete beginners and reverts. Lessons are tailored to each student's age and level.",
  },
  {
    q: "Is the free trial class really free?",
    a: "Yes. Your first trial class is completely free with no payment details required. It lets you meet your teacher and experience a real lesson before deciding.",
  },
  {
    q: "What if I've never read Arabic before?",
    a: "That's completely fine — many students start from zero. We begin with the Madani Qaidah, teaching letters and sounds step by step until you can read the Quran.",
  },
  {
    q: "How flexible is the schedule?",
    a: "Very flexible. We teach across UK, US, Canada, Australia, New Zealand and European time zones, including evenings and weekends, so classes fit around school and work.",
  },
  {
    q: "How do you track my child's progress?",
    a: "Teachers keep a record of each lesson and share regular progress updates with parents, covering reading, Tajweed and (for Hifz) memorisation and revision.",
  },
];
