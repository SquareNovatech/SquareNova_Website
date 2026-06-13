import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className={`max-w-3xl mb-14 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full glass text-brand-400">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {align === 'center' && <div className="glow-line max-w-xs mx-auto mb-4" />}
      {subtitle && (
        <p className="text-lg text-zinc-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
