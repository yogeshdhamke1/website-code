# Luna - Creative Photographer Portfolio

A modern, minimal, responsive one-page portfolio website for creative photographers.

## Features

- **Minimal Design**: Clean, spacious layout with focus on photography
- **Responsive Grid**: 3-column portfolio grid (mobile-friendly)
- **Blur Navbar**: Navigation blurs on scroll with backdrop filter
- **Fancybox Lightbox**: Full-screen image viewer with navigation
- **Animated Counters**: Statistics animate when scrolling into view
- **Smooth Animations**: Fade-in effects and hover transitions
- **Back to Top**: Floating button appears on scroll
- **Mobile Menu**: Slide-in navigation with close button

## Sections

1. **Hero Section**: Full-screen with photographer name and title
2. **About Section**: Profile photo, bio, and animated statistics
3. **Portfolio Section**: 9-image grid gallery with lightbox viewer
4. **Services Section**: 4 photography services with images
5. **Testimonials Section**: 3 client reviews with photos
6. **Contact Section**: Contact form and social media links

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Animations, Backdrop Filter)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins, Inter)
- Unsplash Images (Free stock photos)

## Color Scheme

```css
:root {
  --primary-color: #0078ff;
  --accent-color: #ff6b6b;
  --background-color: #ffffff;
  --text-color: #333333;
  --light-gray: #f4f6fa;
}
```

## Design Features

- **Typography**: Light font weights, uppercase text, letter-spacing
- **Grid System**: Responsive 3-column grid for portfolio
- **Grayscale Effect**: Images transition from grayscale to color on hover
- **Minimal Borders**: No rounded corners, flat design
- **Blur Effect**: Navbar blurs with backdrop-filter on scroll

## Setup Instructions

1. Download or clone the project files
2. Open `index.html` in a web browser
3. All images are loaded from Unsplash CDN (no download needed)
4. Customize content in `index.html` with your information
5. Adjust colors in `assets/css/style.css` using CSS variables

## Customization

### Update Content
Edit `index.html`:
- Change "Luna" to your name
- Update bio and statistics
- Replace service descriptions
- Modify testimonials
- Update contact information and social links

### Change Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

### Replace Images
Update image URLs in `index.html`:
- Hero background
- Profile photo
- Portfolio images (9 images)
- Service images (4 images)
- Testimonial photos (3 images)

## Interactive Features

### Lightbox Gallery
- Click any portfolio image to open full-screen viewer
- Navigate with Previous/Next arrows
- Image counter shows position (1/9, 2/9, etc.)
- Close with × button, Escape key, or click outside
- Keyboard navigation: Arrow Left/Right

### Animated Counters
- Years Experience: 5+
- Photo Sessions: 200+
- Happy Clients: 50+
- Animates when scrolling to About section

### Mobile Menu
- Hamburger icon on mobile
- Slide-in menu from right
- Close button inside menu
- Auto-close on link click or outside click

### Back to Top
- Appears after scrolling 560px
- Smooth scroll to top
- Circular button with up arrow

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Debounced scroll events
- CSS animations with hardware acceleration
- Optimized Unsplash image URLs
- Minimal JavaScript

## File Structure

```
creative-portfolio-website-code/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── resume/
├── README.md
├── PHOTOGRAPHER-VERSION.md
└── customization-guide.md
```

## Credits

- Images: Unsplash (free stock photos)
- Icons: Font Awesome
- Fonts: Google Fonts (Poppins, Inter)

## License

This project is open source and available under the MIT License.

---

**Luna** - Creative Photographer

Portfolio Website | Minimal Design | Fully Responsive