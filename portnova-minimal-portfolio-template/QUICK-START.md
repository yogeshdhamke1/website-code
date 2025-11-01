# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Test Locally
```bash
# Navigate to project folder
cd "Minimal Portfolio Template - PortNova"

# Start local server (choose one):
python -m http.server 8000
# OR
php -S localhost:8000
# OR use VS Code Live Server extension

# Open browser
http://localhost:8000
```

### 2. Customize Branding
**File:** `css/style.css` (Lines 1-6)
```css
:root {
    --white: #FFFFFF;
    --charcoal: #2C2C2C;
    --gold: #D4AF37;        /* Change this to your brand color */
    --light-gray: #F5F5F5;
    --medium-gray: #E0E0E0;
}
```

### 3. Update Contact Info
**Files to edit:**
- `contact.html` - Form and contact details
- All footers - Email, phone, location
- `sitemap.xml` - Replace "yourdomain.com"
- `robots.txt` - Replace "yourdomain.com"

### 4. Add Your Content
- Replace images in all pages
- Update text in `about.html`
- Add your portfolio items in `portfolio.html`
- Customize services in `services.html`
- Add your pricing in `pricing.html`

### 5. Deploy
**For Apache hosting:**
1. Upload all files including `.htaccess`
2. Test: `yourdomain.com/fake-page` (should show 404)

**For IIS hosting:**
1. Upload all files including `web.config`
2. Test error pages

**For static hosting (Netlify/Vercel):**
1. Connect GitHub repo or upload files
2. Configure custom domain
3. Error pages work automatically

---

## 📋 Essential Files to Edit

### Must Edit Before Launch
1. ✅ All HTML files - Replace "PortNova" with your brand
2. ✅ `contact.html` - Your contact information
3. ✅ `sitemap.xml` - Your domain
4. ✅ `robots.txt` - Your domain
5. ✅ All images - Replace with your photos
6. ✅ `privacy-policy.html` - Your privacy policy
7. ✅ `terms.html` - Your terms
8. ✅ `js/script.js` - Remove link checker (lines 70-82)

### Optional Customization
- `css/style.css` - Colors, fonts, spacing
- `pricing.html` - Your pricing tiers
- `services.html` - Your services
- `faq.html` - Your FAQs
- `resources.html` - Your downloads

---

## 🎯 Navigation Structure

```
Home
About
Services
Portfolio
Gallery
More ▼
  ├─ Case Studies
  ├─ Blog
  ├─ Pricing
  ├─ FAQ
  └─ Resources
Contact
```

Footer: Privacy Policy | Terms | Cookies

---

## 🔍 Testing Checklist

### Before Launch
- [ ] All links work
- [ ] Contact form submits
- [ ] Gallery lightbox opens
- [ ] Portfolio filters work
- [ ] FAQ accordion expands
- [ ] Mobile menu toggles
- [ ] Cookie banner appears
- [ ] 404 page shows for bad URLs
- [ ] All images load
- [ ] Social links updated

### Test URLs
```
Homepage: /
Services: /services.html
Gallery: /gallery.html
404 Test: /fake-page.html
```

---

## 💡 Pro Tips

### Images
- Use WebP format for better performance
- Compress images before upload
- Recommended sizes:
  - Hero: 1920x1080px
  - Portfolio: 800x600px
  - Thumbnails: 400x300px

### SEO
- Update all `<title>` tags
- Update all meta descriptions
- Add alt text to all images
- Submit sitemap to Google Search Console

### Performance
- Minify CSS: Use online tool or build process
- Minify JS: Remove comments and whitespace
- Enable GZIP on server
- Use browser caching

### Security
- Use HTTPS (SSL certificate)
- Keep forms protected from spam
- Regular backups
- Update legal pages annually

---

## 🆘 Common Issues

**Issue:** Error pages not showing
**Fix:** Upload `.htaccess` or `web.config`

**Issue:** Styles not loading
**Fix:** Check file paths are correct

**Issue:** Gallery not working
**Fix:** Ensure PhotoSwipe CDN is accessible

**Issue:** Mobile menu not toggling
**Fix:** Check JavaScript is loading

**Issue:** Links broken
**Fix:** Use relative paths: `./page.html`

---

## 📞 Support Resources

### Documentation Files
- `README.md` - Full documentation
- `PAGES-OVERVIEW.md` - All pages explained
- `ERROR-HANDLING-SETUP.md` - Error page setup
- `DEPLOYMENT-CHECKLIST.md` - Pre-launch checklist
- `FINAL-SUMMARY.md` - Complete summary

### External Resources
- AOS Documentation: https://michalsnik.github.io/aos/
- PhotoSwipe Docs: https://photoswipe.com/
- Google Fonts: https://fonts.google.com/

---

## ⚡ Quick Commands

### Find & Replace
Replace "PortNova" with your brand name:
- Use VS Code: Ctrl+Shift+H (Find & Replace in Files)
- Search: `PortNova`
- Replace: `Your Brand Name`

### Remove Development Code
Before production, remove from `js/script.js`:
```javascript
// Remove lines 70-82 (Link Checker section)
```

### Minify CSS
Online tool: https://cssminifier.com/
Or use build tools: PostCSS, cssnano

---

## 🎉 You're Ready!

Your portfolio website is complete with:
- ✅ 16 professional pages
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Accessible
- ✅ Legal pages
- ✅ Error handling
- ✅ Interactive features

**Next Step:** Customize content and deploy! 🚀
