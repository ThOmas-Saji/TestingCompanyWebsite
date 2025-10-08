import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactFormData {
  name: string;
  message: string;
  email?: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<boolean> => {
  try {
    // Validate required environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error(
        'EmailJS configuration is missing. Please check your environment variables.'
      );
    }

    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email || 'no-reply@ylogx.io',
      message: formData.message,
      reply_to: formData.email || 'no-reply@ylogx.io',
    };

    // Send email using EmailJS browser SDK
    // Disable reCAPTCHA for now (you can enable it later if needed)
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendContactEmail;
