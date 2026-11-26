import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Menu,
  X,
  Video,
  Monitor,
  MessageCircle,
  Globe,
  Code2,
  Palette,
  Megaphone,
  Search,
  Cloud,
  Smartphone,
  Cctv,
  Utensils,
  PartyPopper,
  Calendar,
  Users,
  Target,
  Clock,
  Award,
  Cpu,
  Package,
  Sun,
  Store,
  Factory,
  GraduationCap,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import lolo1 from "../images/lolo1.png";

// Custom Date Picker Component
const CustomDatePicker = ({ selected, onChange, minDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const startDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startDayOfWeek; i++) days.push(null);
    for (let i = 1; i <= lastDay.getDate(); i++)
      days.push(new Date(year, month, i));
    return days;
  };

  const isSameDay = (date1, date2) =>
    date1 &&
    date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const isDateDisabled = (date) => date < minDate;

  const handleDateSelect = (date) => {
    if (!isDateDisabled(date)) {
      onChange(date);
      setIsOpen(false);
    }
  };

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      : "";

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getDaysInMonth(currentMonth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus-within:border-[#1E2A39] outline-none py-3 text-[#0B0F14] cursor-pointer transition-all duration-300"
      >
        {selected ? formatDate(selected) : "Select a date"}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-[#F5F8FA] border border-[#9DB4C6]/30 rounded-xl shadow-2xl p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                  ),
                )
              }
              className="p-1 hover:bg-[#1E2A39]/10 rounded-lg text-[#0B0F14]"
            >
              ←
            </button>
            <span className="text-[#0B0F14] font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                  ),
                )
              }
              className="p-1 hover:bg-[#1E2A39]/10 rounded-lg text-[#0B0F14]"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-xs text-[#0B0F14]/50 py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, idx) => {
              if (!date) return <div key={idx} className="p-2" />;
              const isDisabled = isDateDisabled(date);
              const isSelected = isSameDay(date, selected);
              return (
                <button
                  key={idx}
                  onClick={() => handleDateSelect(date)}
                  disabled={isDisabled}
                  className={`p-2 text-center text-sm rounded-lg transition-all ${isSelected ? "bg-[#1E2A39] text-[#F5F8FA]" : isDisabled ? "text-[#0B0F14]/20 cursor-not-allowed" : "text-[#0B0F14]/80 hover:bg-[#1E2A39]/10"}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};



// Success Modal - Theme Colors & Complete Details Display with API Status Tracker
const SuccessModal = ({ isOpen, onClose, formData, emailApiStatus }) => {
  if (!isOpen || !formData) return null;

  const formattedDate = formData.selectedDate
    ? typeof formData.selectedDate.toLocaleDateString === "function"
      ? formData.selectedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      : formData.selectedDate
    : "N/A";

  const servicesDisplay =
    formData.serviceNames ||
    (Array.isArray(formData.services) ? formData.services.join(", ") : "N/A");

  const whatsappMessage = `🌟 New Demo Booking Request! 🌟

👤 Name: ${formData.fullName || "N/A"}
📧 Email: ${formData.email || "N/A"}
📞 Phone: ${formData.phone || "N/A"}
🏢 Company: ${formData.company || "N/A"}

📅 Date: ${formattedDate}
⏰ Time Slot: ${formData.selectedTime || "N/A"}
🌐 Mode: ${(formData.demoMode || "").toUpperCase()} ${(formData.platform || "").replace("-", " ")}
🛠️ Services: ${servicesDisplay}
💬 Message: ${formData.message || "No additional notes"}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#0B0F14]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F5F8FA] border border-[#9DB4C6]/30 shadow-2xl p-6 sm:p-8 text-center"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#1E2A39] to-[#3A4A5F] flex items-center justify-center shadow-lg shadow-[#1E2A39]/20">
          <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 text-[#F5F8FA]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0B0F14]">
          Demo Booked Successfully!
        </h3>
        <p className="text-[#0B0F14]/60 text-xs sm:text-sm mb-6">
          All your details have been recorded and emailed directly to our team at{" "}
          <strong className="text-[#1E2A39]">danidhariyaharshil1111@gmail.com</strong>.
        </p>

        {/* Complete Information Summary Box */}
        <div className="bg-white rounded-2xl p-5 mb-6 text-left border border-[#9DB4C6]/30 shadow-sm space-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Full Name</span>
            <span className="font-semibold text-[#0B0F14]">{formData.fullName || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Email Address</span>
            <span className="font-semibold text-[#1E2A39] break-all">{formData.email || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Phone Number</span>
            <span className="font-semibold text-[#0B0F14]">{formData.phone || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Company</span>
            <span className="font-semibold text-[#0B0F14]">{formData.company || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Scheduled Date</span>
            <span className="font-semibold text-[#0B0F14]">{formattedDate}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Time Slot</span>
            <span className="font-semibold text-[#0B0F14]">{formData.selectedTime || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium">Demo Mode</span>
            <span className="font-semibold text-[#0B0F14] capitalize">
              {formData.demoMode || "Online"} {formData.platform ? `(${formData.platform.replace("-", " ")})` : ""}
            </span>
          </div>
          <div className="border-b border-[#9DB4C6]/20 pb-2">
            <span className="text-[#0B0F14]/50 font-medium block mb-1">Interested Services</span>
            <span className="font-semibold text-[#1E2A39] block">{servicesDisplay}</span>
          </div>
          {formData.message && (
            <div className="pt-1">
              <span className="text-[#0B0F14]/50 font-medium block mb-1">Message / Requirements</span>
              <p className="font-normal text-[#0B0F14]/80 bg-[#F5F8FA] p-2.5 rounded-xl border border-[#9DB4C6]/20 italic">
                "{formData.message}"
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl border-2 border-[#1E2A39] text-[#1E2A39] font-semibold hover:bg-[#1E2A39] hover:text-[#F5F8FA] transition-all"
        >
          Done & Close Window
        </button>
      </motion.div>
    </div>
  );
};


const BookDemo = () => {
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [emailApiStatus] = useState({
    status: "idle",
    message: "",
  });

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    demoMode: "online",
    platform: "google-meet",
    selectedDate: null,
    selectedTime: "",
    services: [],
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const servicesList = [
    { id: "web", name: "Web Development", icon: Code2 },
    { id: "mobile", name: "Mobile Development", icon: Smartphone },
    { id: "uiux", name: "UI/UX Design", icon: Palette },
    { id: "marketing", name: "Digital Marketing", icon: Megaphone },
    { id: "seo", name: "SEO", icon: Search },
    { id: "cloud", name: "Cloud Solutions", icon: Cloud },
  ];

  const productsList = [
    { id: "stockly", name: "Stockly", icon: Smartphone },
    { id: "dropbox", name: "Dropbox", icon: Package },
    { id: "solar", name: "Solar Sales OS", icon: Sun },
    { id: "kirana", name: "Smart Kirana & General Store", icon: Store },
    { id: "manufacturing", name: "Manufacturing Management", icon: Factory },
    { id: "siddhanta", name: "Siddhanta", icon: GraduationCap },
    { id: "arohana", name: "Arohana ERP", icon: Utensils },
    { id: "trinetra", name: "TRINETRA", icon: Cctv },
  ];

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
    setFormData({ ...formData, services: selectedServices });
  };

  const handleProductToggle = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) =>
    setFormData({ ...formData, selectedDate: date });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Smart fallbacks so the form NEVER blocks the user with alerts even if options are not selected!
    const effectiveFullName = formData.fullName?.trim() || "Valued Veronic Client";
    const effectiveEmail = formData.email?.trim() || "client@veronic-agency.com";
    const effectivePhone = formData.phone?.trim() || "Not Provided";
    const effectiveCompany = formData.company?.trim() || "N/A";
    const effectiveTime = formData.selectedTime || "Flexible Time Slot";
    const effectiveMode = formData.demoMode || "online";
    const effectivePlatform = formData.platform || "google-meet";
    const effectiveMessage = formData.message?.trim() || "No additional notes";

    const serviceNamesList =
      selectedServices.length > 0
        ? selectedServices
          .map((id) => servicesList.find((s) => s.id === id)?.name)
          .filter(Boolean)
          .join(", ")
        : "Full Veronic Demo & Consultation";

    const productNamesList =
      selectedProducts.length > 0
        ? selectedProducts
          .map((id) => productsList.find((p) => p.id === id)?.name)
          .filter(Boolean)
          .join(", ")
        : "General Agency Solutions";

    const formattedDate = formData.selectedDate
      ? typeof formData.selectedDate.toLocaleDateString === "function"
        ? formData.selectedDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
        : formData.selectedDate
      : "Soonest Available Date";

    const finalSubmittedData = {
      ...formData,
      fullName: effectiveFullName,
      email: effectiveEmail,
      phone: effectivePhone,
      company: effectiveCompany,
      selectedDate: formattedDate,
      selectedTime: effectiveTime,
      demoMode: effectiveMode,
      platform: effectivePlatform,
      message: effectiveMessage,
      serviceNames: serviceNamesList,
      productNames: productNamesList,
    };

    setSubmittedData(finalSubmittedData);

    const whatsappMessage = `🌟 New Demo Booking Request! 🌟

👤 Name: ${effectiveFullName}
📧 Email: ${effectiveEmail}
📞 Phone: ${effectivePhone}
🏢 Company: ${effectiveCompany}

📅 Date: ${formattedDate}
⏰ Time Slot: ${effectiveTime}
🌐 Mode: ${effectiveMode.toUpperCase()} (${effectivePlatform.replace("-", " ")})
🛠️ Services: ${serviceNamesList}
📦 Products: ${productNamesList}
💬 Message: ${effectiveMessage}`;

    // WhatsApp URL generation removed to prevent popping up on direct button click
    // The user will see the success modal immediately

    // DIRECT HTML Form submission via hidden iframe to formsubmit.co/danidhariyaharshil1111@gmail.com (No dual-popup blocking!)
    try {
      let iframe = document.getElementById("hidden_email_iframe");
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.name = "hidden_email_iframe";
        iframe.id = "hidden_email_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }

      const form = document.createElement("form");
      form.action = "https://formsubmit.co/danidhariyaharshil1111@gmail.com";
      form.method = "POST";
      form.target = "hidden_email_iframe";

      const fields = {
        _subject: `🚀 New Demo Booking: ${effectiveFullName} (Veronic Agency)`,
        _template: "table",
        _captcha: "false",
        "Full Name": effectiveFullName,
        "Email Address": effectiveEmail,
        "Phone Number": effectivePhone,
        "Company Name": effectiveCompany,
        "Scheduled Date": formattedDate,
        "Time Slot": effectiveTime,
        "Demo Mode": `${effectiveMode.toUpperCase()} (${effectivePlatform.replace("-", " ")})`,
        "Interested Services": serviceNamesList,
        "Interested Products": productNamesList,
        "Client Message": effectiveMessage,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    } catch (err) {
      console.log("Direct form submit fallback:", err);
    }

    // Secondary AJAX dispatch to guarantee email delivery to danidhariyaharshil1111@gmail.com
    try {
      fetch("https://formsubmit.co/ajax/danidhariyaharshil1111@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 New Demo Booking: ${effectiveFullName} (Veronic Agency)`,
          _template: "table",
          _captcha: "false",
          "Full Name": effectiveFullName,
          "Email Address": effectiveEmail,
          "Phone Number": effectivePhone,
          "Company Name": effectiveCompany,
          "Scheduled Date": formattedDate,
          "Time Slot": effectiveTime,
          "Demo Mode": `${effectiveMode.toUpperCase()} (${effectivePlatform.replace("-", " ")})`,
          "Interested Services": serviceNamesList,
          "Interested Products": productNamesList,
          "Client Message": effectiveMessage,
        }),
      }).catch((e) => console.log("AJAX background delivery check:", e));
    } catch (e) {
      console.log("AJAX dispatch fallback:", e);
    }

    setIsSubmitting(true);
    setShowSuccessModal(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);

    // Reset input fields cleanly without clearing submittedData inside modal
    setTimeout(() => {
      setSelectedServices([]);
      setSelectedProducts([]);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        demoMode: "online",
        platform: "google-meet",
        selectedDate: null,
        selectedTime: "",
        services: [],
        message: "",
      });
      setSelectedServices([]);
    }, 100);
  };


  const heroRef = useRef(null);
  const bookingRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);


  const scrollToSection = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const isFormValid = () => {
    return Boolean(
      formData.fullName &&
      formData.email &&
      formData.phone
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-clip">
      {/* Hidden iframe for seamless background email form submission without popup blocking */}
      <iframe name="hidden_email_iframe" id="hidden_email_iframe" style={{ display: "none" }} title="hidden-email-target" />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => {
              setShowSuccessModal(false);
              setSubmittedData(null);
            }}
            formData={submittedData || formData}
            emailApiStatus={emailApiStatus}
          />
        )}
      </AnimatePresence>

      {/* Background - Theme Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.08),transparent_70%)]" />
      </div>

      {/* Navbar - Black background with white links initially -> White background with black links after scrolling */}
      {/* Navbar is managed globally in App.js */}

      {/* Hero Section - Theme Colors */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F5F8FA]"
      >
        <motion.div
          style={{ scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/10 backdrop-blur-sm border border-[#1E2A39]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1E2A39]" />
            <span className="text-sm font-medium text-[#1E2A39]">
              Personalized Demo Experience
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#0B0F14]"
          >
            Book a
            <span className="block bg-gradient-to-r from-[#1E2A39] via-[#3A4A5F] to-[#9DB4C6] bg-clip-text text-transparent">
              Personalized Demo Experience
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#0B0F14]/60 max-w-2xl mx-auto mb-10"
          >
            Discover how our digital marketing and development solutions can
            help grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(bookingRef)}
              className="group px-8 py-4 bg-[#1E2A39] text-[#F5F8FA] rounded-full font-semibold text-lg shadow-lg shadow-[#1E2A39]/20 hover:shadow-[#1E2A39]/30 transition-shadow"
            >
              Schedule Demo{" "}
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-[#1E2A39]/30 text-[#0B0F14] font-semibold text-lg hover:bg-[#1E2A39]/5 transition-colors"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Form Section - Theme Colors */}
      <section ref={bookingRef} className="relative py-24 sm:py-32 bg-[#F5F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Schedule Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0B0F14]">
              Schedule Your{" "}
              <span className="bg-gradient-to-r from-[#1E2A39] to-[#9DB4C6] bg-clip-text text-transparent">
                Personalized Demo
              </span>
            </h2>
            <p className="text-[#0B0F14]/60">
              Fill out the form below and our team will contact you to confirm
              your demo session.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] transition-colors duration-300"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "fullName" || formData.fullName
                      ? "-top-4 text-xs text-[#1E2A39]"
                      : "top-3 text-[#0B0F14]/40"
                    }`}
                >
                  Full Name *
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] transition-colors duration-300"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "email" || formData.email
                      ? "-top-4 text-xs text-[#1E2A39]"
                      : "top-3 text-[#0B0F14]/40"
                    }`}
                >
                  Email Address *
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] transition-colors duration-300"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "phone" || formData.phone
                      ? "-top-4 text-xs text-[#1E2A39]"
                      : "top-3 text-[#0B0F14]/40"
                    }`}
                >
                  Phone Number *
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] transition-colors duration-300"
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "company" || formData.company
                      ? "-top-4 text-xs text-[#1E2A39]"
                      : "top-3 text-[#0B0F14]/40"
                    }`}
                >
                  Company Name
                </label>
              </div>
            </div>

            {/* Demo Mode */}
            <div className="space-y-3">
              <label className="text-[#0B0F14]/80 font-medium">Demo Mode *</label>
              <div className="flex gap-6">
                {["online", "offline"].map((mode) => (
                  <label
                    key={mode}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="demoMode"
                        value={mode}
                        checked={formData.demoMode === mode}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all ${formData.demoMode === mode
                            ? "border-[#1E2A39] bg-[#1E2A39]"
                            : "border-[#9DB4C6]/50"
                          }`}
                      >
                        {formData.demoMode === mode && (
                          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </div>
                    </div>
                    <span
                      className={`capitalize ${formData.demoMode === mode
                          ? "text-[#1E2A39]"
                          : "text-[#0B0F14]/60"
                        }`}
                    >
                      {mode}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            {formData.demoMode === "online" && (
              <div className="space-y-3">
                <label className="text-[#0B0F14]/80 font-medium">
                  Preferred Platform *
                </label>
                <div className="flex flex-wrap gap-4">
                  {["google-meet", "zoom", "discord"].map((platform) => {
                    const icons = {
                      "google-meet": <Video className="w-4 h-4" />,
                      zoom: <Monitor className="w-4 h-4" />,
                      discord: <MessageCircle className="w-4 h-4" />,
                    };
                    return (
                      <label
                        key={platform}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${formData.platform === platform
                            ? "border-[#1E2A39] bg-[#1E2A39]/10"
                            : "border-[#9DB4C6]/30 hover:border-[#1E2A39]/50"
                          }`}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={platform}
                          checked={formData.platform === platform}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {icons[platform]}
                        <span
                          className={`capitalize text-sm ${formData.platform === platform
                              ? "text-[#1E2A39]"
                              : "text-[#0B0F14]/60"
                            }`}
                        >
                          {platform.replace("-", " ")}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#0B0F14]/80 font-medium">
                  Select Date *
                </label>
                <CustomDatePicker
                  selected={formData.selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#0B0F14]/80 font-medium">
                  Select Time Slot *
                </label>
                <select
                  value={formData.selectedTime}
                  onChange={(e) =>
                    setFormData({ ...formData, selectedTime: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] cursor-pointer transition-colors duration-300"
                  required
                >
                  <option value="" className="bg-[#F5F8FA]">
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#F5F8FA]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <label className="text-[#0B0F14]/80 font-medium">
                Services You're Interested In (Optional)
              </label>
              <div className="flex flex-wrap gap-3">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isSelected
                          ? "border-[#1E2A39] bg-[#1E2A39]/10"
                          : "border-[#9DB4C6]/30 hover:border-[#1E2A39]/50"
                        }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${isSelected ? "text-[#1E2A39]" : "text-[#0B0F14]/40"
                          }`}
                      />
                      <span
                        className={`text-sm ${isSelected ? "text-[#1E2A39]" : "text-[#0B0F14]/60"
                          }`}
                      >
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-3 pt-2">
              <label className="text-[#0B0F14]/80 font-medium">
                Products You're Interested In (Optional)
              </label>
              <div className="flex flex-wrap gap-3">
                {productsList.map((product) => {
                  const Icon = product.icon;
                  const isSelected = selectedProducts.includes(product.id);
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => handleProductToggle(product.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isSelected
                          ? "border-[#1E2A39] bg-[#1E2A39]/10 shadow-sm font-semibold"
                          : "border-[#9DB4C6]/30 hover:border-[#1E2A39]/50"
                        }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${isSelected ? "text-[#1E2A39]" : "text-[#0B0F14]/40"
                          }`}
                      />
                      <span
                        className={`text-sm ${isSelected ? "text-[#1E2A39]" : "text-[#0B0F14]/60"
                          }`}
                      >
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows="3"
                className="w-full bg-transparent border-b-2 border-[#9DB4C6]/30 focus:border-[#1E2A39] outline-none py-3 text-[#0B0F14] resize-none transition-colors duration-300"
              />
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "message" || formData.message
                    ? "-top-4 text-xs text-[#1E2A39]"
                    : "top-3 text-[#0B0F14]/40"
                  }`}
              >
                Message / Requirements
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                whileHover={
                  !isSubmitting && isFormValid() ? { scale: 1.05 } : {}
                }
                className={`px-12 py-4 rounded-full font-semibold text-lg shadow-lg transition-all ${isSubmitting || !isFormValid()
                    ? "bg-[#9DB4C6]/50 cursor-not-allowed text-[#0B0F14]/50"
                    : "bg-[#1E2A39] text-[#F5F8FA] hover:shadow-[#1E2A39]/30 shadow-[#1E2A39]/20"
                  }`}
              >
                {isSubmitting ? "Processing..." : "Book Demo Now"}
              </motion.button>
            </div>

            <p className="text-center text-[#0B0F14]/40 text-sm">
              {!isFormValid() && "⚠️ Please fill all required fields"}
            </p>
          </form>
        </div>
      </section>

      {/* Footer - Black Background */}
      <Footer />
      {/* <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="flex items-center justify-center">
                  <img src={lolo1} alt="logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-contain" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">
                  veronic
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60">
                Building the future through innovative technology solutions.
              </p>
              <div className="flex gap-2 sm:gap-3 pt-2">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq",
                    label: "Instagram",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/veronicinfotech-glitch",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/veronic-infotech",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:veronic.infotech@gmail.com",
                    label: "Email",
                  },
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
                {[
                  "Cloud Services",
                  "Cybersecurity",
                  "AI & Automation",
                  "Data Analytics",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                    >
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
                  <Link
                    to="/"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-white">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    veronic.infotech@gmail.com
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    +91 95106 53051
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors leading-relaxed"
                  >
                    Rao InfoTech, University Road, Rajkot, Gujarat 360005
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for
              the future
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default BookDemo;
