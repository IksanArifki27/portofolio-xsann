export type SearchItem = {
  title: string;
  content: string;
  href: string;
};

export const searchData: SearchItem[] = [
  // ===================== ABOUT =====================
  {
    title: 'About - Introduction',
    content:
      "Hi, I'm M. Iksan Arifki, an Information Enginner graduate from University of August 17, 1945 Surabaya with a strong interest in web development, system governance, and Network data center.",
    href: '/about'
  },
  {
    title: 'Design',
    content:
      'I have a keen eye for design, creating visually appealing and user-friendly interfaces.',
    href: '/design'
  },
  {
    title: 'About - Internship at PT Interbat',
    content:
      'Developed web-based safty and Healt system using Laravel, Bootstrap, and REST API integration.',
    href: '/about#more'
  },
  {
    title: 'About - Work at PT Interbat',
    content:
      'Contributed to for develop internal system for division K3 safety and health',
    href: '/about#more'
  },

  // ===================== EDUCATION =====================
  {
    title: 'Education - University of August 17, 1945 Surabaya',
    content:
      'Bachelor of Information System (GPA 3.63/4.00), graduated CumLaude in 8 semesters. Thesis on Design of an assessment information system based on the OBE curriculum.',
    href: '/about#more'
  },
  {
    title: 'Education - SMK Wachid Hasyim 2 Surabaya',
    content:
      'Graduated with a focus on technology information systems. The competition is to create informative and attractive designs.',
    href: '/about#more'
  },

  // ===================== WORK EXPERIENCE =====================
  {
    title: 'Work Experience - PT Interbat',
    content:
      'Contributed to the design and support of internal information systems.',
    href: '/about#more'
  },
  {
    title: 'Work Experience - CV Isokativ Indonesia',
    content:
      'Contribute in managing the database Compile and prepare reports based on data.',
    href: '/about#more'
  },

  {
    title: 'Project - Health and safety system',
    content:
      'An app to track prayers and daily activities during Ramadhan with a clean, responsive interface.',
    href: '/projects/sioktig'
  },
  {
    title: 'Projects - Internet Provider manajemen',
    content:
      'Track income and expenses through a dashboard that offers a real-time financial overview.',
    href: '/projects/idplay'
  },

  // ===================== TRAINING =====================
  {
    title: 'Training - BNSP LSP TIK Indonesia Technical Support Junior',
    content:
      'Understanding Internal Audit Concepts & Techniques from Global Kopelindo Synergy (2025).',
    href: '/about#more'
  },
  {
    title: 'Training - BNSP LSP Dwi Warna Design Graphic Junior',
    content: 'BSNP Training, Global Kopelindo Synergy (2025).',
    href: '/about#more'
  },
  {
    title: 'Training - Dicoding Frontend Developer Junior',
    content: 'Fornt end developer junior (2024).',
    href: '/about#more'
  },
  {
    title: 'Training - Revou Intro Digital Marketing',
    content: 'Fundamental Digital marketing (2024).',
    href: '/about#more'
  },

  // ===================== GENERAL =====================
  {
    title: 'Resume',
    content:
      'Download my resume to learn more about my professional background.',
    href: 'https://drive.google.com/file/d/1GVks0TKVCdfC63u4rx8zHlasRQJbVwR7/view'
  }
];
