import { Link } from 'react-router-dom';
import { Mail, Globe, Share2, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../../data/constants';
import Logo from '../ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          {/* Brand column — full width on mobile, spans 2 cols on sm */}
          <div className="sm:col-span-2 lg:col-span-5 min-w-0">
            <Logo variant="footer" showTagline link={false} className="mb-5" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              {COMPANY.tagline}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-brand-400 transition-colors break-all"
              >
                <Mail size={16} className="shrink-0" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-brand-400 transition-colors"
              >
                <Globe size={16} className="shrink-0" />
                squarenovatech.com
              </a>
              <span className="flex items-center gap-2.5 text-sm text-zinc-400">
                <Share2 size={16} className="shrink-0" />
                {COMPANY.facebook}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 min-w-0">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-zinc-400 hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-zinc-400">
              <p className="leading-relaxed">{COMPANY.legalName}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 hover:bg-brand-500/20 hover:text-white transition-all text-sm font-medium"
              >
                Get in touch
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="glow-line my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {currentYear} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-zinc-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
