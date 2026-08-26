import type { PortfolioData } from '../types/portfolio'

export const portfolio: PortfolioData = {
  person: {
    name: 'Chathuni Janadhi',
    firstName: 'Chathuni',
    professionalTitle: 'Full-Stack Developer & Information Technology Undergraduate',
    shortTitle: 'Full-Stack Developer & IT Undergraduate',
    greeting: "Hello, I'm",
    introduction:
      'I am an Information Technology undergraduate passionate about building modern, secure, and scalable software solutions. I enjoy developing full-stack applications, exploring new technologies, and turning real-world problems into practical digital solutions.',
    heroDescription:
      'I build modern, secure and scalable applications that solve real-world problems.',
    university: 'University of Moratuwa',
    degree: 'B.Sc. (Hons) in Information Technology',
    location: 'Matara, Sri Lanka',
    profileImage:
      'https://res.cloudinary.com/dbmjoemmg/image/upload/v1787578983/WhatsApp_Image_2026-08-24_at_19.07.03_szulsx.jpg',
    profileImageAlt: 'Chathuni Janadhi',
  },
  seo: {
    title: 'Chathuni Janadhi | Full-Stack Developer & IT Undergraduate',
    description:
      'Personal portfolio of Chathuni Janadhi, an Information Technology 2nd year undergraduate at the University of Moratuwa interested in software development, problem solving, and full-stack solutions.',
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
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
  stats: [
    { value: '1+', label: 'Years Building' },
    { value: '5+', label: 'Technologies' },
    { value: '1', label: 'Major Full-Stack System' },
    { value: '2nd', label: 'Year Undergraduate' },
  ],
  currentlyLearning: [
    'Cloud Architecture',
    'Advanced Backend Development',
    'Cybersecurity',
    'DevOps',
    'System Design',
  ],
  education: [
    {
      id: 'al',
      status: 'Completed',
      institution: 'Sujatha College, Matara',
      qualification: 'G.C.E. Advanced Level — Biological Science Stream',
      location: 'Sri Lanka',
      description:
        'Completed the G.C.E. Advanced Level examination in the Biological Science stream at Sujatha College, Matara, building a strong foundation in sciences and analytical thinking ahead of university.',
      subjects: [
        { name: 'Chemistry', grade: 'A' },
        { name: 'Biology', grade: 'B' },
        { name: 'Physics', grade: 'B' },
      ],
    },
    {
      id: 'uom',
      status: 'Currently Studying',
      institution: 'University of Moratuwa',
      qualification: 'B.Sc. (Hons) in Information Technology (2nd Year)',
      location: 'Sri Lanka',
      description:
        '2nd year undergraduate pursuing an honours degree in Information Technology with a focus on software engineering, systems, and building production-quality applications.',
    },
  ],
  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'NestJS' },
        { name: 'REST API' },
        { name: 'Authentication' },
        { name: 'API Security' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      skills: [{ name: 'PostgreSQL' }, { name: 'MySQL' }],
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS' },
        { name: 'Amazon S3' },
        { name: 'AWS RDS' },
        { name: 'Vercel' },
        { name: 'Render' },
      ],
    },
    {
      id: 'programming',
      title: 'Programming',
      skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'C' }, { name: 'Dart' }],
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Postman' },
        { name: 'pgAdmin' },
      ],
    },
    {
      id: 'embedded',
      title: 'Mobile / Embedded',
      skills: [{ name: 'Flutter' }, { name: 'Arduino' }, { name: 'Raspberry Pi' }],
    },
  ],
  projects: [
    {
      id: 'ecms',
      number: '01',
      title: 'Elderly Care Management System',
      year: '2025',
      category: 'Full-Stack Web Application',
      featured: true,
      role: 'Full-Stack Developer — Home Page, Navigation Bar, Doctor Dashboard & Doctor-Related Modules',
      description:
        'A comprehensive elderly care management platform designed to connect administrators, doctors, caregivers, patients, and family members through a centralized digital system.',
      overview:
        'My primary contribution to the Elderly Care Management System (ECMS) focused on the implementation of the Home Page, Navigation Bar, Doctor Dashboard, and associated doctor-related functionalities. My responsibilities encompassed both frontend and backend development, including user interface design, API integration, database development, business logic implementation, appointment and prescription management, doctor availability and channeling, payment-related functionality, and prescription email notifications. I also contributed to the software engineering documentation related to the functionalities developed.',
      myContributions: [
        'Home Page & Navigation: Developed the principal Home Page with responsive layouts, service information, smooth scrolling, reveal animations, and parallax effects using React & TypeScript, alongside a reusable Navigation Bar with responsive mobile dropdown.',
        'Doctor Dashboard: Built a centralized interface for managing appointments, elderly patient information, prescriptions, doctor availability, channeling slots, and payment status with reusable components.',
        'Availability & Channeling Workflow: Implemented doctor availability submission, admin channeling slot creation, doctor accept/reject workflow, and family appointment booking.',
        'Appointment & Medical History Management: Enabled doctors to review patient history, past conditions, allergies, medications, and caregiver-recorded vitals for enrolled patients.',
        'Prescription Management & SMTP Notifications: Implemented active medication review, new prescription creation, and automated SMTP email notification dispatch to family members.',
        'Backend & Database Architecture: Structured PostgreSQL entities and relationships using NestJS & TypeORM, developed RESTful APIs, and authored Use Case, Activity, and Sequence diagrams.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'NestJS',
        'PostgreSQL',
        'AWS',
        'JWT',
        'REST API',
        'Cloudinary',
      ],
      links: {
        github: 'https://github.com/Chamalka-heshi/Elderly-Home-Care-Management-System',
        live: 'https://frontend-one-beta-73.vercel.app/',
      },
    },
  ],
  journey: [
    {
      id: 'undergrad',
      title: 'Information Technology Undergraduate',
      context: 'University of Moratuwa',
      description:
        'Currently pursuing B.Sc. (Hons) in Information Technology as a 2nd year student.',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      context: 'Academic & personal projects',
      description:
        'Building academic and personal applications using React, TypeScript, NestJS, PostgreSQL and cloud services.',
    },
    {
      id: 'cloud',
      title: 'Cloud Deployment',
      context: 'Vercel, Render, AWS',
      description:
        'Experience deploying frontend and backend applications using services such as Vercel, Render and AWS.',
    },
  ],
  services: [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Building complete web applications from frontend to backend.',
      icon: 'layers',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Creating secure REST APIs, authentication systems and database-driven applications.',
      icon: 'server',
    },
    {
      id: 'database',
      title: 'Database Design',
      description: 'Designing structured and reliable relational database systems.',
      icon: 'database',
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      description: 'Deploying applications using modern cloud and hosting platforms.',
      icon: 'cloud',
    },
  ],
}


