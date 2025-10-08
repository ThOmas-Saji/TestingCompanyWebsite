# EmailJS reCAPTCHA Configuration Guide

## Quick Fix (Current Implementation)

The current implementation disables reCAPTCHA to avoid the error. This works for development and testing.

## If You Want to Enable reCAPTCHA Later

### Option 1: Disable reCAPTCHA in EmailJS Dashboard (Recommended)

1. Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Account** → **General**
3. Find **reCAPTCHA Settings**
4. Disable reCAPTCHA for your service
5. Save changes

### Option 2: Implement reCAPTCHA in Your Form

If you want to keep reCAPTCHA enabled, you'll need to:

1. **Get reCAPTCHA Site Key**
   - Go to [Google reCAPTCHA](https://www.google.com/recaptcha/)
   - Create a new site
   - Copy your Site Key

2. **Add reCAPTCHA to Environment Variables**

   ```env
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

3. **Install reCAPTCHA Package**

   ```bash
   npm install react-google-recaptcha
   ```

4. **Update Contact Form** (example):

   ```tsx
   import ReCAPTCHA from 'react-google-recaptcha';

   // Add to form state
   const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

   // Add to form JSX
   <ReCAPTCHA
     sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
     onChange={setRecaptchaValue}
   />;

   // Update EmailJS call
   const response = await emailjs.send(
     EMAILJS_SERVICE_ID,
     EMAILJS_TEMPLATE_ID,
     templateParams,
     {
       publicKey: EMAILJS_PUBLIC_KEY,
       captcha: recaptchaValue,
     }
   );
   ```

### Option 3: Use EmailJS without reCAPTCHA (Current Setup)

The current implementation bypasses reCAPTCHA by:

- Using `blockHeadless: false` option
- Passing the `publicKey` in the options object

This is suitable for most contact forms and provides basic spam protection through EmailJS's built-in features.

## Security Considerations

- **Without reCAPTCHA**: EmailJS still provides basic spam protection
- **With reCAPTCHA**: Additional protection against automated submissions
- **For production**: Consider enabling reCAPTCHA for high-traffic sites

## Current Status

✅ reCAPTCHA error resolved
✅ Contact form should work without errors
✅ Basic spam protection maintained
