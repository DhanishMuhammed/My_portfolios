'use client';

import { motion ,AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FaAward, 
  FaGraduationCap, 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaUniversity,
  FaLaptopCode,
  FaTimes,
  FaExpand,
  FaDownload
} from 'react-icons/fa';

const certificates = [
  {
    title: "Bachelor of Computer Applications",
    issuer: "Calicut University",
    date: "2024",
    description: "Graduated with specialization in Computer Applications",
    category: "Academic",
    icon: <FaGraduationCap />,
    color: "from-purple-500/20 to-pink-500/20",
    badgeColor: "bg-purple-500/20 text-purple-400",
    image: "/degree.png"
  },
  {
    title: "MERN Stack Developer",
    issuer: "Luminar Technolab",
    date: "2024",
    description: "Full Stack Web Development with React, Node.js, Express, MongoDB",
    category: "Professional",
    icon: <FaCertificate />,
    color: "from-blue-500/20 to-cyan-500/20",
    badgeColor: "bg-blue-500/20 text-blue-400",
    image: "/luminar.png"
  },
  {
    title: "Python Developer",
    issuer: "Core Micron LLP",
    date: "2025",
    description: "Python Programming and backend development",
    category: "Professional",
    icon: <FaLaptopCode />,
    color: "from-amber-500/20 to-orange-500/20",
    badgeColor: "bg-amber-500/20 text-amber-400",
    image: "/experience.png"
  },
  {
    title: "Internship Certificate",
    issuer: "Cormicron LLP",
    date: "2025",
    description: "MERN Developer Intern - Completed 6 months internship",
    category: "Professional",
    icon: <FaLaptopCode />,
    color: "from-emerald-500/20 to-green-500/20",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    image: "/internship.png"
  },
  {
    title: "NACTET Certificate",
    issuer: "National Council for Technology and Training",
    date: "2025",
    description: "The academic council of National Council for Technology and Training certify",
    category: "Academic",
    icon: <FaAward />,
    color: "from-red-500/20 to-rose-500/20",
    badgeColor: "bg-red-500/20 text-red-400",
    image: "/nctt.png"
  }
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  const handleDownload = (imageUrl, fileName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName || 'certificate.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullscreen = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <>
      <section id="certificates" className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
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
                <FaCertificate className="text-cyan-400 text-3xl" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="text-white">My</span>{' '}
                <span className="text-cyan-400">Certificates</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional qualifications and academic achievements that showcase my learning journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {["All", "Professional", "Academic"].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === "All"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-gray-900/50 border border-gray-800 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Certificates Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden h-full">
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => handleViewCertificate(cert)}>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay with View Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium"
                      >
                        Click to View
                      </motion.div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cert.badgeColor} border border-current/30`}>
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title and Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${cert.color}`}>
                          <div className="text-xl">{cert.icon}</div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    {/* Issuer and Date */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaUniversity className="text-cyan-400" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => handleViewCertificate(cert)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-sm text-center"
                      >
                        View Certificate
                      </motion.button>
                      <motion.button
                        onClick={() => handleFullscreen(cert.image)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-12 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                        title="Open in new tab"
                      >
                        <FaExternalLinkAlt />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-20 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: certificates.length, label: "Total Certificates", icon: <FaCertificate /> },
                { value: "3", label: "Professional", icon: <FaAward /> },
                { value: "2", label: "Academic", icon: <FaGraduationCap /> },
                { value: "2024-2026", label: "Timeline", icon: <FaCalendarAlt /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-2xl text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     
      {/* Certificate Modal - FIXED VERSION */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            {/* Modal Container */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-[10000]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${selectedCertificate.color}`}>
                    <div className="text-2xl text-white">{selectedCertificate.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {selectedCertificate.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="text-gray-400 flex items-center gap-1">
                        <FaUniversity className="text-cyan-400" />
                        {selectedCertificate.issuer}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <FaCalendarAlt className="text-cyan-400" />
                        {selectedCertificate.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Close Button - Big and Visible */}
                <motion.button
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
                {/* Certificate Image */}
                <div className="mb-6 bg-black/50 rounded-xl p-4">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                    onError={(e) => {
                      console.error('Failed to load modal image:', selectedCertificate.image);
                      e.target.src = '/placeholder-certificate.jpg';
                    }}
                  />
                  
                  {/* Image Action Buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                   
                    <motion.button
                      onClick={() => handleFullscreen(selectedCertificate.image)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <FaExpand />
                      Fullscreen
                    </motion.button>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300">{selectedCertificate.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-800">
                          <span className="text-gray-400">Category:</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedCertificate.badgeColor}`}>
                            {selectedCertificate.category}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-800">
                          <span className="text-gray-400">Issued By:</span>
                          <span className="text-white">{selectedCertificate.issuer}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-800">
                          <span className="text-gray-400">Issue Date:</span>
                          <span className="text-white">{selectedCertificate.date}</span>
                        </div>
                      </div>
                    </div>
                    
                  
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-gray-400 text-sm">
                    Certificate ID: {selectedCertificate.title.substring(0, 3).toUpperCase()}-{selectedCertificate.date.replace('-', '')}
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleCloseModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </motion.button>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Debug Info - Remove in production */}
      {isModalOpen && (
        <div className="fixed bottom-4 right-4 z-[10001] p-4 bg-black/80 text-white text-sm rounded-lg">
          Modal is open: {selectedCertificate?.title}
          <br />
          Press ESC to close
        </div>
      )}
    </>
  );
}