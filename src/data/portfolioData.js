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
      githubUrl: "",
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
    }
  ],
  experience: [],
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
      title: "1st Prize",
      description: "Secured 1st Prize at Nirmitih Hackathon – Spectra 2.0 (2026) for developing an AI-powered Civic Issue Reporting & Governance Platform using the MERN Stack.",
      tone: "pink",
      icon: "award"
    },
    {
      title: "1st Runner-Up",
      description: "Achieved 1st Runner-Up in the Project Based Learning (PBL) Competition at Kolhapur Institute of Technology's College of Engineering for innovative project development and teamwork",
      tone: "yellow",
      icon: "trophy"
    }
  ],
};
