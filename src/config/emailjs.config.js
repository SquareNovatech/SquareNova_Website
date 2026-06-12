export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export function getEmailJSConfig() {
  return {
    serviceId: EMAILJS_CONFIG.serviceId?.trim() ?? '',
    templateId: EMAILJS_CONFIG.templateId?.trim() ?? '',
    publicKey: EMAILJS_CONFIG.publicKey?.trim() ?? '',
  };
}

export function isEmailJSConfigured() {
  const { serviceId, templateId, publicKey } = getEmailJSConfig();
  return Boolean(serviceId && templateId && publicKey);
}
