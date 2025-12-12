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

export const EXPERIENCE: Experience = {
  role: "Web Development Intern",
  company: "Sria Infotech Pvt. Ltd",
  period: "April 2025 – Present",
  location: "Hyderabad",
  description: [
    "Improved UI responsiveness by 40% through component optimization and code refactoring",
    "Reduced page load time by 30% by implementing lazy loading and image optimization techniques",
    "Collaborated with UI/UX and backend teams to deliver 5+ production-ready features",
    "Debugged and resolved 50+ critical bugs, improving overall application stability",
    "Implemented Git-based version control workflows, reducing merge conflicts by 60%"
  ]
};

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
    githubUrl: "https://github.com/SandalaNithin/lakshmi_FH",
    tech: ["React", "Tailwind", "JavaScript", "Node.js", "Express.js"],
    features: [
      "Hero slider with smooth animations and transitions",
      "Interactive booking forms with validation",
      "Responsive image galleries with lightbox",
      "Optimized loading speed and performance",
      "Mobile-first responsive design"
    ]
  },
  {
    title: "Comparative Study of Supervised ML Algorithms for Heart Attack Prediction",
    githubUrl: "https://github.com/SandalaNithin",
    tech: ["Python", "PyCaret", "Machine Learning"],
    features: [
      "Comparative analysis of ML algorithms (Naïve Bayes, Random Forest, LDA)",
      "Achieved 82.01% accuracy in heart attack prediction",
      "Comprehensive data preprocessing and feature engineering",
      "Multiple evaluation metrics (AUC, F1, Precision, Recall)",
      "Validated for healthcare decision support systems"
    ]
  },
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
    title: "Backend Development",
    issuer: "Internshala",
    link: "https://drive.google.com/file/d/1GzG4aLxQJhQLDm0AOP9kToebvaMeFxzm/view?usp=sharing"
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