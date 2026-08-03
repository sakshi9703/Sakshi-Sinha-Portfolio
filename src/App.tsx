/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/experience/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FeaturedProjects from './components/projects/FeaturedProjects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    lenis.on('scroll', ScrollTrigger.update);
    
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#0A0A0B] text-[#FAFAFA] selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </main>
  );
}
