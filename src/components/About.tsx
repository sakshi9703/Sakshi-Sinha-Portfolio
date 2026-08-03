import { motion } from "motion/react";
import TechOrbit from "./TechOrbit";

const highlights = [
  { title: "Frontend", value: "React • TypeScript • Tailwind" },
  { title: "Backend", value: "Node.js • Express • REST APIs" },
  { title: "AI", value: "Gemini AI • Resume Analysis" },
  { title: "Deployment", value: "Docker • Netlify • Render" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-36 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center"
>
  <TechOrbit />
</motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Building products with
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              engineering, not just code.
            </span>
          </h2>

          <div className="space-y-6 text-lg text-neutral-300 leading-8">

            <p>
              I enjoy building modern web applications that are scalable,
              performant, and thoughtfully designed. My focus is creating
              products that feel polished from both the engineering and user
              experience perspectives.
            </p>

            <p>
              My expertise lies in the MERN stack, where I build secure REST
              APIs, responsive React applications, and integrate AI-powered
              experiences using Google Gemini.
            </p>

            <p>
              Beyond building features, I care deeply about clean architecture,
              maintainable code, performance optimization, and creating digital
              products that solve real-world problems.
            </p>

          </div>

          {/* Highlights */}

          <div className="grid grid-cols-2 gap-5 mt-12">

            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-2">
                  {item.title}
                </p>

                <p className="text-white font-medium leading-6">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}