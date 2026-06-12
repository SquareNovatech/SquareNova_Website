import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../data/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Tech Stack"
          title="Technologies We Work With"
          subtitle="We leverage industry-leading tools and frameworks to build robust, future-proof solutions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={scaleIn}
              custom={index * 0.04}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group glass rounded-xl p-5 text-center transition-all duration-300 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 cursor-default"
            >
              <div className="text-lg font-bold text-white group-hover:gradient-text transition-all">
                {tech.name}
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
