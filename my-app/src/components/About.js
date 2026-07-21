import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Heart,
  BookOpen,
  Lock,
  Star,
  ChevronRight,
  CheckCircle,
  Layers,
  Rocket,
  Clock,
  Award,
  TrendingUp,
  Cpu,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Play,
  Code2,
  Briefcase,
  Calendar,
  Globe,
  Zap,
  Shield,
  Award as AwardIcon,
  Download,
  Instagram,
  MessageCircle,
  User,
  Crown,
  ExternalLink,
  Building2,
  Lightbulb,
  Mountain,
  Compass,
  BarChart3,
  Activity,
  Terminal,
  ShieldCheck,
  Wifi
} from "lucide-react";

import lolo1 from "../images/lolo1.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import sujalImg from "../images/sujal.png";
import harshilImg from "../images/HARSHIL_DANIDHARIYA.png";
import vijayImg from "../images/vijay.png";
import vivekImg from "../images/Vivek_khokhar.png";
import divyeshImg from "../images/Divyesh_Ahir.png";
import chiragImg from "../images/Chirag_Vasani.png";
import vanshImg from "../images/Vansh_Gohel.png";

const About = () => {
  const location = useLocation();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Innovating for a Sustainable Future";
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(null);

  // Refs for sections
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Harshil Danidhariya",
      role: "Founder & CEO",
      description: "Visionary technology executive directing strategic enterprise digital evolution, autonomous cloud infrastructure architectures, and global AI-driven business scaling.",
      image: harshilImg,
      linkedin: "https://www.linkedin.com/in/harshil-danidhariya-a21a3a32a/",
      whatsapp: "https://wa.me/916352790142",
      email: "danidhariyaharshil1111@gmail.com",
      isCEO: true,
      color: "#00F2FE",
      glow: "hover:shadow-cyan-500/40 hover:border-cyan-400",
      experience: "3+ Years"
    },
    {
      id: 2,
      name: "Chirag Vasani",
      role: "Senior Software & ERP Developer",
      description: "Spearheading high-performance custom ERP architectures, AI-driven automation pipelines, complex database topologies, and full-stack enterprise solutions.",
      image: chiragImg,
      linkedin: "https://www.linkedin.com/in/chiragvasani/",
      whatsapp: "https://wa.me/919510653051",
      email: "vasanichirag6665@gmail.com",
      isCEO: false,
      color: "#8B5CF6",
      glow: "hover:shadow-purple-500/40 hover:border-purple-400",
      experience: "2+ Years"
    },
    {
      id: 3,
      name: "Vijay Odedra",
      role: "Lead Web Engineer & Full-Stack Architect",
      description: "Architecting ultra-responsive web interfaces, high-concurrency API integrations, sub-second performance optimizations, and progressive web ecosystems.",
      image: vijayImg,
      linkedin: "https://www.linkedin.com/in/odedra-vijay-10b3872b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      whatsapp: "https://wa.me/919510075279",
      email: "odedrevijay2006@gmail.com",
      isCEO: false,
      color: "#10B981",
      glow: "hover:shadow-emerald-500/40 hover:border-emerald-400",
      experience: "2+ Years"
    },
    {
      id: 4,
      name: "Vansh Gohel",
      role: "DevOps Engineer & Cloud Lead",
      description: "Engineering zero-downtime multi-cloud deployments, containerized Kubernetes & Docker clusters, continuous CI/CD pipelines, and high-velocity server infrastructure.",
      image: vanshImg,
      linkedin: "https://www.linkedin.com/in/vansh-gohel-b637b231b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      whatsapp: "https://wa.me/919173708805",
      email: "vansh.gohel.in@gmail.com",
      isCEO: false,
      color: "#F97316",
      glow: "hover:shadow-orange-500/40 hover:border-orange-400",
      experience: "2+ Years"
    },
    {
      id: 5,
      name: "Vivek Khokhar",
      role: "Chief Marketing & Growth Strategy Head",
      description: "Directing global brand positioning, high-conversion performance marketing campaigns, data-driven SEO dominance, and viral social media growth strategies.",
      image: vivekImg,
      linkedin: "https://www.linkedin.com/in/vivek-khokhar-273191354",
      whatsapp: "https://wa.me/919510469165",
      email: "vivek@veronic.com",
      isCEO: false,
      color: "#EC4899",
      glow: "hover:shadow-pink-500/40 hover:border-pink-400",
      experience: "2+ Years"
    },
    {
      id: 6,
      name: "Sujal Rathod",
      role: "Lead UI/UX Designer & Brand Specialist",
      description: "Crafting mesmerizing human-centric user experiences, intuitive interface prototypes in Figma, deep user research, and cohesive digital brand identities.",
      image: sujalImg,
      linkedin: "https://www.linkedin.com/in/sujal-rathod-6b5773370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      whatsapp: "https://wa.me/918980230117",
      email: "sujalsinh033@gmail.com",
      isCEO: false,
      color: "#3B82F6",
      glow: "hover:shadow-blue-500/40 hover:border-blue-400",
      experience: "2+ Years"
    },
    {
      id: 8,
      name: "Divyesh Bandhiya",
      role: "Creative Director & Client Communication Executive",
      description: "Orchestrating high-impact visual storytelling, cinematic video production, dynamic brand motion graphics, and seamless client communication protocols across enterprise accounts.",
      image: divyeshImg,
      linkedin: "https://www.linkedin.com/in/divyesh-bandhiya-179b16311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      whatsapp: "https://wa.me/918758752687",
      email: "divyeshbandhiya01@gmail.com",
      isCEO: false,
      color: "#F59E0B",
      glow: "hover:shadow-amber-500/40 hover:border-amber-400",
      experience: "2+ Years"
    }
  ];

  // Company values data with unique color & glow schemes
  const companyValues = [
    {
      id: 1,
      title: "Innovation First",
      description: "We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: Lightbulb,
      accentColor: "#00F2FE",
      borderHover: "hover:border-cyan-400",
      bgGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
      badgeText: "01 // PIONEER",
      tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40"
    },
    {
      id: 2,
      title: "Sustainable Development",
      description: "Building solutions that not only scale but also minimize environmental impact through efficient architecture.",
      icon: Mountain,
      accentColor: "#10B981",
      borderHover: "hover:border-emerald-400",
      bgGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
      badgeText: "02 // ECO-SCALE",
      tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
    },
    {
      id: 3,
      title: "Collaborative Excellence",
      description: "Great things happen when brilliant minds work together. We foster a culture of knowledge sharing and teamwork.",
      icon: Users,
      accentColor: "#8B5CF6",
      borderHover: "hover:border-purple-400",
      bgGradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
      badgeText: "03 // SYNERGY",
      tagColor: "bg-purple-500/20 text-purple-300 border-purple-400/40"
    },
    {
      id: 4,
      title: "Client Success Focus",
      description: "Your success is our success. We're committed to delivering measurable results that drive your business forward.",
      icon: Target,
      accentColor: "#F97316",
      borderHover: "hover:border-orange-400",
      bgGradient: "from-orange-500/20 via-amber-600/10 to-transparent",
      badgeText: "04 // IMPACT",
      tagColor: "bg-orange-500/20 text-orange-300 border-orange-400/40"
    },
    {
      id: 5,
      title: "Continuous Learning",
      description: "The tech landscape evolves daily. We invest in continuous learning to stay ahead of the curve.",
      icon: BookOpen,
      accentColor: "#EC4899",
      borderHover: "hover:border-pink-400",
      bgGradient: "from-pink-500/20 via-rose-600/10 to-transparent",
      badgeText: "05 // EVOLUTION",
      tagColor: "bg-pink-500/20 text-pink-300 border-pink-400/40"
    },
    {
      id: 6,
      title: "Transparency & Trust",
      description: "Building lasting relationships through open communication, honest feedback, and reliable delivery.",
      icon: Shield,
      accentColor: "#3B82F6",
      borderHover: "hover:border-blue-400",
      bgGradient: "from-blue-500/20 via-cyan-600/10 to-transparent",
      badgeText: "06 // INTEGRITY",
      tagColor: "bg-blue-500/20 text-blue-300 border-blue-400/40"
    }
  ];

  // Strategic Innovation Pillars Data
  const strategicPillars = [
    {
      title: "Cloud-Native Architecture",
      subtitle: "High-Velocity Infrastructure",
      description: "Autonomous multi-cloud topologies designed for zero-downtime scaling, instant disaster recovery, and sub-10ms global delivery.",
      icon: Cloud,
      color: "#00F2FE",
      borderColor: "hover:border-cyan-400/60",
      shadowColor: "hover:shadow-cyan-500/20",
      badge: "CLOUD PLATFORM"
    },
    {
      title: "AI & Neural Processing",
      subtitle: "Autonomous Decision Systems",
      description: "Deep learning models and predictive LLMs embedded into business workflows to automate complex enterprise reasoning and data synthesis.",
      icon: Cpu,
      color: "#8B5CF6",
      borderColor: "hover:border-purple-400/60",
      shadowColor: "hover:shadow-purple-500/20",
      badge: "INTELLIGENCE ENGINE"
    },
    {
      title: "Zero-Trust Cybersecurity",
      subtitle: "Impenetrable Data Shields",
      description: "Military-grade cryptographic pipelines, continuous automated vulnerability screening, and strict role-based access architectures.",
      icon: Shield,
      color: "#10B981",
      borderColor: "hover:border-emerald-400/60",
      shadowColor: "hover:shadow-emerald-500/20",
      badge: "SECURITY SHIELD"
    },
    {
      title: "Agile Engineering Velocity",
      subtitle: "Rapid Delivery Cycles",
      description: "High-performance sprints powered by automated CI/CD testing pipelines, ensuring clean code deployments in minutes rather than weeks.",
      icon: Zap,
      color: "#F97316",
      borderColor: "hover:border-orange-400/60",
      shadowColor: "hover:shadow-orange-500/20",
      badge: "ENGINEERING VELOCITY"
    }
  ];

  // Timeline data - No years
  const timelineEvents = [
    {
      title: "The Beginning",
      description: "Veronic was founded with a vision to create innovative, scalable, and future-ready digital solutions for modern businesses.",
      icon: Building2,
      lightColor: "from-[#00E5FF]/30 to-[#0088FF]/30",
      darkColor: "from-[#00E5FF] to-[#0088FF]",
      accentColor: "#00E5FF",
      borderHover: "hover:border-[#00E5FF]"
    },
    {
      title: "Growth Phase",
      description: "Expanded our team and capabilities, delivering excellence and driving innovation for clients worldwide.",
      icon: TrendingUp,
      lightColor: "from-[#FF6B6B]/30 to-[#FF8E53]/30",
      darkColor: "from-[#FF6B6B] to-[#FF8E53]",
      accentColor: "#FF6B6B",
      borderHover: "hover:border-[#FF6B6B]"
    },
    {
      title: "Key Milestones",
      description: "Launched Platform Engineering services and optimized cloud infrastructure for enterprise clients globally.",
      icon: Award,
      lightColor: "from-[#A855F7]/30 to-[#EC4899]/30",
      darkColor: "from-[#A855F7] to-[#EC4899]",
      accentColor: "#A855F7",
      borderHover: "hover:border-[#A855F7]"
    },
    {
      title: "Future Forward",
      description: "Continuing to push boundaries, helping businesses scale, innovate, and thrive in the digital era.",
      icon: Rocket,
      lightColor: "from-[#10B981]/30 to-[#059669]/30",
      darkColor: "from-[#10B981] to-[#059669]",
      accentColor: "#10B981",
      borderHover: "hover:border-[#10B981]"
    }
  ];

  // ============================================
  // ANIMATION VARIANTS
  // ============================================
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Typing effect for the heading
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);


  // Handle timeline hover
  const handleTimelineHover = (index) => {
    setActiveTimeline(index);
  };

  const handleTimelineLeave = () => {
    setActiveTimeline(null);
  };

  // Smooth scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle PDF download
  const handlePDFDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/PDF/Veronic-Brocher.pdf';
      link.download = 'Veronic-Brocher.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Unable to download brochure. Please try again later.');
    }
  };

  // Handle team member click
  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-clip">
      {/* Simple Background */}
      <div className="fixed inset-0 bg-[#F5F8FA]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.08),transparent_70%)]" />
      </div>

      {/* Navbar - Black background with white links initially -> White background with black links after scrolling */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section - Simple Clean Layout with Unique Cyan & Sapphire Color Theme */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#0B0F14] text-white"
        onMouseMove={(e) => {
          const { currentTarget, clientX, clientY } = e;
          const { left, top } = currentTarget.getBoundingClientRect();
          currentTarget.style.setProperty('--mouse-x', `${clientX - left}px`);
          currentTarget.style.setProperty('--mouse-y', `${clientY - top}px`);
        }}
      >
        {/* Interactive Dot Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.15) 0%, transparent 25%), radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: `100% 100%, 24px 24px`,
          }}
        />

        {/* Unique Ambient Color Glows for About Page */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
        >
          {/* Interactive Hero Badge (Labels: label-md with Inter) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-lg shadow-cyan-500/10 hover:border-cyan-400 transition-all duration-300 cursor-default"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="label-md uppercase tracking-widest text-cyan-300">Our Agency Vision &amp; DNA</span>
          </motion.div>

          {/* Display Hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] text-white mb-6 select-none leading-none tracking-tight group font-black"
          >
            ABOUT{" "}
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block transition-all duration-300 cursor-pointer drop-shadow-2xl"
            >
              VERONIC
            </motion.span>
          </motion.h1>

          {/* Supporting Heading Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative inline-block group"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9DB4C6] group-hover:text-white transition-colors duration-500 leading-tight">
              Building Smart Digital Systems for Modern Businesses
            </p>
            <div className="h-1.5 w-64 sm:w-80 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full group-hover:w-full transition-all duration-700 shadow-sm" />
          </motion.div>

          {/* Dynamic Typewriter Text Line (Labels: label-md with Chakra Petch) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-10"
          >
            <h2 className="label-md text-base sm:text-lg md:text-xl font-chakra text-cyan-200/90 tracking-wide uppercase">
              {displayText}
              <span className="cursor animate-pulse text-cyan-400 font-bold">|</span>
            </h2>
          </motion.div>

          {/* Supporting Content Copy (Body: body-md with Fira Code) */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="body-md sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-mono font-light"
          >
            Our mission is to empower the next generation of innovators through cutting-edge solutions that harmonize productivity with environmental stewardship.
          </motion.p>

          {/* Interface Copy / Action Button (Labels: label-md with Chakra Petch) */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(storyRef)}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-full font-bold label-md text-base overflow-hidden shadow-xl shadow-cyan-500/25 transition-all duration-300 uppercase"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Discover Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Strategic Innovation Pillars Section - Simple Clean Modern Cards */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#0B0F14] text-white">
        {/* Ambient Color Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 shadow-xl">
              <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-cyan-200 uppercase">Strategic Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Our Strategic
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent ml-3 font-space">
                Innovation Cards
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#9DB4C6] max-w-3xl mx-auto mt-4 px-2 font-jakarta">
              Explore the core architectural pillars powering our multi-million dollar client ecosystems through clean, scalable visual modules.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {strategicPillars.map((pillar, idx) => {
              const Icon = pillar.icon || Cpu;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`group relative p-8 sm:p-10 rounded-3xl bg-[#1E2A39]/60 backdrop-blur-2xl border border-white/15 ${pillar.borderColor} shadow-xl ${pillar.shadowColor} transition-all duration-500 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Glowing Top Accent Strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 group-hover:h-2 transition-all duration-500"
                    style={{ backgroundColor: pillar.color, boxShadow: `0 0 20px ${pillar.color}` }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      >
                        <Icon className="w-14 h-14 sm:w-16 sm:h-16 transition-colors duration-300" style={{ color: pillar.color, filter: `drop-shadow(0 4px 12px ${pillar.color}66)` }} />
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold tracking-wider uppercase" style={{ color: pillar.color }}>
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-xs sm:text-sm font-bold tracking-wide uppercase font-mono" style={{ color: pillar.color }}>
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 font-space">
                      {pillar.title}
                    </h3>

                    <p className="text-base text-[#9DB4C6] leading-relaxed font-jakarta">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Ambient Hover Orb Inside Card */}
                  <div
                    className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: pillar.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Connected Boxes, No Years */}
      <section ref={storyRef} id="our-story" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F5F8FA]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A39]/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Our Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              The Path That Led Us
              <span className="block bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent mt-2">
                Here
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Connects all boxes */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B8D8E8] via-[#9DB4C6] to-[#1E2A39] rounded-full" />

            <div className="space-y-12 sm:space-y-16 md:space-y-24">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;
                const isActive = activeTimeline === index;

                return (
                  <motion.div
                    key={index}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    onMouseEnter={() => handleTimelineHover(index)}
                    onMouseLeave={handleTimelineLeave}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    {/* Timeline Dot - Connected to line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        className={`w-5 h-5 rounded-full border-4 ${isActive ? 'border-[#1E2A39] bg-[#1E2A39]' : 'border-[#9DB4C6] bg-white'
                          } shadow-lg transition-all duration-500`}
                        whileHover={{ scale: 1.3 }}
                      >
                        <motion.div
                          className={`w-full h-full rounded-full ${isActive ? 'bg-[#1E2A39]' : 'bg-[#9DB4C6]'
                            }`}
                          animate={{
                            scale: isActive ? [1, 1.5, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Mobile Dot */}
                    <div className="md:hidden absolute left-0 z-20">
                      <motion.div
                        className={`w-5 h-5 rounded-full border-4 ${isActive ? 'border-[#1E2A39] bg-[#1E2A39]' : 'border-[#9DB4C6] bg-white'
                          } shadow-lg transition-all duration-500`}
                        whileHover={{ scale: 1.3 }}
                      >
                        <motion.div
                          className={`w-full h-full rounded-full ${isActive ? 'bg-[#1E2A39]' : 'bg-[#9DB4C6]'
                            }`}
                          animate={{
                            scale: isActive ? [1, 1.5, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'} pl-10 md:pl-0`}>
                      <motion.div
                        variants={cardVariants}
                        className="relative group"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Background Gradient - Light to Dark on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${isActive ? event.darkColor : event.lightColor} rounded-2xl sm:rounded-3xl ${isActive ? 'opacity-40' : 'opacity-15'} group-hover:opacity-40 transition-all duration-500`} />

                        {/* Card Content */}
                        <div className={`relative p-5 sm:p-6 lg:p-8 ${isActive ? 'bg-white/95' : 'bg-white/85'} backdrop-blur-sm rounded-2xl sm:rounded-3xl border ${isActive ? 'border-[#1E2A39]/40' : 'border-[#B8D8E8]/40'} shadow-sm hover:shadow-xl transition-all duration-500`}>
                          {/* Icon */}
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${isActive ? event.darkColor : event.lightColor} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-6 shadow-lg flex items-center justify-center mx-auto md:mx-0 transition-all duration-500`}>
                            <Icon className={`w-full h-full ${isActive ? 'text-white' : 'text-[#1E2A39]'} transition-colors duration-500`} />
                          </div>

                          {/* Title */}
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${isActive ? 'text-[#1E2A39]' : 'text-[#0B0F14]'} text-center md:text-left transition-colors duration-500`}>
                            {event.title}
                          </h3>

                          {/* Description - No Year */}
                          <p className={`text-sm sm:text-base ${isActive ? 'text-[#1E2A39]/80' : 'text-[#0B0F14]/60'} text-center md:text-left transition-colors duration-500`}>
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - DARK OBSIDIAN GLASS CARDS WITH NEON COLOR EFFECTS - No Numbers */}
      <section ref={valuesRef} id="our-values" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#B8D8E8' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#B8D8E8] to-[#D4EAF5]">
          <div className="absolute inset-0 opacity-25" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #1E2A39 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/90 text-white shadow-xl mb-4 sm:mb-6">
              <Compass className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">Core Value Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-2 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              What Drives Us
              <span className="block bg-gradient-to-r from-[#1E2A39] via-cyan-900 to-[#3A4A5F] bg-clip-text text-transparent mt-2">
                Every Single Day
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0B0F14]/80 max-w-3xl mx-auto mt-4 px-2 font-medium">
              Unique glassmorphic obsidian cards engineered with vibrant color-shift effects that define our digital principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`group relative p-6 sm:p-8 bg-[#0B0F14]/90 text-white backdrop-blur-2xl rounded-3xl border border-white/15 ${value.borderHover} shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between`}
                >
                  {/* Glowing Background Color Aura */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Glowing Top Neon Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:h-2"
                    style={{ backgroundColor: value.accentColor, boxShadow: `0 0 16px ${value.accentColor}` }}
                  />

                  <div>
                    {/* Header Row: Icon and Neon Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <Icon
                        className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ color: value.accentColor, filter: `drop-shadow(0 4px 12px ${value.accentColor}66)` }}
                      />

                      <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold tracking-wider uppercase ${value.tagColor}`}>
                        {value.badgeText}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-white group-hover:text-cyan-300 transition-colors relative z-10">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#9DB4C6] leading-relaxed relative z-10">
                      {value.description}
                    </p>
                  </div>

                  {/* Corner Accent Graphic */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9DB4C6]/60 font-mono relative z-10">
                    <span>VERONIC_DNA</span>
                    <span className="group-hover:text-white transition-colors" style={{ color: value.accentColor }}>● ACTIVE</span>
                  </div>

                  {/* Corner Glow Orb */}
                  <div
                    className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: value.accentColor }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Glowing Stat Counter Cards */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-14 sm:mt-18 lg:mt-24"
          >
            {[
              { value: '98%', label: 'Employee Satisfaction Rate', icon: Users, color: '#00F2FE', border: 'hover:border-cyan-400', glow: 'from-cyan-500/20 to-transparent' },
              { value: '15+', label: 'Monthly Innovation Hours', icon: BookOpen, color: '#8B5CF6', border: 'hover:border-purple-400', glow: 'from-purple-500/20 to-transparent' },
              { value: '100%', label: 'Remote-First Velocity Culture', icon: Globe, color: '#10B981', border: 'hover:border-emerald-400', glow: 'from-emerald-500/20 to-transparent' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className={`relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0B0F14]/90 text-white backdrop-blur-2xl border border-white/15 ${stat.border} shadow-2xl transition-all duration-500 text-center overflow-hidden group`}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${stat.glow} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

                  <motion.div
                    className="mx-auto mb-4 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-14 h-14 sm:w-16 sm:h-16" style={{ color: stat.color, filter: `drop-shadow(0 4px 12px ${stat.color}66)` }} />
                  </motion.div>

                  <motion.div
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 relative z-10"
                    style={{ color: stat.color }}
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm font-bold text-[#9DB4C6] uppercase tracking-wider relative z-10">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Our Expertise - Quantum & Core Engineering Protocols (Bento Grid) */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#0B0F14] text-white border-y border-white/10">
        {/* Holographic Grid Background & Ambient Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2A3920_1px,transparent_1px),linear-gradient(to_bottom,#1E2A3920_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00E5FF]/10 via-[#0055FF]/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#00E5FF]/15 via-[#0055FF]/15 to-purple-500/15 border border-[#00E5FF]/30 mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <Cpu className="w-4 h-4 text-[#00E5FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#00E5FF] font-space">Our Expertise // Quantum Protocols</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space tracking-tight mb-6">
              Next-Gen Engineering & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3884FF] to-[#A855F7]">
                Autonomous Ecosystems
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Diverging from conventional web agencies, Veronic combines neural architecture with high-frequency cloud infrastructure to build unshakeable digital assets.
            </p>
          </motion.div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* BENTO ITEM 1: Wide Span */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="lg:col-span-2 group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1E2A39]/40 via-[#0B0F14]/90 to-[#0B0F14] border border-white/10 hover:border-[#00E5FF]/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl group-hover:bg-[#00E5FF]/20 transition-all duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <Code2 className="w-7 h-7 text-[#00E5FF]" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-[#00E5FF] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                    [KERNEL v4.9.0 // ACTIVE]
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-space text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
                  Protocol 01 // Neural Enterprise & Micro-Services Mesh
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg max-w-2xl">
                  We architect high-throughput distributed backends designed for millions of concurrent transactions. By decoupling services into fault-tolerant micro-nodes, your enterprise operates with 99.99% uptime and zero single points of failure.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {["Node.js / Python Fast API", "Kubernetes Event Mesh", "PostgreSQL / Redis Clusters", "GraphQL API Layers"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 group-hover:border-[#00E5FF]/30">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BENTO ITEM 2: Single Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1E2A39]/40 via-[#0B0F14]/90 to-[#0B0F14] border border-white/10 hover:border-purple-500/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-all duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <Zap className="w-7 h-7 text-purple-400" />
                  </div>
                  <span className="text-xs font-mono text-purple-400">AI // AUTONOMOUS</span>
                </div>

                <h3 className="text-2xl font-black font-space text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Protocol 02 // Neural AI & Predictive Decision Engines
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Integrate custom LLM workflows, automated RPA data-pipelines, and real-time machine learning directly into your core business operations for superhuman operational velocity.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {["Local LLM Fine-Tuning", "Real-Time Telemetry", "Vector Data Lakes"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    +{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BENTO ITEM 3: Single Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1E2A39]/40 via-[#0B0F14]/90 to-[#0B0F14] border border-white/10 hover:border-[#00E5FF]/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#0055FF]/10 rounded-full blur-3xl group-hover:bg-[#0055FF]/25 transition-all duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0055FF]/10 border border-[#0055FF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                    <Cloud className="w-7 h-7 text-[#3884FF]" />
                  </div>
                  <span className="text-xs font-mono text-[#3884FF]">CLOUD // ZERO-TRUST</span>
                </div>

                <h3 className="text-2xl font-black font-space text-white mb-4 group-hover:text-[#3884FF] transition-colors">
                  Protocol 03 // High-Frequency Cloud Infrastructure
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Multi-region containerized deployments across AWS and GCP with military-grade SOC2 compliance, edge-cached CDN layers, and automated disaster recovery protocols.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {["AWS / GCP Edge Mesh", "Zero-Trust Data Vaults", "Docker & CI/CD"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    +{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BENTO ITEM 4: Wide Span */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="lg:col-span-2 group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1E2A39]/40 via-[#0B0F14]/90 to-[#0B0F14] border border-white/10 hover:border-emerald-400/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Layers className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    [HARDWARE-ACCELERATED 60FPS UI]
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-space text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  Protocol 04 // Hyper-Reactive WebGL & Monospace Systems
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg max-w-2xl">
                  We craft executive digital experiences underpinned by our signature Chakra Petch display hierarchy and Fira Code technical design system. Every micro-interaction is engineered for instantaneous visual feedback and immersive aesthetic authority.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {["Chakra Petch / Fira Code", "Three.js / WebGL", "Reactive Motion Engines", "Sub-50ms Latency"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 group-hover:border-emerald-400/30">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Team Section - Holographic Color Auras */}
      <section ref={teamRef} id="our-team" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-black">
        {/* Background to black and golden shining */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3710_1px,transparent_1px),linear-gradient(to_bottom,#d4af3710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39] text-white shadow-lg mb-4 sm:mb-6 border border-yellow-500/30">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-yellow-500">Leadership Cards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-2 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              The Innovators Behind
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent mt-2">
                Our Digital Powerhouse
              </span>
            </h2>
          </motion.div>

          {/* Top CEO Card */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            {teamMembers.filter(m => m.isCEO).map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-black border border-yellow-600/30 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 h-[360px] sm:h-[420px] w-full max-w-sm"
              >
                {/* Initial State: Only Image + Bottom Title */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Bottom Main Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 text-center font-space drop-shadow-md">{member.name}</h3>
                    <p className="text-sm font-semibold text-white/80 text-center tracking-wide">{member.role}</p>
                  </div>
                </div>

                {/* Hover State: Details */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/90 p-6 flex flex-col justify-center items-center text-center border-2 border-yellow-500/50 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 font-space">{member.name}</h3>
                  <p className="text-sm font-semibold text-white/90 mb-4">{member.role}</p>
                  <p className="text-xs sm:text-sm text-white/70 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  {member.experience && (
                    <div className="flex items-center justify-center gap-2 mb-6 text-sm font-bold text-yellow-300">
                      <Briefcase className="w-4 h-4" />
                      Exp: {member.experience}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-5 mt-auto">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="LinkedIn">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="WhatsApp">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="Email">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.filter(m => !m.isCEO).map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-black border border-yellow-600/30 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 h-[360px] sm:h-[420px] w-full"
              >
                {/* Initial State: Only Image + Bottom Title */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Bottom Main Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 text-center font-space drop-shadow-md">{member.name}</h3>
                    <p className="text-sm font-semibold text-white/80 text-center tracking-wide">{member.role}</p>
                  </div>
                </div>

                {/* Hover State: Details */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/90 p-6 flex flex-col justify-center items-center text-center border-2 border-yellow-500/50 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 font-space">{member.name}</h3>
                  <p className="text-sm font-semibold text-white/90 mb-4">{member.role}</p>
                  <p className="text-xs sm:text-sm text-white/70 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  {member.experience && (
                    <div className="flex items-center justify-center gap-2 mb-6 text-sm font-bold text-yellow-300">
                      <Briefcase className="w-4 h-4" />
                      Exp: {member.experience}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-5 mt-auto">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="LinkedIn">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="WhatsApp">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-white/80 hover:text-yellow-500 hover:scale-110 transition-all" title="Email">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#1E2A39]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A39] via-[#2A3A4F] to-[#0B0F14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white">Start Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Ready to Start Your
              <span className="block text-[#9DB4C6] mt-2">
                Digital Journey?
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              Let's discuss how we can help transform your business with our expertise and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePDFDownload}
                className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-[#F5F8FA] text-[#1E2A39] rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-white/25 transition-shadow flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.button>

              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-colors"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Black Background - Big Logo */}
      <Footer />
    </div>
  );
};

export default About;