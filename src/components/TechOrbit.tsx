import { motion } from "motion/react";

import { FaReact, FaNodeJs, FaDocker, FaJava, FaPython } from "react-icons/fa";

import { SiMongodb, SiExpress, SiMysql, SiTypescript } from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { Sparkles } from "lucide-react";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

const technologies: Tech[] = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

export default function TechOrbit() {
  return (
    <div
      className="
    relative
    flex
    items-center
    justify-center
    w-full
max-w-[520px]
aspect-square
px-4
  "
    >
      {/* Ambient Glow */}
      <div className="absolute h-[60%] w-[60%] rounded-full bg-blue-500/10 blur-[80px] md:blur-[120px]" />
      {/* Moving Light */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[75%] w-[75%] md:h-[80%] md:w-[80%]"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400 blur-md" />
      </motion.div>
      {/* Outer Orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[70%] w-[70%] rounded-full border border-white/5"
      />
      {/* Inner Orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[48%] w-[48%] rounded-full border border-white/[0.03]"
      />
      {/* Center Circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 30px rgba(59,130,246,.30)",
            "0 0 70px rgba(59,130,246,.55)",
            "0 0 30px rgba(59,130,246,.30)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
absolute
z-20
flex
h-20
w-20
sm:h-24
sm:w-24
md:h-28
md:w-28
lg:h-32
lg:w-32
items-center
justify-center
rounded-full
border
border-blue-400/30
bg-gradient-to-br
from-blue-500/20
to-violet-500/20
backdrop-blur-2xl
shadow-[0_0_70px_rgba(59,130,246,.30)]
"
      >
        <div className="flex flex-col items-center">
          <Sparkles
  className="mb-1 text-blue-300"
  size={18}
/>

<span className="text-center text-[10px] sm:text-xs md:text-sm font-semibold leading-tight text-white">
            AI
            <br />
            Integration
          </span>
        </div>
      </motion.div>
      {/* Floating Technologies */}
      {/* Floating Technologies */}

{technologies.map((tech, index) => {
  const angle =
    (index / technologies.length) * Math.PI * 2 - Math.PI / 2;

  // Responsive radius
  const radius = 42;

  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  return (
    <motion.div
      key={tech.name}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        y: [0, -8, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.2,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.12,
        y: -10,
        rotate: 0,
        boxShadow: "0 0 60px rgba(59,130,246,.45)",
      }}
      className="
        absolute
        cursor-default
        rounded-full
        border
        border-white/10
        bg-white/[0.05]
        px-2
        py-1
        sm:px-3
        sm:py-1.5
        md:px-5
        md:py-2.5
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,.35)]
        transition-all
        duration-500
        hover:border-blue-400/40
      "
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-sm sm:text-base md:text-lg text-blue-400">
          {tech.icon}
        </span>

        <span className="hidden sm:inline whitespace-nowrap text-xs md:text-sm font-medium text-white">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
})}{" "}
      {/* Orbiting Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[75%] w-[75%] md:h-[80%] md:w-[80%]"
        >
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/70 blur-[1px]"
            style={{
              left: "50%",
              top: 0,
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
          />
        </motion.div>
      ))}
      {/* Decorative Grid */}
      <div className="absolute inset-0 -z-20 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
    </div>
  );
}
