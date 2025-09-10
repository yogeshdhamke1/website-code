# EmailJS Setup Instructions

To enable direct email sending from the contact form to yogesh.aimax@gmail.com, follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail
4. Connect your yogesh.aimax@gmail.com account
5. Note the Service ID (e.g., "service_xyz123")

## 3. Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Note the Template ID (e.g., "template_abc456")

## 4. Get Public Key
1. Go to Account > General
2. Copy your Public Key (e.g., "user_def789")

## 5. Update JavaScript
In `script.js`, replace these placeholders:
- `YOUR_PUBLIC_KEY` with your actual public key
- `YOUR_SERVICE_ID` with your Gmail service ID  
- `YOUR_TEMPLATE_ID` with your template ID

## Example:
```javascript
emailjs.init('user_def789');
emailjs.sendForm('service_xyz123', 'template_abc456', this)
```

## 6. Test
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check yogesh.aimax@gmail.com inbox

The form will now send emails directly to your inbox without opening any email client!