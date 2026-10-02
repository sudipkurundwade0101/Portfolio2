window.portfolioData = {
  personal: {
    name: "Sudip R. Kurundwade",
    shortName: "Sudip",
    role: "Trainee Software Engineer",
    headline: "Final-year Computer Science student passionate about software development.",
    label: "Hi, I am",
    location: "Ichalkaranji, 416109",
    email: "sudipkurundwade@gmail.com",
    resumeUrl: "",
    resumePath: "assets/resume.pdf",
    intro:
      "Final-year Computer Science student with strong proficiency in Java, Data Structures & Algorithms, and MySQL. Solved 250+ LeetCode problems and currently learning Spring Boot to build scalable backend applications.",
    philosophy:
      "Passionate about software development and eager to contribute as a Trainee Software Engineer.",
    currentFocus:
      "Right now I am focused on learning Spring Boot to build scalable backend applications and strengthening Data Structures & Algorithms.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "Leetcode", href: "https://leetcode.com", icon: "code" }
  ],
  focusAreas: ["Java", "DSA", "MySQL", "Spring Boot", "Full Stack"],
  aboutFacts: [
    {
      label: "Location",
      value: "Ichalkaranji, Maharashtra",
      icon: "sparkles",
      tone: "violet",
    },
    {
      label: "Main stack",
      value: "Java, Data Structures & Algorithms, MySQL",
      icon: "code",
      tone: "pink",
    },
    {
      label: "Current focus",
      value: "Spring Boot and scalable backend applications",
      icon: "book",
      tone: "yellow",
    },
  ],
  skills: [
    {
      category: "Languages",
      icon: "code",
      tone: "violet",
      items: ["Java", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      icon: "layout",
      tone: "pink",
      items: ["React.js", "Typescript", "Tailwind CSS", "Responsive Web Design"],
    },
    {
      category: "Core Concepts",
      icon: "server",
      tone: "green",
      items: ["Data Structures & Algorithms", "Object-Oriented Programming", "REST APIs", "MVC Architecture", "Authentication & Authorization", "CRUD Operations", "Computer Networks"],
    },
    {
      category: "Database & Tools",
      icon: "database",
      tone: "yellow",
      items: ["MongoDB", "MySQL", "Git", "Github", "Postman", "Figma"],
    },
    {
      category: "Backend",
      icon: "tools",
      tone: "violet",
      items: ["Node.js", "Express.js", "SpringBoot REST APIs"],
    },
    {
      category: "Soft Skills",
      icon: "sparkles",
      tone: "pink",
      items: ["Problem Solving", "Leadership", "Team Collaboration", "Adaptability"],
    },
  ],
  projects: [
    {
      title: "College ERP System",
      eyebrow: "Full-Stack Educational Management Platform",
      description:
        "Architected a comprehensive educational management platform, supporting 8 distinct user roles across admissions, fees, attendance, and classroom operations, enhancing overall institutional efficiency.",
      problem:
        "Implemented role-based dashboards for Admin, Student, Instructor, Accountant, Librarian, and Registrar with secure JWT-based authentication.",
      features: [
        "Architected a comprehensive educational management platform, supporting 8 distinct user roles",
        "Implemented role-based dashboards with secure JWT-based authentication",
        "Integrated RESTful APIs with MongoDB and Mongoose for efficient management of academic records"
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.IO", "LiveKit", "Cloudinary"],
      githubUrl: "https://github.com/sudipkurundwade0101/ERP",
      liveUrl: "",
      accent: "pink",
      featured: true,
      preview: {
        label: "ERP",
        metric: "01",
      },
    },
    {
      title: "Civic Issue Reporter",
      eyebrow: "AI-Powered Civic Governance Platform",
      description:
        "Engineered an AI-powered civic issue reporting platform enabling citizens to report potholes, garbage, drainage problems, and streetlight failures using images and location data.",
      problem:
        "Spearheaded a Google Gemini AI integration for automated image analysis of civic issues, reducing manual review time by 40%.",
      features: [
        "Spearheaded a Google Gemini AI integration for automated image analysis of civic issues",
        "Architected secure RESTful APIs and integrated MongoDB",
        "Designed workflows for categorizing, tracking, and managing reported civic issues"
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Gemini AI"],
      githubUrl: "",
      liveUrl: "",
      accent: "violet",
      preview: {
        label: "Civic",
        metric: "02",
      },
    },
    {
      title: "iCAM Product Identifier",
      eyebrow: "Android Machine Learning Mini Project",
      description:
        "An Android mobile application that uses two machine learning models to identify FMCG products and fruits or vegetables through a camera-led workflow.",
      problem:
        "The project explores a simple, accessible way to identify everyday items by pairing category-specific recognition with spoken interaction.",
      features: [
        "Two machine learning models for FMCG and fruit or vegetable identification",
        "Camera capture flow with flash and portrait controls",
        "Text-to-speech prompts with double-tap category selection",
        "Built in Java for Android as a second mini project",
      ],
      stack: ["Java", "Android", "Machine Learning", "Camera API", "Text-to-Speech"],
      githubUrl: "https://github.com/sudipkurundwade0101/iCAM",
      liveUrl: "",
      accent: "yellow",
      preview: {
        label: "iCAM",
        metric: "03",
      },
    },
    {
      title: "ByteArq",
      eyebrow: "Serverless Events Platform",
      description:
        "A Vite and React application backed by a MongoDB API, structured for deployment as a single Vercel Serverless Function.",
      problem:
        "It keeps frontend delivery and API routing together in a Vercel-friendly architecture while supporting event, workshop, application, and management workflows.",
      features: [
        "React and Vite frontend with environment-aware API configuration",
        "One Vercel Serverless Function routes all API requests",
        "Reusable Mongoose connection handling for serverless MongoDB access",
        "JWT authentication, flexible CORS, and event or workshop models",
      ],
      stack: ["React.js", "Vite", "Node.js", "Vercel", "MongoDB", "Mongoose", "JWT"],
      githubUrl: "https://github.com/sudipkurundwade0101/bytearq_",
      liveUrl: "",
      accent: "green",
      preview: {
        label: "Byte",
        metric: "04",
      },
    },
    {
      title: "Food Zone",
      eyebrow: "Food Ordering Interface",
      description:
        "A responsive food application interface designed for browsing menus, managing a cart, and creating a smooth ordering experience.",
      problem:
        "It brings food discovery, category filtering, and cart state into one clear customer-facing workflow.",
      features: [
        "Responsive React interface for menu browsing and cart interactions",
        "Category filtering for faster food discovery",
        "Redux Toolkit state management for predictable data flow",
        "Tailwind CSS styling for a modern, adaptable interface",
      ],
      stack: ["React.js", "Tailwind CSS", "Redux Toolkit", "JavaScript"],
      githubUrl: "https://github.com/naeemnaikwadi/food-zone",
      liveUrl: "",
      accent: "violet",
      preview: {
        label: "Food",
        metric: "05",
      },
    },
    {
      title: "Web Builder",
      eyebrow: "AI-Assisted Creation Platform",
      description:
        "A full-stack platform for creating and organizing web projects through reusable blocks, starter templates, media uploads, and AI-assisted workflows.",
      problem:
        "It brings the building blocks of a website project into one workspace, from project setup and templates to content assets and assisted creation.",
      features: [
        "Project, collection, template, and reusable block management",
        "Google Generative AI-assisted creation features",
        "Authentication, user profiles, and protected project workflows",
        "Cloudinary-backed uploads for project media",
      ],
      stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Gemini AI", "Cloudinary", "JWT"],
      githubUrl: "https://github.com/sudipkurundwade/web_builder",
      liveUrl: "",
      accent: "yellow",
      preview: {
        label: "Build",
        metric: "06",
      },
    },
    {
      title: "Slynk",
      eyebrow: "Professional Connection Platform",
      description:
        "A comprehensive platform designed to connect investors, entrepreneurs, and freelancers through profiles, posts, real-time conversations, and collaboration tools.",
      problem:
        "It gives different kinds of builders a shared space to discover opportunities, communicate, and form working connections.",
      features: [
        "Separate flows for entrepreneurs, investors, and freelancers",
        "Posts, feeds, profiles, and real-time chat interfaces",
        "Firebase authentication with Express and Socket.IO services",
        "LiveKit integration for live communication features",
      ],
      stack: ["React.js", "Vite", "Firebase", "Node.js", "Express.js", "Socket.IO", "LiveKit"],
      githubUrl: "https://github.com/siddhumore18/Slynk",
      liveUrl: "",
      accent: "pink",
      preview: {
        label: "Slynk",
        metric: "07",
      },
    },
    {
      title: "Clinic Management Software",
      eyebrow: "Healthcare Operations Interface",
      description:
        "A React and TypeScript clinic-management interface structured around protected routes, calendar-based views, dashboards, and responsive administrative tools.",
      problem:
        "It organizes key clinic workflows into clear, accessible screens so staff can move between operational views without friction.",
      features: [
        "Protected routes for controlled access to application views",
        "Calendar and date-driven scheduling components",
        "Dashboard visualizations and reusable interface primitives",
        "Responsive React, TypeScript, and Tailwind CSS implementation",
      ],
      stack: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
      githubUrl: "https://github.com/sudipkurundwade0101/Clinic-Management-Software",
      liveUrl: "",
      accent: "green",
      preview: {
        label: "Clinic",
        metric: "08",
      },
    },
    {
      title: "MindBridge",
      eyebrow: "Wellbeing Activity Platform",
      description:
        "A React application that brings wellbeing activities, progress tracking, chat, and interactive games into a single supportive experience.",
      problem:
        "It creates an approachable place for users to engage with everyday wellbeing activities while keeping their progress visible.",
      features: [
        "Interactive activities including memory match, 2048, coloring, and tile slider",
        "Progress statistics and daily activity views",
        "Chat interface with live conversation components",
        "Responsive React and Tailwind CSS interface",
      ],
      stack: ["React.js", "Vite", "Tailwind CSS", "Socket.IO", "JavaScript"],
      githubUrl: "https://github.com/naeemnaikwadi/mindbridge2",
      liveUrl: "",
      accent: "violet",
      preview: {
        label: "Mind",
        metric: "09",
      },
    }
  ],
  experience: [
    {
      date: "Volunteer Experience",
      role: "Technical Head",
      company: "byteARQ Technical Club",
      description:
        "Volunteer Technical Head for byteARQ Technical Club, contributing to the club's technical team and its student-led technology activities.",
      achievements: [
        "Led the club's technical team as Technical Head",
        "Worked alongside the co-head and technical club members",
      ],
      technologies: ["Technical Leadership", "Team Collaboration", "Student Community"],
      photo: {
        src: "assets/bytearq-technical-head.png",
        alt: "Sudip Kurundwade, Technical Head of byteARQ Technical Club",
      },
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      school: "Kolhapur Institute of Technology's College of Engineering, Gokul-Shirgaon",
      duration: "Expected 2027",
      coursework: [],
      achievements: ["CGPA: 8.45"],
    },
    {
      degree: "HSC",
      school: "Shri. Balaji Madhyamik Vidyalay And Jr. College, Vikramnagar",
      duration: "2023",
      coursework: [],
      achievements: ["Maharashtra Board 73.64%"],
    },
    {
      degree: "SSC",
      school: "Manere Highschool Kabnur",
      duration: "2021",
      coursework: [],
      achievements: ["81.60%"],
    }
  ],
  achievements: [
    {
      title: "1st Prize · Nirmitih Hackathon",
      date: "Spectra 2.0 (2K26) · DKTE",
      description: "Won 1st Prize for an AI-powered Civic Issue Reporting & Governance Platform built with the MERN stack.",
      details: [
        "Auto-GPS routing to the appropriate Panchayat or Nagar Panchayat",
        "Mandatory photo evidence to support transparent issue resolution",
        "Hierarchical access for super admins, regional admins, and department staff",
      ],
      team: "Mohini Mukesh Deshmukh, Aditi Rewadkar, and Sudip Kurundwade",
      photos: [
        {
          src: "assets/achievements/nirmitih-team.jpg",
          alt: "Nirmitih Hackathon winning team with the trophy at DKTE",
        },
        {
          src: "assets/achievements/nirmitih-ceremony.jpg",
          alt: "Nirmitih Hackathon award ceremony at Spectra 2.0",
        },
        {
          src: "assets/achievements/nirmitih-trophy.jpg",
          alt: "Nirmitih Hackathon Spectra 2.0 winner trophy",
        },
      ],
      tone: "pink",
      icon: "award",
    },
    {
      title: "1st Runner-Up · KIT PBL Day",
      date: "31 October 2025 · KIT, Gokul-Shirgaon",
      description: "Achieved 1st Runner-Up in the Project Based Learning Competition through collaborative project development as a CSBS engineering team.",
      details: [
        "Recognized for project-based learning, innovation, and team collaboration",
        "Presented the work during KIT PBL Day",
      ],
      team: "Sahil Gavankar, Naeem Naikwadi, Vaibhav Suryavanshi, and Sudip Kurundwade",
      photos: [
        {
          src: "assets/achievements/pbl-award-one.jpg",
          alt: "KIT PBL Day award presentation on 31 October 2025",
        },
        {
          src: "assets/achievements/pbl-award-two.jpg",
          alt: "KIT PBL Day team receiving the 1st Runner-Up certificate",
        },
      ],
      tone: "yellow",
      icon: "trophy",
    },
    {
      title: "2nd Place · NeuronRush",
      date: "23 September 2024 · Phoenix 2K24, DKTE",
      description: "Secured 2nd place in NeuronRush during Phoenix 2K24 at DKTE Society's Textile & Engineering Institute, Ichalkaranji.",
      details: [
        "Recognized at the Phoenix 2K24 technical event",
        "Organized by CSA and IEEE Computer Society",
      ],
      photos: [
        {
          src: "assets/achievements/neuronrush-second-place.jpeg",
          alt: "Certificate for 2nd place in NeuronRush at Phoenix 2K24",
        },
      ],
      tone: "green",
      icon: "award",
    }
  ],
};
