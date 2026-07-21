// ============================================================
// MARKETING & GROWTH PACKAGES MODAL
// ============================================================
const MarketingPackagesModal = ({ isOpen, onClose }) => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  if (!isOpen) return null;

  const marketingPackages = [
    {
      id: 1,
      title: "Basic - Online Presence",
      price: "₹19,999",
      description: "Best for small businesses starting their digital journey",
      features: [
        "Social media profile setup (Instagram + Facebook)",
        "9 professional social media posts",
        "4 professional business reels",
        "GMB Profile",
        "Basic brand design (logo polish + colors)",
        "Content calendar",
      ],
      icon: InstagramIcon,
      badge: "Basic",
      deliveryTime: "1-2 Weeks",
      isPopular: false,
      isProfessional: false,
    },
    {
      id: 2,
      title: "Growth - Lead Generation System",
      price: "₹39,999",
      description: "Best for businesses that want consistent inquiries",
      features: [
        "Everything in Basic",
        "Google Business Profile optimization",
        "Professional website (5-7 pages)",
        "Basic SEO optimization",
        "Just Dial business profile",
        "Google Business ranking optimization",
        "Lead generation system",
      ],
      icon: Target,
      badge: "Popular Choice",
      deliveryTime: "3-4 Weeks",
      isPopular: true,
      isProfessional: false,
    },
    {
      id: 3,
      title: "Advanced - Smart Business System",
      price: "₹59,999",
      description: "Best for businesses that want automation and scalability",
      features: [
        "CRM system for lead management",
        "Banner and poster design",
        "Lead generation system",
        "Customer offer & research",
        "Monthly dashboard",
        "Google Ads management",
        "Performance analytics",
      ],
      icon: CpuIcon,
      badge: "Professional",
      deliveryTime: "4-5 Weeks",
      isPopular: false,
      isProfessional: true,
    },
    {
      id: 4,
      title: "Enterprise - Full Digital Ecosystem",
      price: "₹69,999",
      description: "Best for companies ready to dominate their market",
      features: [
        "Multi-platform integration",
        "Full marketing funnel setup",
        "Meta + Google Ads management",
        "Data-driven strategy system",
        "Offer testing",
        "Audience testing",
        "Creative testing",
        "Lead tracking system",
        "All Add-ons included",
      ],
      icon: Rocket,
      badge: "Enterprise",
      deliveryTime: "6-8 Weeks",
      isPopular: false,
      isProfessional: false,
    },
  ];

  const addOnFeatures = [
    {
      category: "Web Development",
      items: [
        { name: "E-commerce store", price: "₹20,000" },
        { name: "Payment gateway", price: "₹5,000" },
        { name: "Landing page", price: "₹8,000" },
        { name: "Custom admin panel", price: "₹15,000" },
      ],
      icon: Code2,
    },
    {
      category: "Automation & AI",
      items: [
        { name: "WhatsApp AI assistant", price: "₹20,000" },
        { name: "Advanced chatbot", price: "₹30,000" },
        { name: "Lead automation system", price: "₹20,000" },
        { name: "AI analytics dashboard", price: "₹25,000" },
      ],
      icon: Bot,
    },
    {
      category: "Digital Marketing",
      items: [
        { name: "Local SEO", price: "₹6,000/month" },
        { name: "Google Ads", price: "₹12,000/month" },
        { name: "Meta Ads", price: "₹12,000/month" },
        { name: "Reel creation", price: "₹1,000/reel" },
        { name: "Post creation", price: "₹400/Creative Post" },
      ],
      icon: Megaphone,
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
            <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F5F8FA] border border-[#9DB4C6]/30 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1E2A39]/10 backdrop-blur-sm text-[#0B0F14]/80 hover:text-[#0B0F14] hover:bg-[#1E2A39]/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
                    <Megaphone className="w-4 h-4 text-[#1E2A39]" />
                    <span className="text-sm text-[#1E2A39]">
                      Marketing & Growth Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F14] mb-3">
                    Complete Marketing & Growth Solutions
                  </h2>
                  <p className="text-[#0B0F14]/60 text-base max-w-2xl mx-auto">
                    Click on any package to view pricing details
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {marketingPackages.map((pkg, index) => {
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
                          className={`h-full flex flex-col p-5 transition-all duration-300 ${
                            isHighlighted
                              ? `backdrop-blur-xl card-gradient`
                              : 'bg-white border-2 border-transparent hover:border-[#1E2A39]/50 shadow-sm hover:shadow-lg rounded-2xl'
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
                          style={{}}>
                            <Icon className={`w-3 h-3 ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`} />
                            <span className={`text-xs font-semibold ${isHighlighted ? 'text-[#0B0F14]' : 'text-[#1E2A39]'}`}>
                              {pkg.badge}
                            </span>
                          </div>
                          
                          <h3 className={`text-base font-bold mb-2 leading-tight z-10 ${
                            isHighlighted ? 'text-[#0B0F14]' : 'text-[#0B0F14]'
                          }`}>
                            {pkg.title}
                          </h3>
                          
                          <p className={`text-xs ${isHighlighted ? 'text-[#0B0F14]/60' : 'text-[#0B0F14]/50'} mb-3 italic z-10`}>
                            {pkg.description}
                          </p>
                          
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
                              Delivery Time
                            </span>
                            <span className={isHighlighted ? 'text-[#0B0F14]/90 font-medium' : 'text-[#0B0F14]/80'}>
                              {pkg.deliveryTime}
                            </span>
                          </div>
                          
                          {pkg.id === 4 && (
                            <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#1E2A39] font-medium bg-[#1E2A39]/10 px-2 py-1 rounded-full self-start z-10">
                              <Star className="w-3 h-3 fill-[#1E2A39]" />
                              Best Value
                            </div>
                          )}
                          
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

                <div className="mt-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4">
                      <Sparkles className="w-4 h-4 text-[#1E2A39]" />
                      <span className="text-sm text-[#1E2A39]">
                        Customize Your Package
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B0F14]">
                      Add-On Features
                    </h3>
                    <p className="text-[#0B0F14]/60 text-sm mt-2">
                      Clients can customize their package with these additional features
                    </p>
                    <p className="text-[#1E2A39] text-sm font-medium mt-1">
                      * Enterprise package includes all add-ons
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {addOnFeatures.map((category, idx) => {
                      const CategoryIcon = category.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1, duration: 0.4, ease: "easeOut" }}
                          className="rounded-2xl bg-white border-2 border-transparent hover:border-[#1E2A39] transition-all duration-300 shadow-sm hover:shadow-lg p-5"
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-[#1E2A39]/10">
                              <CategoryIcon className="w-4 h-4 text-[#1E2A39]" />
                            </div>
                            <h4 className="text-base font-semibold text-[#0B0F14]">
                              {category.category}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex justify-between items-center py-2 border-b border-[#9DB4C6]/10"
                              >
                                <span className="text-xs text-[#0B0F14]/70">
                                  {item.name}
                                </span>
                                <span className="text-xs font-semibold text-[#1E2A39]">
                                  {item.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
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
// MAIN PACKAGES PAGE
// ============================================================
const PackagesPage = () => {
  const location = useLocation();

  const [isWebsiteModalOpen, setIsWebsiteModalOpen] = useState(false);
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);


  const heroRef = useRef(null);
  const showcaseRef = useRef(null);
  const comparisonRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const packages = [
    {
      id: 1,
      title: "COMPLETE BUSINESS WEBSITE PACKAGE",
      price: "₹12,999 – ₹99,999",
      description: "Complete business website package for your online presence",
      features: [
        "5-15 PAGE PROFESSIONAL WEBSITE",
        "MOBILE OPTIMIZED DESIGN",
        "CUSTOM UI/UX LAYOUT",
        "CMS DASHBOARD ACCESS",
        "LEAD CAPTURE + WHATSAPP CHAT",
        "SEO SETUP + GOOGLE BUSINESS",
        "BLOG & GALLERY SYSTEM",
        "PAYMENT GATEWAY INTEGRATION",
      ],
      icon: Layout,
      badge: "Website Solution",
    },
    {
      id: 2,
      title: "BUSINESS AUTOMATION SYSTEM",
      price: "₹49,999 – ₹1,49,999",
      description: "Complete business automation system for streamlined operations",
      features: [
        "SMART ADMIN DASHBOARD",
        "CRM & LEAD MANAGEMENT",
        "INVENTORY & STOCK CONTROL",
        "BILLING & INVOICE SYSTEM",
        "PURCHASE & SUPPLIER MANAGEMENT",
        "ORDER MANAGEMENT",
        "WORKFLOW AUTOMATION",
        "SMS / WHATSAPP NOTIFICATIONS",
      ],
      icon: Database,
      badge: "Automation Solution",
    },
    {
      id: 3,
      title: "MARKETING & GROWTH SYSTEM",
      price: "₹19,999 – ₹69,999",
      description: "Complete marketing and growth system for business expansion",
      features: [
        "SOCIAL MEDIA SETUP & MANAGEMENT",
        "PROFESSIONAL POSTS & REELS",
        "SEO & GOOGLE RANKING SETUP",
        "CRM FOR LEAD MANAGEMENT",
        "CONVERSION FUNNEL SETUP",
        "GOOGLE & META ADS MANAGEMENT",
        "MARKETING ANALYTICS DASHBOARD",
        "PERFORMANCE CONSULTATION",
      ],
      icon: Megaphone,
      badge: "Growth Solution",
    },
  ];

  const handleShowMore = (pkg) => {
    if (pkg.id === 1) {
      setIsWebsiteModalOpen(true);
    } else if (pkg.id === 2) {
      setIsAutomationModalOpen(true);
    } else if (pkg.id === 3) {
      setIsMarketingModalOpen(true);
    }
  };



  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#0B0F14] font-sans overflow-x-hidden">
      {/* Modals */}
      <WebsitePackagesModal
        isOpen={isWebsiteModalOpen}
        onClose={() => setIsWebsiteModalOpen(false)}
      />
      <AutomationPackagesModal
        isOpen={isAutomationModalOpen}
        onClose={() => setIsAutomationModalOpen(false)}
      />
      <MarketingPackagesModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(30,42,57,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(157,180,198,0.06),transparent_70%)]" />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-[#1E2A39]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#9DB4C6]/10 rounded-full blur-3xl"
        />
      </div>

      {/* NAVBAR */}
      {/* Navbar is managed globally in App.js */}

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0B0F14]"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#1E2A39]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#9DB4C6]/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#9DB4C6]" />
            <span className="text-sm font-medium text-white/80">Pricing Plans</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">Flexible</span>
            <br />
            <span className="text-[#9DB4C6]">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Choose the perfect plan for your digital growth and development needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            onClick={() => scrollToSection(showcaseRef)}
            className="group px-8 py-4 bg-[#1E2A39] text-[#F5F8FA] rounded-full font-semibold text-lg shadow-lg shadow-[#1E2A39]/30 hover:shadow-[#1E2A39]/40 transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Packages{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* SHOWCASE SECTION */}
      <section
        ref={showcaseRef}
        className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F8FA]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <Layout className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Our Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0F14]">
              Choose Your{" "}
              <span className="block text-[#0D44D1] mt-2">
                Growth Path
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-transparent group-hover:border-[#1E2A39] transition-all duration-300 shadow-sm group-hover:shadow-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-6">
                      <Icon className="w-3 h-3 text-[#1E2A39]" />
                      <span className="text-xs text-[#1E2A39]">{pkg.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#0B0F14]">{pkg.title}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-[#1E2A39] mb-6">{pkg.price}</div>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#1E2A39] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#0B0F14]/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleShowMore(pkg)}
                      className="group w-full py-3 rounded-full bg-[#1E2A39] font-semibold text-[#F5F8FA] transition-all hover:opacity-90"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Details{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section
        ref={comparisonRef}
        className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F8FA] border-t border-[#9DB4C6]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1E2A39]/10 border border-[#1E2A39]/20 mb-4 sm:mb-6">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E2A39]" />
              <span className="text-xs sm:text-sm text-[#1E2A39]">Compare Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0F14]">
              Compare{" "}
              <span className="block text-[#0D44D1] mt-2">
                Packages at a Glance
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white border-2 border-transparent group-hover:border-[#1E2A39] transition-all duration-300 shadow-sm group-hover:shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-[#1E2A39]/10 flex items-center justify-center mb-4">
                      {idx === 0 && <Layout className="w-6 h-6 text-[#1E2A39]" />}
                      {idx === 1 && <Database className="w-6 h-6 text-[#1E2A39]" />}
                      {idx === 2 && <Megaphone className="w-6 h-6 text-[#1E2A39]" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#1E2A39]">
                      {pkg.title.split(" ")[0]}
                    </h3>
                    <div className="text-xl font-bold mb-4 text-[#0B0F14]">{pkg.price}</div>
                    <div className="space-y-2 mb-4">
                      {pkg.features.slice(0, 4).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[#0B0F14]/70 text-sm">
                          <CheckCircle className="w-3 h-3 text-[#1E2A39]" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-[#9DB4C6]/20">
                      <div className="text-xs text-[#0B0F14]/40 mb-1">Best for</div>
                      <div className="text-sm font-semibold text-[#0B0F14]/80">
                        {idx === 0 && "Businesses needing website presence"}
                        {idx === 1 && "Companies requiring automation"}
                        {idx === 2 && "Businesses focused on growth"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            className="mt-16 p-8 rounded-3xl bg-[#1E2A39]/5 border-2 border-transparent hover:border-[#1E2A39] transition-all duration-300 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-[#1E2A39]" />
                <div>
                  <div className="text-sm text-[#0B0F14]/40">Scalability</div>
                  <div className="font-semibold text-[#0B0F14]">Start → Scale → Dominate</div>
                </div>
              </div>
              <div className="w-px h-8 bg-[#9DB4C6]/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-[#1E2A39]" />
                <div>
                  <div className="text-sm text-[#0B0F14]/40">Perfect For</div>
                  <div className="font-semibold text-[#0B0F14]">Every Business Stage</div>
                </div>
              </div>
              <div className="w-px h-8 bg-[#9DB4C6]/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#1E2A39]" />
                <div>
                  <div className="text-sm text-[#0B0F14]/40">Setup Time</div>
                  <div className="font-semibold text-[#0B0F14]">1-8 Weeks</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A39] via-[#2A3A4F] to-[#0B0F14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9DB4C6]/20 rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Play className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Start Your Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Choose the Right Package
              <span className="block text-[#9DB4C6] mt-2">for Your Growth</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Start your journey with our expert digital solutions. Transform your business today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-[#F5F8FA] text-[#1E2A39] rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Get Started Now{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                "30-Day Money Back",
                "24/7 Support",
                "No Hidden Fees",
                "Flexible Terms",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-white/60" />
                  <span className="text-white/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center justify-center">
                  <img src={lolo1} alt="logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-contain" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">veronic</span>
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
                {["Cloud Services", "Cybersecurity", "AI & Automation", "Data Analytics"].map((item) => (
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
    </div>
  );
};

export default PackagesPage;
