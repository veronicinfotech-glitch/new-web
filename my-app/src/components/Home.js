import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import GlowCanvasBackground from "./GlowCanvasBackground";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import './CardStack.css';
import DigitalEvolutionSection from './DigitalEvolutionSection';
import { getInstagramFeed } from '../services/instagramService';
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Code2,
  Globe,
  Search,
  Zap,
  Shield,
  Users,
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
  Megaphone,
  Download,
  Menu,
  X,
  Instagram,
  Lightbulb,
  Circle,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ExternalLink,
  Briefcase,
  Target,
  BarChart,
  Headphones,
  MousePointer,
  ArrowDown,
  Code,
  PenTool,
  Monitor,
  Layout,
  Palette,
  Terminal,
  Cursor,
  Building2,
  Users2,
  Award as AwardIcon,
  HeartHandshake,
  Network,
  Microchip,
  Server,
  GitBranch,
  HardDrive,
  Wifi,
  Cpu as CpuIcon,
  ShieldCheck,
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon,
  Clock as ClockIcon,
  Zap as ZapIcon,
  Layers as LayersIcon,
  CheckCircle as CheckCircleIcon,
  Eye,
  LineChart,
  PieChart,
  BarChart3,
  Activity,
  Gauge,
  Box,
  Hexagon,
  Triangle,
  Square,
  Circle as CircleIcon,
  ChevronLeft,
  Loader2
} from "lucide-react";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import lolo1 from "../images/lolo1.png";
import accountLogoImage from "../images/image.png";
import image2 from "../images/MB1.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import secondImage from "../images/second_image.png";
import image3 from "../images/WHY.png";
import heroBgImage from "../images/s1.png";

// Hero Video import
import handshakeVideo from "../video/v4.mp4";
import whyImage from "../images/whyveronicus.png";


// ========================================
// API HELPER FUNCTIONS
// ========================================

// Helper function to get time ago
const getTimeAgo = (dateString) => {
  try {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return past.toLocaleDateString();
  } catch (e) {
    return 'Recently';
  }
};


// ========================================
// CONFIGURATION DATA
// ========================================

const tabs = [
  {
    id: "product",
    shortWord: "T R A N S I T I O N",
    label: "Transition to a product-based approach",
    description:
      "Move from a project-based to product-based approach and elevate digital experiences that are integral success drivers.",
    icon: Layers,
    color: "from-[#1E2A39] to-[#9DB4C6]"
  },
  {
    id: "cloud",
    shortWord: "M I G R A T I O N",
    label: "Achieve seamless cloud migration",
    description:
      "Accelerate your cloud journey with our comprehensive migration strategies and cloud-native solutions.",
    icon: Cloud,
    color: "from-[#1E2A39] to-[#9DB4C6]"
  },
  {
    id: "data",
    shortWord: "I N T E L L I G E N C E",
    label: "Unlock potential with data & AI",
    description:
      "Harness the power of data and artificial intelligence to drive innovation and informed decision-making.",
    icon: Database,
    color: "from-[#1E2A39] to-[#9DB4C6]"
  },
  {
    id: "infra",
    shortWord: "I N F R A S T R U C T U R E",
    label: "Improve infrastructure management",
    description:
      "Optimize your IT infrastructure for better performance, scalability, and cost-efficiency.",
    icon: Cpu,
    color: "from-[#1E2A39] to-[#9DB4C6]"
  },
  {
    id: "process",
    shortWord: "O P T I M I Z A T I O N",
    label: "Optimize business processes",
    description:
      "Streamline your operations and enhance productivity through intelligent process automation.",
    icon: Zap,
    color: "from-[#1E2A39] to-[#9DB4C6]"
  },
];

// Single line technology words for full-width section
const extendedTechnologies = [
  "CLOUD SYSTEMS",
  "DIGITAL PLATFORMS",
  "AUTOMATION",
  "DATA SOLUTIONS",
  "SMART APPLICATIONS",
  "SYSTEM INTEGRATION",
  "SCALABLE INFRASTRUCTURE",
  "WEB PLATFORMS",
  "DIGITAL WORKFLOWS",
  "DATA INTELLIGENCE",
  "AI SOLUTIONS",
  "MOBILE APPS",
  "CYBERSECURITY",
  "DEVOPS",
  "MACHINE LEARNING",
  "IOT SOLUTIONS",
  "BLOCKCHAIN",
  "ANALYTICS",
  "UI/UX DESIGN",
  "API INTEGRATION",
  "CLOUD NATIVE",
  "MICROSERVICES",
  "CONTAINERIZATION",
  "SERVERLESS",
];

// Unique company logos with online links
const companyLogos = [
  {
    id: 1,
    name: "Google",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
    color: "#4285F4",
    url: "https://google.com"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    color: "#00A4EF",
    url: "https://microsoft.com"
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
    color: "#FF9900",
    url: "https://amazon.com"
  },
  {
    id: 4,
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    color: "#A2AAAD",
    url: "https://apple.com"
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
    color: "#0081FB",
    url: "https://meta.com"
  },
  {
    id: 6,
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    color: "#E50914",
    url: "https://netflix.com"
  },
  {
    id: 7,
    name: "Tesla",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
    color: "#E82127",
    url: "https://tesla.com"
  },
  {
    id: 8,
    name: "Stripe",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    color: "#008CDD",
    url: "https://stripe.com"
  },
  {
    id: 9,
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
    color: "#1ED760",
    url: "https://spotify.com"
  },
  {
    id: 10,
    name: "Slack",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    color: "#4A154B",
    url: "https://slack.com"
  },
  {
    id: 11,
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    color: "#FF0000",
    url: "https://adobe.com"
  },
  {
    id: 12,
    name: "Salesforce",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    color: "#00A1E0",
    url: "https://salesforce.com"
  },
  {
    id: 13,
    name: "Uber",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/uber.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/uber-15.svg",
    color: "#111111",
    url: "https://uber.com"
  },
  {
    id: 14,
    name: "Airbnb",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbnb.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg",
    color: "#FF5A5F",
    url: "https://airbnb.com"
  },
  {
    id: 15,
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    color: "#96BF48",
    url: "https://shopify.com"
  },
  {
    id: 16,
    name: "Zoom",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg",
    colorLogo: "https://cdn.worldvectorlogo.com/logos/zoom-communications.svg",
    color: "#2D8CFF",
    url: "https://zoom.us"
  },
];

// Why Choose Veronic data
const whyChooseData = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "Years of experience delivering innovative technology solutions across multiple industries."
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "We prioritize your business goals and tailor solutions to meet your unique challenges."
  },
  {
    icon: BarChart,
    title: "Proven Results",
    description: "Track record of successful projects with measurable business outcomes and growth."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance to ensure your systems run smoothly."
  }
];

// Hero value propositions
const valuePropositions = [
  {
    icon: RocketIcon,
    title: "Accelerate Growth",
    desc: "Scale your business with enterprise-grade technology"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Bank-grade protection for your digital assets"
  },
  {
    icon: TrendingUpIcon,
    title: "Data-Driven Growth",
    desc: "Actionable insights from your business data"
  },
  {
    icon: Network,
    title: "Seamless Integration",
    desc: "Connect your entire tech ecosystem effortlessly"
  }
];

// Horizontal Timeline Data - Simple boxes
const timelineData = [
  {
    year: "2024",
    title: "Real-Time Analytics",
    description: "Monitor and analyze business data with intelligent dashboards.",
    icon: Activity,
    color: "from-[#1E2A39] to-[#3A4A5F]",
    stats: "2.5M+ Data Points"
  },
  {
    year: "2025",
    title: "Zero-Trust Security",
    description: "Enterprise-grade security with zero-trust architecture.",
    icon: Shield,
    color: "from-[#2A3A4F] to-[#4A6A8A]",
    stats: "99.99% Uptime"
  },
  {
    year: "2026",
    title: "AI-Powered Automation",
    description: "Intelligent automation reducing manual work and boosting productivity.",
    icon: Cpu,
    color: "from-[#1E2A39] to-[#5A7A9A]",
    stats: "85% Faster Processing"
  },
  {
    year: "2027",
    title: "Cloud-Native Architecture",
    description: "Scalable, resilient applications built with cloud-native principles.",
    icon: Cloud,
    color: "from-[#2A3A4F] to-[#6A8AAA]",
    stats: "10x Scalability"
  }
];

// Customer Reviews Data for sliding animation carousel
const customerReviewsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Chief Technology Officer",
    company: "Apex Tech Enterprises",
    avatar: "RS",
    avatarColor: "from-[#00E5FF] to-[#0055FF]",
    rating: 5,
    quote: "Veronic completely modernized our legacy IT systems into a high-frequency cloud architecture. Their product-based approach reduced our operational overhead by 45% within the first two quarters.",
    badge: "Cloud Migration Client"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "VP of Digital Innovation",
    company: "OmniFlow Logistics",
    avatar: "ER",
    avatarColor: "from-[#E5A36F] to-[#D4AFB9]",
    rating: 5,
    quote: "The AI and automation workflows engineered by Veronic revolutionized our supply chain tracking. The speed, accuracy, and sub-50ms UI latency have given us an incredible competitive edge.",
    badge: "AI Automation Client"
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "Managing Director",
    company: "FinVerse Analytics",
    avatar: "VM",
    avatarColor: "from-[#9CADCE] to-[#52B2CF]",
    rating: 5,
    quote: "From day one, Veronic demonstrated exceptional industry expertise and proactive leadership. Their team delivered a zero-trust enterprise platform on time and exceeded every performance benchmark.",
    badge: "Enterprise Security Client"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Head of Product",
    company: "Nexus Global SaaS",
    avatar: "SJ",
    avatarColor: "from-[#D4AFB9] to-[#833AB4]",
    rating: 5,
    quote: "The sticky card architecture and dynamic interfaces built by Veronic wowed our executive board immediately. Not only is the design state-of-the-art, but the backend resilience is unmatched.",
    badge: "Full-Stack Web App Client"
  },
  {
    id: 5,
    name: "Ananya Desai",
    role: "Founder & CEO",
    company: "Vanguard Retail Systems",
    avatar: "AD",
    avatarColor: "from-[#6FE5B6] to-[#00E5FF]",
    rating: 5,
    quote: "Veronic isn't just an agency; they are a strategic extension of our engineering division. Their 24/7 dedicated support and continuous optimization have scaled our transaction capacity 10x.",
    badge: "E-Commerce System Client"
  }
];

function Home() {
  const location = useLocation();

  // Refs for DOM elements
  const navbarRef = useRef(null);
  const carouselRef = useRef(null);
  const dotsRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const videoRef = useRef(null);
  const handshakeVideoRef = useRef(null);
  const timelineScrollRef = useRef(null);

  // Refs for sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // State for active nav item
  const [activeNav, setActiveNav] = useState('home');

  // State for carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = 5;

  // State for digital journey tabs
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Navbar visibility
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // State for handshake video - play once
  const [activeVision, setActiveVision] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [whyVideoPlayed, setWhyVideoPlayed] = useState(false);

  // State for interactive Client Experiences auto-showcase (not cards)
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  useEffect(() => {
    if (isReviewPaused) return;
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % customerReviewsData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isReviewPaused]);

  // State for brand showcase light - starts ON
  const [lightOn, setLightOn] = useState(true);

  const { scrollYProgress } = useScroll();

  // Track which animations have played
  const [animationsPlayed, setAnimationsPlayed] = useState({
    about: false,
    services: false,
    journey: false,
    why: false,
    timeline: false,
    cta: false
  });

  // ========================================
  // INSTAGRAM API STATE
  // ========================================
  // Posts start empty — populated by instagramService.js calling the backend
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [instagramProfile, setInstagramProfile] = useState({
    username: 'veronic_infotech',
    name: 'Veronic',
    posts: 24,
    followers: 52,
    following: 10
  });
  const [instagramLoading, setInstagramLoading] = useState(true);
  const [instagramError, setInstagramError] = useState(null);
  const [instagramLastUpdated, setInstagramLastUpdated] = useState(null);
  const [instagramFromCache, setInstagramFromCache] = useState(false);

  const fetchInstagramPosts = async () => {
    try {
      setInstagramError(null);

      const response = await getInstagramFeed();
      // Use live API data; if empty the UI shows the graceful fallback state
      const media = response.media && response.media.length > 0 ? response.media : [];

      setInstagramProfile(response.profile || {});
      setInstagramPosts(media);
      setInstagramLastUpdated(response.lastUpdated);
      setInstagramFromCache(response.fromCache || false);
      setInstagramError(null);
    } catch (error) {
      console.warn('Instagram feed unavailable.', error);
      setInstagramProfile(null);
      setInstagramPosts([]);
      setInstagramError(true);
      setInstagramFromCache(false);
    } finally {
      setInstagramLoading(false);
    }
  };

  const refreshInstagramFeed = () => {
    fetchInstagramPosts();
  };

  useEffect(() => {
    fetchInstagramPosts();

    const refreshInterval = setInterval(() => {
      refreshInstagramFeed();
    }, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Play handshake video at fast speed once until 7.5s (full model shown)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && handshakeVideoRef.current && handshakeVideoRef.current.currentTime < 7.5) {
            handshakeVideoRef.current.playbackRate = 1.25;
            if (handshakeVideoRef.current.paused) {
              handshakeVideoRef.current.play().catch(() => { });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Why video effect removed as it was replaced with an image
  // Toggle light every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLightOn(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInOnce = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const fadeUpOnce = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const fadeLeftOnce = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const fadeRightOnce = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const scaleInOnce = {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  // Handle scroll for navbar
  useEffect(() => {
    let hideTimeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (hideTimeout) clearTimeout(hideTimeout);

      if (currentScrollY > 50) {
        setNavbarScrolled(true);
        if (currentScrollY > lastScrollY) {
          setVisible(false); // Hide on scroll down
        } else {
          setVisible(true); // Show on scroll up
          hideTimeout = setTimeout(() => setVisible(false), 3000); // Hide after 3s
        }
      } else {
        setNavbarScrolled(false);
        setVisible(true);
      }
      lastScrollY = currentScrollY;

      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'testimonials', ref: testimonialsRef },
        { id: 'cta', ref: ctaRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveNav(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  // Carousel logic
  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth <= 640) setVisibleCards(1);
      else if (window.innerWidth <= 1024) setVisibleCards(2);
      else setVisibleCards(3);
    }

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = document.querySelectorAll(".testimonial-card");
    if (cards.length === 0) return;

    const gap = 24;
    const w = cards[0]?.offsetWidth || 0;
    carousel.style.transform = `translateX(-${carouselIndex * (w + gap)}px)`;
  }, [carouselIndex]);

  useEffect(() => {
    const dotsContainer = dotsRef.current;
    if (!dotsContainer) return;

    const maxIndex = Math.max(0, totalCards - visibleCards);
    let html = "";
    for (let i = 0; i <= maxIndex; i++) {
      html += `<div class="dot ${i === carouselIndex ? "active" : ""}" data-index="${i}"></div>`;
    }
    dotsContainer.innerHTML = html;

    const dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dot) => {
      dot.addEventListener("click", function () {
        const index = parseInt(this.dataset.index);
        setCarouselIndex(index);
      });
    });
  }, [carouselIndex, visibleCards]);

  const handlePrevClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNextClick = () => {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (carouselIndex < maxIndex) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const scrollToSection = (ref, sectionId) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(sectionId);
    setIsMenuOpen(false);
  };

  const displayedPostCount = instagramPosts.length;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleAnimationComplete = (section) => {
    setAnimationsPlayed(prev => ({ ...prev, [section]: true }));
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans">
      {/* Simple Background */}
      <div className="fixed inset-0 bg-[#F5F8FA]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.08),transparent_70%)]" />
      </div>

      {/* Navbar - Black background with white links initially -> White background with black links after scrolling */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section - Clean & Perfect Three.js Glow Sphere */}
      <section ref={heroRef} id="home" className="relative h-screen w-full overflow-hidden bg-[#04060d]">
        {/* Three.js Intense Glow & Hover Expand Sphere */}
        <GlowCanvasBackground />

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center max-w-4xl px-4 sm:px-6 relative pointer-events-auto">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ShieldCheck className="w-4 h-4 text-[#9DB4C6]" />
              </motion.div>
              <span className="text-sm text-white font-bold tracking-widest uppercase">DRIVEN BY PURPOSE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-space hover:opacity-90 transition-opacity duration-300 select-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Technology That</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9DB4C6] via-white to-[#9DB4C6]">
                Transforms Business
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-white/70 mt-2">
                Through Smart Engineering
              </span>
            </motion.h1>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-7 py-3 bg-gradient-to-r from-[#00E5FF] to-[#0055FF] text-[#0B0F14] font-bold rounded-full text-sm shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-full border border-white/30 text-white font-bold text-sm transition-all duration-300 hover:bg-white/10 hover:border-[#00E5FF]/50"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Innovation Hub Section - New Unique Interactive Layout */}
      <section ref={aboutRef} id="about" className="relative py-20 lg:py-32 overflow-hidden bg-[#0B0F14]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(30,42,57,0.4),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(157,180,198,0.1),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side: Sticky Headers */}
            <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/30 border border-[#1E2A39]/50 mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-[#9DB4C6]" />
                  <span className="text-sm font-medium text-white/90">Our Vision</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-space mb-6">
                  Pioneering Digital <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DB4C6] to-[#4A6A8A]">
                    Ecosystems
                  </span>
                </h2>
                <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                  We transcend traditional development by engineering scalable, intelligent, and highly responsive platforms that redefine how businesses operate and scale in the modern era.
                </p>

                <div className="hidden lg:flex items-center gap-4 mt-12">
                  <div className="w-16 h-0.5 bg-[#1E2A39]" />
                  <span className="text-sm font-semibold text-white/40 tracking-[0.2em] uppercase">Interactive Approach</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Interactive List */}
            <div className="lg:w-7/12 flex flex-col gap-6">
              {[
                {
                  id: "01",
                  title: "Advanced Engineering",
                  desc: "Harnessing bleeding-edge technology to build robust and scalable architecture that stands the test of time.",
                  icon: Cpu,
                },
                {
                  id: "02",
                  title: "Seamless Integration",
                  desc: "Connecting disparate systems into a unified, high-performance ecosystem with seamless API connectivity.",
                  icon: Network,
                },
                {
                  id: "03",
                  title: "Innovative Strategy",
                  desc: "Data-driven insights and forward-thinking planning to outpace the competition and dominate the market.",
                  icon: Lightbulb,
                }
              ].map((item, index) => {
                const isActive = activeVision === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setActiveVision(index)}
                    onClick={() => setActiveVision(index)}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer border ${isActive
                      ? 'bg-[#1E2A39]/20 border-[#9DB4C6]/30 shadow-2xl shadow-[#1E2A39]/20'
                      : 'bg-transparent border-white/5 hover:border-white/10'
                      }`}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#1E2A39]/40 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />

                    <div className="relative z-10 p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                      {/* Number/Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-[#9DB4C6] text-[#0B0F14] scale-110' : 'bg-[#1E2A39]/50 text-white/40 group-hover:bg-[#1E2A39] group-hover:text-white/60'
                        }`}>
                        {isActive ? <item.icon className="w-8 h-8" /> : <span className="text-xl font-bold font-space">{item.id}</span>}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-2xl sm:text-3xl font-bold font-space transition-colors duration-500 mb-3 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                          }`}>
                          {item.title}
                        </h3>
                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                          }`}>
                          <div className="overflow-hidden">
                            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 ${isActive ? 'bg-[#9DB4C6]' : 'bg-transparent'
                      }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Unique Interactive Expandable Matrix (Same layout as Your Journey) */}
      <section ref={servicesRef} id="services" className="relative py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden bg-[#F5F8FA] border-t border-white/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-[#1E2A39]/15 to-transparent rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: [-50, 50, -50]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-l from-[#0B0F14]/15 to-transparent rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: [50, -50, 50]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onAnimationComplete={() => handleAnimationComplete('services')}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39] border border-white/30 mb-4 sm:mb-6 shadow-xl text-white">
              <Code2 className="w-4 h-4 text-[#9DB4C6]" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase font-space">Our Expertise // GLACIER BLUE THEME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-2 text-[#0B0F14] relative z-10 font-space tracking-tight select-none">
              Comprehensive Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A39] via-[#0B0F14] to-[#2C3E55] mt-2">
                Solutions Deck
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0B0F14]/80 max-w-3xl mx-auto mt-4 px-2 font-medium">
              Click or hover any protocol below to expand detailed engineering architecture and strategic growth drivers.
            </p>
          </motion.div>

          {/* Unique Interactive Expandable Matrix (Same as Your Journey) */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 min-h-[580px] sm:min-h-[620px] lg:h-[600px] w-full max-w-[1550px] mx-auto mt-8">
            {[
              {
                id: 'app-development',
                shortWord: 'A P P L I C A T I O N',
                title: 'Application Development',
                description: 'Custom enterprise software, mobile & web architectures engineered with cutting-edge cloud-native frameworks.',
                icon: Code2,
                path: '/services'
              },
              {
                id: 'brand-marketing',
                shortWord: 'M A R K E T I N G',
                title: 'Brand Marketing & SEO',
                description: 'High-impact digital marketing strategies, AI-enhanced SEO protocols, and brand presence engineered for maximum conversion.',
                icon: Megaphone,
                path: '/services'
              },
              {
                id: 'custom-software',
                shortWord: 'S O F T W A R E',
                title: 'Custom Enterprise Software',
                description: 'Bespoke, zero-latency enterprise ecosystems designed to streamline mission-critical operations and scale seamlessly.',
                icon: Layers,
                path: '/services'
              },
              {
                id: 'mobile-apps',
                shortWord: 'M O B I L E',
                title: 'Native Mobile Apps',
                description: 'Ultra-fast iOS and Android applications with intuitive UI/UX and hardware-accelerated fluid performance.',
                icon: Smartphone,
                path: '/services'
              },
              {
                id: 'website-development',
                shortWord: 'W E B  P L A T F O R M S',
                title: 'High-Performance Web Platforms',
                description: 'Next-generation web applications built with React and Next.js, featuring instantaneous load times and robust security.',
                icon: Globe,
                path: '/services'
              },
              {
                id: 'seo',
                shortWord: 'I N T E L L I G E N C E',
                title: 'AI & Data Engineering',
                description: 'Harness enterprise analytics and machine learning pipelines to drive automated decision-making and business growth.',
                icon: Search,
                path: '/services'
              }
            ].map((service, idx) => {
              const isActive = activeService === idx;
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  onHoverStart={() => setActiveService(idx)}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`cursor-pointer rounded-2xl lg:rounded-3xl border transition-all duration-500 overflow-hidden relative ${isActive
                    ? "flex-[3.8] bg-gradient-to-br from-[#1E2A39] via-[#0B0F14] to-[#0B0F14] border-white shadow-[0_20px_50px_rgba(11,15,20,0.5)] p-6 sm:p-8 lg:p-10"
                    : "flex-[0.8] bg-[#1E2A39]/90 hover:bg-[#0B0F14] border-white/20 hover:border-white p-4 lg:py-6 lg:px-3 flex items-center justify-center"
                    }`}
                >
                  {/* Glowing background accent for active card */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#9DB4C6]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                  )}

                  <div
                    className={`absolute font-black font-space select-none pointer-events-none transition-all duration-500 ${isActive
                      ? "top-4 right-6 text-7xl sm:text-8xl text-white/[0.08]"
                      : "top-2 right-4 text-4xl lg:text-5xl text-white/10 group-hover:text-[#9DB4C6]/30"
                      }`}
                  >
                    0{idx + 1}
                  </div>

                  {isActive ? (
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <span className="text-xs font-bold tracking-[0.25em] text-[#9DB4C6] uppercase bg-[#9DB4C6]/20 px-4 py-1.5 rounded-full border border-[#9DB4C6]/40 flex items-center gap-2 shadow-[0_0_15px_rgba(157,180,198,0.3)]">
                            <service.icon className="w-4 h-4 text-[#9DB4C6]" />
                            Expertise // Protocol 0{idx + 1}
                          </span>
                          <span className="text-xs font-mono text-[#9DB4C6] border border-[#9DB4C6]/30 px-3 py-1 rounded-lg bg-white/5">
                            [STATUS: ACTIVE]
                          </span>
                        </div>

                        <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-[#9DB4C6] uppercase mb-1">
                          // {service.shortWord}
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-space text-white mb-4 leading-tight tracking-tight">
                          {service.title}
                        </h3>

                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light max-w-xl mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2 mb-6">
                          {["Enterprise Scalability", "Zero-Latency UI", "Custom Architecture"].map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="text-[11px] font-mono uppercase bg-white/[0.08] text-[#9DB4C6] px-3 py-1 rounded-md border border-white/20"
                            >
                              // {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                        <Link to={service.path}>
                          <div className="inline-flex items-center gap-3 text-[#0B0F14] font-bold tracking-[0.15em] uppercase text-xs sm:text-sm bg-[#9DB4C6] hover:bg-white border border-[#9DB4C6] px-6 py-3 rounded-full transition-all duration-300 shadow-lg">
                            <span>Explore Service Solution</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>

                        <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                          VERONIC // EXPERTISE PROTOCOL
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 flex flex-col justify-between h-full group">
                      <div className="hidden lg:flex flex-col items-center justify-between h-full py-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#9DB4C6] group-hover:scale-110 transition-all duration-500 shadow-sm">
                          <service.icon className="w-5 h-5 text-gray-300 group-hover:text-[#9DB4C6] transition-colors" />
                        </div>

                        <div className="my-auto py-6 flex flex-col items-center gap-2">
                          <span className="[writing-mode:vertical-rl] rotate-180 text-lg font-black tracking-[0.25em] text-[#9DB4C6] group-hover:text-white transition-colors duration-500 font-space uppercase">
                            {service.shortWord}
                          </span>
                          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-mono tracking-wider text-gray-300 group-hover:text-white transition-colors duration-500 uppercase">
                            Protocol 0{idx + 1}
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#9DB4C6] group-hover:border-[#9DB4C6] transition-all duration-500">
                          <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0B0F14] -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                      </div>

                      <div className="flex lg:hidden items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                            <service.icon className="w-4 h-4 text-[#9DB4C6]" />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-[#9DB4C6] uppercase block">Protocol 0{idx + 1} // {service.shortWord}</span>
                            <span className="text-sm font-bold text-white line-clamp-1">{service.title}</span>
                          </div>
                        </div>

                        <div className="text-xs font-mono text-gray-200 border border-white/20 bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 group-hover:border-[#9DB4C6] group-hover:text-[#9DB4C6]">
                          <span>Expand</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-14 sm:mt-18 lg:mt-20"
          >
            <Link to="/services">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1E2A39] hover:bg-[#0B0F14] border border-white/30 text-white font-bold tracking-wider text-xs sm:text-sm uppercase transition-all duration-300 cursor-pointer shadow-xl"
              >
                Explore All Enterprise Solutions
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Industry Leaders Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#F5F8FA] border-t border-[#9DB4C6]/10 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A39]/5 via-[#9DB4C6]/5 to-[#1E2A39]/5" />

        <div className="relative z-10 max-w-full px-0">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Trusted By</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Industry Leaders
              <span className="block text-[#1E2A39] mt-2">
                Worldwide
              </span>
            </h2>
          </motion.div>

          <div className="marquee-container">
            <div className="marquee-track marquee-right-to-left">
              {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                <a
                  key={`r2l-${index}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-item mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14 relative flex items-center justify-center"
                >
                  <img
                    src={company.colorLogo || company.logo}
                    alt={company.name}
                    onError={(e) => { e.target.src = company.logo; }}
                    className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 w-auto max-w-[120px] sm:max-w-[140px] object-contain opacity-50 hover:!opacity-100 transition-all duration-300 ease-in-out filter grayscale hover:!grayscale-0 hover:!scale-105"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="marquee-container mt-4 sm:mt-6">
            <div className="marquee-track marquee-left-to-right">
              {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                <a
                  key={`l2r-${index}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-item mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14 relative flex items-center justify-center"
                >
                  <img
                    src={company.colorLogo || company.logo}
                    alt={company.name}
                    onError={(e) => { e.target.src = company.logo; }}
                    className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 w-auto max-w-[120px] sm:max-w-[140px] object-contain opacity-50 hover:!opacity-100 transition-all duration-300 ease-in-out filter grayscale hover:!grayscale-0 hover:!scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ========================================
          NEW DIGITAL EVOLUTION SCROLL STACK SECTION (APPLE / LINEAR / STRIPE INSPIRED)
          ======================================== */}
      <DigitalEvolutionSection />

      {/* ========================================
          OUR INNOVATION ROADMAP SECTION WITH SCROLLING ANIMATION
          ======================================== */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#0B0F14] text-white w-full border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E2A39]/30 via-[#0B0F14] to-[#0B0F14] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Animated Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-lg">
              <RocketIcon className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-xs sm:text-sm font-bold text-[#00E5FF] tracking-[0.2em] uppercase">Our Innovation Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black px-4 text-white font-space tracking-tight select-none leading-tight mb-6">
              Journey of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3884FF] to-[#E5A36F]">
                Digital Excellence.
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
              From real-time analytics to hyper-velocity cloud architecture — experience our step-by-step technological evolution as you scroll.
            </p>
          </motion.div>

          {/* Horizontal Timeline with Scrolling Animation */}
          <div className="relative pt-8 pb-12">
            {/* Animated Timeline Center Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#00E5FF]/20 via-[#00E5FF] to-[#E5A36F]/40 origin-left rounded-full hidden sm:block shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            />

            {/* Timeline Animated Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 relative">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    className={`flex flex-col items-center ${isEven ? 'sm:mb-16' : 'sm:mt-16'}`}
                  >
                    {/* Animated Content Box */}
                    <motion.div
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ duration: 0.25 }}
                      className="bg-gradient-to-br from-[#121A24]/95 to-[#0E151E]/98 rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 hover:border-[#00E5FF]/50 w-full max-w-[260px] mx-auto backdrop-blur-xl group transition-all duration-300"
                    >
                      <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-white/10">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-[#00E5FF] tracking-wider uppercase bg-[#00E5FF]/10 px-2.5 py-1 rounded-md border border-[#00E5FF]/30">
                            {item.year}
                          </span>
                          <div className="text-base font-bold text-white leading-tight mt-1 group-hover:text-[#00E5FF] transition-colors">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#00E5FF]">{item.stats}</span>
                        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                      </div>
                    </motion.div>

                    {/* Node Circle on Timeline */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="relative z-10 w-10 h-10 rounded-full border-4 border-[#0B0F14] bg-gradient-to-br from-[#00E5FF] to-[#0055FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.6)] my-4 sm:my-0"
                    >
                      <Icon className="w-4 h-4 text-[#0B0F14]" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Veronic - Enhanced Section with Image Left Side */}
      <section id="why-section" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F5F8FA] border-t border-[#9DB4C6]/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A39]/5 via-transparent to-[#1E2A39]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Why Veronic</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Why Choose
              <span className="block text-[#1E2A39] mt-2">
                Veronic?
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#0B0F14]/60 max-w-2xl mx-auto mt-3 px-2">
              Experience excellence in every solution we deliver
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Image with Animation */}
            <motion.div
              variants={fadeLeftOnce}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0B0F14]/20 flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[520px]">
                <img
                  src={whyImage}
                  alt="Why Veronic"
                  className="w-full h-auto min-h-[350px] sm:min-h-[450px] md:min-h-[520px] max-h-[650px] object-cover pointer-events-none select-none mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A39]/20 to-transparent pointer-events-none" />

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Shield className="w-4 h-4 text-[#1E2A39]" />
                  <span className="text-xs sm:text-sm font-medium text-[#0B0F14]">Trusted Partner</span>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs sm:text-sm font-medium text-[#0B0F14]">4.9/5 Rating</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content with Features */}
            <motion.div
              variants={fadeRightOnce}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0F14]">
                  Your Trusted Technology
                  <span className="block text-[#1E2A39]">Partner</span>
                </h3>
                <p className="text-sm sm:text-base text-[#0B0F14]/70 mt-3 leading-relaxed">
                  We combine deep industry expertise with cutting-edge technology to deliver solutions
                  that drive real business outcomes. Our client-centric approach ensures your success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {whyChooseData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#9DB4C6]/20 hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1E2A39] to-[#3A4A5F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-[#0B0F14] mb-1">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-[#0B0F14]/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-3 sm:gap-4 pt-2"
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1E2A39] text-[#F5F8FA] rounded-full font-medium text-sm sm:text-base shadow-lg shadow-[#1E2A39]/20 hover:shadow-[#1E2A39]/30 transition-shadow"
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#1E2A39]/30 text-[#0B0F14] font-medium text-sm sm:text-base hover:bg-[#1E2A39]/5 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          CUSTOMER REVIEWS / TESTIMONIALS SECTION WITH AUTOMATIC SLIDING ANIMATION
          ======================================== */}
      <section ref={testimonialsRef} id="testimonials" className="relative py-20 sm:py-28 lg:py-36 bg-[#0B0F14] text-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E2A39]/30 via-[#0B0F14] to-[#0B0F14] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-bold text-yellow-400 tracking-[0.2em] uppercase">Client Experiences // Reviews</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-space tracking-tight mb-6 text-white">
              Trusted by Executive <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3884FF] to-[#E5A36F]">
                Industry Leaders.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Discover how our state-of-the-art engineering and sticky protocol innovations transform business infrastructure into competitive supremacy.
            </p>
          </motion.div>

          {/* Simple, Pure Text Rotating Showcase (No cards, smaller font, automatic rotation without number buttons) */}
          <div
            className="max-w-4xl mx-auto text-center min-h-[260px] flex flex-col justify-between items-center py-6 sm:py-8 cursor-pointer"
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
          >
            <div className="flex-1 flex flex-col justify-center items-center w-full px-4 sm:px-8">
              <AnimatePresence mode="wait">
                {customerReviewsData[activeReviewIndex] && (
                  <motion.div
                    key={activeReviewIndex}
                    initial={{ opacity: 0, scale: 0.97, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full space-y-6"
                  >
                    {/* Clean, Elegant Smaller Quote Text */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto">
                      "{customerReviewsData[activeReviewIndex].quote}"
                    </blockquote>

                    {/* Clean Attribution */}
                    <div className="space-y-1 pt-2">
                      <div className="text-base sm:text-lg font-bold text-[#9DB4C6] tracking-wide">
                        — {customerReviewsData[activeReviewIndex].name}
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-gray-400">
                        {customerReviewsData[activeReviewIndex].role} &bull; <span className="text-white/80">{customerReviewsData[activeReviewIndex].company}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clean Automatic Status (No 1 2 3 4 5 buttons) */}
            <div className="pt-8 flex items-center justify-center gap-2 font-mono text-[11px] text-gray-500 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9DB4C6] animate-pulse" />
              <span>{isReviewPaused ? 'Interactive Showcase [Paused]' : 'Interactive Showcase [Auto-Rotating]'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INSTAGRAM FEED SECTION - UPDATED WITH LOAD MORE
          ======================================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#F5F8FA] w-full border-t border-[#9DB4C6]/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A39]/5 via-transparent to-[#1E2A39]/5" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F56040]/10 border border-[#833AB4]/20 mb-4">
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-[#E1306C]" />
              <span className="text-xs sm:text-sm text-[#0B0F14]">Follow Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-4 text-[#0B0F14] font-space hover:opacity-90 transition-opacity duration-300 select-none">
              Instagram
              <span className="block text-[#E1306C] mt-2">
                Feed
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#0B0F14]/60 max-w-2xl mx-auto mt-3 px-4">
              {instagramLoading ? 'Loading latest posts...' : ''}
            </p>
            {instagramError && (
              <p className="text-xs text-amber-600 mt-2">
                The Instagram feed is refreshing. Visit the profile directly for the latest updates.
              </p>
            )}
            {/* Instagram Profile Banner Card */}
            <div
              onClick={() => window.open('https://www.instagram.com/veronic_infotech', '_blank', 'noopener,noreferrer')}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  window.open('https://www.instagram.com/veronic_infotech', '_blank', 'noopener,noreferrer');
                }
              }}
              className="mt-8 mb-6 max-w-3xl mx-auto bg-[#0B0F14] border border-gray-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-gray-700 hover:shadow-[0_15px_45px_rgba(0,0,0,0.5)] group cursor-pointer relative overflow-hidden text-left flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F56040]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0B0F14] border border-gray-800/90 p-2.5 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0 flex items-center justify-center relative z-10">
                <img
                  src={instagramProfile?.profilePicture || accountLogoImage}
                  alt="@veronic_infotech profile avatar"
                  className="w-full h-full object-contain rounded-full"
                  onError={(event) => {
                    event.currentTarget.src = accountLogoImage;
                  }}
                />
              </div>

              <div className="flex-1 relative z-10 w-full text-center sm:text-left">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-space tracking-tight">
                      {instagramProfile?.username || 'veronic_infotech'}
                    </h3>
                    <span className="w-5 h-5 rounded-full bg-[#0095F6] flex items-center justify-center text-white text-xs font-bold shrink-0" title="Verified">✓</span>
                  </div>
                  <a
                    href="https://www.instagram.com/veronic_infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-wider text-[#E1306C] hover:text-[#F56040]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4" />
                    Follow Us
                  </a>
                </div>

                <div className="text-sm font-medium text-gray-400 mt-1">{instagramProfile?.name || 'Veronic'}</div>

                <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 text-sm sm:text-base text-gray-300 my-3 font-jakarta flex-wrap">
                  {instagramProfile?.posts !== undefined && <div><strong className="font-bold text-white">{instagramProfile.posts}</strong> <span className="text-gray-400">posts</span></div>}
                  {instagramProfile?.followers !== undefined && <div><strong className="font-bold text-white">{instagramProfile.followers}</strong> <span className="text-gray-400">followers</span></div>}
                  {instagramProfile?.following !== undefined && <div><strong className="font-bold text-white">{instagramProfile.following}</strong> <span className="text-gray-400">following</span></div>}
                </div>

                <div className="text-xs sm:text-sm text-gray-200 font-jakarta leading-relaxed space-y-0.5 mt-2">
                  <div>{instagramProfile?.biography || 'Business-Driven IT & Business Software Solutions 🚀'}</div>
                  {(instagramLastUpdated || instagramFromCache) && (
                    <div className="text-[11px] text-gray-400 hidden">
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full">
          <div className="instagram-swiper-wrapper">
            {instagramLoading ? (
              // Loading skeleton
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-[#1E2A39]/20 border-t-[#1E2A39] rounded-full animate-spin"></div>
                  <p className="text-[#0B0F14]/60 text-sm">Loading Instagram posts...</p>
                </div>
              </div>
            ) : instagramPosts.length === 0 ? (
              // Live stats display when posts are unavailable but profile data may exist
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center px-4 gap-8">
                {/* Live account stats */}
                <div className="flex items-center justify-center gap-8 sm:gap-12">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B0F14] font-space tabular-nums">
                      {instagramProfile?.posts !== null && instagramProfile?.posts !== undefined
                        ? instagramProfile.posts.toLocaleString()
                        : '—'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B0F14]/50 uppercase tracking-widest">Posts</span>
                  </div>
                  <div className="w-px h-12 bg-[#0B0F14]/10" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#E1306C] font-space tabular-nums">
                      {instagramProfile?.followers !== null && instagramProfile?.followers !== undefined
                        ? instagramProfile.followers.toLocaleString()
                        : '—'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B0F14]/50 uppercase tracking-widest">Followers</span>
                  </div>
                  <div className="w-px h-12 bg-[#0B0F14]/10" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B0F14] font-space tabular-nums">
                      {instagramProfile?.following !== null && instagramProfile?.following !== undefined
                        ? instagramProfile.following.toLocaleString()
                        : '—'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B0F14]/50 uppercase tracking-widest">Following</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/veronic_infotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @veronic_infotech
                </a>
              </div>
            ) : (
              <>
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  loop={true}
                  speed={800}
                  freeMode={false}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 80, // Overlap cards closely like the image
                    depth: 180, // 3D depth curve
                    modifier: 1,
                    slideShadows: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className="instagram-swiper py-12"
                  style={{
                    width: '100%',
                    paddingTop: '30px',
                    paddingBottom: '50px'
                  }}
                >
                  {instagramPosts.map((post, index) => (
                    <SwiperSlide key={post.id || index} className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] group/slide">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative z-10 hover:z-20"
                      >
                        <div
                          className="flex flex-col w-full aspect-[3/4] bg-[#0B0F14] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 relative cursor-pointer border border-white/5"
                          onClick={() => window.open('https://www.instagram.com/veronic_infotech', '_blank', 'noopener,noreferrer')}
                          role="button"
                          tabIndex={0}
                          aria-label="Open Veronic Infotech Instagram Profile"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              window.open('https://www.instagram.com/veronic_infotech', '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          {post.image ? (
                            <img src={post.image} alt={post.caption || 'Instagram post preview'} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
                              <Instagram className="w-10 h-10 text-gray-400 mb-1" />
                              <span className="text-gray-400 text-xs font-medium">Post preview unavailable</span>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="absolute top-5 left-5 z-20">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] p-[1.5px] shadow-lg">
                                <img src={instagramProfile?.profilePicture || lolo1} alt="veronic logo" className="w-full h-full object-cover rounded-full bg-black border border-black" />
                              </div>
                            </div>
                          </div>



                          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 z-20">
                            <div className="flex items-center gap-4 mt-2">
                              {post.likes !== undefined && (
                                <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold drop-shadow">
                                  <Heart className="w-3.5 h-3.5 text-[#E1306C] fill-transparent group-hover:fill-[#E1306C] transition-all" /> {post.likes}
                                </div>
                              )}
                              {post.comments !== undefined && (
                                <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold drop-shadow">
                                  <MessageCircle className="w-3.5 h-3.5 text-white" /> {post.comments}
                                </div>
                              )}
                              <span className="text-white font-bold text-[11px] ml-auto bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors shadow-md">View Profile</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-[#0B0F14]/40 tracking-widest uppercase hidden">
              </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A39] via-[#2A3A4F] to-[#0B0F14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={fadeUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onAnimationComplete={() => handleAnimationComplete('cta')}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white">Let's Create Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white font-space hover:opacity-90 transition-opacity duration-300 select-none">
              LET'S
              <span className="block text-[#9DB4C6] mt-2">
                CREATE
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-2">
              Ready to transform your brand? Let's talk about your project and build something amazing together.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-[#F5F8FA] text-[#1E2A39] rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-white/25 transition-shadow"
                >
                  <span className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </Link>

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

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
                { value: '10+', label: 'Years' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleInOnce}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-xs sm:text-sm text-white/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Black Background */}
      <Footer />
      {/* <footer className="relative py-12 sm:py-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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

            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {['Cloud Services', 'Cybersecurity', 'AI & Automation', 'Data Analytics'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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
      </footer> */}

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ========================================
           PERFECT CONTINUOUS MARQUEE - NO GLITCH
           ======================================== */
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: transparent;
        }
        
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        .marquee-right-to-left {
          animation: scrollRightToLeft 25s linear infinite;
        }
        
        .marquee-left-to-right {
          animation: scrollLeftToRight 25s linear infinite;
        }
        
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        
        @keyframes scrollLeftToRight {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        
        .marquee-right-to-left:hover,
        .marquee-left-to-right:hover {
          animation-play-state: paused;
        }
        
        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ========================================
           TECHNOLOGY MARQUEE
           ======================================== */
        .tech-marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .tech-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        .tech-marquee-single {
          animation: techScrollSingle 40s linear infinite;
        }
        
        @keyframes techScrollSingle {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        
        .tech-marquee-single:hover {
          animation-play-state: paused;
        }
        
        .tech-marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          width: 24px;
          background: #1E2A39;
          border-radius: 4px;
        }
        @media (min-width: 640px) {
          .dot {
            width: 10px;
            height: 10px;
          }
          .dot.active {
            width: 30px;
          }
        }

        /* ========================================
           INSTAGRAM 3D CURVED COVERFLOW SLIDER
           ======================================== */
        .instagram-swiper-wrapper {
          padding: 10px 0 40px 0;
          position: relative;
          max-width: 100%;
          margin: 0 auto;
          perspective: 1000px;
        }

        .instagram-swiper {
          padding: 20px 0 40px 0;
          width: 100%;
          overflow: visible;
        }

        .instagram-swiper .swiper-button-next,
        .instagram-swiper .swiper-button-prev {
          display: none !important;
        }

        .instagram-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 200px;
          height: auto;
          border-radius: 12px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        @media (min-width: 320px) {
          .instagram-swiper .swiper-slide { width: 160px; }
          .instagram-swiper-wrapper { padding: 5px 0 30px 0; }
        }
        @media (min-width: 480px) {
          .instagram-swiper .swiper-slide { width: 180px; }
          .instagram-swiper-wrapper { padding: 8px 0 35px 0; }
        }
        @media (min-width: 640px) {
          .instagram-swiper .swiper-slide { width: 200px; }
          .instagram-swiper .swiper-button-next,
          .instagram-swiper .swiper-button-prev {
            width: 36px;
            height: 36px;
          }
          .instagram-swiper .swiper-button-next:after,
          .instagram-swiper .swiper-button-prev:after { font-size: 14px; }
        }
        @media (min-width: 768px) {
          .instagram-swiper .swiper-slide { width: 220px; }
          .instagram-swiper-wrapper { padding: 15px 0 45px 0; }
          .instagram-swiper .swiper-button-next,
          .instagram-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
        }
        @media (min-width: 1024px) {
          .instagram-swiper .swiper-slide { width: 250px; }
          .instagram-swiper-wrapper { padding: 20px 0 50px 0; }
          .instagram-swiper .swiper-button-next,
          .instagram-swiper .swiper-button-prev {
            width: 46px;
            height: 46px;
          }
          .instagram-swiper .swiper-button-next:after,
          .instagram-swiper .swiper-button-prev:after { font-size: 16px; }
        }
        @media (min-width: 1280px) {
          .instagram-swiper .swiper-slide { width: 280px; }
          .instagram-swiper-wrapper { padding: 20px 0 60px 0; }
          .instagram-swiper .swiper-button-next,
          .instagram-swiper .swiper-button-prev {
            width: 52px;
            height: 52px;
          }
          .instagram-swiper .swiper-button-next:after,
          .instagram-swiper .swiper-button-prev:after { font-size: 18px; }
        }
        @media (min-width: 1536px) {
          .instagram-swiper .swiper-slide { width: 320px; }
        }

        .instagram-swiper .swiper-slide-shadow {
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1)) !important;
        }

        .instagram-swiper .swiper-slide-active {
          transform: scale(1.06) translateZ(20px);
          z-index: 10;
        }

        .instagram-swiper .swiper-slide-active .group > div {
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.1);
        }

        .instagram-swiper .swiper-pagination {
          position: relative;
          margin-top: 15px;
          bottom: 0;
          display: flex;
          justify-content: center;
          gap: 6px;
        }
        @media (min-width: 640px) {
          .instagram-swiper .swiper-pagination {
            gap: 8px;
            margin-top: 20px;
          }
        }

        .instagram-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #9DB4C6;
          opacity: 0.5;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
        }
        @media (min-width: 640px) {
          .instagram-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }

        .instagram-swiper .swiper-pagination-bullet-active {
          background: #1E2A39;
          opacity: 1;
          width: 25px;
          border-radius: 4px;
        }
        @media (min-width: 640px) {
          .instagram-swiper .swiper-pagination-bullet-active {
            width: 30px;
            border-radius: 5px;
          }
        }

        .instagram-swiper .swiper-button-next,
        .instagram-swiper .swiper-button-prev {
          color: #1E2A39;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255,255,255,0.3);
          transform: translateZ(20px);
          display: none;
        }
        @media (min-width: 768px) {
          .instagram-swiper .swiper-button-next,
          .instagram-swiper .swiper-button-prev {
            display: flex;
          }
        }

        .instagram-swiper .swiper-button-next:after,
        .instagram-swiper .swiper-button-prev:after {
          font-weight: bold;
        }

        .instagram-swiper .swiper-button-next:hover,
        .instagram-swiper .swiper-button-prev:hover {
          background: #1E2A39;
          color: white;
          transform: translateZ(30px) scale(1.1);
          box-shadow: 0 12px 40px rgba(30,42,57,0.4);
        }

        .instagram-swiper .swiper-button-next.swiper-button-disabled,
        .instagram-swiper .swiper-button-prev.swiper-button-disabled {
          opacity: 0.2;
          cursor: not-allowed;
          transform: none;
        }

        .instagram-swiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .instagram-swiper .swiper-slide-prev,
        .instagram-swiper .swiper-slide-next {
          transform: scale(0.92) translateZ(-15px);
        }

        .instagram-swiper .swiper-slide-duplicate-prev,
        .instagram-swiper .swiper-slide-duplicate-next {
          transform: scale(0.88) translateZ(-30px);
        }

        .instagram-swiper .swiper-slide:hover .group > div {
          box-shadow: 0 20px 60px rgba(225, 48, 108, 0.15), 0 0 40px rgba(225, 48, 108, 0.05);
        }

        .instagram-swiper .swiper-slide .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .instagram-swiper .swiper-slide .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}} />
    </div>
  );
}

export default Home;