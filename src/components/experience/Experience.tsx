import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Professional
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-xl text-neutral-400 leading-8">
            Working with clients taught me that shipping production-ready
            software isn't just about writing code—it's about understanding
            requirements, communicating effectively, and delivering reliable,
            maintainable solutions.
          </p>
        </motion.div>

        {/* Experience Cards */}

        <div className="space-y-24">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              role={experience.role}
              company={experience.company}
              duration={experience.duration}
              location={experience.location}
              description={experience.description}
              highlights={experience.highlights}
              techStack={experience.techStack}
              website={experience.website}
              image={experience.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}