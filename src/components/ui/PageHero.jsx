import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import AnimatedBackground from './AnimatedBackground';

export default function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full glass text-brand-400"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
