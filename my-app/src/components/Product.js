import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Smartphone,
  Package,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  MapPin,
  Users,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  Gauge,
  Layers,
  Download,
  Bell,
  Camera,
  BarChart3,
  Globe,
  Mail,
  Phone,
  Star,
  CheckCircle,
  Play,
  Github,
  Linkedin,
  Instagram,
  Award,
  Cpu,
  Server,
  DollarSign,
  CreditCard,
  FileCheck,
  UserCheck,
  Calendar,
  MessageSquare,
  AlertCircle,
  Settings,
  Box,
  ClipboardCheck,
  Truck,
  Route,
  Headphones,
  RefreshCw,
  Building2,
  FileText,
  Sun,
  Calculator,
  Store,
  Factory,
  Activity,
  Monitor,
  GraduationCap,
  BookOpen,
  UsersRound,
  Receipt,
  MessagesSquare,
  Code,
  GitBranch,
  Terminal,
  Hexagon,
  Cog,
  Wifi,
  Radio,
  Cpu as CpuIcon,
  HardDrive,
  Network,
  ShieldCheck,
  Rocket,
  Target,
  Eye,
  Lightbulb,
  PenTool,
  Layout,
  Sliders,
  RefreshCw as RefreshIcon,
  CheckCircle as CheckIcon,
} from "lucide-react";

import lolo1 from "../images/lolo1.png";
import hub from "../images/hub.png";
import parcel from "../images/parcel.png";
import solar_os from "../images/solar_os.png";
import retail_solution from "../images/Retail_Solution.png";
import shcool from "../images/shcool.png";
import industrial_solution from "../images/Industrial_Solution.png";

const ProductPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");


  // Refs
  const heroRef = useRef(null);
  const mobileHubRef = useRef(null);
  const parcelRef = useRef(null);
  const solarRef = useRef(null);
  const kiranaRef = useRef(null);
  const manufacturingRef = useRef(null);
  const schoolHubRef = useRef(null);
  const techRef = useRef(null);
  const benefitsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);


  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // All Products Data - 6 Products
  const allProducts = [
    {
      id: "mobilehub",
      name: "MobileHub",
      icon: Smartphone,
      color: "from-[#1E2A39] to-[#3A4A5F]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#9DB4C6]",
      description: "Complete mobile device management platform for enterprises with real-time monitoring and advanced security.",
      image: hub,
      features: [
        { title: "Smart Device Management", description: "Centralized control for all mobile devices with real-time monitoring.", icon: Smartphone },
        { title: "Advanced Security", description: "Enterprise-grade security with biometric authentication.", icon: Shield },
        { title: "Real-time Analytics", description: "Track device performance and usage patterns.", icon: TrendingUp },
        { title: "Automated Updates", description: "Seamless OTA updates with zero downtime.", icon: Zap }
      ],
      price: "$499/month",
      downloadLink: "/PDF/MobileHub-Proposal.pdf",
      tag: "Enterprise Solution"
    },
    {
      id: "parcel",
      name: "Parcel Management",
      icon: Package,
      color: "from-[#1E2A39] to-[#9DB4C6]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#9DB4C6]",
      description: "AI-powered parcel delivery tracking and management system with real-time GPS tracking and route optimization.",
      image: parcel,
      features: [
        { title: "Real-time Tracking", description: "Live GPS tracking with route optimization.", icon: MapPin },
        { title: "Automated Dispatching", description: "Smart routing for maximum efficiency.", icon: Gauge },
        { title: "Proof of Delivery", description: "Digital signatures and photo confirmation.", icon: Camera },
        { title: "Customer Notifications", description: "Automated updates at every stage.", icon: Bell }
      ],
      price: "$599/month",
      downloadLink: "/PDF/Parcel-Management-Proposal.pdf",
      tag: "Logistics Solution"
    },
    {
      id: "solar",
      name: "Solar Sales OS",
      icon: Sun,
      color: "from-[#1E2A39] to-[#F59E0B]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#FCD34D]",
      description: "Smart lead management and solar proposal system that turns every inquiry into an installation — faster, smarter, and at scale.",
      image: solar_os,
      features: [
        { title: "Solar Calculator", description: "Instantly estimates consumption, recommends system size, calculates cost and savings.", icon: Calculator },
        { title: "Lead Management", description: "Centralized database storing every customer's details in one place.", icon: Users },
        { title: "Smart Lead Scoring", description: "Automatically categorizes leads as Hot, Warm, or Cold based on bill value.", icon: TrendingUp },
        { title: "Follow-Up Management", description: "Tracks follow-ups made and pending actions per lead.", icon: Bell }
      ],
      price: "$399/month",
      downloadLink: "/PDF/Solar-Sales-OS-Proposal.pdf",
      tag: "Solar Solution"
    },
    {
      id: "kirana",
      name: "Smart Kirana & General Store",
      icon: Store,
      color: "from-[#1E2A39] to-[#10B981]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#6EE7B7]",
      description: "Complete digital management system built specifically for Indian Kirana stores and general retail shops.",
      image: retail_solution,
      features: [
        { title: "Inventory Management", description: "Batch-level tracking with expiry alerts and low-stock notifications.", icon: Package },
        { title: "AI Invoice Scanner", description: "Scan supplier invoices and pre-fill everything in 2 minutes.", icon: Camera },
        { title: "Fast Billing (POS)", description: "Live product grid, barcode scanning, and FIFO stock deduction.", icon: CreditCard },
        { title: "Udhaar Management", description: "Digital passbook-style customer credit tracking with automatic balance updates.", icon: Users }
      ],
      price: "$299/month",
      downloadLink: "/PDF/Kirana-Management-Proposal.pdf",
      tag: "Retail Solution"
    },
    {
      id: "manufacturing",
      name: "Manufacturing Management",
      icon: Factory,
      color: "from-[#1E2A39] to-[#8B5CF6]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#C4B5FD]",
      description: "Complete web-based solution to digitize and simplify daily factory operations with real-time production tracking.",
      image: industrial_solution,
      features: [
        { title: "Production Tracking", description: "Record output by machine, product, operator, and shift with daily targets.", icon: Activity },
        { title: "Machine Status", description: "One-click status changes with color-coded indicators for instant visibility.", icon: Monitor },
        { title: "Downtime Analysis", description: "Automatic downtime logging with categorized reasons and precise duration tracking.", icon: Clock },
        { title: "Loss Calculation", description: "Automatically computes financial impact when machines resume after stoppage.", icon: DollarSign }
      ],
      price: "$549/month",
      downloadLink: "/PDF/Manufacturing-Management-Proposal.pdf",
      tag: "Industrial Solution"
    },
    {
      id: "schoolhub",
      name: "SchoolHub ERP",
      icon: GraduationCap,
      color: "from-[#1E2A39] to-[#EC4899]",
      bgColor: "#1E2A39",
      lightColor: "from-[#1E2A39] to-[#F9A8D4]",
      description: "Centralized web-based platform that digitizes and automates every aspect of school operations - from admissions to examinations, fees, and parent communication.",
      image: shcool,
      features: [
        { title: "Academic Management", description: "Complete student lifecycle from admission to examination, results, and promotion.", icon: BookOpen },
        { title: "Role-Based Dashboards", description: "7 user roles with personalized dashboards - Admin, Principal, Teacher, Student, Parent, Accountant.", icon: UsersRound },
        { title: "Fee & Payroll Management", description: "Complete fee collection, receipt generation, accounting, and staff payroll processing.", icon: Receipt },
        { title: "Communication & Documents", description: "Multi-channel communication with document storage, certificates, and ID card management.", icon: MessagesSquare }
      ],
      price: "$699/month",
      downloadLink: "/PDF/SchoolHub-ERP-Proposal.pdf",
      tag: "Education Solution"
    }
  ];

  // Benefits - Theme Colors
  const benefits = [
    {
      value: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability",
      icon: Shield,
      color: "#1E2A39"
    },
    {
      value: "3x",
      label: "Faster Delivery",
      description: "Optimized routing",
      icon: Zap,
      color: "#1E2A39"
    },
    {
      value: "50%",
      label: "Cost Reduction",
      description: "Streamlined operations",
      icon: TrendingUp,
      color: "#1E2A39"
    },
    {
      value: "10k+",
      label: "Active Users",
      description: "Trusted worldwide",
      icon: Users,
      color: "#1E2A39"
    },
  ];

  // Technology features
  const techFeatures = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Built with React, Node.js, and cutting-edge technologies",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "End-to-end encryption, OAuth, and role-based access control",
      color: "from-[#1E2A39] to-[#9DB4C6]"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS, Azure, and GCP ready with auto-scaling capabilities",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Automated testing, deployment, and version control",
      color: "from-[#1E2A39] to-[#9DB4C6]"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing databases and APIs",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    },
    {
      icon: Wifi,
      title: "Real-Time Sync",
      description: "WebSocket and event-driven architecture for instant updates",
      color: "from-[#1E2A39] to-[#9DB4C6]"
    },
  ];

  const integrationFeatures = [
    {
      icon: Cog,
      title: "API First",
      description: "RESTful APIs for seamless third-party integration"
    },
    {
      icon: Radio,
      title: "Webhooks",
      description: "Real-time event notifications and triggers"
    },
    {
      icon: Network,
      title: "Microservices",
      description: "Scalable, decoupled service architecture"
    },
    {
      icon: HardDrive,
      title: "Data Storage",
      description: "Flexible storage options including cloud and on-premise"
    },
  ];



  // Handle PDF download
  const handlePDFDownload = (link) => {
    try {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = link.split('/').pop();
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Unable to download proposal. Please try again later.');
    }
  };

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "mobilehub", ref: mobileHubRef },
        { id: "parcel", ref: parcelRef },
        { id: "solar", ref: solarRef },
        { id: "kirana", ref: kiranaRef },
        { id: "manufacturing", ref: manufacturingRef },
        { id: "schoolhub", ref: schoolHubRef },
        { id: "tech", ref: techRef },
        { id: "benefits", ref: benefitsRef },
        { id: "cta", ref: ctaRef },
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-hidden">
      {/* Simple Background */}
      <div className="fixed inset-0 bg-[#F5F8FA]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.08),transparent_70%)]" />
      </div>

      {/* Navigation */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-[#F5F8FA]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-32 h-32 md:w-48 md:h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/80"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-[15%] w-40 h-40 md:w-56 md:h-56 bg-[#00c2ff]/30 backdrop-blur-md rounded-3xl shadow-xl border border-[#00c2ff]/40"
          />
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-[20%] w-36 h-36 md:w-52 md:h-52 bg-[#10B981]/30 backdrop-blur-md rounded-2xl shadow-xl border border-[#10B981]/40"
          />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #1E2A39 1px, transparent 0)',
            }}
          />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
            <span className="text-xs sm:text-sm font-medium text-[#1E2A39]">Innovation at Scale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-[#0B0F14]"
          >
            <span className="bg-gradient-to-r from-[#1E2A39] via-[#3A4A5F] to-[#9DB4C6] bg-clip-text text-transparent">
              Our Products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#0B0F14]/60 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Powerful solutions designed to transform how you manage mobile
            devices, streamline parcel delivery, and optimize business operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4"
          >
            <button
              onClick={() => scrollToSection(productsRef)}
              className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#1E2A39] text-[#F5F8FA] rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-[#1E2A39]/20 hover:shadow-[#1E2A39]/30 transition-shadow"
            >
              <span className="flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection(techRef)}
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full border border-[#1E2A39]/30 text-[#0B0F14] font-semibold text-xs sm:text-sm md:text-base hover:bg-[#1E2A39]/5 transition-colors"
            >
              Technology
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ALL PRODUCTS - 6 Products */}
      {allProducts.map((product, index) => {
        const Icon = product.icon;
        const isMobileHub = product.id === "mobilehub";
        const isParcel = product.id === "parcel";
        const isSolar = product.id === "solar";
        const isKirana = product.id === "kirana";
        const isManufacturing = product.id === "manufacturing";
        const isSchoolHub = product.id === "schoolhub";
        
        let sectionRef = null;
        if (isMobileHub) sectionRef = mobileHubRef;
        else if (isParcel) sectionRef = parcelRef;
        else if (isSolar) sectionRef = solarRef;
        else if (isKirana) sectionRef = kiranaRef;
        else if (isManufacturing) sectionRef = manufacturingRef;
        else if (isSchoolHub) sectionRef = schoolHubRef;
        
        return (
          <section
            key={product.id}
            ref={sectionRef}
            className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F5F8FA]"
          >
            <div className="absolute inset-0">
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${product.color}/10 via-[#1E2A39]/5 to-transparent clip-diagonal`} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 sm:mb-16 lg:mb-20"
              >
                <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6`}>
                  <Icon className={`w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]`} />
                  <span className={`text-xs sm:text-sm text-[#1E2A39]`}>
                    {product.tag}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  <span className={`bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {product.name}
                  </span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-full blur-3xl opacity-20`} />
                  <div className="relative flex items-center justify-center">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-lg mx-auto h-auto object-contain rounded-lg shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="relative">
                    <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#9DB4C6]/20 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 sm:mt-4 text-[#0B0F14]">
                      {product.name}
                      <span className={`block bg-gradient-to-r ${product.color} bg-clip-text text-transparent mt-1 sm:mt-2`}>
                        Platform
                      </span>
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0B0F14]/70 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4 sm:space-y-5 lg:space-y-6 py-4 sm:py-6 lg:py-8">
                    {product.features.map((feature, fIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: fIndex * 0.1 }}
                          className="flex gap-3 sm:gap-4 items-start"
                        >
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1E2A39]/10 flex items-center justify-center flex-shrink-0`}
                          >
                            <FeatureIcon className={`w-5 h-5 sm:w-6 sm:h-6 text-[#1E2A39]`} />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1 text-[#0B0F14]">
                              {feature.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#0B0F14]/50">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                      onClick={() => handlePDFDownload(product.downloadLink)}
                      className={`group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-[#1E2A39] text-[#F5F8FA] rounded-full font-semibold text-xs sm:text-sm lg:text-base shadow-lg shadow-[#1E2A39]/20 hover:shadow-[#1E2A39]/30 transition-shadow`}
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      Download Proposal
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F5F8FA]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A39]/5 via-[#9DB4C6]/5 to-[#1E2A39]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2 text-[#0B0F14]">
              Transform Your
              <span className="block bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent mt-1 sm:mt-2">
                Business Operations
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative p-4 sm:p-5 lg:p-6 xl:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#9DB4C6]/20 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E2A39]/20 to-[#9DB4C6]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#1E2A39]" />
                      </div>

                      <div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent mb-1 sm:mb-2">
                          {benefit.value}
                        </div>
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#0B0F14] mb-1 sm:mb-2">
                          {benefit.label}
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-[#0B0F14]/40">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Integration Section - No Product Cards, Only Tech Content */}
      <section ref={techRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F5F8FA]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A39]/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Tech Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2 text-[#0B0F14]">
              Technology
              <span className="block bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent mt-1 sm:mt-2">
                & Integration
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0B0F14]/60 max-w-3xl mx-auto mt-4 px-4">
              Built on modern architecture with seamless integration
              capabilities for all our products
            </p>
          </motion.div>

          {/* Tech Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#9DB4C6]/20 hover:border-[#1E2A39]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1E2A39]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1E2A39]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B0F14] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#0B0F14]/60">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Integration Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#0B0F14]">
              Integration <span className="bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent">Capabilities</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {integrationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-[#9DB4C6]/20 text-center hover:border-[#1E2A39]/30 transition-all shadow-sm hover:shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1E2A39]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#1E2A39]" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base text-[#0B0F14] mb-1">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-[#0B0F14]/50">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Integration Features Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mt-12 sm:mt-16"
          >
            {[
              { icon: Zap, label: "Real-time Sync", color: "text-[#1E2A39]" },
              { icon: Shield, label: "Security First", color: "text-[#1E2A39]" },
              { icon: TrendingUp, label: "Scalable", color: "text-[#1E2A39]" },
              { icon: Globe, label: "Global Reach", color: "text-[#1E2A39]" },
              { icon: Clock, label: "24/7 Uptime", color: "text-[#1E2A39]" },
              { icon: Users, label: "Team Ready", color: "text-[#1E2A39]" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#9DB4C6]/20 text-center hover:border-[#1E2A39]/30 transition-colors shadow-sm hover:shadow-md"
              >
                <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color} mb-1 sm:mb-2`} />
                <span className="text-[10px] sm:text-xs text-[#0B0F14]/60">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#1E2A39]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A39] via-[#2A3A4F] to-[#0B0F14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white">Get Started</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2 text-white">
              Ready to
              <span className="block text-[#9DB4C6] mt-1 sm:mt-2">Transform Your Business?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              Join thousands of companies already using our products to
              streamline operations and drive growth.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-white/30 text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
              {[
                "Enterprise Ready",
                "24/7 Support",
                "99.9% Uptime",
                "GDPR Compliant",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/60" />
                  <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
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
                  { icon: Instagram, href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq", label: "Instagram" },
                  { icon: Github, href: "https://github.com/veronicinfotech-glitch", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:veronic.infotech@gmail.com", label: "Email" },
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

            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Products</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {allProducts.map((product) => (
                  <li key={product.id}>
                    <button
                      onClick={() => {
                        const refMap = {
                          mobilehub: mobileHubRef,
                          parcel: parcelRef,
                          solar: solarRef,
                          kirana: kiranaRef,
                          manufacturing: manufacturingRef,
                          schoolhub: schoolHubRef,
                        };
                        if (refMap[product.id]) {
                          scrollToSection(refMap[product.id]);
                        }
                      }}
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li><Link to="/" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/packages" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Packages</Link></li>
                <li><Link to="/products" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

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

          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for the future
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </div>
  );
};

export default ProductPage;