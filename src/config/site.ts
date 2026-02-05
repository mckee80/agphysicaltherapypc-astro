export const siteConfig = {
  // Basic info
  name: 'Ashlee Gendron Physical Therapy PC',
  shortName: 'AG Physical Therapy',
  tagline: "Women's Pelvic Health & Orthopedic Physical Therapy",
  description:
    "Women's Pelvic Health and Orthopedic concierge Physical Therapy in North County San Diego. Specializing in postpartum rehab, urinary incontinence, diastasis recti, pelvic organ prolapse, and pelvic pain.",

  // URLs
  url: 'https://www.agphysicaltherapypc.com',
  baseUrl: '/',
  bookingUrl: 'https://agphysicaltherapypc.janeapp.com/',

  // Contact
  contact: {
    phone: {
      primary: '760-874-3309',
      formatted: '(760) 874-3309',
    },
    email: 'ashlee@agphysicaltherapypc.com',
    address: {
      street: '16885 Via Del Campo Ct, Suite 110',
      city: 'San Diego',
      state: 'CA',
      zip: '92127',
      full: '16885 Via Del Campo Ct, Suite 110, San Diego, CA 92127',
    },
    hours: {
      days: 'Tuesday - Friday',
      time: '9:00 AM - 1:00 PM',
      full: 'Tue-Fri: 9am - 1pm',
      clinicDays: 'Wednesdays & Fridays at San Diego County Midwives HQ',
    },
    geo: {
      lat: 33.0247,
      lng: -117.0868,
    },
  },

  // Provider info
  provider: {
    name: 'Ashlee Gendron',
    credentials: 'PT, DPT, PCES',
    title: 'Doctor of Physical Therapy',
    specialization: 'Postpartum Corrective Exercise Specialist',
  },

  // Branding
  brand: {
    colors: {
      sage: '#7BA196',
      rose: '#D4A5A5',
      navy: '#2C3E50',
      background: '#FDFBF9',
    },
  },

  // Social
  social: {
    yelp: 'https://www.yelp.com/biz/ashlee-gendron-physical-therapy-san-diego',
    booking: 'https://agphysicaltherapypc.janeapp.com/',
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | AG Physical Therapy Vista CA',
    defaultTitle:
      'Pelvic Floor Physical Therapy Vista CA | Dr. Ashlee Gendron PT',
    defaultDescription:
      'Expert pelvic floor physical therapy in Vista & North County San Diego. Dr. Ashlee Gendron specializes in postpartum rehab, incontinence, diastasis recti & pelvic pain. Book your free consultation today.',
    defaultImage: '/images/ashlee-gendron.jpg',
    keywords: [
      'pelvic floor physical therapy',
      'women\'s health physical therapy',
      'postpartum physical therapy',
      'orthopedic physical therapy',
      'Vista CA',
      'San Diego',
      'pelvic pain',
      'urinary incontinence',
      'diastasis recti',
      'pelvic organ prolapse',
      'Ashlee Gendron',
      'PCES',
      'DPT',
      'pelvic health San Diego',
      'postpartum rehab',
      'North County San Diego PT',
    ],
  },

  // Navigation structure
  navigation: {
    main: [
      { name: 'My Practice', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Blog', href: '/agphysicaltherapypc-astro/blog/' },
      { name: 'Contact', href: '#locations' },
    ],
    footer: {
      quickLinks: [
        { name: 'My Practice', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Blog', href: '/agphysicaltherapypc-astro/blog/' },
        { name: 'Patient Resources', href: '#patient-resources' },
        { name: 'Contact', href: '#locations' },
        { name: 'Book Online', href: 'https://agphysicaltherapypc.janeapp.com/' },
      ],
    },
  },

  // Specializations
  specializations: [
    'Postpartum Rehab',
    'Urinary Incontinence',
    'Diastasis Recti',
    'Pelvic Organ Prolapse',
    'Return to Running & Exercise',
    'Core Training',
    'Pelvic Pain',
    'Hip & Lower Back Pain',
  ],

  // Services
  services: [
    {
      name: 'Pelvic Floor Physical Therapy',
      description:
        'Internal and external pelvic floor work performed to address each patient\'s individual needs. Treatment for incontinence, pelvic pain, prolapse, and dysfunction.',
      icon: 'pelvic',
    },
    {
      name: 'Postpartum Recovery',
      description:
        'As a Postpartum Corrective Exercise Specialist, I offer personalized home exercise programs to help you return to the activities you love with confidence.',
      icon: 'heart',
    },
    {
      name: "Women's Health",
      description:
        "Comprehensive women's health physical therapy addressing unique needs throughout all stages of life, from pregnancy preparation to menopause and beyond.",
      icon: 'women',
    },
    {
      name: 'Orthopedic Physical Therapy',
      description:
        'Holistic orthopedic assessment and treatment that evaluates your body as a whole, addressing musculoskeletal issues with an understanding of their connection to pelvic health.',
      icon: 'orthopedic',
    },
    {
      name: 'Virtual Consultations',
      description:
        'Video examinations available for clients who are not local. Get expert guidance and personalized exercise programs from the comfort of your home.',
      icon: 'virtual',
    },
    {
      name: 'Concierge Home Visits',
      description:
        'San Diego and North County concierge services. Receive personalized care in the comfort and privacy of your own home.',
      icon: 'home',
    },
  ],

  // Service areas
  serviceAreas: [
    'Vista',
    'San Diego',
    'Carlsbad',
    'Oceanside',
    'San Marcos',
    'Encinitas',
    'Escondido',
    'Rancho Bernardo',
    'North County San Diego',
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        "I was 8.5 months pregnant and struggling with a lower back injury when I started working with Ashlee. Her warmth, professionalism, and expertise were evident from our first meeting. She not only helped me heal my injury, but also took the time to educate me on how to strengthen my pelvic floor in preparation for child birth. As a first time mother-to-be, Ashlee shared so much information about childbirth, postpartum healing, and even parenting tips. What sets Ashlee apart is the level of care and attention she gives to her patients.",
      author: 'Torrie, Oceanside',
    },
    {
      quote:
        "Ashlee is a life saver! About a year after my son was born I started experiencing unexplained pain near my c-section scar. Doctors couldn't give me answers. A trusted friend recommended Ashlee and I am so glad she did! Ashlee is professional, knowledgeable, and SO kind. She listened to my concerns, did her own research, and checked in between sessions. I am so grateful and will recommend her to all my postpartum friends and family!",
      author: 'Emily, Fallbrook',
    },
  ],

  // FAQ items
  faq: [
    {
      question: 'Do I need a referral from a doctor?',
      answer:
        'No, you do not need a referral from a doctor. In California, I can treat for 12 sessions or 45 days, whichever occurs first, without a physician referral. However, if you have insurance requirements that mandate a referral, please check with your provider.',
    },
    {
      question: 'How long is an initial evaluation?',
      answer:
        'Your initial evaluation is 90 minutes and includes a comprehensive assessment, personalized plan of care, and customized home exercise program tailored to your specific goals and needs.',
    },
    {
      question: 'How long are follow-up sessions?',
      answer:
        'Each follow-up treatment session is 60 minutes of dedicated, one-on-one time. This allows for thorough treatment and ensures you receive the individualized attention you deserve.',
    },
    {
      question: 'Do you offer virtual appointments?',
      answer:
        "Yes! I offer video examinations for clients who are not local. This is a great option if you're looking for expert guidance but can't make it to one of my locations in person.",
    },
    {
      question: 'What are your hours?',
      answer:
        'I see patients Tuesday through Friday, 9am to 1pm. Please contact me to schedule your appointment at a time that works best for you.',
    },
    {
      question: 'What should I expect during pelvic floor therapy?',
      answer:
        "During pelvic floor therapy, I may perform both internal and external assessments and treatments based on your individual needs and comfort level. Everything is done with your consent, and I'll explain each step of the process. The goal is to address your specific concerns, whether that's incontinence, pelvic pain, or preparing for/recovering from childbirth.",
    },
    {
      question: 'Where are you located?',
      answer:
        'I see patients at San Diego County Midwives HQ (16885 Via Del Campo Ct, Suite 110, San Diego, CA 92127) on Wednesdays and Fridays. I also offer concierge home visits throughout San Diego and North County, as well as virtual video consultations.',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
