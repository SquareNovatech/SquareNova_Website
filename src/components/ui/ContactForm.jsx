import { Loader2, Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import Button from './Button';
import Toast from './Toast';

export default function ContactForm() {
  const { formData, handleChange, handleSubmit, isLoading, toast, dismissToast } =
    useContactForm();

  return (
    <>
      <Toast toast={toast} onDismiss={dismissToast} />

      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              id="name"
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              id="email"
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

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              disabled={isLoading}
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              disabled={isLoading}
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            disabled={isLoading}
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors disabled:opacity-50"
          >
            <option value="" className="bg-surface-800">
              Select a service
            </option>
            <option value="Android App Development" className="bg-surface-800">
              Android App Development
            </option>
            <option value="Artificial Intelligence" className="bg-surface-800">
              Artificial Intelligence
            </option>
            <option value="Web Development" className="bg-surface-800">
              Web Development
            </option>
            <option value="Cloud Solutions" className="bg-surface-800">
              Cloud Solutions
            </option>
            <option value="Research & Innovation" className="bg-surface-800">
              Research & Innovation
            </option>
            <option value="IT Consulting" className="bg-surface-800">
              IT Consulting
            </option>
            <option value="Other" className="bg-surface-800">
              Other
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={isLoading}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors resize-none disabled:opacity-50"
            placeholder="Tell us about your project, timeline, and goals..."
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
    </>
  );
}
