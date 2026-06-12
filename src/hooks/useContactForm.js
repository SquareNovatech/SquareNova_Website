import { useState, useCallback } from 'react';
import { sendContactEmail, getEmailJSErrorMessage } from '../services/emailjs';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

export function useContactForm(initialState = INITIAL_FORM) {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 5000);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  const validateForm = useCallback(
    (requiredFields = ['name', 'email', 'message']) => {
      for (const field of requiredFields) {
        if (!formData[field]?.trim()) {
          return false;
        }
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        return false;
      }

      return true;
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e, requiredFields = ['name', 'email', 'message']) => {
      e.preventDefault();

      if (!validateForm(requiredFields)) {
        showToast('error', 'Please fill in all required fields correctly.');
        return;
      }

      setIsLoading(true);

      try {
        await sendContactEmail(formData);
        showToast('success', 'Thank you! Your message has been sent successfully.');
        resetForm();
      } catch (error) {
        const message = getEmailJSErrorMessage(error);
        console.error('EmailJS error:', error);
        showToast('error', message);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, validateForm, showToast, resetForm]
  );

  const dismissToast = useCallback(() => setToast(null), []);

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    toast,
    dismissToast,
    resetForm,
  };
}
