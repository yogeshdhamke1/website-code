# Luna - Customization Guide

## Quick Customization Checklist

### 1. Personal Information (index.html)

**Hero Section:**
```html
<h1 class="hero__title">Luna</h1>
<p class="hero__subtitle">Creative Photographer</p>
```
Change "Luna" to your name and update subtitle.

**About Section:**
- Update bio text
- Change statistics (data-target values):
  - Years Experience: `data-target="5"`
  - Photo Sessions: `data-target="200"`
  - Happy Clients: `data-target="50"`

**Contact Section:**
- Email: `hello@luna.com`
- Instagram: `@luna_photo`
- Social media links

### 2. Images (index.html)

**Hero Background:**
```html
<div class="hero__bg" style="background-image: url('YOUR_IMAGE_URL');"></div>
```

**Profile Photo:**
```html
<img src="YOUR_PROFILE_IMAGE_URL" alt="Your Name">
```

**Portfolio Images (9 images):**
```html
<img src="YOUR_IMAGE_URL" alt="Description" class="portfolio__img">
```

**Service Images (4 images):**
```html
<img src="YOUR_IMAGE_URL" alt="Service Name" class="services__img">
```

**Testimonial Photos (3 images):**
```html
<img src="YOUR_IMAGE_URL" alt="Client Name" class="testimonial__img">
```

### 3. Colors (assets/css/style.css)

Edit CSS variables at the top of the file:

```css
:root {
  --primary-color: #0078ff;     /* Main brand color */
  --accent-color: #ff6b6b;      /* Secondary accent */
  --background-color: #ffffff;  /* Background */
  --text-color: #333333;        /* Main text */
  --light-gray: #f4f6fa;        /* Light sections */
}
```

**Popular Color Schemes:**

**Blue & Orange (Current):**
```css
--primary-color: #0078ff;
--accent-color: #ff6b6b;
```

**Purple & Pink:**
```css
--primary-color: #8b5cf6;
--accent-color: #ec4899;
```

**Green & Teal:**
```css
--primary-color: #10b981;
--accent-color: #06b6d4;
```

**Black & White (Minimal):**
```css
--primary-color: #000000;
--accent-color: #666666;
```

### 4. Services Section

Update the 4 services with your offerings:

```html
<div class="services__card">
    <img src="IMAGE_URL" alt="Service Name" class="services__img">
    <h3 class="services__title">Your Service Name</h3>
    <p class="services__description">Service description here.</p>
</div>
```

### 5. Testimonials Section

Update the 3 testimonials with real client feedback:

```html
<div class="testimonial__card">
    <img src="CLIENT_PHOTO_URL" alt="Client Name" class="testimonial__img">
    <p class="testimonial__text">"Client testimonial quote here."</p>
    <h4 class="testimonial__name">Client Name</h4>
    <span class="testimonial__position">Client Title</span>
</div>
```

### 6. Navigation Menu

Add or remove menu items in `index.html`:

```html
<li class="nav__item">
    <a href="#section-id" class="nav__link">Menu Item</a>
</li>
```

### 7. Social Media Links

Update footer social links:

```html
<a href="https://instagram.com/yourhandle" class="footer__social-link" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

Available icons (Font Awesome):
- Instagram: `fa-instagram`
- Behance: `fa-behance`
- Pinterest: `fa-pinterest`
- Facebook: `fa-facebook`
- Twitter: `fa-twitter`
- LinkedIn: `fa-linkedin`

## Advanced Customization

### Typography

Change fonts by updating Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
  --title-font: 'YourFont', sans-serif;
  --body-font: 'YourBodyFont', sans-serif;
}
```

### Grid Layout

**Portfolio Grid (3 columns default):**
```css
.portfolio__grid {
  grid-template-columns: repeat(3, 1fr);
}
```

Change to 4 columns:
```css
.portfolio__grid {
  grid-template-columns: repeat(4, 1fr);
}
```

**Services Grid (2 columns default):**
```css
.services__container {
  grid-template-columns: repeat(2, 1fr);
}
```

**Testimonials Grid (3 columns default):**
```css
.testimonials__container {
  grid-template-columns: repeat(3, 1fr);
}
```

### Animation Speed

Adjust transition speed:

```css
:root {
  --transition: all 0.3s ease; /* Change 0.3s to your preference */
}
```

### Counter Animation

Change counter animation duration in `main.js`:

```javascript
const duration = 2000; // Change to milliseconds (2000 = 2 seconds)
```

### Lightbox Styling

Customize lightbox background opacity in `style.css`:

```css
.lightbox {
  background-color: rgba(0, 0, 0, 0.95); /* Change 0.95 to 0-1 */
}
```

### Scroll Trigger Distance

Change when back-to-top button appears:

```javascript
if(window.scrollY >= 560) // Change 560 to your preference
```

Change when navbar blurs:

```javascript
if(window.scrollY >= 80) // Change 80 to your preference
```

## Image Recommendations

### Sizes
- **Hero Background**: 1920x1080px
- **Profile Photo**: 400x400px
- **Portfolio Images**: 600x600px (square)
- **Service Images**: 400x300px
- **Testimonial Photos**: 100x100px (circular crop)

### Format
- Use JPG for photos
- Use PNG for graphics with transparency
- Optimize images (under 200KB each)

### Sources
- **Unsplash**: https://unsplash.com
- **Pexels**: https://www.pexels.com
- **Pixabay**: https://pixabay.com

## SEO Optimization

Update meta tags in `index.html`:

```html
<title>Your Name - Creative Photographer</title>
<meta name="description" content="Your professional description">
<meta property="og:title" content="Your Name - Creative Photographer">
<meta property="og:description" content="Your description">
```

Update schema markup:

```json
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Creative Photographer",
    "description": "Your description",
    "url": "https://yourwebsite.com"
}
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and save
4. Access at `username.github.io/repo-name`

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployment on push

### Traditional Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in root directory
3. Set proper file permissions

## Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test lightbox navigation
- [ ] Test mobile menu
- [ ] Test contact form
- [ ] Check back-to-top button
- [ ] Verify smooth scrolling
- [ ] Test animated counters

## Support

For issues or questions:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure JavaScript is enabled
4. Clear browser cache and reload

---

**Remember**: Always backup your files before making major changes!