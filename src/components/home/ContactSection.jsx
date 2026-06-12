import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { COMPANY } from '../../data/constants';
import { fadeInUp } from '../../utils/animations';
import { useContactForm } from '../../hooks/useContactForm';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

const HOME_FORM_INITIAL = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

export default function ContactSection() {
  const { formData, handleChange, handleSubmit, isLoading, toast, dismissToast } =
    useContactForm(HOME_FORM_INITIAL);

  return (
    <section id="contact" className="section-padding relative bg-surface-800/30">
      <Toast toast={toast} onDismiss={dismissToast} />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Contact Us"
          title="Let's Build Something Great Together"
          subtitle="Ready to transform your ideas into intelligent digital solutions? Reach out to our team."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Whether you have a project in mind or need expert consultation, our team is
                ready to help you succeed.
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 hover:border-brand-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <Mail className="text-brand-400" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email us at</div>
                  <div className="text-white font-medium group-hover:text-brand-400 transition-colors">
                    {COMPANY.email}
                  </div>
                </div>
              </a>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
              <p className="text-gray-400 text-sm mb-4">
                Partner with {COMPANY.name} for your next digital transformation initiative.
              </p>
              <Button to="/contact" variant="outline" className="w-full">
                Full Contact Page
              </Button>
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
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="home-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    required
                    disabled={isLoading}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="home-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="home-company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  id="home-company"
                  name="company"
                  type="text"
                  disabled={isLoading}
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label
                  htmlFor="home-message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  required
                  disabled={isLoading}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
