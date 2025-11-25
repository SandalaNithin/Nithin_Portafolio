import { Project, Certification, Education, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Sandala Nithin Kumar",
  role: "Web Developer",
  location: "Hyderabad",
  email: "sandalanithinkumar123@gmail.com",
  phone: "+91-9347314512",
  linkedin: "https://linkedin.com/in/sandalanithin",
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
    year: "2019",
    grade: "CGPA: 8.5",
    location: "Buchireddypalem, Andhra Pradesh"
  }
];

export const EXPERIENCE: Experience = {
  role: "Web Development Intern",
  company: "Sria Infotech Pvt. Ltd",
  period: "April 2025 – Present",
  location: "Hyderabad",
  description: [
    "Developing responsive applications using HTML, CSS, JavaScript, and React",
    "Collaborating with backend & UI/UX teams",
    "Debugging, testing, and optimizing modules",
    "Using Git for version control",
    "Hands-on frontend development & real-time project work"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "Python", "SQL", "DSA"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    title: "Tools",
    skills: ["VS Code", "IntelliJ", "Canva", "Git/GitHub", "GDB"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Lakshmi Function Hall Website",
    githubUrl: "https://github.com/SandalaNithin/lakshmi_FH",
    tech: ["React", "Tailwind"],
    features: [
      "Hero slider animations",
      "OTP login screen",
      "Image galleries",
      "Smooth UI animations",
      "Real-time project simulation"
    ]
  },
  {
    title: "Comparative Study of Supervised ML Algorithms for Heart Attack Prediction",
    githubUrl: "https://github.com/SandalaNithin",
    tech: ["Python", "PyCaret", "Machine Learning"],
    features: [
      "Comparative evaluation of multiple supervised ML algorithms",
      "Models studied: Naïve Bayes, Random Forest, Ridge Classifier, LDA",
      "Achieved highest accuracy of 82.01%",
      "Includes preprocessing: data cleaning, normalization, feature selection",
      "Evaluation metrics: AUC, F1-score, Precision, Recall",
      "Validated results for real-time healthcare decision support"
    ]
  },
  {
    title: "E-Commerce Website",
    githubUrl: "https://github.com/SandalaNithin/E-Commerce",
    tech: ["HTML", "CSS", "JS", "React"],
    features: [
      "Product grid",
      "Add-to-cart simulation",
      "Smooth navigation",
      "Responsive layout"
    ]
  },
  {
    title: "EMI Calculator",
    githubUrl: "https://github.com/SandalaNithin/EMI-Calculator",
    tech: ["HTML", "CSS", "JS"],
    features: [
      "Loan EMI calculation",
      "Minimal clean UI",
      "Mobile responsive design"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Java Full Stack Developer",
    link: "https://drive.google.com/file/d/1449Lc2b1JfpzCYlxuAVlxRhbtO2BMkW7/view?usp=drive_link"
  },
  {
    title: "C and Data Structure",
    link: "https://drive.google.com/file/d/1gn15ahPPRcRJYZI3oBmw_nFQZ-W9ZQKU/view?usp=sharing"
  },
  {
    title: "Backend Development",
    link: "https://drive.google.com/file/d/1GzG4aLxQJhQLDm0AOP9kToebvaMeFxzm/view?usp=sharing"
  },
  {
    title: "Web Development",
    link: "https://drive.google.com/file/d/1ppp5hjPRbomp5AXGWe_4U3LRc-M1UxeK/view?usp=sharing"
  }
];