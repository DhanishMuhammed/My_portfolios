import React from 'react'

function Navbar() {
  return (
     <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl text-cyan-400">Dhanish</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
