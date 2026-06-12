import { motion } from 'framer-motion';
import { WHY_US } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { getIcon } from '../../utils/icons';
import SectionTitle from '../ui/SectionTitle';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          badge="Why Square Nova TECH"
          title="Your Trusted Technology Partner"
          subtitle="We combine technical excellence with a research-driven approach to deliver solutions that make a lasting impact."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {WHY_US.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={index * 0.08}
              whileHover={{ y: -6 }}
              className="group text-center glass rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-accent-500/30"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(item.icon, { size: 28, className: 'text-brand-400' })}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
