import { motion } from 'motion/react';
import { skillCategories } from '../data';

export default function Skills() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Skills</h2>
        {Object.entries(skillCategories).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-8"
          >
            <h3 className="text-sm text-blue-400 uppercase tracking-widest mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                  className="px-4 py-2 rounded-full glass text-sm border border-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
