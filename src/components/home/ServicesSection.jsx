import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { getIcon } from '../../utils/icons';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative bg-surface-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Technology Solutions"
          subtitle="From mobile apps to AI-powered systems, we deliver end-to-end solutions tailored to your business needs."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              custom={index * 0.05}
              whileHover={{ y: -6 }}
              className="group glass-card glass-card-hover rounded-2xl p-6 lg:p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                {getIcon(service.icon, { size: 28, className: 'text-brand-400' })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            View All Services
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
