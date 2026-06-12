import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { COMPANY } from '../data/constants';
import { fadeInUp } from '../utils/animations';

const sections = [
  {
    title: 'Information We Collect',
    content: `When you visit our website or contact us, we may collect the following information:
    
• Personal information you provide voluntarily (name, email address, company name, phone number) when filling out contact forms or sending inquiries.
• Technical information such as IP address, browser type, device information, and pages visited, collected automatically through standard web analytics.
• Communication records when you correspond with us via email or contact forms.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to:

• Respond to your inquiries and provide requested services
• Improve our website and user experience
• Send relevant business communications (with your consent)
• Comply with legal obligations and protect our rights
• Analyze website usage to enhance our offerings

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Cookies & Tracking',
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.`,
  },
  {
    title: 'Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: 'Your Rights',
    content: `Depending on your jurisdiction, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Object to or restrict certain processing activities
• Withdraw consent where processing is based on consent

To exercise these rights, please contact us at ${COMPANY.email}.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

${COMPANY.legalName}
Email: ${COMPANY.email}
Website: ${COMPANY.website}`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-gray-500 text-sm mb-10"
          >
            Last updated: June 13, 2025
          </motion.p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.05}
                variants={fadeInUp}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
