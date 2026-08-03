import { motion } from "motion/react";
import TechOrbit from "./TechOrbit";

const highlights = [
  { title: "Languages", value: "JavaScript • TypeScript • Java • Python" },
  { title: "Frontend", value: "React • Tailwind CSS • HTML5 • CSS3" },
  { title: "Backend", value: "Node.js • Express.js • REST APIs • JWT" },
  { title: "Tools", value: "Git • Docker • Postman • Vercel" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 lg:py-36 px-5 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Image */}

        <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center order-1 lg:order-1"
>
  <TechOrbit />
</motion.div>

        {/* Content */}

        <motion.div
        className="order-2 text-center lg:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
            About Me
          </p>

          <h2 className="
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
leading-tight
mb-8
">
            Building products with
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              engineering, not just code.
            </span>
          </h2>

          <div className="
space-y-5
text-base
sm:text-lg
text-neutral-300
leading-7
sm:leading-8
max-w-2xl
mx-auto
lg:mx-0
">

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">

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
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-2">
                  {item.title}
                </p>

                <p className="text-sm sm:text-base text-white font-medium leading-6">
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