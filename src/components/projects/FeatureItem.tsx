import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({
  text,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className="flex gap-3"
    >
      <CheckCircle2
        size={18}
        className="mt-1 text-blue-400"
      />

      <p className="text-neutral-300 leading-7">
        {text}
      </p>
    </motion.div>
  );
}