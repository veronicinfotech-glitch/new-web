import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  CheckCircle
} from "lucide-react";

import lolo1 from "../images/lolo1.png";

const Contact = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Refs
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  // Handle scroll for navbar - PERFECT hide on scroll down, show on scroll up
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
          hideTimeout = setTimeout(() => setVisible(false), 5000); // Hide after 5s
        }
      } else {
        setNavbarScrolled(false);
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "veronic.infotech@gmail.com",
      link: "mailto:veronic.infotech@gmail.com",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 95106 53051 , +91 95104 69165",
      link: "tel:+919510653051",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot, Gujarat 360005",
      link: "https://www.google.com/maps/search/Rao+InfoTech+University+Road+Rajkot",
      color: "from-[#1E2A39] to-[#3A4A5F]"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/veronicinfotech-glitch", label: "GitHub", color: "hover:bg-[#1E2A39]" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true", label: "LinkedIn", color: "hover:bg-[#1E2A39]" },
    { icon: Instagram, href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq", label: "Instagram", color: "hover:bg-[#1E2A39]" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-clip">
      {/* Simple Background */}
      <div className="fixed inset-0 bg-[#F5F8FA] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.06),transparent_70%)]" />
      </div>

      {/* Navbar - Black background with white links initially -> White background with black links after scrolling */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section - Simple Clean Layout with Unique Prismatic Indigo & Violet Color Theme */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#0B0F14] text-white">
        {/* Unique Ambient Color Glows for Contact Page */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 mb-6 shadow-lg shadow-indigo-500/10"
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-indigo-300 font-bold">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-space mb-6 hover:opacity-90 transition-opacity duration-300 select-none"
          >
            <span className="text-white font-space">Contact</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent block sm:inline sm:ml-4 font-space">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-jakarta text-[#9DB4C6] max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Let's build something amazing together. Reach out for consultations, proposals, and enterprise partnerships.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <main className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F5F8FA]">
        <div className="max-w-7xl mx-auto">

          {/* Split Screen Contact Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">

            {/* Left Side - Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              {/* Intro Text */}
              <motion.p
                variants={fadeInLeft}
                className="text-sm sm:text-base lg:text-lg text-[#0B0F14]/70 leading-relaxed px-2 sm:px-0"
              >
                Have a project in mind? We'd love to hear about it.
                Drop us a message and we'll get back to you within 24 hours.
              </motion.p>

              {/* Contact Info List */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInLeft}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="group flex items-center gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#9DB4C6]/20 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} p-2 sm:p-2.5 lg:p-3 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-[#0B0F14]/40 mb-0.5 sm:mb-1">{item.title}</div>
                        <div className="text-sm sm:text-base lg:text-lg font-medium text-[#0B0F14] group-hover:text-[#1E2A39] transition-colors break-words">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <motion.div variants={fadeInLeft} className="pt-2 sm:pt-4">
                <h3 className="text-xs sm:text-sm font-medium text-[#0B0F14]/40 mb-3 sm:mb-4 tracking-wider px-2 sm:px-0">FOLLOW US</h3>
                <div className="flex gap-3 sm:gap-4 px-2 sm:px-0">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#9DB4C6]/20 flex items-center justify-center hover:border-[#1E2A39] transition-all text-[#0B0F14] hover:text-white ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div variants={fadeInLeft} className="pt-2 sm:pt-4">
                <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#9DB4C6]/20 shadow-sm">
                  <h3 className="text-xs sm:text-sm font-medium text-[#0B0F14]/40 mb-2 sm:mb-3 tracking-wider">OFFICE HOURS</h3>
                  <div className="space-y-1.5 sm:space-y-2 text-[#0B0F14]/80 text-xs sm:text-sm lg:text-base">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-[#1E2A39] font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-[#1E2A39] font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-[#1E2A39] font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mt-6 lg:mt-0"
            >
              {/* Form Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A39]/10 to-[#3A4A5F]/10 rounded-2xl sm:rounded-3xl blur-3xl" />

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#9DB4C6]/20 shadow-sm"
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 lg:mb-8 text-[#1E2A39] font-space hover:opacity-90 transition-opacity duration-300 select-none">
                    Send a Message
                  </h2>

                  {/* Name Input */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#0B0F14]/60 mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F5F8FA] border border-[#9DB4C6]/30 rounded-lg sm:rounded-xl focus:border-[#1E2A39] focus:outline-none focus:ring-1 focus:ring-[#1E2A39] transition-all text-[#0B0F14] placeholder-[#0B0F14]/30 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#0B0F14]/60 mb-1.5 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F5F8FA] border border-[#9DB4C6]/30 rounded-lg sm:rounded-xl focus:border-[#1E2A39] focus:outline-none focus:ring-1 focus:ring-[#1E2A39] transition-all text-[#0B0F14] placeholder-[#0B0F14]/30 text-sm sm:text-base"
                      placeholder="hello@veronic.com"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-5 sm:mb-6 lg:mb-8">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#0B0F14]/60 mb-1.5 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F5F8FA] border border-[#9DB4C6]/30 rounded-lg sm:rounded-xl focus:border-[#1E2A39] focus:outline-none focus:ring-1 focus:ring-[#1E2A39] transition-all text-[#0B0F14] placeholder-[#0B0F14]/30 text-sm sm:text-base resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button with Status */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${formStatus === 'success'
                        ? 'bg-green-500 text-white'
                        : formStatus === 'submitting'
                          ? 'bg-[#1E2A39]/50 text-white cursor-not-allowed'
                          : 'bg-[#1E2A39] text-[#F5F8FA] hover:shadow-lg hover:shadow-[#1E2A39]/25'
                      }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#F5F8FA]/30 border-t-[#F5F8FA] rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Form Note */}
                  <p className="text-xs text-[#0B0F14]/30 text-center mt-4 sm:mt-5 lg:mt-6">
                    We'll never share your information with anyone else.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

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

            {/* Solutions */}
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

export default Contact;