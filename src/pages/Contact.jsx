import { motion } from 'framer-motion';
import { Mail, Globe, Share2, Clock } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { COMPANY } from '../data/constants';
import { fadeInUp } from '../utils/animations';

export default function Contact() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond promptly."
      />

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Company</div>
                  <div className="text-white font-medium">{COMPANY.legalName}</div>
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Mail className="text-brand-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white group-hover:text-brand-400 transition-colors">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Globe className="text-brand-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Website</div>
                    <div className="text-white group-hover:text-brand-400 transition-colors">
                      squarenovatech.com
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Share2 className="text-brand-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Facebook</div>
                    <div className="text-white">{COMPANY.facebook}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-brand-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Response Time</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We typically respond to all business inquiries within 1–2 business days.
                For urgent matters, please mention it in your message subject line.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-brand-500/10 to-accent-500/10">
              <h3 className="text-lg font-bold text-white mb-2">Business Inquiry</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Looking for a technology partner? Share your project requirements and our
                team will provide a tailored proposal.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
