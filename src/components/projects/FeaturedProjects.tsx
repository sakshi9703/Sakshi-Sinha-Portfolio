import { motion } from "motion/react";
import FeaturedProject from "./FeaturedProject";
import { projects } from "../../data";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-36 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">
            Selected Work
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-400 leading-8">
            A collection of AI-powered applications and full-stack products
            focused on solving real-world problems with scalable architecture
            and thoughtful user experiences.
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project) => (
            <FeaturedProject
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}