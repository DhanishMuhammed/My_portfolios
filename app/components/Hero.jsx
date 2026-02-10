'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

function Hero() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        rotate: { type: "spring", stiffness: 100 }
      }
    }
  };

  const techStack = [
    { name: 'Next.js', icon: <FaCode />, color: 'text-cyan-400' },
    { name: 'React', icon: <FaCode />, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: <FaCode />, color: 'text-sky-400' },
    { name: 'TypeScript', icon: <FaCode />, color: 'text-indigo-400' },
    { name: 'JavaScript', icon: <FaCode />, color: 'text-yellow-400' },
    { name: 'Python', icon: <FaServer />, color: 'text-emerald-400' },
    { name: 'Node.js', icon: <FaServer />, color: 'text-green-400' },
    { name: 'Express.js', icon: <FaServer />, color: 'text-gray-300' },
    { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-500' },
    { name: 'MySQL', icon: <FaDatabase />, color: 'text-blue-500' },
    { name: 'AWS', icon: <FaCloud />, color: 'text-amber-400' }
  ];

  const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 2,
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1 // Vary the size
}));

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 lg:py-0 overflow-hidden">
      
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/10 to-purple-900/10" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
  <motion.div
    key={particle.id}
    className="absolute bg-cyan-500/20 rounded-full"
    style={{
      left: `${particle.left}%`,
      top: `${particle.top}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
    }}
    animate={{
      y: [0, -150, 0],
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0]
    }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: particle.delay
    }}
  />
))}
        
        {/* Glowing Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        
        {/* Image Section - Enhanced */}
        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            {/* Outer Glow Ring */}
            <motion.div 
              className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Inner Glow Ring */}
            <motion.div 
              className="absolute -inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-lg"
              animate={{
                rotate: -360,
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Profile Image Container */}
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-cyan-500/20"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.5)",
                boxShadow: "0 0 50px rgba(34, 211, 238, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-900/10 z-10" />
              
              {/* Profile Image */}
              <img 
                src="/image-3.jpeg" 
                alt="Dhanish - Full Stack Developer"
                className="w-full h-full object-cover relative z-0"
              />
              
              {/* Floating Badge - FIXED */}
              <motion.div 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white text-sm font-semibold rounded-full shadow-lg">
                  Full Stack Developer
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm" />
          </div>
        </motion.div>

        {/* Content Section - Enhanced */}
        <motion.div 
          className="lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Section */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-full border border-cyan-700/30">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-300 font-medium">Hello! I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Dhanish</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Muhammed
              </span>
            </h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-cyan-300 font-medium mb-2 flex items-center gap-3"
              animate={{ 
                x: [0, 5, 0],
                textShadow: ["0 0 10px rgba(34, 211, 238, 0)", "0 0 20px rgba(34, 211, 238, 0.3)", "0 0 10px rgba(34, 211, 238, 0)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaCode className="text-cyan-400" />
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div 
            className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-cyan-700/30 backdrop-blur-xl shadow-2xl"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgba(34, 211, 238, 0.5)",
              boxShadow: "0 20px 40px rgba(34, 211, 238, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                <FaCode className="text-cyan-400 text-xl" />
              </div>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Welcome to my portfolio! I specialize in building modern, scalable web applications using cutting-edge technologies. Explore my projects and let's create something amazing together.
              </motion.p>
            </div>
          </motion.div>

          {/* Tech Stack - Enhanced */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
              <p className="text-gray-400 font-medium">Tech Stack Expertise</p>
              <div className="w-8 h-px bg-gradient-to-l from-purple-500 to-transparent" />
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-3 bg-gray-900/50 border border-gray-800 rounded-xl text-center group-hover:bg-gray-800/70 group-hover:border-cyan-500/30 transition-all duration-300">
                    <div className={`text-lg mb-1 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <p className="text-xs text-gray-300 group-hover:text-white font-medium">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons - Enhanced */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
          >
            <motion.a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              
              <span className="flex items-center justify-center gap-3 relative z-10">
                View Projects
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowRight />
                </motion.div>
              </span>
            </motion.a>
            
            <motion.a 
              href="/cv dhani 2.pdf" 
              download="Dhanish_Muhammed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <FaDownload />
                Download CV
              </span>
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects" },
              { value: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-xl border border-gray-800"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-cyan-300/70">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  )
}

export default Hero;