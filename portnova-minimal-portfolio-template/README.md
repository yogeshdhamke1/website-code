# PortNova - Minimal Portfolio Template

A clean, modern portfolio template designed for freelancers, photographers, and creative designers.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Masonry Portfolio Grid**: Dynamic grid layout for showcasing work
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Filterable Portfolio**: Category-based filtering system
- **Fullscreen Gallery**: PhotoSwipe lightbox for immersive viewing
- **Dropdown Navigation**: "More" menu for additional pages
- **FAQ Accordion**: Interactive accordion for questions
- **Cookie Consent**: GDPR-compliant cookie banner
- **SEO Optimized**: Semantic HTML, meta tags, sitemap, and robots.txt
- **Accessible**: ARIA labels, keyboard navigation, focus states
- **Error Pages**: Custom 404 and 500 error pages
- **Contact Form**: Functional contact form with Google Maps integration
- **Legal Pages**: Privacy Policy, Terms, Cookie Policy

## Color Palette

- **White**: #FFFFFF
- **Charcoal Gray**: #2C2C2C
- **Accent Gold**: #D4AF37
- **Light Gray**: #F5F5F5

## Typography

- **Primary Font**: Inter (body text)
- **Display Font**: Playfair Display (headings)

## Pages

### Main Pages
1. **Home** - Hero section, services preview, featured portfolio grid, testimonials
2. **About** - Bio, skills showcase
3. **Services** - Detailed service offerings (Photography, Branding, Web Design, Creative Direction)
4. **Portfolio** - Filterable masonry grid
5. **Gallery** - Fullscreen lightbox gallery with PhotoSwipe
6. **Contact** - Contact form with Google Maps

### Additional Pages (Under "More" Menu)
7. **Case Studies** - In-depth project showcases with process and outcomes
8. **Blog** - Insights and creative updates for SEO growth
9. **Pricing** - Transparent pricing tiers and custom quote section
10. **FAQ** - Frequently asked questions with accordion
11. **Resources** - Free downloads (templates, presets, wallpapers)

### Legal Pages
12. **Privacy Policy** - Required for forms and analytics
13. **Terms & Conditions** - Professional credibility
14. **Cookie Policy** - Cookie consent banner and preferences

### Error Pages
15. **404** - Custom error page
16. **500** - Custom server error page

## Setup Instructions

1. Replace placeholder images from Unsplash with your own images
2. Update contact information in `contact.html` and all footers
3. Customize colors in `css/style.css` (CSS variables at top)
4. Update meta tags and OpenGraph data in all HTML files
5. Replace domain in `sitemap.xml` and `robots.txt`
6. Add your own portfolio items, testimonials, and case studies
7. Customize pricing packages in `pricing.html`
8. Add your own blog posts and resources
9. Update legal pages with your specific policies
10. Configure cookie consent preferences
11. Upload `.htaccess` (Apache) or `web.config` (IIS) for error page handling
12. Test error pages by accessing non-existent URLs

## Error Page Handling

- **404.html** - Automatically shown for missing pages
- **500.html** - Shown for server errors
- **.htaccess** - Apache server configuration (included)
- **web.config** - IIS server configuration (included)
- See `ERROR-HANDLING-SETUP.md` for detailed setup instructions

## Image Sources

All images are from Unsplash (free to use):
- Search terms: "studio", "portrait", "creative office"
- Replace with your own images for production

## Performance Optimization

- Images use lazy loading
- External fonts preconnected
- Minify CSS/JS for production
- Consider converting images to WebP format
- Remove link checker code from `script.js` before production

## Development Features

- **Link Checker**: Automatically detects broken links on localhost (remove before production)
- **Cookie Banner**: GDPR-compliant consent management
- **Error Pages**: Custom 404 and 500 pages with proper server configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation support
- ARIA labels and roles
- Focus states on interactive elements

## License

Free to use for personal and commercial projects.

## Credits

- Fonts: Google Fonts (Inter, Playfair Display)
- Animations: AOS Library
- Lightbox: PhotoSwipe v5
- Images: Unsplash

## Libraries Used

- **AOS (Animate On Scroll)**: https://michalsnik.github.io/aos/
- **PhotoSwipe**: https://photoswipe.com/
- **Google Fonts**: https://fonts.google.com/
