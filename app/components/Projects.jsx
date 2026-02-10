'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaDatabase, FaLayerGroup, FaBolt } from 'react-icons/fa';

const projects = [
  {
    title: "AutoCam E-commerce",
    description: "Modern e-commerce platform for automotive accessories",
    icon: <FaRocket />,
    gradient: "from-blue-500/20 via-cyan-500/20 to-purple-500/20",
    status: "Live",
    progress: 100
  },
  {
    title: "Signature Institute",
    description: "Student management system for educational institutes",
    icon: <FaLayerGroup />,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    status: "Production",
    progress: 100
  },
  {
    title: "POS System",
    description: "Business billing and inventory management solution",
    icon: <FaDatabase />,
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    status: "Live",
    progress: 100
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1e_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 rounded-full border-2 border-cyan-500/30 flex items-center justify-center">
              <FaBolt className="text-cyan-400 text-4xl" />
            </div>
          </motion.div>
          
          <h2 className="text-7xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Where innovation meets implementation
          </p>
        </motion.div>

        {/* Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto"
                >
                  <div className="text-3xl text-white">{project.icon}</div>
                </motion.div>

                {/* Content */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Status Badge */}
                <div className="flex justify-center mb-8">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-center"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 bg-white/10 text-gray-300 rounded-xl font-semibold text-center hover:bg-white/20 transition-colors"
                  >
                    <FaGithub className="inline-block mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3", label: "Live Projects" },
              { value: "10K+", label: "Lines of Code" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}