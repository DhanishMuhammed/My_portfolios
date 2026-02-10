import Image from "next/image";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>

      <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Certificates/>
     <Contact/>
    </>
  );
}
