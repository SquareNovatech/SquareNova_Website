import emailjs from '@emailjs/browser';
import { getEmailJSConfig, isEmailJSConfigured } from '../config/emailjs.config';

/**
 * @param {{ name: string; email: string; phone?: string; company?: string; service?: string; message: string }} data
 */
export async function sendContactEmail(data) {
  const { serviceId, templateId, publicKey } = getEmailJSConfig();

  if (!isEmailJSConfigured()) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
    );
  }

  emailjs.init({ publicKey });

  const templateParams = {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || 'Not provided',
    company: data.company?.trim() || 'Not provided',
    service: data.service?.trim() || 'Not specified',
    message: data.message.trim(),
    title: data.service?.trim() || 'General Inquiry',
    time: new Date().toLocaleString('en-IN'),
  };

  if (import.meta.env.DEV) {
    console.info('[EmailJS] Config:', {
      serviceId,
      templateId,
      publicKey: `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`,
    });
  }

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
}

/**
 * @param {unknown} error
 */
export function getEmailJSErrorMessage(error) {
  const text = error?.text;
  if (typeof text === 'string' && text.length > 0) {
    if (text.toLowerCase().includes('template id not found')) {
      const { templateId, serviceId } = getEmailJSConfig();
      return `Template ID not found in EmailJS. In your dashboard, open Email Templates and confirm the Template ID matches ${templateId}. Also ensure the template is linked to ${serviceId}.`;
    }
    if (text.toLowerCase().includes('service id not found')) {
      return 'Service ID not found in EmailJS. Confirm service_0zn87ks exists under Email Services in your dashboard.';
    }
    if (text.toLowerCase().includes('insufficient authentication scopes')) {
      return 'Gmail is not fully connected in EmailJS. Open EmailJS → Email Services → reconnect your Gmail account and allow all permissions when Google asks.';
    }
    if (text.toLowerCase().includes('gmail_api')) {
      return 'Gmail connection error in EmailJS. Reconnect your Gmail service in the EmailJS dashboard with full send permissions.';
    }
    return text;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Failed to send message. Please try again.';
}

export { getEmailJSConfig, isEmailJSConfigured };
