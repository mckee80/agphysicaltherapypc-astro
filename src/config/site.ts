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
      // General availability
      days: 'Tuesday - Friday',
      time: 'By Appointment',
      full: 'Tue-Fri by appointment',
      // In-clinic specific
      clinic: {
        days: 'Wednesdays & Fridays',
        time: '9:00 AM - 1:00 PM',
        location: 'San Diego County Midwives HQ',
      },
      // Home visits
      homeVisits: {
        days: 'Tuesday - Friday',
        time: 'Flexible scheduling',
      },
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
    facebook: 'https://www.facebook.com/agpelvopt',
    instagram: 'https://www.instagram.com/agpelvopt',
    yelp: 'https://www.yelp.com/biz/ashlee-gendron-physical-therapy-san-diego',
    booking: 'https://agphysicaltherapypc.janeapp.com/',
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | AG Physical Therapy Vista CA',
    defaultTitle:
      'Pelvic Floor Physical Therapy Vista CA | Boutique Concierge PT',
    defaultDescription:
      'Boutique concierge pelvic floor physical therapy in Vista & North County San Diego. Dr. Ashlee Gendron offers one-on-one home visits, in-clinic sessions & virtual care. Specializing in postpartum rehab, incontinence, diastasis recti & pelvic pain.',
    defaultImage: '/images/ashlee-gendron.jpg',
    keywords: [
      'pelvic floor physical therapy',
      'women\'s health physical therapy',
      'postpartum physical therapy',
      'orthopedic physical therapy',
      'boutique physical therapy',
      'concierge physical therapy',
      'concierge home visit PT San Diego',
      'one-on-one physical therapy',
      'in-home pelvic floor therapy',
      'women\'s health PT San Diego',
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
      { name: 'About', href: '/agphysicaltherapypc-astro/about/' },
      { name: 'Services', href: '/agphysicaltherapypc-astro/#services' },
      { name: 'Areas Served', href: '/agphysicaltherapypc-astro/areas-served/' },
      { name: 'Blog', href: '/agphysicaltherapypc-astro/blog/' },
      { name: 'Resources', href: '/agphysicaltherapypc-astro/resources/' },
    ],
    footer: {
      quickLinks: [
        { name: 'About', href: '/agphysicaltherapypc-astro/about/' },
        { name: 'Services', href: '/agphysicaltherapypc-astro/#services' },
        { name: 'Areas Served', href: '/agphysicaltherapypc-astro/areas-served/' },
        { name: 'Blog', href: '/agphysicaltherapypc-astro/blog/' },
        { name: 'Resources', href: '/agphysicaltherapypc-astro/resources/' },
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
      name: 'Urinary Incontinence & Pelvic Organ Prolapse',
      description:
        'Leaking urine when exercising, coughing, or sneezing. Increased urinary or fecal urgency, frequency, and pelvic pressure. We treat the root cause, not just the symptoms.',
      icon: 'pelvic',
    },
    {
      name: 'Pelvic Pain',
      description:
        'Treatment for PCOS, endometriosis, painful bladder syndrome (IC), painful intercourse, painful menstruation, lower back and hip pain, constipation, and post-surgical rehabilitation.',
      icon: 'heart',
    },
    {
      name: 'Diastasis Recti & Postpartum Recovery',
      description:
        'Diastasis recti (abdominal separation) and postpartum rehab: progressive core, back, and hip strengthening, C-section scar mobilization, and return to running program.',
      icon: 'women',
    },
    {
      name: 'Pregnancy & Birth Preparation',
      description:
        'Exercises for optimal birth, breathing and pushing strategies, birthing positions, pelvic and back pain relief, pubic symphysis and round ligament pain, and pelvic floor assessment.',
      icon: 'orthopedic',
    },
    {
      name: 'Orthopedic Physical Therapy',
      description:
        'Holistic orthopedic assessment and treatment that evaluates your body as a whole, addressing musculoskeletal issues with an understanding of their connection to pelvic health.',
      icon: 'orthopedic',
    },
    {
      name: "Women's Health",
      description:
        "Comprehensive women's health physical therapy addressing unique needs throughout all stages of life, from pregnancy preparation to menopause and beyond.",
      icon: 'women',
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
    'Rancho Santa Fe',
    'Fallbrook',
    'Solana Beach',
    'Bonsall',
    'North County San Diego',
  ],

  // Google Reviews
  googleReviews: {
    rating: 5.0,
    reviewCount: 14,
    url: 'https://www.google.com/search?q=Ashlee+Gendron+Physical+Therapy+Vista+CA+reviews',
  },

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
      question: 'What types of health insurance do you accept?',
      answer:
        'Currently, we are an out-of-network provider. I do offer superbills for PPO insurance carriers in order to get possible reimbursement for the services provided. The patient must submit this at their own discretion. Unfortunately, I am unable to accept Medicare as an out-of-network provider.',
    },
    {
      question: 'What is your new patient procedure?',
      answer:
        'If you are interested in our services, you can book a 15-minute discovery call through our online scheduling. This gives us a chance to discuss how I can meet your needs and goals before committing to an appointment.',
      link: { text: 'Book a Discovery Call', url: 'https://agphysicaltherapypc.janeapp.com/' },
    },
    {
      question: 'Do I need a doctor\'s referral?',
      answer:
        'No, you do not need a referral from a doctor. In California, you can see a physical therapist without a physician referral.',
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
        'In-clinic appointments at San Diego County Midwives HQ are available Wednesdays and Fridays, 9am to 1pm. For concierge home visits and virtual consultations, I have flexible scheduling Tuesday through Friday. Please contact me to find a time that works best for you.',
    },
    {
      question: 'What should I expect during pelvic floor therapy?',
      answer:
        "During pelvic floor therapy, I may perform both internal and external assessments and treatments based on your individual needs and comfort level. Everything is done with your consent, and I'll explain each step of the process. Treatments typically consist of a full body postural exam, manual therapy (cupping, skin rolling, myofascial release, joint mobilizations, tender point release of the pelvic floor and surrounding structures as needed), internal pelvic and/or rectal exam, a personalized strengthening program, diastasis evaluation, and any necessary referrals to additional practitioners. The goal is to address your specific concerns, whether that's incontinence, pelvic pain, or preparing for/recovering from childbirth.",
    },
    {
      question: 'Where are you located?',
      answer:
        'I see patients at San Diego County Midwives HQ (16885 Via Del Campo Ct, Suite 110, San Diego, CA 92127) on Wednesdays and Fridays. I also offer concierge home visits throughout San Diego and North County, as well as virtual video consultations.',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
