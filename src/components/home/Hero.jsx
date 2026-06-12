import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY } from '../../data/constants';
import { fadeInUp, fadeIn } from '../../utils/animations';
import Button from '../ui/Button';
import AnimatedBackground from '../ui/AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
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
            custom={0.1}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Transforming Ideas into{' '}
            <span className="gradient-text">Intelligent Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl"
          >
            {COMPANY.name} builds scalable, secure, and user-friendly technology solutions
            across AI, mobile, web, and cloud — empowering businesses to thrive in the
            digital era.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
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
            custom={0.5}
            variants={fadeIn}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {[
              { value: '6+', label: 'Core Services' },
              { value: '12+', label: 'Technologies' },
              { value: '7', label: 'Industries Served' },
              { value: '100%', label: 'Client Focused' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
