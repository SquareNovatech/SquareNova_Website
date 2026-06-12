import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { SERVICES } from '../data/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { getIcon } from '../utils/icons';

export default function Services() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to accelerate your digital transformation journey."
      />

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 lg:p-10 hover:border-brand-500/20 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                    {getIcon(service.icon, { size: 32, className: 'text-brand-400' })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-brand-500/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                    {service.description}
                  </p>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 gap-3"
                  >
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        variants={fadeInUp}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto mt-16 text-center glass rounded-2xl p-10"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Let us help you choose the right solution for your business needs.
          </p>
          <Button to="/contact" size="lg">
            Request a Consultation
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
