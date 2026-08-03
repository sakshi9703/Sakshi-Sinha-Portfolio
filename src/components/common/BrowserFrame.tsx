import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface BrowserFrameProps {
  image: string;
  title: string;
}

export default function BrowserFrame({
  image,
  title,
}: BrowserFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const viewportHeight = containerRef.current.clientHeight;
      const imageHeight = imageRef.current.clientHeight;

      const distance = Math.max(imageHeight - viewportHeight, 0);

      setScrollDistance(distance);
    };

    calculateScroll();

    window.addEventListener("resize", calculateScroll);

    return () =>
      window.removeEventListener("resize", calculateScroll);
  }, []);

  return (
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
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="relative"
    >
      {/* Reflection */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* Browser */}
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101012] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="rounded-full bg-white/5 px-6 py-1 text-xs text-neutral-400">
            {title}
          </div>

          <div className="w-10" />
        </div>

        {/* Viewport */}
        <div
          ref={containerRef}
          className="relative h-[560px] overflow-hidden bg-[#0B0B0C]"
        >
          <motion.img
            ref={imageRef}
            src={image}
            alt={title}
            className="absolute left-0 top-0 w-full h-auto"

            animate={{
              y: [0, -scrollDistance, 0],
            }}

            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            onLoad={() => {
              if (!containerRef.current || !imageRef.current) return;

              const viewportHeight =
                containerRef.current.clientHeight;

              const imageHeight =
                imageRef.current.clientHeight;

              setScrollDistance(
                Math.max(imageHeight - viewportHeight, 0)
              );
            }}
          />
        </div>
      </div>

      {/* Glow */}
      <div className="mx-auto mt-6 h-8 w-3/4 rounded-full bg-emerald-500/10 blur-3xl" />
    </motion.div>
  );
}