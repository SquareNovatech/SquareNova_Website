import LegalPage from '../components/legal/LegalPage';
import { APP, COMPANY } from '../data/constants';

const sections = [
  {
    id: 'delete-your-account',
    title: 'Delete Your Account',
    content: `You can permanently delete your ${APP.name} account directly from within the application.

Steps:

1. Open the ${APP.name} app.
2. Navigate to Profile.
3. Scroll to the Danger Zone section.
4. Tap Delete Account.
5. Confirm the deletion request.`,
  },
  {
    id: 'what-data-is-deleted',
    title: 'What Data Is Deleted',
    content:
      'When an account deletion request is completed, the following information is removed from our active systems:',
    list: [
      'Phone number',
      'Profile information',
      'Wallpaper activity and preferences',
      'Favorites and saved items',
      'Account-related records',
    ],
  },
  {
    id: 'data-that-may-be-retained',
    title: 'Data That May Be Retained',
    content:
      'Certain information may be retained when required by law, fraud prevention obligations, dispute resolution, security investigations, financial compliance requirements, or subscription-related record keeping.',
  },
  {
    id: 'retention-period',
    title: 'Retention Period',
    content:
      'Most personal information is deleted immediately or within a reasonable processing period after deletion has been confirmed.',
  },
  {
    id: 'need-help',
    title: 'Need Help?',
    content: `If you need assistance with account deletion or have questions about your data, please contact us:

Business Name: ${COMPANY.legalName}
Application: ${APP.name}
Website: ${COMPANY.website}
Email: ${APP.supportEmail}`,
  },
];

export default function AccountDeletion() {
  return (
    <LegalPage
      seo={{
        title: 'Account Deletion | Emaan Wallpapers',
        description:
          'Learn how to permanently delete your Emaan Wallpapers account and associated personal data.',
        path: '/account-deletion',
      }}
      title="Account Deletion"
      subtitle="Learn how to permanently delete your Emaan Wallpapers account and associated personal data."
      lastUpdated="June 25, 2026"
      sections={sections}
    />
  );
}
