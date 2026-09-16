import type { PortfolioData } from '../types/portfolio'

export const portfolio: PortfolioData = {
  person: {
    name: 'Chathuni Janadhi Jayaweera',
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
    profileImageAlt: 'Chathuni Janadhi Jayaweera',
    cvUrl: 'https://drive.google.com/file/d/1WIk3amDBkdak_8Jn-oBeEZKcbr40xLS0/view?usp=drive_link',
  },
  seo: {
    title: 'Chathuni Janadhi Jayaweera | Full-Stack Developer & IT Undergraduate',
    description:
      'Personal portfolio of Chathuni Janadhi Jayaweera, an Information Technology 2nd year undergraduate at the University of Moratuwa interested in software development, problem solving, and full-stack solutions.',
  },
  contact: {
    name: 'Chathuni Janadhi Jayaweera',
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
    { value: '2', label: 'Full-Stack Projects' },
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
      institution: 'Sujatha Vidyalaya, Matara',
      qualification: 'G.C.E. Advanced Level — Biological Science Stream',
      location: 'Sri Lanka',
      description:
        'Completed the G.C.E. Advanced Level examination in the Biological Science stream at Sujatha Vidyalaya, Matara, building a strong foundation in sciences and analytical thinking ahead of university.',
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
      qualification: 'B.Sc. (Hons) in Information Technology',
      location: 'Sri Lanka',
      description:
        'Currently studying as a 2nd year undergraduate pursuing a B.Sc. (Hons) degree in Information Technology at the University of Moratuwa, focusing on software engineering, systems design, and full-stack applications.',
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
      problem:
        'Traditional elderly care facilities and families often face fragmented communication, paper-based prescription tracking, uncoordinated doctor availability, and inefficient appointment scheduling. ECMS was created to centralize patient management, channeling workflows, medical history tracking, and doctor-caregiver-family collaboration into a unified digital platform.',
      solution:
        'A modern full-stack web application built with React, NestJS, and PostgreSQL that streamlines doctor channeling, patient health tracking, prescription management with automated email dispatches, and responsive user interfaces.',
      challenges: '',
      learnings:
        'Gained hands-on experience in full-stack architecture, relational database design with NestJS & PostgreSQL, state management in React, RESTful API design, and multi-role user flow integration.',
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
      features: [
        'Responsive Home Page & Navigation Bar',
        'Centralized Doctor Dashboard',
        'Doctor Availability & Channeling Workflow',
        'Appointment & Medical History Management',
        'Prescription Management & Automated SMTP Email Notifications',
        'Role-based Access & RESTful API Architecture',
      ],
      links: {
        github: 'https://github.com/Chamalka-heshi/Elderly-Home-Care-Management-System',
        live: 'https://frontend-one-beta-73.vercel.app/',
      },
      image:
        'https://res.cloudinary.com/efjuzuge/image/upload/v1789555063/ChatGPT_Image_Sep_12_2026_10_58_26_AM.png',
      imageAlt: 'Elderly Care Management System (ECMS)',
    },
    {
      id: 'clothify',
      number: '02',
      title: 'Clothify — Online Clothing Store',
      year: '2026',
      category: 'Full-Stack E-Commerce Application',
      featured: true,
      role: 'Full-Stack Developer — End-to-End Architecture & Implementation',
      description:
        'A full-stack online clothing shopping web application with a modern React storefront, secure Node.js/Express.js backend API, and PostgreSQL database — featuring product browsing, cart management, user authentication, and order handling.',
      overview:
        'Clothify is a complete e-commerce platform built from the ground up, encompassing a responsive React + TypeScript frontend, a RESTful Express.js backend with JWT-based authentication, and a structured PostgreSQL relational database. The application supports browsing and filtering clothing products by category, managing a shopping cart, secure user registration and login, and placing orders — demonstrating a production-ready full-stack architecture.',
      problem:
        'Online clothing shoppers need a seamless, intuitive, and secure digital experience for browsing products, managing wishlists and carts, and completing purchases. Clothify was built to demonstrate a real-world e-commerce system with clean architecture, secure authentication, and scalable data modelling.',
      solution:
        'A modern full-stack web application using React and TypeScript on the frontend, Node.js with Express.js for the RESTful API, and PostgreSQL for persistent data storage. JWT authentication secures user sessions, and the UI delivers a clean, mobile-responsive shopping experience.',
      challenges: '',
      learnings:
        'Gained experience architecting a complete e-commerce system end-to-end — from relational database schema design, REST API development with Express.js, JWT authentication flows, to building a responsive React storefront with TypeScript.',
      myContributions: [
        'Frontend Storefront: Built a responsive shopping interface with React and TypeScript covering product listings, category filtering, product detail views, and a dynamic cart.',
        'Backend REST API: Developed a Node.js & Express.js REST API handling product management, user authentication (registration/login with JWT), cart operations, and order processing.',
        'Database Design: Designed and implemented a PostgreSQL relational schema covering users, products, categories, cart items, and orders with appropriate constraints and relationships.',
        'Authentication & Security: Implemented JWT-based authentication with protected routes, secure password hashing, and role-based access control.',
        'Deployment: Deployed the frontend to Vercel and managed backend and database hosting for a publicly accessible live application.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'JWT',
        'REST API',
        'Vercel',
      ],
      features: [
        'Product Listing & Category Filtering',
        'Product Detail Views',
        'Shopping Cart Management',
        'User Registration & JWT Authentication',
        'Order Placement & Management',
        'Responsive Mobile-First UI',
      ],
      links: {
        github: 'https://github.com/chathunijanadhi/clothify.git',
        live: 'https://clothify-one.vercel.app/',
      },
      image:
        'https://res.cloudinary.com/efjuzuge/image/upload/v1789555063/ChatGPT_Image_Sep_12_2026_10_58_38_AM.png',
      imageAlt: 'Clothify — Online Clothing Store',
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
  interests: [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      description: 'Building clean, maintainable, and scalable full-stack web applications.',
      icon: 'code',
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Exploring cloud architecture, containerization, and modern deployment strategies.',
      icon: 'sparkles',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Focusing on secure coding practices, authentication, and application security.',
      icon: 'lightbulb',
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      description: 'Constantly learning new languages, frameworks, and software methodologies.',
      icon: 'book',
    },
  ],
}
