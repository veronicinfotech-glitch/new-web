import React, { useState, useEffect, useRef } from 'react';
import Footer from "./Footer";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Megaphone, 
  Laptop, 
  Smartphone, 
  Globe, 
  Search,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Palette,
  BarChart3,
  ChevronRight,
  Star,
  Users,
  Clock,
  Award,
  CheckCircle,
  Play,
  TrendingUp,
  Cpu,
  Cloud,
  Database,
  Lock,
  Gauge,
  Layers,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Instagram
} from 'lucide-react';

import lolo1 from "../images/lolo1.png";
import app from "../images/application_development.png";
import dm from "../images/social_media.png";
import custom from "../images/Custom_Software.png";
import SEO from "../images/seo.png";
import webDev from "../images/Website_Development.png";
import mobileApp from "../images/application_development.png";

// ============================================================
// TECHNOLOGY ICONS - REAL SVG COMPONENTS WITH BRAND COLORS
// ============================================================
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  NodeJs: () => (
    <svg viewBox="0 0 24 24" fill="#5FA04E" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M11.986 0L1.139 6.262v11.476L11.986 24l10.848-6.262V6.262zm0 1.258l9.758 5.634v10.216l-9.758 5.634-9.757-5.634V6.892zm-.556 5.894v6.862l-2.091-1.229V9.585l-1.09-.641v4.453l4.272 2.508 4.264-2.508V8.944l-1.09.641v3.2c0 .647-.468 1.077-1.127 1.077-.66 0-1.137-.43-1.137-1.077V7.152z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path fill="#3776AB" d="M11.914 0C6.111 0 6.46 2.52 6.46 2.52v2.6h5.58v.768H3.77S0 5.467 0 11.385c0 5.917 3.287 5.69 3.287 5.69h1.964v-2.774s-.11-3.286 3.23-3.286h5.417s3.118-.055 3.118-3.176V3.123S17.487 0 11.914 0zM8.708 1.834a1.01 1.01 0 110 2.02 1.01 1.01 0 010-2.02z"/>
      <path fill="#FFD43B" d="M12.086 24c5.803 0 5.454-2.52 5.454-2.52v-2.6H11.96v-.768h8.27s3.77.42 3.77-5.498c0-5.917-3.287-5.69-3.287-5.69h-1.964v2.774s.11 3.286-3.23 3.286H10.09s-3.118.055-3.118 3.176v4.717S6.513 24 12.086 24zm3.206-1.834a1.01 1.01 0 110-2.02 1.01 1.01 0 010 2.02z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" fill="#3178C6" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM13.84 18.892c-.933 0-1.802-.27-2.607-.81l.738-1.226c.712.49 1.455.736 2.228.736.577 0 .871-.215.882-.644.013-.341-.186-.554-.597-.64L13.1 15.93c-1.117-.267-1.677-.859-1.679-1.776-.002-1.077.785-1.884 2.359-1.884.877 0 1.637.202 2.281.606l-.64 1.258c-.538-.337-1.144-.505-1.819-.505-.515 0-.773.193-.773.579 0 .324.234.508.703.553l1.177.348c1.233.289 1.85.88 1.85 1.773 0 1.139-.775 1.91-2.325 1.91zm-7.616-.271V13.68H3.8V12.35h6.74v1.33H8.12v4.941H6.224z"/>
    </svg>
  ),
  Aws: () => (
    <svg viewBox="0 0 24 24" fill="#FF9900" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M18.814 18.064c-1.603 1.182-3.824 1.888-6.19 1.888-4.436 0-8.214-2.528-9.988-6.241-.194-.407.288-.748.665-.487 3.328 2.316 7.425 3.398 11.666 2.664 1.547-.268 3.033-.82 4.341-1.59.458-.27.917.315.494.766-.347.369-.714.71-1.088 1zM21.162 16.634c-.266-.316-.976-.145-1.401-.043-.45.109-.902.261-1.306.467-.282.143-.377.581-.06.77.838.502 2.115 1.111 2.946 1.127.351.006.66-.363.34-.694-.176-.183-.341-.397-.519-.627zM7.346 13.91h1.564v-6.31H7.346v6.31zm3.766 0h1.564V10.22c0-1.18.664-1.748 1.643-1.748.887 0 1.472.568 1.472 1.748v3.69h1.564V9.921c0-1.89-1.129-2.825-2.617-2.825-1.077 0-1.815.464-2.186 1.157V7.6h-1.44v6.31zM5.334 11.23c0-.624.47-1.087 1.183-1.087.674 0 1.096.446 1.096 1.087v.649H5.334v-.649zm2.279 1.688v-.41H5.334v.5c0 .64.446 1.066 1.125 1.066.456 0 .806-.18 1.018-.517.07-.11.107-.235.116-.367h1.498c-.085.834-.688 1.474-1.574 1.838-.344.141-.741.218-1.183.218-1.591 0-2.63-1.066-2.63-2.646 0-1.597 1.047-2.674 2.673-2.674 1.636 0 2.652 1.076 2.652 2.682v.309H7.613z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="#2496ED" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
    </svg>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 24 24" fill="#326CE5" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M12.036 0L2.836 5.342v10.669l9.2 5.341 9.2-5.341V5.342zm-1.047 3.513h2.093l.348 2.088c-.464.129-.915.306-1.344.524l-1.488-1.488-.732.731 1.487 1.487a6.242 6.242 0 00-.524 1.345l-2.088-.348v2.093l2.088.348c.129.464.306.915.524 1.344l-1.487 1.488.732.731 1.488-1.487c.429.218.88.395 1.344.524l-.348 2.088h2.093l.348-2.088c.464-.129.915-.306 1.344-.524l1.488 1.487.731-.731-1.487-1.488c.218-.429.395-.88.524-1.344l2.088.348v-2.093l-2.088-.348a6.242 6.242 0 00-.524-1.345l1.487-1.487-.731-.732-1.488 1.488a6.242 6.242 0 00-1.344-.524l.348-2.088zM12.036 8.358a3.678 3.678 0 110 7.356 3.678 3.678 0 010-7.356z"/>
    </svg>
  ),
  MongoDb: () => (
    <svg viewBox="0 0 24 24" fill="#47A248" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M17.193 9.555c-1.164-4.832-4.562-7.558-4.562-7.558a5.275 5.275 0 00-.594 2.827c.074 4.549 3.518 5.766 3.518 8.878 0 2.684-2.122 4.103-3.626 4.103-1.492 0-3.351-1.378-3.351-4.115 0-3.136 3.568-4.329 3.633-8.866a5.276 5.276 0 00-.598-2.827s-3.4 2.726-4.563 7.558c-.961 3.992.518 7.399 2.146 9.171-.065.599-.183 1.342-.323 2.148-.288 1.666-.622 3.126-.622 3.126h.913s.345-1.488.639-3.189c.14-.816.261-1.571.328-2.181 1.637-1.77 3.125-5.184 2.164-9.175z"/>
    </svg>
  ),
  PostgreSql: () => (
    <svg viewBox="0 0 24 24" fill="#4169E1" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M17.437 6.438a6.386 6.386 0 00-2.38-1.564 6.845 6.845 0 00-3.056-.474c-2.457.25-4.636 1.83-5.594 4.054-.42.977-.552 2.062-.379 3.123.176 1.08.736 2.08 1.583 2.821 1.157 1.012 2.754 1.48 4.28 1.258a6.837 6.837 0 003.54-1.43c1.077-.878 1.79-2.13 2.016-3.535a6.35 6.35 0 00-.01-2.253zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.616 14.814c-1.84.502-3.864-.105-5.044-1.51-1.181-1.405-1.393-3.473-.526-5.105.866-1.631 2.653-2.617 4.512-2.49 1.86.126 3.494 1.341 4.093 3.111.6 1.769.043 3.791-1.397 4.975-1.44 1.183-3.486 1.521-5.26 1.019H13.616z"/>
    </svg>
  ),
  GraphQL: () => (
    <svg viewBox="0 0 24 24" fill="#E10098" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M21.326 10.428L13.578 2.68c-.87-.87-2.286-.87-3.156 0L2.674 10.428c-.87.87-.87 2.286 0 3.156l7.748 7.748c.87.87 2.286.87 3.156 0l7.748-7.748c.87-.87.87-2.286 0-3.156zM12 17.657a5.657 5.657 0 110-11.314 5.657 5.657 0 010 11.314zm0-9.143a3.486 3.486 0 100 6.972 3.486 3.486 0 000-6.972z"/>
    </svg>
  ),
  TensorFlow: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path fill="#FF6F00" d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.153 3.553v-5.3z"/>
      <path fill="#FFA800" d="M22.708 5.856L12.46 0v24l4.095-2.378V7.603l6.153 3.553v-5.3z"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path fill="#F24E1E" d="M8.5 2h3.5v7H8.5A3.5 3.5 0 018.5 2z"/>
      <path fill="#FF7262" d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"/>
      <path fill="#A259FF" d="M8.5 9h3.5v7H8.5a3.5 3.5 0 110-7z"/>
      <path fill="#1ABCFE" d="M12 9h3.5a3.5 3.5 0 110 7H12V9z"/>
      <path fill="#0ACF83" d="M8.5 16A3.5 3.5 0 1112 19.5V16H8.5z"/>
    </svg>
  ),
  NextJs: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-slate-800">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.062-6.52L7.382 8h1.698l1.71 5.485L12.502 8h1.698l-3.324 7.48H9.938zm5.727-4.34c.484.093.88.337 1.189.731.309.395.463.896.463 1.503 0 .607-.154 1.108-.463 1.503-.309.394-.705.638-1.189.731v-.47c.36-.086.643-.284.85-.595.206-.31.309-.705.309-1.185 0-.48-.103-.875-.309-1.185-.207-.31-.49-.508-.85-.595v-.438z"/>
    </svg>
  ),
  TailwindCss: () => (
    <svg viewBox="0 0 24 24" fill="#38B2AC" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" fill="#DC382D" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M23.36 9.47L12 3.65 0.64 9.47l11.36 5.82 11.36-5.82zM12 17.51l-9.1-4.66v4.66L12 22.18l9.1-4.67v-4.66L12 17.51z"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" fill="#F05032" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.72.721.72 1.885 0 2.604-.719.719-1.882.719-2.601 0-.719-.719-.719-1.883 0-2.604.186-.186.402-.321.636-.402V8.62c-.234-.08-.45-.216-.636-.402-.546-.546-.678-1.354-.396-2.018L7.6 3.44.456 10.59a1.55 1.55 0 000 2.188l10.48 10.768c.604.604 1.582.604 2.188 0l10.422-10.424c.604-.604.604-1.584 0-2.192z"/>
    </svg>
  )
};

// Technology data with real icons
const technologies = [
  { name: "React", icon: TechIcons.React, category: "Frontend", color: "#61DAFB", desc: "Ui Library" },
  { name: "Next.js", icon: TechIcons.NextJs, category: "Frontend", color: "#000000", desc: "React Framework" },
  { name: "Tailwind CSS", icon: TechIcons.TailwindCss, category: "Frontend", color: "#38B2AC", desc: "Utility CSS" },
  { name: "TypeScript", icon: TechIcons.TypeScript, category: "Frontend", color: "#3178C6", desc: "Typed JavaScript" },
  { name: "Node.js", icon: TechIcons.NodeJs, category: "Backend", color: "#5FA04E", desc: "Runtime Env" },
  { name: "Python", icon: TechIcons.Python, category: "Backend", color: "#3776AB", desc: "AI & Backend" },
  { name: "GraphQL", icon: TechIcons.GraphQL, category: "Backend", color: "#E10098", desc: "Query Language" },
  { name: "Redis", icon: TechIcons.Redis, category: "Backend", color: "#DC382D", desc: "In-Memory Cache" },
  { name: "AWS", icon: TechIcons.Aws, category: "Cloud & DevOps", color: "#FF9900", desc: "Cloud Infrastructure" },
  { name: "Docker", icon: TechIcons.Docker, category: "Cloud & DevOps", color: "#2496ED", desc: "Containerization" },
  { name: "Kubernetes", icon: TechIcons.Kubernetes, category: "Cloud & DevOps", color: "#326CE5", desc: "Orchestration" },
  { name: "Git", icon: TechIcons.Git, category: "Cloud & DevOps", color: "#F05032", desc: "Version Control" },
  { name: "MongoDB", icon: TechIcons.MongoDb, category: "Database & AI", color: "#47A248", desc: "NoSQL Database" },
  { name: "PostgreSQL", icon: TechIcons.PostgreSql, category: "Database & AI", color: "#4169E1", desc: "Relational SQL" },
  { name: "TensorFlow", icon: TechIcons.TensorFlow, category: "Database & AI", color: "#FF6F00", desc: "Machine Learning" },
  { name: "Figma", icon: TechIcons.Figma, category: "Design", color: "#F24E1E", desc: "Collaborative UI" }
];

const ServicesPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  const [activeCategory, setActiveCategory] = useState("Development");
  
  // Refs
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);

  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const fadeUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const fadeLeft = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const fadeRight = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const scaleIn = {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'overview', ref: overviewRef },
        { id: 'process', ref: processRef },
        { id: 'tech', ref: techRef },
        { id: 'cta', ref: ctaRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      id: 1,
      title: "Development",
      icon: Code2,
      color: "from-[#1E2A39] to-[#3A4A5F]",
      services: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Integration"
      ]
    },
    {
      id: 2,
      title: "Marketing",
      icon: Megaphone,
      color: "from-[#1E2A39] to-[#3A4A5F]",
      services: [
        "Digital Strategy",
        "SEO Optimization",
        "Content Marketing",
        "Social Media"
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-[#1E2A39] to-[#3A4A5F]",
      services: [
        "Serverless Architectures",
        "Multi-Cloud Strategies",
        "Zero-Downtime Deployments",
        "Edge Computing Solutions"
      ]
    },
    {
      id: 4,
      title: "Data & AI",
      icon: Database,
      color: "from-[#1E2A39] to-[#3A4A5F]",
      services: [
        "Generative AI Integrations",
        "Neural Network Training",
        "Big Data Lakes",
        "Real-time Analytics Engine"
      ]
    }
  ];

  const mainServices = [
    {
      id: 1,
      title: "Application Development",
      shortDesc: "Custom software solutions that scale",
      description: "Build powerful, scalable applications that drive business growth. We create custom solutions with cutting-edge technology and intuitive user experiences that your customers will love.",
      icon: Code2,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "API development",
        "Third-party integrations",
        "Performance optimization",
        "Security implementation"
      ],
      stats: [
        { value: "50+", label: "Apps Delivered", icon: Award },
        { value: "99.9%", label: "Uptime", icon: Shield },
        { value: "4.8/5", label: "Client Rating", icon: Star }
      ],
      image: app,
      position: "left"
    },
    {
      id: 2,
      title: "Digital Marketing",
      shortDesc: "Data-driven strategies that deliver results",
      description: "Data-driven marketing strategies that connect your brand with the right audience. We combine creativity with analytics to maximize your ROI and build lasting customer relationships.",
      icon: Megaphone,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "SEO optimization",
        "Content strategy",
        "Social media management",
        "Email marketing",
        "PPC campaigns",
        "Analytics & reporting"
      ],
      stats: [
        { value: "200+", label: "Campaigns", icon: TrendingUp },
        { value: "3x", label: "ROI Average", icon: BarChart3 },
        { value: "50+", label: "Clients", icon: Users }
      ],
      image: dm,
      position: "right"
    },
    {
      id: 3,
      title: "Custom Software",
      shortDesc: "Tailored solutions for unique needs",
      description: "Tailored software solutions designed for your unique business needs. We build robust, secure, and scalable systems that streamline operations and drive efficiency.",
      icon: Laptop,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "Enterprise software",
        "CRM systems",
        "ERP solutions",
        "Automation tools",
        "Legacy modernization",
        "System integration"
      ],
      stats: [
        { value: "100%", label: "Custom Code", icon: Code2 },
        { value: "24/7", label: "Support", icon: Clock },
        { value: "99.9%", label: "Satisfaction", icon: Star }
      ],
      image: custom,
      position: "left"
    },
    {
      id: 4,
      title: "Mobile Apps",
      shortDesc: "Native & cross-platform excellence",
      description: "Native and cross-platform mobile applications that engage users and deliver exceptional performance across all devices and platforms, from iOS to Android.",
      icon: Smartphone,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "iOS development",
        "Android development",
        "React Native",
        "Flutter",
        "App Store optimization",
        "Push notifications"
      ],
      stats: [
        { value: "5M+", label: "Downloads", icon: Users },
        { value: "4.9", label: "App Store Rating", icon: Star },
        { value: "50+", label: "Apps", icon: Award }
      ],
      image: mobileApp,
      position: "right"
    },
    {
      id: 5,
      title: "Website Development",
      shortDesc: "Stunning, high-performance websites",
      description: "Stunning, high-performance websites that tell your story and convert visitors into customers. Modern design meets technical excellence for the perfect online presence.",
      icon: Globe,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "Responsive design",
        "E-commerce solutions",
        "CMS development",
        "Progressive web apps",
        "SEO optimization",
        "Performance tuning"
      ],
      stats: [
        { value: "500+", label: "Websites", icon: Globe },
        { value: "100%", label: "Responsive", icon: CheckCircle },
        { value: "0.1s", label: "Load Time", icon: Zap }
      ],
      image: webDev,
      position: "left"
    },
    {
      id: 6,
      title: "SEO & Analytics",
      shortDesc: "Dominate search rankings",
      description: "Comprehensive SEO strategies that boost your visibility and drive organic traffic. We help you rank higher, attract more visitors, and convert them into loyal customers.",
      icon: Search,
      gradient: "from-[#1E2A39] to-[#3A4A5F]",
      lightGradient: "from-[#1E2A39]/10 to-[#3A4A5F]/10",
      accent: "#1E2A39",
      features: [
        "Keyword research",
        "On-page SEO",
        "Technical SEO",
        "Link building",
        "Local SEO",
        "Analytics & reporting"
      ],
      stats: [
        { value: "#1", label: "Rankings", icon: Award },
        { value: "300%", label: "Traffic Growth", icon: TrendingUp },
        { value: "100+", label: "Keywords", icon: Search }
      ],
      image: SEO,
      position: "right"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and project requirements to create a solid foundation.",
      icon: Users
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our experts craft a comprehensive strategy tailored to your specific needs and market opportunities.",
      icon: Layers
    },
    {
      step: "03",
      title: "Design",
      description: "We create beautiful, intuitive designs that engage users and reflect your brand identity.",
      icon: Palette
    },
    {
      step: "04",
      title: "Development",
      description: "Our engineers bring your vision to life using cutting-edge technologies and best practices.",
      icon: Code2
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.",
      icon: Shield
    },
    {
      step: "06",
      title: "Launch & Scale",
      description: "We deploy your solution and provide ongoing support to help you grow and succeed.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-hidden">
      {/* Simple Background */}
      <div className="fixed inset-0 bg-[#F5F8FA] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.06),transparent_70%)]" />
      </div>

      {/* Navigation - PERFECT hide on scroll down, show on scroll up - NO STICKY */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section - Simple Clean Layout with Unique Emerald & Teal Color Theme */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#0B0F14] text-white">
        {/* Unique Ambient Color Glows for Services Page */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[140px]" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[140px]" 
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 mb-6 shadow-lg shadow-emerald-500/10"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-emerald-300 font-bold">Comprehensive Capabilities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-space mb-6 hover:opacity-90 transition-opacity duration-300 select-none"
          >
            <span className="text-white font-space">Digital</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent block sm:inline sm:ml-4 font-space font-bold">Excellence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-jakarta text-[#9DB4C6] max-w-3xl mx-auto mb-10 px-4 leading-relaxed"
          >
            We deliver cutting-edge solutions that transform businesses and drive growth through innovation and technical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center px-4"
          >
            <button
              onClick={() => scrollToSection(overviewRef)}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white rounded-full font-bold font-jakarta text-base hover:opacity-95 transition-all shadow-xl shadow-emerald-500/25 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection(processRef)}
              className="px-8 py-4 rounded-full border border-emerald-500/30 bg-white/5 text-white font-bold font-jakarta text-base hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all hover:scale-105"
            >
              How We Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Digital Capabilities - Unique Bento Grid */}
      <section ref={overviewRef} id="overview" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F5F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase">Core Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#1E2A39] font-space tracking-tight">
              Driving Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Transformation</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#0B0F14]/60 max-w-2xl mx-auto font-medium">
              We leverage cutting-edge technology and innovative design to build powerful solutions that scale your business into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Glass Card 1 */}
            <div className="group relative bg-[#1E2A39]/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/60 transition-all duration-500 flex flex-col justify-between h-[450px] shadow-[0_8px_32px_rgba(16,185,129,0.05)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-all duration-500 group-hover:bg-emerald-500/20" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white font-space mb-4 tracking-wide group-hover:text-emerald-400 transition-colors">Quantum-Ready Architectures</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  We engineer ultra-scalable, zero-latency ecosystems built on serverless architectures, ensuring your digital infrastructure outpaces tomorrow's demands.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['Micro-Frontends', 'Edge Computing'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glass Card 2 */}
            <div className="group relative bg-[#1E2A39]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 flex flex-col justify-between h-[450px] shadow-[0_8px_32px_rgba(59,130,246,0.05)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.15)] overflow-hidden md:-translate-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-all duration-500 group-hover:bg-blue-500/20" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white font-space mb-4 tracking-wide group-hover:text-blue-400 transition-colors">Generative AI Ecosystems</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Autonomous agents and predictive intelligence models that hyper-personalize user experiences and eliminate operational friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['Predictive Models', 'Autonomous Agents'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glass Card 3 */}
            <div className="group relative bg-[#1E2A39]/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 flex flex-col justify-between h-[450px] shadow-[0_8px_32px_rgba(168,85,247,0.05)] hover:shadow-[0_12px_48px_rgba(168,85,247,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-all duration-500 group-hover:bg-purple-500/20" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white font-space mb-4 tracking-wide group-hover:text-purple-400 transition-colors">Immersive Experiences</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Next-generation spatial computing and WebGL interfaces that captivate audiences and redefine brand interaction paradigms.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['Spatial Computing', 'WebGL Graphics'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Horizontal Feature Card */}
            <div className="md:col-span-3 bg-gradient-to-r from-[#1E2A39] to-[#3A4A5F] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex items-center shadow-2xl border border-white/10 mt-4">
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-space mb-3">Ready to transform your business?</h3>
                  <p className="text-white/70 text-lg max-w-2xl">
                    Partner with Veronic to build modern digital solutions that completely outpace the competition.
                  </p>
                </div>
                <Link to="/book-demo" className="px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#0055FF] text-[#0B0F14] font-bold rounded-full shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:scale-105 transition-transform whitespace-nowrap text-lg">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - White Cards */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#F5F8FA]">
        {mainServices.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 border-b border-[#9DB4C6]/10 last:border-0"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.lightGradient} pointer-events-none`} />
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  service.position === 'right' ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: service.position === 'left' ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 sm:space-y-5 lg:space-y-8"
                  >
                    <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1E2A39]/5 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} p-3 sm:p-3.5 lg:p-4 flex-shrink-0 flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B0F14] font-space transition-colors duration-300 group-hover:text-emerald-600">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg lg:text-xl text-[#1E2A39] font-medium">
                      {service.shortDesc}
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-[#0B0F14]/70 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 py-2 sm:py-3 lg:py-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E2A39] flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-[#0B0F14]/60">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6 py-2 sm:py-3 lg:py-4">
                      {service.stats.map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                            <StatIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
                            <div>
                              <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#0B0F14]">{stat.value}</div>
                              <div className="text-xs text-[#0B0F14]/40">{stat.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mt-6 lg:mt-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl blur-3xl opacity-20`} />
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#9DB4C6]/20 shadow-xl bg-white">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Process Section - White Cards */}
      <section ref={processRef} id="process" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F5F8FA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Our
              <span className="text-[#1E2A39] ml-2 sm:ml-3">Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0B0F14]/60 max-w-3xl mx-auto px-4">
              A proven methodology that ensures successful delivery every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#9DB4C6]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E2A39]/5 mb-3 sm:mb-4 text-center">{step.step}</div>
                  
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E2A39] to-[#3A4A5F] p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center text-[#0B0F14] font-space transition-colors duration-300 group-hover:text-emerald-600">{step.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#0B0F14]/60 text-center leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section - Real Official Logos & Interactive Grid */}
      <section ref={techRef} id="tech" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#0B0F14] text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-[#1E2A39]/30 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 right-1/3 w-[600px] h-[600px] bg-[#3A4A5F]/20 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/60 border border-[#9DB4C6]/30 backdrop-blur-md mb-4 shadow-lg">
              <Cpu className="w-4 h-4 text-[#9DB4C6] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F5F8FA] uppercase">Official Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Technologies We
              <span className="bg-gradient-to-r from-[#9DB4C6] via-cyan-300 to-[#61DAFB] bg-clip-text text-transparent ml-2 sm:ml-3 font-space">Master</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9DB4C6]/80 max-w-3xl mx-auto px-4 leading-relaxed">
              We build with industry-standard, official enterprise technologies verified for maximum speed, security, and scalability.
            </p>
          </motion.div>

          {/* Interactive Cards Grid with Real Official Logos */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {technologies
                .map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      key={tech.name}
                      whileTap={{ scale: 0.98 }}
                      className="group relative p-6 sm:p-8 rounded-3xl bg-[#1E2A39]/50 backdrop-blur-xl border border-white/10 transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden"
                    >
                      {/* Top Brand Color Accent Bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:h-2"
                        style={{ backgroundColor: tech.color, boxShadow: `0 0 16px ${tech.color}` }}
                      />

                      {/* Official Logo Container */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0B0F14]/80 border border-white/10 flex items-center justify-center mb-4 p-3.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner group-hover:border-white/30">
                        <IconComponent />
                      </div>

                      <div className="w-full">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 text-white group-hover:text-cyan-300 transition-colors font-cinzel">
                          {tech.name}
                        </h3>
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-[#9DB4C6] font-mono uppercase tracking-wider mb-2">
                          {tech.category}
                        </div>
                        <p className="text-xs text-[#9DB4C6]/70 leading-relaxed">
                          {tech.desc}
                        </p>
                      </div>

                      {/* Glowing Hover Orb */}
                      <div
                        className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: tech.color }}
                      />
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A39] via-[#2A3A4F] to-[#0B0F14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8 mx-auto">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white">Start Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 lg:mb-6 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Ready to Transform Your
              <span className="block text-[#9DB4C6] mt-2 font-space font-semibold">
                Digital Presence?
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-2">
              Let's discuss how we can help you achieve your goals with our expertise and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link to="/packages">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="group px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-[#F5F8FA] text-[#1E2A39] rounded-full font-semibold text-xs sm:text-sm lg:text-base shadow-2xl transition-shadow flex items-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    Packages
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-xs sm:text-sm lg:text-base transition-colors"
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer - Black Background */}
      <Footer />
      <div style={{ display: 'none' }}><footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center justify-center">
                  <img src={lolo1} alt="logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-contain" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">
                  veronic
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Building the future through innovative technology solutions.
              </p>
              <div className="flex gap-2 sm:gap-3 pt-2">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq', label: 'Instagram' },
                  { icon: Github, href: 'https://github.com/veronicinfotech-glitch', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:veronic.infotech@gmail.com', label: 'Email' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Services</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {['Web Development', 'Mobile Apps', 'Custom Software', 'Digital Marketing', 'SEO'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <Link to="/" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/packages" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Packages</Link>
                </li>
                <li>
                  <Link to="/products" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Products</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors break-all">
                    veronic.infotech@gmail.com
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                    +91 95106 53051
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors leading-relaxed">
                    Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot, Gujarat 360005
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for the future
            </p>
          </div>
        </div>
      </footer></div>
    </div>
  );
};

export default ServicesPage;