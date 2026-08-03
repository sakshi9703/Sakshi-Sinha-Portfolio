import { motion } from "motion/react";

interface ProjectMetricProps {
  label: string;
  value: string;
}

export default function ProjectMetric({
  label,
  value,
}: ProjectMetricProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        p-5
      "
    >
      <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
        {label}
      </p>

      <p className="mt-3 text-lg font-semibold text-white">
        {value}
      </p>
    </motion.div>
  );
}