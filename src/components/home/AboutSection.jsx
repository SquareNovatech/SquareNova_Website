import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { COMPANY, WHY_CHOOSE_US } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          badge="About Us"
          title="Building the Future of Technology"
          subtitle={COMPANY.description}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="glass rounded-2xl p-8 hover:border-brand-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mb-5">
              <Target className="text-brand-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">{COMPANY.mission}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
            className="glass rounded-2xl p-8 hover:border-accent-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-5">
              <Eye className="text-accent-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">{COMPANY.vision}</p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="glass rounded-2xl p-8 lg:p-10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                custom={index * 0.05}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-brand-400 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
