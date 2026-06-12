import { Link } from 'react-router-dom';
import { Mail, Globe, Share2 } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../../data/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-white/90" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-white/60" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-white/60" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-white/90" />
                </div>
              </div>
              <span className="text-lg font-bold text-white">{COMPANY.name}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY.tagline}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Mail size={16} />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Globe size={16} />
                squarenovatech.com
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Share2 size={16} />
                {COMPANY.facebook}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{COMPANY.legalName}</p>
              <p>
                Have a project in mind?{' '}
                <Link to="/contact" className="text-brand-400 hover:text-brand-300">
                  Get in touch
                </Link>{' '}
                with our team today.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
