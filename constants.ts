import { Project, Certification, Education, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Sandala Nithin Kumar",
  role: "Web Developer",
  location: "Hyderabad",
  email: "sandalanithinkumar123@gmail.com",
  phone: "+91-9347314512",
  linkedin: "https://www.linkedin.com/in/nithin-kumar-sandala-399aa2279/",
  github: "https://github.com/SandalaNithin",
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    institution: "Rajeev Gandhi Memorial College of Engineering and Technology (RGMCET)",
    year: "2021 – 2025",
    grade: "CGPA: 7.0",
    location: "Nandyal, Andhra Pradesh"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    year: "2019 – 2021",
    grade: "CGPA: 7.5",
    location: "Nellore, Andhra Pradesh"
  },
  {
    degree: "Secondary School Education",
    institution: "Guthikondha Sreeramulu E.M. School",
    year: "2018 - 2019",
    grade: "CGPA: 8.5",
    location: "Buchireddypalem, Nellore, Andhra Pradesh"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Developer Trainee",
    company: "Sria Infotech Pvt. Ltd.",
    period: "December 2025 – Present",
    location: "Hyderabad, Telangana, India",
    description: [
      "Designing and developing scalable web applications using Node.js and MySQL with React and Tailwind CSS.",
      "Developing a Project Tracking system including employee task assignment, progress tracking, and project budget calculation.",
      "Implementing and managing Git/GitHub workflows for version control, code reviews, and effective team collaboration."
    ]
  },
  {
    role: "Web & Odoo Development Intern",
    company: "Sria Infotech Pvt. Ltd.",
    period: "May 2025 – November 2025",
    location: "Hyderabad, Telangana, India",
    description: [
      "Developed a fully responsive Function Hall booking website using React, Node.js, Express, MySQL, and Redux.",
      "Integrated RESTful APIs for efficient data fetching, state management, and dynamic UI updates.",
      "Implemented a complete Odoo solution for LVK Pharma by analyzing client requirements and participating in weekly meetings; the system is now live."
    ]
  }
];


export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "Python", "SQL", "Java", "DSA"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    title: "Tools",
    skills: ["VS Code", "IntelliJ", "Git/GitHub", "Figma"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Lakshmi Function Hall Website",
    githubUrl: "https://github.com/SandalaNithin/Hall",
    tech: ["React", "Tailwind", "JavaScript", "Node.js", "Express.js"],
    features: [
      "Hero slider with smooth animations and transitions",
      "Interactive booking forms with validation",
      "Responsive image galleries with lightbox",
      "Optimized loading speed and performance",
      "Mobile-first responsive design"
    ]
  },
  // {
  //   title: "Comparative Study of Supervised ML Algorithms for Heart Attack Prediction",
  //   githubUrl: "https://github.com/SandalaNithin",
  //   tech: ["Python", "PyCaret", "Machine Learning"],
  //   features: [
  //     "Comparative analysis of ML algorithms (Naïve Bayes, Random Forest, LDA)",
  //     "Achieved 82.01% accuracy in heart attack prediction",
  //     "Comprehensive data preprocessing and feature engineering",
  //     "Multiple evaluation metrics (AUC, F1, Precision, Recall)",
  //     "Validated for healthcare decision support systems"
  //   ]
  // },
  {
    title: "E-Commerce Website",
    githubUrl: "https://github.com/SandalaNithin/E-Commerce",
    tech: ["HTML", "CSS", "JS", "React"],
    features: [
      "Dynamic product grid with category filtering",
      "Shopping cart with add/remove functionality",
      "Product search and wishlist features",
      "Responsive design with clean typography",
      "Fast-loading optimized images"
    ]
  },
  {
    title: "EMI Calculator",
    githubUrl: "https://github.com/SandalaNithin/EMI-Calculator",
    tech: ["HTML", "CSS", "JS"],
    features: [
      "Accurate EMI calculation with principal and interest breakdown",
      "Clean, minimal UI with instant results",
      "Mobile-responsive design",
      "Supports multiple loan types",
      "Performance-optimized lightweight interface"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Web Development",
    issuer: "Internshala",
    link: "https://drive.google.com/file/d/1ppp5hjPRbomp5AXGWe_4U3LRc-M1UxeK/view?usp=sharing"
  },
  {
    title: "Quantum Fundamentals",
    issuer: "WISER",
    link: "/assets/quantum_fundamentals_cert.jpg"
  },
  {
    title: "C and Data Structure",
    issuer: "Great Learning",
    link: "https://drive.google.com/file/d/1gn15ahPPRcRJYZI3oBmw_nFQZ-W9ZQKU/view?usp=sharing"
  },
  {
    title: "Java Full Stack Developer",
    issuer: "Naresh IT",
    link: "https://drive.google.com/file/d/1449Lc2b1JfpzCYlxuAVlxRhbtO2BMkW7/view?usp=drive_link"
  }
];