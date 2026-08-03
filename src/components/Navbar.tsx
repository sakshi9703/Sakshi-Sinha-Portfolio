import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between glass px-6 py-3 rounded-full"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center font-bold text-sm tracking-tighter">SS</div>
        <span className="font-medium tracking-tight text-lg">Sakshi Sinha</span>
      </div>
      <div className="flex items-center gap-8 text-sm text-neutral-400 font-medium">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a 
          href="https://drive.google.com/file/d/1VJ2Zm4EE_8_d17jgYbgzkTWGBeEr2rr5/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Resume
        </a>
        <a href="#contact" className="bg-[#FAFAFA] text-[#0A0A0B] px-5 py-2 rounded-full font-semibold hover:bg-neutral-200 transition-all">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
