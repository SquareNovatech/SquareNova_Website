import { motion } from 'framer-motion';
import { Target, Eye, Users, Zap, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { COMPANY, WHY_CHOOSE_US, WHY_US } from '../data/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { getIcon } from '../utils/icons';

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About Square Nova TECH"
        subtitle={COMPANY.tagline}
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed mb-4">{COMPANY.description}</p>
              <p className="text-gray-400 leading-relaxed">
                Founded with a passion for innovation, {COMPANY.name} combines deep technical
                expertise with a client-first mindset. We partner with businesses of all sizes —
                from ambitious startups to established enterprises — to deliver technology
                solutions that drive measurable results.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, label: 'Client-Centric', desc: 'Your success is our priority' },
                { icon: Zap, label: 'Agile Delivery', desc: 'Fast, iterative development' },
                { icon: Target, label: 'Goal-Oriented', desc: 'Focused on business outcomes' },
                { icon: Eye, label: 'Future-Ready', desc: 'Scalable, modern architecture' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-5">
                  <item.icon className="text-brand-400 mb-3" size={24} />
                  <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 border-l-4 border-l-brand-500"
            >
              <Target className="text-brand-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">{COMPANY.mission}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 border-l-4 border-l-accent-500"
            >
              <Eye className="text-accent-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">{COMPANY.vision}</p>
            </motion.div>
          </div>

          <SectionTitle
            badge="Our Values"
            title="Why Choose Square Nova TECH"
            subtitle="The principles that guide every project we undertake."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {WHY_US.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={index * 0.05}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                  {getIcon(item.icon, { size: 24, className: 'text-brand-400' })}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
