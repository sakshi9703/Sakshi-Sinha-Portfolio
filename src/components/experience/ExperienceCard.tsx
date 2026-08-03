import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Highlight from "./Highlight";
import TechBadge from "./TechBadge";
import MagneticButton from "../MagneticButton";
import BrowserFrame from "../common/BrowserFrame";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  website: string;
  image: string;
}

export default function ExperienceCard({
  role,
  company,
  duration,
  location,
  description,
  highlights,
  techStack,
  website,
  image,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Top */}

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 p-10 lg:p-14">
        {/* Left */}

        <div>
          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Professional Experience
          </span>

          <h3 className="mt-4 text-4xl font-bold text-white">{role}</h3>

          <div className="mt-3 space-y-1">
            <p className="text-xl font-medium text-neutral-200">{company}</p>

            <p className="text-neutral-400">{duration}</p>

            <p className="text-neutral-500">{location}</p>
          </div>

          <p className="mt-8 text-lg leading-8 text-neutral-300">
            {description}
          </p>

          {/* Highlights */}

          <div className="mt-10 space-y-5">
            {highlights.map((item) => (
              <Highlight key={item} text={item} />
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="w-full">
          <motion.div
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              y: -8,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <BrowserFrame
    image={image}
    title="icw.net.in"
/>
            <div
              className="
        mx-auto
        mt-5
        h-6
        w-3/4
        rounded-full
        bg-blue-500/10
        blur-2xl
    "
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 px-10 lg:px-14 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500 mb-5">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <MagneticButton
            href={website}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              text-black
              font-semibold
              transition-all
            "
          >
            Visit Website
            <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}
