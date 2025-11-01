# StudioWave - Modern Agency Template

A modern, minimal, and professional creative agency website template built with HTML5, CSS3, Tailwind CSS, and JavaScript.

## Features

- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Design**: Clean, minimal aesthetic with bold typography
- **Interactive Elements**: Animated counters, smooth sliders, parallax effects, and transitions
- **SEO Optimized**: Meta tags, schema markup, sitemap, and semantic HTML
- **Accessible**: WCAG AA compliant with ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, and minimal dependencies
- **Dropdown Navigation**: Multi-level menu with "More" dropdown for additional pages

## Pages

### Main Pages
- **Home**: Hero with parallax, services, case slider, stats counters, testimonials, about section, team preview, quote form
- **Services**: Detailed service offerings with alternating layouts and CTAs
- **Case Studies**: Portfolio grid with hover effects and project showcases
- **Blog**: Article listing with categories, tags, and pagination
- **Contact**: Contact form with Google Maps embed and business information

### Additional Pages
- **About**: Company story, timeline, milestones, mission/vision/values, creative philosophy, video section
- **Team**: Leadership profiles with bios, social links, creative team, "Join Us" CTA
- **Portfolio**: Visual project showcase with category filters (Branding, Web Design, Campaigns, Strategy)
- **Process**: 5-step workflow (Discovery → Strategy → Design → Launch → Growth) with detailed deliverables
- **Careers**: Job listings with requirements, company culture, perks & benefits, structured data for SEO
- **Get a Quote**: Comprehensive project inquiry form with budget/timeline selectors
- **Press**: Media kit downloads, awards, media mentions, company facts
- **FAQ**: Categorized Q&A covering services, pricing, process, tools, and getting started
- **Privacy Policy**: Complete privacy policy, terms of use, cookie notice, GDPR compliance
- **404**: Custom error page with branding

## Technologies

- HTML5
- CSS3 (Custom + Tailwind CSS)
- JavaScript (ES6+)
- AOS (Animate On Scroll)
- Google Fonts (Montserrat, Manrope)

## Color Palette

- Off-white: `#F9F9F9` (background)
- Bold red: `#E63946` (primary accent)
- Dark gray: `#1D1D1D` (typography, header/footer)

## Typography

- **Headings**: Montserrat (bold, uppercase)
- **Body**: Manrope (regular to medium weight)

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. No build process required - works out of the box!

## Project Structure

```
StudioWave/
├── index.html              # Home page
├── services.html           # Services page
├── case-studies.html       # Portfolio/case studies
├── blog.html              # Blog listing
├── contact.html           # Contact form
├── about.html             # About/story page
├── team.html              # Team profiles
├── portfolio.html         # Visual portfolio
├── process.html           # How we work
├── careers.html           # Job listings
├── quote.html             # Get a quote form
├── press.html             # Press & media kit
├── faq.html               # FAQ page
├── privacy.html           # Privacy & terms
├── 404.html               # Error page
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── css/
│   └── style.css          # Custom styles
├── js/
│   └── main.js            # Interactive features
├── images/                # Image assets
└── assets/                # Favicons & icons
```

## Customization

### Update Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --offwhite: #F9F9F9;
    --accent: #E63946;
    --dark: #1D1D1D;
}
```

### Update Content
- Replace Unsplash image URLs with your own optimized images
- Update text content in all HTML files
- Modify contact information in footer (appears on all pages)
- Update social media links
- Replace placeholder video section with actual video embed

### Add Google Analytics
Replace `GA_MEASUREMENT_ID` in `js/main.js` with your tracking ID

### Customize Navigation
Edit the navigation menu in each HTML file's header section. The "More" dropdown can be customized to show/hide pages as needed.

### Forms
Forms currently log to console. Integrate with:
- Backend API (Node.js, PHP, etc.)
- Form services (Formspree, Netlify Forms, etc.)
- Email services (SendGrid, Mailgun, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Interactive Features

- **Sticky Header**: Navigation stays visible on scroll
- **Mobile Menu**: Smooth slide-down animation
- **Parallax Hero**: Background image moves at 0.5x scroll speed
- **Case Study Slider**: Auto-play carousel with touch/swipe support
- **Animated Counters**: Numbers count up when scrolled into view
- **AOS Animations**: Fade-in effects on scroll
- **Hover Effects**: Cards lift and show overlays on hover
- **Dropdown Menu**: Desktop hover menu for additional pages

## SEO Features

- Meta descriptions on all pages
- Open Graph tags for social sharing
- JSON-LD structured data (Organization, JobPosting)
- Semantic HTML5 markup
- Sitemap.xml for search engines
- Robots.txt configuration
- Canonical URLs
- Keyword optimization

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on images
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Reduced motion support

## Performance Optimization

1. Replace Unsplash URLs with optimized WebP images
2. Enable CDN for assets (Tailwind, AOS, fonts)
3. Minify CSS and JavaScript for production
4. Enable browser caching
5. Compress images (use tools like TinyPNG)
6. Consider lazy loading for images below the fold
7. Remove unused Tailwind classes in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload files to bucket

### Before Deployment
1. Update all placeholder content
2. Replace image URLs with your own
3. Add your Google Analytics ID
4. Update sitemap.xml with your domain
5. Test all forms and links
6. Optimize images
7. Minify CSS/JS (optional)

## License

Free to use for personal and commercial projects.

## Credits

- **Images**: Unsplash (replace with your own)
- **Icons**: Emoji (can be replaced with Font Awesome, Heroicons, etc.)
- **Fonts**: Google Fonts (Montserrat, Manrope)
- **Animations**: AOS Library
- **CSS Framework**: Tailwind CSS (via CDN)

## Support

For questions or issues:
- Email: hello@studiowave.com
- Website: https://studiowave.com

---

Built with ❤️ by StudioWave | Last Updated: May 2024
