import { Link } from 'react-router-dom';

const configs = {
  header: {
    wrap: 'flex-row items-center gap-2.5',
    title: 'text-base sm:text-lg font-bold tracking-tight text-white leading-tight',
    tagline: 'text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium',
    mark: 'w-8 h-8 sm:w-9 sm:h-9',
  },
  footer: {
    wrap: 'flex-col items-start gap-3',
    title: 'text-2xl font-bold tracking-tight text-white leading-tight',
    tagline: 'text-[10px] text-zinc-500 uppercase tracking-[0.22em] font-medium',
    mark: 'w-10 h-10',
  },
  hero: {
    wrap: 'flex-col items-start gap-4',
    title: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]',
    tagline: 'text-sm sm:text-base text-zinc-400 font-medium',
    mark: 'w-14 h-14 sm:w-16 sm:h-16',
  },
  default: {
    wrap: 'flex-row items-center gap-3',
    title: 'text-xl font-bold tracking-tight text-white leading-tight',
    tagline: 'text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium',
    mark: 'w-10 h-10',
  },
};

function BrandMark({ className = '' }) {
  return (
    <div
      className={`shrink-0 rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-1.5 grid grid-cols-2 gap-1 ${className}`}
      aria-hidden="true"
    >
      <span className="rounded-sm bg-white" />
      <span className="rounded-sm bg-white/40" />
      <span className="rounded-sm bg-white/40" />
      <span className="rounded-sm bg-white" />
    </div>
  );
}

export default function Logo({
  variant = 'default',
  className = '',
  link = true,
  showMark = true,
  showTagline = false,
  subtitle,
}) {
  const cfg = configs[variant] || configs.default;

  const content = (
    <div className={`inline-flex max-w-full ${cfg.wrap} ${className}`}>
      {showMark && <BrandMark className={cfg.mark} />}
      <div className="min-w-0">
        <span className={`block ${cfg.title}`}>Square Nova Tech</span>
        {showTagline && <span className={`block mt-1 ${cfg.tagline}`}>Private Limited</span>}
        {subtitle && <span className={`block mt-2 ${cfg.tagline}`}>{subtitle}</span>}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        to="/"
        className="inline-flex max-w-[min(100%,220px)] sm:max-w-none shrink-0 hover:opacity-90 transition-opacity"
        aria-label="Square Nova Tech home"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export { BrandMark };
