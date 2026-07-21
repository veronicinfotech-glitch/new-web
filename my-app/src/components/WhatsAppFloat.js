import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16.004 0C7.17 0 .006 7.164.006 16.002c0 2.822.74 5.58 2.146 8.018L0 32l8.18-2.146a15.932 15.932 0 0 0 7.824 2.052h.006c8.832 0 15.998-7.164 15.998-16.002C31.996 7.164 24.834 0 16.004 0zm0 29.232h-.006a13.235 13.235 0 0 1-6.744-1.848l-.484-.288-5.016 1.316 1.338-4.888-.316-.504a13.232 13.232 0 0 1-2.022-7.018C2.75 8.682 10.068 1.366 16.004 1.366c7.318 0 14.636 7.316 14.636 14.636 0 7.318-7.318 14.632-14.636 14.632zm7.262-10.934c-.398-.2-2.354-1.162-2.718-1.294-.364-.132-.63-.2-.896.2-.266.398-1.028 1.294-1.26 1.56-.232.266-.464.3-.862.1-.398-.2-1.68-.618-3.2-1.974-1.182-1.054-1.98-2.356-2.212-2.754-.232-.398-.024-.614.174-.812.18-.178.398-.464.598-.696.2-.232.266-.398.398-.664.132-.266.066-.498-.034-.696-.1-.2-.896-2.16-1.228-2.958-.324-.776-.654-.672-.896-.684l-.764-.014c-.266 0-.696.1-.1.062.53.598 1.56 2.354 1.56 3.844 0 1.494-.796 2.856-1.028 3.122-.232.266-1.98 3.024-4.8 4.24-2.82 1.216-3.844 1.362-4.508 1.296-.664-.066-2.122-.866-2.42-1.704-.298-.838-.298-1.558-.21-1.704.088-.146.32-.212.718-.412z" />
  </svg>
);

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918866113864?text=Hi%20Veronic%20Team%2C%20I%20would%20like%20to%20connect!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Contact on WhatsApp"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.6, 0.1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 rounded-full bg-white"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-full h-full object-contain drop-shadow-md" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#F5F8FA] animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1E2A39] text-[#F5F8FA] text-xs px-3.5 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl"
        >
          Chat with us
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#1E2A39]" />
        </motion.div>
      </motion.div>
    </a>
  );
};

export default WhatsAppFloat;
