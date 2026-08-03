import { motion } from "motion/react";
import { Check } from "lucide-react";

interface HighlightProps {
  text: string;
}

export default function Highlight({ text }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ x: 4 }}
      className="flex items-start gap-3"
    >
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
        <Check
          size={14}
          className="text-blue-400"
          strokeWidth={2.5}
        />
      </div>

      <p className="text-neutral-300 leading-7">
        {text}
      </p>
    </motion.div>
  );
}