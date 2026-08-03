import { motion } from "motion/react";
import Blob from "./Blob";
import MagneticButton from "./MagneticButton";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden">

      <Blob />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">


        {/* LEFT CONTENT */}

        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pl-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 w-fit">

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
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-6"
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
            className="text-lg md:text-xl lg:text-2xl text-neutral-400 mb-8 max-w-xl leading-relaxed"
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
            className="flex flex-wrap gap-4"
          >


            {/* PROJECT BUTTON */}

            <MagneticButton
              href="#projects"
              className="px-8 py-4 bg-[#FAFAFA] text-[#0A0A0B] font-bold rounded-xl flex items-center gap-3"
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
              href="https://drive.google.com/file/d/1VJ2Zm4EE_8_d17jgYbgzkTWGBeEr2rr5/view?usp=drive_link"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl flex items-center gap-3 backdrop-blur-xl"
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

        <div className="col-span-12 lg:col-span-7 flex justify-center items-center relative z-10">

          <Terminal />

        </div>


      </div>

    </section>
  );
}