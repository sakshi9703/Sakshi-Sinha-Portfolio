import { motion } from "motion/react";
import BrowserFrame from "../common/BrowserFrame";
import FeatureItem from "./FeatureItem";
import ProjectMetric from "./ProjectMetric";
import ProjectActions from "./ProjectActions";
import TechBadge from "../experience/TechBadge";

interface FeaturedProjectProps {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  image: string;
  live: string;
  github: string;
  techStack: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export default function FeaturedProject({
  title,
  subtitle,
  problem,
  solution,
  image,
  live,
  github,
  techStack,
  features,
  metrics,
  featured = false,
}: FeaturedProjectProps) {
  return (
    <section className="py-24">
      <div
        className={`
        grid
        gap-16
        items-center
        ${featured ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-[1fr_1fr]"}
      `}
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {featured && (
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-6">
              Flagship Project
            </span>
          )}

          <h2 className="text-5xl font-bold leading-tight">{title}</h2>

          <p className="mt-5 text-xl text-neutral-400 leading-8">{subtitle}</p>

          {/* Problem */}

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Problem</h3>

            <p className="mt-3 text-neutral-400 leading-8">{problem}</p>
          </div>

          {/* Solution */}

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Solution</h3>

            <p className="mt-3 text-neutral-400 leading-8">{solution}</p>
          </div>

          {/* Features */}

          <div className="mt-12 space-y-5">
            {features.map((feature) => (
              <FeatureItem key={feature} text={feature} />
            ))}
          </div>

          {/* Tech */}

          <div className="flex flex-wrap gap-3 mt-10">
            {techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <ProjectActions github={github} live={live} />
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <BrowserFrame title={live.replace("https://", "")} image={image} />

          {/* Metrics */}

          <div className="grid grid-cols-2 gap-4 mt-10">
            {metrics.map((metric) => (
              <ProjectMetric
                key={metric.label}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
