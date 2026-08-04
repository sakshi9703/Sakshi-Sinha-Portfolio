import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-3 right-3 md:left-4 md:right-4 z-50"
      >
        <div className="glass rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight">
              SS
            </div>

            <span className="hidden sm:block font-medium tracking-tight text-lg">
              Sakshi Sinha
            </span>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a
              href="#about"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#experience"
              className="hover:text-white transition-colors duration-300"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="/resume.pdf" download="Sakshi_Sinha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 font-semibold text-black transition hover:bg-neutral-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              className="md:hidden mt-4 rounded-3xl border border-white/10 bg-[#0A0A0B]/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="flex flex-col py-4">

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 hover:bg-white/5 transition"
                >
                  About
                </a>

                <a
                  href="#experience"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 hover:bg-white/5 transition"
                >
                  Experience
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 hover:bg-white/5 transition"
                >
                  Projects
                </a>

                <a
                  href="https://drive.google.com/file/d/1VJ2Zm4EE_8_d17jgYbgzkTWGBeEr2rr5/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 hover:bg-white/5 transition"
                >
                  Resume
                </a>

                <div className="px-5 pt-4">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full rounded-full bg-white py-3 text-center font-semibold text-black hover:bg-neutral-200 transition"
                  >
                    Contact
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}