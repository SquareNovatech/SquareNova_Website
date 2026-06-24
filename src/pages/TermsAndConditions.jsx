import LegalPage from '../components/legal/LegalPage';
import { APP, COMPANY } from '../data/constants';

const sections = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    content: `By accessing or using ${APP.name}, you agree to comply with these Terms & Conditions. If you do not agree, you must not access or use the application. These Terms constitute a legally binding agreement between you and ${COMPANY.legalName}.`,
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    content:
      'Users must provide a valid mobile phone number and complete OTP verification to access app services. By registering, you represent that the information you provide is accurate and that you have the legal capacity to enter into these Terms under applicable law.',
  },
  {
    id: 'user-accounts',
    title: 'User Accounts',
    content:
      'Users are responsible for maintaining the accuracy of their information and safeguarding access to their devices. You are responsible for all activity conducted through your account. Notify us promptly if you suspect unauthorized access or misuse of your account.',
  },
  {
    id: 'wallpaper-content',
    title: 'Wallpaper Content',
    content:
      'Wallpapers are provided for personal, non-commercial use unless otherwise stated. Users may not redistribute, resell, or claim ownership of content provided through the application. Access to certain wallpapers or features may require an active subscription.',
  },
  {
    id: 'subscription-services',
    title: 'Subscription Services',
    content: `${APP.name} may offer premium features through recurring subscription plans. Premium features remain accessible only while a valid subscription is active. Subscription pricing, billing intervals, and included features are displayed at the time of purchase and may be updated with reasonable notice for future billing periods.`,
  },
  {
    id: 'verification-fee',
    title: '₹5 Verification Fee',
    content:
      'Certain onboarding, verification, or trial activation processes may require a one-time ₹5 verification payment. This fee is disclosed before payment and is used to verify account authenticity and subscription eligibility.',
  },
  {
    id: 'trial-access',
    title: 'Trial Access',
    content:
      'Users may receive a limited trial period. Trial eligibility, duration, and availability may change at any time. Abuse of trial systems may result in account restrictions. Unless cancelled before the trial ends, a trial may convert to a paid subscription subject to the selected plan terms.',
  },
  {
    id: 'auto-renewing-subscriptions',
    title: 'Auto-Renewing Subscriptions',
    content:
      'Subscriptions automatically renew at the end of each billing cycle unless cancelled before renewal. By subscribing, you authorize recurring charges according to the selected plan. Renewal charges are processed through Razorpay using your selected payment method at the then-current subscription rate.',
  },
  {
    id: 'cancellation-policy',
    title: 'Cancellation Policy',
    content:
      'Users may cancel subscriptions at any time through the application or available subscription management options. Cancellation prevents future renewals but does not automatically provide refunds for completed billing periods. Access to premium features generally continues until the end of the current paid billing period.',
  },
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    content:
      'Except where required by applicable law, completed subscription charges and verification payments are generally non-refundable. Refund decisions remain subject to applicable consumer protection laws and payment provider policies. If you believe a charge was made in error, contact us using the details below.',
  },
  {
    id: 'payments',
    title: 'Payments',
    content: `All payments are processed securely through Razorpay. ${COMPANY.legalName} does not store complete card or banking information. Payment records required for billing, fraud prevention, and legal compliance may be retained in accordance with our Privacy Policy and applicable law.`,
  },
  {
    id: 'account-deletion',
    title: 'Account Deletion',
    content:
      'Users may delete their account directly from within the application. Upon successful deletion request, personal account information is removed from active systems, subject to legal retention requirements. Deleting your account does not automatically cancel an active subscription; you must cancel separately to avoid future charges.',
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited Activities',
    content: 'Users must not:',
    list: [
      'Abuse app functionality',
      'Attempt unauthorized access',
      'Interfere with platform security',
      'Reverse engineer application services',
      'Distribute malicious content',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: `All application branding, logos, software, design elements, and proprietary content remain the property of ${COMPANY.legalName} or its licensors. No rights are granted except as expressly stated in these Terms.`,
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: `The application is provided on an "as-is" and "as-available" basis. ${COMPANY.legalName} shall not be liable for indirect, incidental, special, or consequential damages arising from use of the application. To the fullest extent permitted by law, our total liability for any claim relating to these Terms or the App shall not exceed the amount you paid us in the twelve (12) months preceding the claim.`,
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    content:
      'We reserve the right to modify these Terms & Conditions at any time. Updated terms become effective when published on this page with a revised "Last Updated" date. Continued use of the application after changes constitutes acceptance of the updated Terms.',
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    content: `For questions about these Terms, subscriptions, billing, or account support, please contact us:

Business Name: ${COMPANY.legalName}
Application: ${APP.name}
Website: ${COMPANY.website}
Email: ${APP.supportEmail}`,
  },
];

export default function TermsAndConditions() {
  return (
    <LegalPage
      seo={{
        title: 'Terms & Conditions | Emaan Wallpapers',
        description:
          'Terms governing the use of Emaan Wallpapers, including subscriptions, ₹5 verification fees, auto-renewal, cancellation, refunds, payments, and account deletion.',
        path: '/terms-and-conditions',
      }}
      title="Terms & Conditions"
      subtitle="Terms governing the use of Emaan Wallpapers, subscriptions, payments, and premium services."
      lastUpdated="June 24, 2026"
      sections={sections}
    />
  );
}
