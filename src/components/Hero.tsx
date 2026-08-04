import { motion } from "motion/react";
import Blob from "./Blob";
import MagneticButton from "./MagneticButton";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-6 lg:px-8 pt-28 lg:pt-20">
      <Blob />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* LEFT CONTENT */}

        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 w-fit mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Available for New Roles
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
            }}
            className="text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
xl:text-9xl font-bold tracking-tight leading-[0.9] mb-6"
          >
            Sakshi <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500">
              Sinha
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed mb-8"
          >
            Building intelligent web applications with modern engineering,
            scalable architecture, and AI-powered experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* PROJECT BUTTON */}

            <MagneticButton
              href="#projects"
              className="w-full sm:w-auto
px-6 py-4
justify-center bg-[#FAFAFA] text-[#0A0A0B] font-bold rounded-xl flex items-center gap-3"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </MagneticButton>

            {/* RESUME BUTTON */}

            <MagneticButton
              href="/resume.pdf"
              download="Sakshi_Sinha_Resume.pdf"
              className="w-full sm:w-auto px-6 py-4 justify-center bg-white/5 border border-white/20 text-white font-bold rounded-xl flex items-center gap-3 backdrop-blur-xl"
            >
              View Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </MagneticButton>
          </motion.div>
        </div>

        {/* RIGHT TERMINAL */}

        <div
          className="
lg:col-span-7
flex
justify-center
items-center
mt-10
lg:mt-0
"
        >
          <div className="hidden lg:flex lg:col-span-7 justify-center">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
