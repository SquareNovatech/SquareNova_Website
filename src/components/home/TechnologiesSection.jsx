import { motion } from 'framer-motion';
import { TECH_STACK } from '../../data/technologies';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import TechIcon from '../ui/TechIcon';

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          badge="Tech Stack"
          title="Technologies We Work With"
          subtitle="We leverage industry-leading tools and frameworks to build robust, future-proof solutions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5"
        >
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={scaleIn}
              custom={index * 0.04}
              whileHover={{ scale: 1.06, y: -6 }}
              className={`group relative rounded-2xl border ${tech.border} bg-gradient-to-br ${tech.bg} p-5 text-center transition-all duration-300 hover:shadow-xl ${tech.glow} cursor-default overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tech.color}22, transparent 70%)`,
                }}
              />

              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}18`,
                    boxShadow: `0 0 24px ${tech.color}25`,
                  }}
                >
                  <TechIcon tech={tech} size={32} />
                </div>

                <div>
                  <div className="text-base font-bold text-white">{tech.name}</div>
                  <div
                    className="text-[10px] mt-1 uppercase tracking-wider font-semibold"
                    style={{ color: `${tech.color}cc` }}
                  >
                    {tech.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Mobile', 'Frontend', 'Backend', 'AI/ML', 'Cloud', 'DevOps'].map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider glass text-zinc-400"
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
