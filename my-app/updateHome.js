const fs = require('fs');
let content = fs.readFileSync('/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/Home.js', 'utf8');

// 1. Add herovideo import
content = content.replace('import heroBgImage from "../images/s1.png";', 'import heroBgImage from "../images/s1.png";\nimport herovideo from "../video/herovideo.mp4";');

// 2. Add isVideoEnded state
content = content.replace('const [handshakePlayed, setHandshakePlayed] = useState(false);', 'const [handshakePlayed, setHandshakePlayed] = useState(false);\n  const [isVideoEnded, setIsVideoEnded] = useState(false);');

// 3. Navbar height and logo
content = content.replace('h-16 sm:h-20', 'h-12 sm:h-14');
content = content.replace('w-14 h-14 md:w-16 md:h-16', 'w-10 h-10 md:w-12 md:h-12');
content = content.replace('top-16 sm:top-20', 'top-12 sm:top-14');

// 4. Hero section replacement
const heroTarget = `      {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBgImage}
            alt="Veronic - IT Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/85 via-[#0B0F14]/65 to-[#0B0F14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-transparent to-transparent" />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">`;

const heroReplacement = `      {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            playsInline
            loop={false}
            onEnded={() => setIsVideoEnded(true)}
            className="w-full h-full object-cover"
          >
            <source src={herovideo} type="video/mp4" />
          </video>
          <div className={\`absolute inset-0 bg-gradient-to-r from-[#0B0F14]/90 via-[#0B0F14]/70 to-[#0B0F14]/40 transition-opacity duration-1000 \${isVideoEnded ? 'opacity-100' : 'opacity-0'}\`} />
          <div className={\`absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-transparent to-transparent transition-opacity duration-1000 \${isVideoEnded ? 'opacity-100' : 'opacity-0'}\`} />
        </div>

        {/* Center Content */}
        <div className={\`absolute inset-0 flex items-center justify-center transition-all duration-1000 \${isVideoEnded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}\`}>`;

content = content.replace(heroTarget, heroReplacement);

// 5. About Section replacement
const aboutStartStr = '      {/* About Section - Three Column Layout */}';
const servicesStartStr = '      {/* Services Section */}';
const startIdx = content.indexOf(aboutStartStr);
const endIdx = content.indexOf(servicesStartStr);

const newAboutSection = `      {/* Digital Innovation Hub Section - New Unique Section */}
      <section ref={aboutRef} id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#0B0F14]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(30,42,57,0.8),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(157,180,198,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-[#9DB4C6]" />
              <span className="text-sm font-medium text-white/90">Our Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space">
              Pioneering Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DB4C6] to-[#1E2A39]">Ecosystems</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              We transcend traditional development by engineering scalable, intelligent, and highly responsive platforms that redefine how businesses operate and scale in the modern era.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Cpu,
                title: "Advanced Engineering",
                desc: "Harnessing bleeding-edge technology to build robust and scalable architecture.",
                delay: 0.1
              },
              {
                icon: Network,
                title: "Seamless Integration",
                desc: "Connecting disparate systems into a unified, high-performance ecosystem.",
                delay: 0.2
              },
              {
                icon: Lightbulb,
                title: "Innovative Strategy",
                desc: "Data-driven insights and forward-thinking planning to outpace the competition.",
                delay: 0.3
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E2A39] to-[#9DB4C6]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

`;

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newAboutSection + content.substring(endIdx);
} else {
  console.log("Could not find about section");
}

fs.writeFileSync('/home/vijay-odedra/Downloads/website/web/Veronic/my-app/src/components/Home.js', content, 'utf8');
console.log('Update complete.');
