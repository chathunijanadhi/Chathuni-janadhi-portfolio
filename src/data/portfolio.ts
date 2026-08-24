import type { PortfolioData } from '../types/portfolio'

export const portfolio: PortfolioData = {
  person: {
    name: 'Chathuni Janadhi',
    firstName: 'Chathuni',
    role: 'Information Technology Undergraduate',
    greeting: "Hello, I'm",
    bio: 'Chathuni Janadhi is an Information Technology undergraduate with an interest in software development and problem-solving. She enjoys designing and developing user-friendly, efficient, and reliable software solutions while continuously improving her technical skills.',
    heroDescription:
      'Information Technology undergraduate passionate about technology, software development, problem-solving, and continuous learning.',
    location: 'Matara, Sri Lanka',
    profileImage:
      'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787578983/WhatsApp_Image_2026-08-24_at_19.07.03_szulsx.jpg',
    profileImageAlt: 'Chathuni Janadhi',
  },
  seo: {
    title: 'Chathuni Janadhi | Information Technology Undergraduate',
    description:
      'Personal portfolio of Chathuni Janadhi, an Information Technology undergraduate interested in software development, problem solving, user-friendly software solutions, and continuous learning.',
  },
  contact: {
    name: 'Chathuni Janadhi',
    role: 'Information Technology Undergraduate',
    location: 'Matara, Sri Lanka',
    email: 'janadhichathuni@gmail.com',
    phone: '0716724526',
    linkedin: 'https://www.linkedin.com/in/chathuni-janadhi-982a19319',
    github: 'https://github.com/chathunijanadhi',
  },
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'interests', label: 'Focus' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
  project: {
    id: 'ecms',
    title: 'Elderly Care Management System (ECMS)',
    subtitle: 'Comprehensive Healthcare Coordination Platform',
    category: 'Full-Stack Web Application',
    role: 'Home Page, Navigation, Doctor Dashboard & Doctor-Related Modules',
    overview:
      'My primary contribution to the Elderly Care Management System (ECMS) focused on both frontend and backend development for the Home Page, Navigation Bar, Doctor Dashboard, and associated doctor-related workflows. This included UI design, API integration, database architecture with TypeORM & PostgreSQL, business logic implementation, appointment and prescription management, doctor availability and channeling, payment tracking integration, SMTP prescription notifications, and software engineering documentation (UML diagrams).',
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'RESTful APIs',
      'SMTP (Email Notifications)',
      'UML Modeling',
    ],
    keyContributions: [
      'Developed the principal Home Page with responsive layout, service info, smooth scrolling, reveal animations, and parallax effects using React & TypeScript.',
      'Engineered the reusable Navigation Bar with responsive mobile dropdown menus for seamless application-wide routing.',
      'Designed and developed the centralized Doctor Dashboard for managing appointments, patient medical history, prescriptions, availability, channeling slots, and payment status.',
      'Implemented the Doctor Availability & Channeling workflow: doctors set availability, administrators generate channeling slots, doctors accept/reject slots, and accepted slots open for family appointment bookings.',
      'Built Appointment Management supporting separate handling of active and completed records integrated with prescription and payment status.',
      'Implemented Patient Information & Medical History access (conditions, allergies, previous medications, caregiver-recorded vitals for care-plan enrolled patients).',
      'Engineered Prescription Management enabling active medication review (continue/cancel) and new prescription issuance with clinical notes, dosages, duration, and frequency.',
      'Implemented automated SMTP email notifications sending prescribed medication details directly to family members upon prescription creation.',
      'Structured PostgreSQL database entities & relational associations using NestJS and TypeORM with dedicated RESTful API communication.',
      'Authored software engineering documentation including Use Case, Activity, and Sequence diagrams representing doctor workflows.',
    ],
    modules: [
      {
        title: 'Home Page & Navigation Bar',
        description:
          'Principal entry interface developed with React and TypeScript.',
        points: [
          'Responsive layout, service information, and user interaction components.',
          'Visual enhancements including smooth scrolling, reveal animations, and parallax effects.',
          'Reusable Navigation Bar component with responsive mobile dropdown menu.',
        ],
      },
      {
        title: 'Doctor Dashboard',
        description:
          'Centralized management hub for clinical and administrative operations.',
        points: [
          'Dynamic state management for appointments, elderly patient records, and channeling slots.',
          'Reusable UI components for dashboard metrics, data tables, and modal forms.',
          'Integration with backend REST APIs to retrieve and update records in real time.',
        ],
      },
      {
        title: 'Availability & Channeling Workflow',
        description:
          'Multi-stakeholder scheduling coordination process.',
        points: [
          'Doctors submit availability schedules through their dashboard.',
          'Administrators generate channeling slots based on submitted doctor availability.',
          'Doctors accept or reject generated slots before they are published.',
          'Accepted slots become open for family members to book elderly patient consultations.',
        ],
      },
      {
        title: 'Prescriptions & SMTP Notifications',
        description:
          'End-to-end prescription lifecycle and family notification system.',
        points: [
          'Review of active medications to continue or cancel before issuing new prescriptions.',
          'Structured prescription records containing diagnosis, dosage, frequency, and validity period.',
          'Automated SMTP email transmission to family members upon successful prescription issuance.',
        ],
      },
      {
        title: 'Backend, Database & SE Documentation',
        description:
          'Robust relational architecture and system design specifications.',
        points: [
          'NestJS, TypeORM, and PostgreSQL entities for doctors, appointments, prescriptions, and channeling slots.',
          'RESTful API architecture separating UI concerns from business logic and database persistence.',
          'Comprehensive UML diagrams (Use Case, Activity, Sequence diagrams) for doctor workflows.',
        ],
      },
    ],
  },
  education: [
    {
      id: 'al',
      institution: 'G.C.E. Advanced Level',
      stream: 'Biological Science Stream',
      location: 'Sri Lanka',
      description:
        'Completed the G.C.E. Advanced Level examination in the Biological Science stream with a focus on analytical thinking and scientific foundation.',
      subjects: ['Biology', 'Physics', 'Chemistry'],
    },
  ],
  interests: [
    {
      id: 'dev',
      title: 'Software Development',
      description:
        'Interest in designing and developing practical, efficient, and reliable software solutions.',
      icon: 'code',
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      description:
        'Enjoys approaching complex problems logically, analyzing requirements, and finding effective solutions.',
      icon: 'lightbulb',
    },
    {
      id: 'user-friendly',
      title: 'User-Friendly Software Solutions',
      description:
        'Interested in creating software solutions that are clean, intuitive, accessible, and seamless for users.',
      icon: 'sparkles',
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      description:
        'Focused on continuously developing technical knowledge, exploring new technologies, and refining technical skills.',
      icon: 'book',
    },
  ],
}

