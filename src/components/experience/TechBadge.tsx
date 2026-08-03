import { motion } from "motion/react";

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-4
        py-2
        text-sm
        font-medium
        text-neutral-300
        backdrop-blur-md
        transition-colors
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:text-white
      "
    >
      {tech}
    </motion.span>
  );
}