'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaExternalLinkAlt, FaCopy } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 7034415533",
      link: "https://wa.me/917034415533",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      buttonText: "Chat Now"
    },
    {
      icon: <FaPhone />,
      label: "Call",
      value: "+965 41072857",
      link: "tel:+96541072857",
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      buttonText: "Call Now"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "dhanishparappur@gmail.com",
      link: "mailto:dhanishparappur@gmail.com",
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      buttonText: "Send Email"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "dhanish-muhammed",
      link: "https://linkedin.com/in/dhanish-mohammed-a58a92318",
      color: "text-blue-500",
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/30",
      buttonText: "Connect"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
              <FaWhatsapp className="text-cyan-400 text-3xl" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Get In</span>{' '}
              <span className="text-cyan-400">Touch</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project, collaborate on ideas, or just say hello!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className={`h-full bg-gray-900/60 backdrop-blur-sm border ${contact.borderColor} rounded-2xl p-6 flex flex-col items-center text-center`}>
                {/* Icon - FIXED */}
                <motion.div 
                  className={`w-20 h-20 rounded-2xl ${contact.bgColor} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`text-3xl ${contact.color}`}>
                    {contact.icon}
                  </div>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {contact.label}
                </h3>

                {/* Value with Copy Button */}
                <div className="flex items-center gap-2 mb-6 min-h-[40px]">
                  <p className="text-gray-300 text-sm">
                    {contact.value}
                  </p>
                  <motion.button
                    onClick={() => copyToClipboard(contact.value)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy className="text-sm" />
                  </motion.button>
                </div>

                {/* Action Button */}
                <motion.a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 bg-gradient-to-r ${contact.gradient} text-white rounded-xl font-semibold flex items-center justify-center gap-2 mt-auto`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{contact.buttonText}</span>
                  <FaExternalLinkAlt className="text-sm" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Info */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="inline-block bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              📍 Based in Kerala, India
            </h4>
            <p className="text-gray-400">
              Available for remote work worldwide • Open to relocation opportunities
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="mt-12 flex justify-center gap-6"
          variants={containerVariants}
        >
          {[
            { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/+917034415533", color: "hover:text-green-500" },
            { icon: <FaLinkedin />, label: "LinkedIn", link: "https://linkedin.com/in/dhanish-mohammed-a58a92318", color: "hover:text-blue-500" },
            { icon: <FaEnvelope />, label: "Email", link: "mailto:dhanishparappur@gmail.com", color: "hover:text-purple-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`text-2xl ${social.color} transition-colors`}>
                {social.icon}
              </div>
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}