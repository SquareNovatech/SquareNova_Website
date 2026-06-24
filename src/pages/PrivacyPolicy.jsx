import LegalPage from '../components/legal/LegalPage';
import { APP, COMPANY } from '../data/constants';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `This Privacy Policy describes how ${COMPANY.legalName} ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use the ${APP.name} mobile application (the "App"). By using the App, you agree to the collection and use of information in accordance with this policy. This policy applies to all users of the App and is intended to comply with applicable data protection laws and Google Play Store requirements.`,
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content:
      'We collect information that you provide directly and information that is collected automatically when you use the App. The types of data we collect include:',
    subsections: [
      {
        title: 'Phone Number',
        content:
          'Your mobile phone number is collected during registration and used for account creation, OTP-based authentication, and subscription-related communications.',
      },
      {
        title: 'Profile Information',
        content:
          'We may collect optional profile details such as your display name and avatar image to personalize your in-app experience.',
      },
      {
        title: 'Device Information',
        content:
          'We collect device-related information such as device model, operating system version, unique device identifiers, and app version to ensure compatibility, security, and proper app functionality.',
      },
      {
        title: 'Usage Analytics',
        content:
          'We collect anonymized and aggregated usage data, including features accessed, session duration, and interaction patterns, to understand how the App is used and to improve performance and user experience.',
      },
      {
        title: 'Wallpaper Preferences and Activity',
        content:
          'We may store information related to wallpapers you view, download, save, share, or mark as favorites within the App. This information is used to personalize content recommendations, improve user experience, and enhance application functionality.',
      },
    ],
  },
  {
    id: 'authentication',
    title: 'Authentication',
    content:
      'Account access is secured through one-time password (OTP) verification. When you sign in or register, we send a verification code to your registered phone number via Fast2SMS, our SMS delivery partner. OTP codes are used solely for identity verification and are not stored after successful authentication.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    content: 'We use third-party analytics services to understand app usage and improve our services:',
    subsections: [
      {
        title: 'Firebase Analytics',
        content:
          'Google Firebase Analytics helps us measure app engagement, track feature usage, and identify technical issues. Data collected may include device information, app events, and general usage statistics.',
      },
      {
        title: 'Mixpanel Analytics',
        content:
          'Mixpanel provides product analytics to help us understand user behavior, measure feature adoption, and optimize the user experience. Data is processed in accordance with Mixpanel\'s privacy practices.',
      },
    ],
  },
  {
    id: 'payments-subscriptions',
    title: 'Payments & Subscriptions',
    content:
      'Premium features and subscriptions are processed through secure third-party payment providers. Payment-related data is handled as follows:',
    subsections: [
      {
        title: 'Razorpay Payment Processing',
        content:
          'Subscription payments are processed by Razorpay. We do not store your full payment card details on our servers. Razorpay may collect payment information, billing details, and transaction records in accordance with their privacy policy and applicable payment regulations.',
      },
      {
        title: 'Subscription Management',
        content:
          'We maintain records of your subscription status, plan type, billing period, and transaction history to provide access to premium features and manage your account.',
      },
      {
        title: 'Auto-Renewing Subscriptions',
        content:
          'Subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date. You will be charged the applicable subscription fee through your selected payment method at the time of renewal. You can manage or cancel auto-renewal through your account settings or the platform where you subscribed.',
      },
      {
        title: '₹5 Verification Fee',
        content:
          'Certain onboarding, trial verification, or subscription activation processes may require a one-time verification fee. This fee is clearly disclosed before payment and is used solely to verify payment methods, subscription eligibility, and account authenticity.',
      },
      {
        title: 'Refund Policy',
        content:
          'Refund requests are handled in accordance with applicable laws, platform policies, and Razorpay payment processing policies. Unless otherwise required by law, verification fees and subscription charges may be non-refundable after successful processing.',
      },
    ],
  },
  {
    id: 'data-storage',
    title: 'Data Storage',
    content:
      'Your account data, profile information, wallpaper preferences, and app content are stored securely using Supabase, our cloud backend and storage provider. Supabase hosts data on secure infrastructure with industry-standard encryption in transit and at rest. Access to stored data is restricted to authorized systems and personnel required to operate and maintain the App.',
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content:
      'We retain personal information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, enforce agreements, prevent fraud, maintain security, and fulfill legitimate business purposes. When personal information is no longer required, it is securely deleted, anonymized, or otherwise disposed of in accordance with applicable laws and industry best practices.',
  },
  {
    id: 'account-deletion',
    title: 'Account Deletion',
    content:
      'You may delete your account at any time directly from within the App. When you request account deletion, all personal data associated with your account — including your phone number, profile information, wallpaper activity, and account records — is permanently removed from our active systems, subject to any data we are required to retain by law or for legitimate business purposes such as fraud prevention or financial record-keeping.',
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    content: 'We use the information we collect for the following purposes:',
    list: [
      'Authentication — to verify your identity via OTP and secure access to your account.',
      'App Functionality — to deliver wallpapers, manage your profile, and provide core app features.',
      'Subscription Verification — to confirm active subscriptions, process payments, and grant access to premium content.',
      'Analytics and Improvements — to analyze usage patterns, fix bugs, develop new features, and enhance overall app performance.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content:
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS/TLS), secure cloud infrastructure, access controls, and regular security reviews. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content:
      'The App is not directed to children under the age of 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us using the details in the Contact Us section below and we will take steps to delete such information promptly.',
  },
  {
    id: 'changes-to-policy',
    title: 'Changes to This Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. When we make material changes, we will update the "Last Updated" date displayed at the top of this page. We encourage you to review this policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.',
  },
  {
    id: 'third-party-service-providers',
    title: 'Third-Party Service Providers',
    content:
      'We may share limited information with trusted third-party service providers solely for providing authentication, analytics, cloud storage, subscription management, payment processing, and application functionality. These providers include:',
    list: [
      'Supabase (backend infrastructure and storage)',
      'Fast2SMS (OTP delivery)',
      'Firebase Analytics (analytics and performance monitoring)',
      'Mixpanel (product analytics)',
      'Razorpay (payment and subscription processing)',
    ],
    footer:
      'These providers process information according to their respective privacy policies and applicable laws.',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Business Name: ${COMPANY.legalName}
Application: ${APP.name}
Website: ${COMPANY.website}
Email: ${APP.supportEmail}`,
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      seo={{
        title: 'Privacy Policy | Emaan Wallpapers',
        description:
          'Learn how Emaan Wallpapers collects, uses, stores, and protects user information including authentication, subscriptions, analytics, and account data.',
        path: '/privacy-policy',
      }}
      title="Privacy Policy"
      subtitle={`How ${APP.name} collects, uses, and protects your personal information.`}
      lastUpdated="June 24, 2026"
      sections={sections}
    />
  );
}
