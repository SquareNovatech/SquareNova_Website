import { motion } from 'framer-motion';
import { INDUSTRIES } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { getIcon } from '../../utils/icons';
import SectionTitle from '../ui/SectionTitle';

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding relative bg-surface-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Industries"
          title="Industries We Serve"
          subtitle="Delivering tailored technology solutions across diverse sectors worldwide."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              custom={index * 0.05}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:border-brand-500/30"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-500/15 flex items-center justify-center mb-4 group-hover:bg-brand-500/25 transition-colors">
                {getIcon(industry.icon, { size: 22, className: 'text-brand-400' })}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
