import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import lolo1 from '../images/lolo1.png';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-16 sm:py-20 bg-[#060A10] mt-auto border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img src={lolo1} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-contain" />
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xs">
              Building the future through innovative technology, premium digital solutions, and creative excellence.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-4">
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
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-[#9DB4C6] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-white font-space tracking-wide">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {['Custom Software', 'Web Development', 'Mobile Apps', 'SEO & Analytics', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="block text-sm sm:text-base text-white/60 hover:text-[#9DB4C6] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-white font-space tracking-wide">Products</h4>
            <ul className="space-y-3 sm:space-y-4">
              {['Stockly', 'Dropbox', 'Solar Sales OS', 'Smart Kirana', 'Manufacturing OS', 'Siddhanta', 'Arohana ERP', 'TRINETRA'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="block text-sm sm:text-base text-white/60 hover:text-[#9DB4C6] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-white font-space tracking-wide">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Pricing & Packages', path: '/packages' },
                { name: 'Our Products', path: '/products' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="block text-sm sm:text-base text-white/60 hover:text-[#9DB4C6] hover:translate-x-1 transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-white font-space tracking-wide">Contact</h4>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-[#9DB4C6]/10 transition-colors">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-[#9DB4C6] transition-colors" />
                </div>
                <Link to="/contact" className="block text-sm sm:text-base text-white/60 group-hover:text-[#9DB4C6] transition-colors break-all leading-relaxed">
                  veronic.infotech@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-[#9DB4C6]/10 transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-[#9DB4C6] transition-colors" />
                </div>
                <Link to="/contact" className="block text-sm sm:text-base text-white/60 group-hover:text-[#9DB4C6] transition-colors leading-relaxed">
                  +91 88661 13864
                </Link>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-[#9DB4C6]/10 transition-colors">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-[#9DB4C6] transition-colors" />
                </div>
                <Link to="/contact" className="block text-sm sm:text-base text-white/60 group-hover:text-[#9DB4C6] transition-colors leading-relaxed">
                  Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot, Gujarat 360005
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 border-t border-white/10 text-center">
          <p className="text-sm sm:text-base text-white/40 tracking-wide font-medium">
            © 2026 veronic. All rights reserved. | Built with innovation for the future
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
