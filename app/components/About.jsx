'use client';

import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaCode, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 200, 255, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const stats = [
    { icon: <FaGraduationCap />, label: "Degree", value: "BCA" },
    { icon: <FaBriefcase />, label: "Experience", value: "1+ Years" },
    { icon: <FaCode />, label: "Projects", value: "10+" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Kerala, India" }
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Stats Cards */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="text-cyan-400 text-3xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Column - Main Content */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-10"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                <div className="bg-cyan-500/20 p-3 rounded-xl mr-4">
                  <FaUser className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>

              <motion.div 
                className="space-y-6 text-gray-300 leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  My name is <span className="text-cyan-300 font-semibold">Dhanish Muhammed</span>, and I am a passionate <span className="text-cyan-300 font-semibold">MERN Stack Developer</span> from Kottakkal, Malappuram, Kerala, India. I completed my <span className="text-cyan-300 font-semibold">Bachelor of Computer Applications (BCA)</span> from Calicut University in 2024.
                </motion.p>

                <motion.p variants={itemVariants}>
                  After graduation, I completed a <span className="text-cyan-300 font-semibold">MERN Stack development course with internship at Luminar Technolab, Kochi</span>, where I gained strong hands-on experience by working on multiple real-world projects.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I began my professional career at <span className="text-cyan-300 font-semibold">Cormicron LLP, Kottakkal</span>, initially joining as a MERN Developer Intern. After my internship, I continued working there as a full-time developer, where I contributed to several live projects, participated in client meetings, and collaborated closely with the development team.
                </motion.p>

                <motion.p variants={itemVariants}>
                  In addition to company projects, I have also built <span className="text-cyan-300 font-semibold">freelance e-commerce websites</span> and personal projects, which helped me strengthen my problem-solving and development skills. I am continuously learning and improving my skills to build modern, scalable, and user-friendly web applications.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                My Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {['React', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Python', 'MySQL', 'AWS', 'Git'].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                      borderColor: "rgba(6, 182, 212, 0.5)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Current Focus Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              Currently Focused On
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Building scalable full-stack applications, exploring cloud technologies, 
              and contributing to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}