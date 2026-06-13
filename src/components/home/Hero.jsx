import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Smartphone, Cloud } from 'lucide-react';
import { COMPANY } from '../../data/constants';
import { fadeInUp, fadeIn, slideInRight } from '../../utils/animations';
import Button from '../ui/Button';
import AnimatedBackground from '../ui/AnimatedBackground';

const highlights = [
  { icon: Cpu, label: 'AI & Machine Learning' },
  { icon: Smartphone, label: 'Android & Mobile Apps' },
  { icon: Cloud, label: 'Cloud & DevOps' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="min-w-0">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-sm text-brand-400"
            >
              <Sparkles size={16} />
              <span>Enterprise-Grade Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.08}
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              Transforming Ideas into{' '}
              <span className="gradient-text">Intelligent Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeInUp}
              className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl"
            >
              {COMPANY.name} delivers scalable, secure technology across AI, mobile, web, and
              cloud — built for businesses that demand excellence.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.22}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button to="/contact" size="lg">
                Start Your Project
                <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeIn}
              className="flex flex-wrap gap-3"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass text-xs sm:text-sm text-zinc-300"
                >
                  <Icon size={14} className="text-brand-400 shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={slideInRight}
            className="relative min-w-0"
          >
            <div className="relative rounded-3xl glass-card p-8 lg:p-10">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 pointer-events-none" />

              <div className="relative space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-400 mb-2">Who we are</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Square Nova Tech
                  </p>
                  <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest">Private Limited</p>
                </div>

                <div className="glow-line" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '6+', label: 'Services' },
                    { value: '12+', label: 'Technologies' },
                    { value: '7', label: 'Industries' },
                    { value: '100%', label: 'Dedicated' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-center"
                    >
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
