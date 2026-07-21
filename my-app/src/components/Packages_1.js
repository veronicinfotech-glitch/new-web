import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Monitor,
  Smartphone,
  Globe,
  Database,
  Megaphone,
  Layout,
  Code,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Star,
  Rocket,
  TrendingUp,
  Target,
  BarChart3,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  X,
  CreditCard,
  Building,
  CheckCircle2,
  Crown,
  Briefcase,
  Bot,
  Factory,
  Settings,
  Workflow,
  MousePointerClick,
  MonitorSmartphone,
  Code2,
  Brush,
  Gauge,
  ShoppingCart,
  Building2,
  UserCheck,
  Instagram as InstagramIcon,
  Facebook,
  Search,
  MessageCircle,
  Share2,
  Cpu as CpuIcon
} from "lucide-react";
import lolo1 from "../images/lolo1.png";

// ============================================================
// GLASS CARD COMPONENT
// ============================================================
const GlassCard = ({ children, className, isHighlighted, cardColor, cardIndex, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      style={isHighlighted && cardColor ? {
        background: `linear-gradient(135deg, ${cardColor}10, ${cardColor}30)`,
        borderColor: `${cardColor}60`,
      } : {}}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background gradients for all cards */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl ${
          isHighlighted ? 'bg-current opacity-30' : 'bg-[#9DB4C6]'
        }`} style={isHighlighted && cardColor ? { backgroundColor: cardColor } : {}} />
        <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl ${
          isHighlighted ? 'bg-current opacity-30' : 'bg-[#1E2A39]'
        }`} style={isHighlighted && cardColor ? { backgroundColor: cardColor } : {}} />
      </div>
      
      {/* Dynamic hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none"
        initial={{ x: '-100%', y: '100%', opacity: 0 }}
        animate={isHovered ? { x: '100%', y: '-100%', opacity: 1 } : { x: '-100%', y: '100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

// ============================================================
// WEBSITE PACKAGES MODAL
// ============================================================
const WebsitePackagesModal = ({ isOpen, onClose }) => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  if (!isOpen) return null;

  const websitePackages = [
    {
      id: 1,
      title: "Landing Page Website",
      price: "₹12,999",
      description: "Perfect for single product, service, or event promotion",
      features: [
        "1 Long-scroll landing page",
        "Mobile-first responsive design",
        "WhatsApp chat integration",
        "Contact form & Lead capture",
        "Basic SEO setup",
        "Social media integration",
        "Premium UI/UX layout",
      ],
      icon: Layout,
      badge: "Basic",
      setupTime: "1 Week",
      isPopular: false,
      isProfessional: false,
    },
    {
      id: 2,
      title: "Business Starter Website",
      price: "₹24,999",
      description: "Ideal for small businesses needing a professional online presence",
      features: [
        "Up to 5 Pages (Home, About, Services, etc.)",
        "Dynamic Contact Form",
        "WhatsApp & Calling Integration",
        "Basic CMS for simple updates",
        "Google My Business Setup",
        "Responsive across all devices",
        "On-page SEO optimization",
      ],
      icon: Building,
      badge: "Popular Choice",
      setupTime: "2-3 Weeks",
      isPopular: true,
      isProfessional: false,
    },
    {
      id: 3,
      title: "Professional Business Website",
      price: "₹49,999",
      description: "For growing companies needing advanced features and management",
      features: [
        "Up to 15 Pages",
        "Full CMS Admin Dashboard",
        "Blog & News Management",
        "Product/Service Catalog",
        "Advanced Lead Generation Forms",
        "Google Analytics Integration",
        "Live Chat / WhatsApp Support",
        "Advanced SEO Setup",
      ],
      icon: Briefcase,
      badge: "Professional",
      setupTime: "3-4 Weeks",
      isPopular: false,
      isProfessional: true,
    },
    {
      id: 4,
      title: "E-Commerce / Custom Portal",
      price: "₹99,999",
      description: "Complete online selling or custom business solution",
      features: [
        "Unlimited Products/Pages capability",
        "Payment Gateway Integration",
        "Shopping Cart & Checkout",
        "Order Management System",
        "Customer Login/Dashboard",
        "Inventory Management",
        "Automated Email Notifications",
        "Premium Custom Design",
      ],
      icon: ShoppingCart,
      badge: "Enterprise",
      setupTime: "4-6 Weeks",
      isPopular: false,
      isProfessional: false,
    },
  ];

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  const popularColor = '#ddddee';
  const professionalColor = '#ccccdd';

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F14]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F5F8FA] border border-[#9DB4C6]/30 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1E2A39]/10 backdrop-blur-sm text-[#0B0F14]/80 hover:text-[#0B0F14] hover:bg-[#1E2A39]/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
                    <Globe className="w-4 h-4 text-[#1E2A39]" />
                    <span className="text-sm text-[#1E2A39]">
                      Business Website Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F14] mb-3">
                    Professional Web Solutions
                  </h2>
                  <p className="text-[#0B0F14]/60 text-base max-w-2xl mx-auto">
                    Click on any package to view pricing details
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {websitePackages.map((pkg, index) => {
                    const Icon = pkg.icon;
                    const isExpanded = expandedPackage === pkg.id;
                    
                    const isPopular = pkg.isPopular;
                    const isProfessional = pkg.isProfessional;
                    const isHighlighted = isPopular || isProfessional;
                    
                    const cardColor = isPopular ? popularColor : (isProfessional ? professionalColor : null);
                    
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="h-full cursor-pointer"
                        onClick={() => togglePackage(pkg.id)}
                      >
                        <GlassCard
                          isHighlighted={isHighlighted}
                          cardColor={cardColor}
                          cardIndex={index}
                          className={`h-full flex flex-col p-5 rounded-2xl transition-all duration-300 ${
                            isHighlighted
                              ? `backdrop-blur-xl border`
                              : 'bg-white border-2 border-transparent hover:border-[#1E2A39]/50 shadow-sm hover:shadow-lg'
                          } ${
                            isExpanded 
                              ? isHighlighted 
                                ? `shadow-2xl` 
                                : 'border-[#1E2A39] shadow-lg'
                              : isHighlighted
                                ? ``
                                : ''
                          }`}
                        >
                          {/* Popular Badge */}
                          {isPopular && (
                            <div className="absolute -top-1 -right-1 z-20">
                              <div className="relative">
                                <motion.div 
                                  className="absolute -inset-1 bg-[#ddddee] rounded-full blur-md"
                                  animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                                <div className="relative bg-gradient-to-r from-[#ddddee] to-[#ccccdd] text-[#0B0F14] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm border border-white/30">
                                  <motion.div
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Star className="w-3 h-3 fill-[#0B0F14]" />
                                  </motion.div>
                                  Popular Choice
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Professional Badge */}
                          {isProfessional && (
                            <div className="absolute -top-1 -right-1 z-20">
                              <div className="relative">
                                <motion.div 
                                  className="absolute -inset-1 bg-[#ccccdd] rounded-full blur-md"
                                  animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                                <div className="relative bg-gradient-to-r from-[#ccccdd] to-[#bbbbcc] text-[#0B0F14] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm border border-white/30">
                                  <motion.div
                                    animate={{
                                      scale: [1, 1.15, 1],
                                      rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Crown className="w-3 h-3" />
                                  </motion.div>
                                  Professional
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                            isHighlighted 
                              ? `backdrop-blur-sm border border-white/30`
                              : 'bg-[#1E2A39]/10 border border-[#1E2A39]/20'
                          } mb-4 self-start z-10`}
                          style={{
                            background: isHighlighted ? `${cardColor}40` : undefined,
                          }}>
                            <Icon className={`w-3 h-3 ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`} />
                            <span className={`text-xs font-semibold ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`}>
                              {pkg.badge}
                            </span>
                          </div>
                          
                          <h3 className={`text-lg font-bold mb-2 z-10 ${
                            isHighlighted ? 'text-[#0B0F14]' : 'text-[#0B0F14]'
                          }`}>
                            {pkg.title}
                          </h3>
                          
                          <motion.div 
                            className={`text-xl font-bold ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'} mb-3 z-10`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: isExpanded ? 1 : 0,
                              height: isExpanded ? 'auto' : 0,
                              marginBottom: isExpanded ? '12px' : '0px'
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {pkg.price}
                          </motion.div>
                          
                          <div className="space-y-1.5 mb-4 flex-grow z-10">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className={`w-3 h-3 ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'} flex-shrink-0 mt-0.5`} />
                                <span className={`text-xs ${isHighlighted ? 'text-[#0B0F14]/80' : 'text-[#0B0F14]/70'}`}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#9DB4C6]/20 pt-3 z-10">
                            <span className={isHighlighted ? 'text-[#0B0F14]/50' : 'text-[#0B0F14]/40'}>
                              Setup Time
                            </span>
                            <span className={isHighlighted ? 'text-[#0B0F14]/90 font-medium' : 'text-[#0B0F14]/80'}>
                              {pkg.setupTime}
                            </span>
                          </div>
                          
                          <div className="mt-2 text-center z-10">
                            <span className={`text-[10px] font-medium ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]/60'}`}>
                              {isExpanded ? 'Click to hide price' : 'Click to view price'}
                            </span>
                          </div>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-[#9DB4C6]/20">
                  <Link to="/contact" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-xl bg-[#1E2A39] text-[#F5F8FA] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/book-demo" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-xl border border-[#1E2A39]/30 text-[#0B0F14] font-semibold hover:bg-[#1E2A39]/5 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Book a Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================================
// AUTOMATION PACKAGES MODAL
// ============================================================
const AutomationPackagesModal = ({ isOpen, onClose }) => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  if (!isOpen) return null;

  const automationPackages = [
    {
      id: 1,
      title: "Basic Business System",
      price: "₹49,999",
      description: "Essential automation tools for small businesses",
      features: [
        "Admin dashboard",
        "Customer database",
        "Billing system",
        "Basic inventory",
        "Sales reports",
        "User roles",
        "Product or service management",
        "30-day post-launch technical support",
      ],
      icon: Settings,
      badge: "Essential",
      setupTime: "2-3 Weeks",
      isPopular: false,
      isProfessional: false,
    },
    {
      id: 2,
      title: "Business Management System",
      price: "₹79,999",
      description: "Comprehensive management solution for growing businesses",
      features: [
        "CRM system",
        "Lead management",
        "Inventory management",
        "Billing & invoices",
        "Supplier management",
        "Sales analytics",
        "Notification system",
        "Role access",
        "User and staff management",
        "Data import/export",
      ],
      icon: Briefcase,
      badge: "Popular Choice",
      setupTime: "3-4 Weeks",
      isPopular: true,
      isProfessional: false,
    },
    {
      id: 3,
      title: "Advanced Business Automation",
      price: "₹99,999",
      description: "Advanced automation for established businesses",
      features: [
        "Full CRM",
        "Full ERP Basic",
        "Order management",
        "Document management",
        "Advanced analytics",
        "Workflow automation",
      ],
      icon: Workflow,
      badge: "Professional",
      setupTime: "4-5 Weeks",
      isPopular: false,
      isProfessional: true,
    },
    {
      id: 4,
      title: "Enterprise Business System",
      price: "₹1,49,999",
      description: "Complete enterprise-level business automation",
      features: [
        "Full ERP",
        "Custom modules",
        "Custom business understanding and planning",
        "Sales pipeline",
        "Business intelligence dashboard",
        "Multi-branch management",
        "API integrations",
      ],
      icon: Factory,
      badge: "Enterprise",
      setupTime: "6-8 Weeks",
      isPopular: false,
      isProfessional: false,
    },
  ];

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  const popularColor = '#ddddee';
  const professionalColor = '#ccccdd';

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F14]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F5F8FA] border border-[#9DB4C6]/30 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1E2A39]/10 backdrop-blur-sm text-[#0B0F14]/80 hover:text-[#0B0F14] hover:bg-[#1E2A39]/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
                    <Database className="w-4 h-4 text-[#1E2A39]" />
                    <span className="text-sm text-[#1E2A39]">
                      Business Automation Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F14] mb-3">
                    Complete Business Automation Solutions
                  </h2>
                  <p className="text-[#0B0F14]/60 text-base max-w-2xl mx-auto">
                    Click on any package to view pricing details
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {automationPackages.map((pkg, index) => {
                    const Icon = pkg.icon;
                    const isExpanded = expandedPackage === pkg.id;
                    
                    const isPopular = pkg.isPopular;
                    const isProfessional = pkg.isProfessional;
                    const isHighlighted = isPopular || isProfessional;
                    
                    const cardColor = isPopular ? popularColor : (isProfessional ? professionalColor : null);
                    
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="h-full cursor-pointer"
                        onClick={() => togglePackage(pkg.id)}
                      >
                        <GlassCard
                          isHighlighted={isHighlighted}
                          cardColor={cardColor}
                          cardIndex={index}
                          className={`h-full flex flex-col p-5 rounded-2xl transition-all duration-300 ${
                            isHighlighted
                              ? `backdrop-blur-xl border`
                              : 'bg-white border-2 border-transparent hover:border-[#1E2A39]/50 shadow-sm hover:shadow-lg'
                          } ${
                            isExpanded 
                              ? isHighlighted 
                                ? `shadow-2xl` 
                                : 'border-[#1E2A39] shadow-lg'
                              : isHighlighted
                                ? ``
                                : ''
                          }`}
                        >
                          {isPopular && (
                            <div className="absolute -top-1 -right-1 z-20">
                              <div className="relative">
                                <motion.div 
                                  className="absolute -inset-1 bg-[#ddddee] rounded-full blur-md"
                                  animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                                <div className="relative bg-gradient-to-r from-[#ddddee] to-[#ccccdd] text-[#0B0F14] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm border border-white/30">
                                  <motion.div
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Star className="w-3 h-3 fill-[#0B0F14]" />
                                  </motion.div>
                                  Popular Choice
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {isProfessional && (
                            <div className="absolute -top-1 -right-1 z-20">
                              <div className="relative">
                                <motion.div 
                                  className="absolute -inset-1 bg-[#ccccdd] rounded-full blur-md"
                                  animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                                <div className="relative bg-gradient-to-r from-[#ccccdd] to-[#bbbbcc] text-[#0B0F14] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm border border-white/30">
                                  <motion.div
                                    animate={{
                                      scale: [1, 1.15, 1],
                                      rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Crown className="w-3 h-3" />
                                  </motion.div>
                                  Professional
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                            isHighlighted 
                              ? `backdrop-blur-sm border border-white/30`
                              : 'bg-[#1E2A39]/10 border border-[#1E2A39]/20'
                          } mb-4 self-start z-10`}
                          style={{
                            background: isHighlighted ? `${cardColor}40` : undefined,
                          }}>
                            <Icon className={`w-3 h-3 ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`} />
                            <span className={`text-xs font-semibold ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`}>
                              {pkg.badge}
                            </span>
                          </div>
                          
                          <h3 className={`text-lg font-bold mb-2 z-10 ${
                            isHighlighted ? 'text-[#0B0F14]' : 'text-[#0B0F14]'
                          }`}>
                            {pkg.title}
                          </h3>
                          
                          <motion.div 
                            className={`text-xl font-bold ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'} mb-3 z-10`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: isExpanded ? 1 : 0,
                              height: isExpanded ? 'auto' : 0,
                              marginBottom: isExpanded ? '12px' : '0px'
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {pkg.price}
                          </motion.div>
                          
                          <div className="space-y-1.5 mb-4 flex-grow z-10">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className={`w-3 h-3 ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'} flex-shrink-0 mt-0.5`} />
                                <span className={`text-xs ${isHighlighted ? 'text-[#0B0F14]/80' : 'text-[#0B0F14]/70'}`}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#9DB4C6]/20 pt-3 z-10">
                            <span className={isHighlighted ? 'text-[#0B0F14]/50' : 'text-[#0B0F14]/40'}>
                              Setup Time
                            </span>
                            <span className={isHighlighted ? 'text-[#0B0F14]/90 font-medium' : 'text-[#0B0F14]/80'}>
                              {pkg.setupTime}
                            </span>
                          </div>
                          
                          <div className="mt-2 text-center z-10">
                            <span className={`text-[10px] font-medium ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]/60'}`}>
                              {isExpanded ? 'Click to hide price' : 'Click to view price'}
                            </span>
                          </div>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-[#9DB4C6]/20">
                  <Link to="/contact" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-xl bg-[#1E2A39] text-[#F5F8FA] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/book-demo" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-xl border border-[#1E2A39]/30 text-[#0B0F14] font-semibold hover:bg-[#1E2A39]/5 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Book a Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
