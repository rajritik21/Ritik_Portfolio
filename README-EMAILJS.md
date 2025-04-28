# Setting Up Email Functionality in Your Portfolio

This guide explains how to set up the email functionality in your contact form using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a portfolio site

## Step 2: Create an Email Service

1. After logging in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Once connected, you'll get a **Service ID** - note this down

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template. Here's a suggested format:

```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Make sure to use the variables exactly as shown above (they match the code implementation)
5. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to your account settings (click on your profile name, then "Account Settings")
2. Find your **Public Key** in the API Keys section

## Step 5: Update Your Code

1. Open `src/components/Contact.tsx`
2. Replace the placeholder values with your actual IDs:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Testing

1. Fill out the contact form on your site
2. Submit the form
3. You should receive an email to the address you connected in step 2
4. The sender will see a success message if everything works correctly

## Troubleshooting

- Check the browser console for any error messages
- Verify that all three IDs (service, template, and public key) are correct
- Make sure your email service account is active and properly connected
- Check your spam folder if you don't see the test emails

## Security Note

EmailJS is safe to use on the client side because:
- Your Public Key is designed to be exposed in client-side code
- The template and service IDs are not sensitive information
- EmailJS has built-in protection against spam and abuse

For any issues or questions, refer to the [EmailJS documentation](https://www.emailjs.com/docs/). 