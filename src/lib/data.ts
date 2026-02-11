import {
  CodeXml,
  AppWindow,
  Server,
  Database,
  Cog,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Award,
  BookMarked,
  Briefcase,
  Trophy,
  User,
} from 'lucide-react';

export const personalInfo = {
  name: "Aravinth Kumar B",
  title: "Full-Stack Web Developer | MERN Stack Developer",
  introduction: "I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering and specialize in building secure, scalable, and user-friendly web applications using the MERN stack. I have completed an internship focused on CAPTCHA-based authentication systems and backend security, gaining hands-on experience in RESTful APIs and modern web development.",
  email: "aravinthbalu15@gmail.com",
  phone: "+91 8248588520",
  linkedin: "https://linkedin.com/in/aravinth-kumar-858851281",
  github: "https://github.com/aravinthbalu15",
  resume: "https://drive.google.com/file/d/1pvIy2S-NgxSGkeNCxMhDMD6zZGpjWb-7/view?usp=drivesdk",
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export const skills = [
  {
    category: 'Programming Languages',
    icon: CodeXml,
    list: ['Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: AppWindow,
    list: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Tailwind CSS', 'Boostrap'],
  },
  {
    category: 'Backend',
    icon: Server,
    list: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Database',
    icon: Database,
    list: ['MongoDB'],
  },
  {
    category: 'Tools',
    icon: Cog,
    list: ['Git', 'GitHub', 'Postman', 'VS Code', 'Netlify', 'Render'],
  },
];

export const experience = [
  {
    icon: Briefcase,
    title: 'TCS iON Internship – CAPTCHA Authentication System',
    description: 'Developed full-stack features using HTML, CSS, JavaScript, and Node.js, implemented secure backend logic, and worked with RESTful APIs and Git-based collaboration.',
  },
];

export const projects = [
  {
    title: 'Church Website – Full-Stack Platform',
    description: 'Developed a responsive church website with event scheduling, dynamic media gallery, and secure admin dashboard.',
    techStack: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    liveLink: 'https://www.stjosephskamplar.org',
    github: 'https://github.com/aravinthbalu15/stsojephchurch',
    imageUrl: "https://images.unsplash.com/photo-1599797288294-8422d1797b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3ZWJzaXRlfGVufDB8fHx8MTc3MDc5NDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "church website"
  },
  {
    title: 'PR Power Infrastructure Website',
    description: 'Designed a responsive company portfolio website with reusable components and smooth navigation.',
    techStack: ['React.js', 'Tailwind CSS'],
    liveLink: 'https://www.prpowerinfra.com',
    github: 'https://github.com/aravinthbalu15/pr-power',
    imageUrl: "https://images.unsplash.com/photo-1651573088727-ac143de7d0ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21wYW55JTIwcG9ydGZvbGlvfGVufDB8fHx8MTc3MDc5NDUxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "company portfolio"
  },
];

export const education = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Engineering – Computer Science and Engineering',
    institution: 'Panimalar Engineering College',
    years: '2022 – 2026',
    score: 'CGPA: 7.7',
  },
  {
    icon: GraduationCap,
    degree: 'HSC (12th Standard)',
    institution: 'Government Higher Secondary School, Kambur',
    years: '2020 – 2022',
    score: 'Percentage: 79.1%',
  }
];

export const achievements = [
  {
    icon: Award,
    title: 'TCS iON National Qualifier Test (NQT) – 72%',
    description: '',
  }
];

export const hackathons = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon 2023',
    description: 'Developed a project for the Ministry of Education. Our team was a finalist in this national level hackathon.',
    date: 'December 2023',
  },
];

export const certifications = [
  {
    icon: BookMarked,
    title: 'NPTEL – Programming in Java',
  },
  {
    icon: BookMarked,
    title: 'Infosys Springboard – Full Stack React',
  },
  {
    icon: BookMarked,
    title: 'NPTEL – Data Structures and Algorithms using Java',
  },
];

export const contact = {
  email: {
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
  phone: {
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
  },
  linkedin: {
    value: 'LinkedIn',
    icon: Linkedin,
    href: personalInfo.linkedin,
  },
  github: {
    value: 'GitHub',
    icon: Github,
    href: personalInfo.github,
  },
};

export const footer = {
  tagline: "Building scalable and secure full-stack web applications using modern technologies.",
  copyright: `© 2026 Aravinth Kumar B. All rights reserved.`,
};
