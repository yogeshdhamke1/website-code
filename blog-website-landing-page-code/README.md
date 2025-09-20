# Global Voices - Blog Website Landing Page

A modern, responsive, and multilingual blog website landing page designed for global audiences.

## Features

### 🌍 Multilingual Support
- **5 Languages**: English, French, Spanish, Arabic, Chinese
- **RTL Support**: Right-to-left layout for Arabic
- **Auto-Detection**: Browser language detection
- **Persistent**: Remembers user's language choice

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**: Desktop (1200px+), Tablet (768px), Mobile (480px)
- **Touch-Friendly**: Mobile hamburger menu and touch interactions

### 🎨 Modern UI/UX
- **Clean Design**: Minimal and professional layout
- **Smooth Animations**: Scroll effects and hover transitions
- **Interactive Elements**: Hero slider, category cards, author highlights
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation

### ⚡ Performance
- **Lazy Loading**: Images load on demand
- **Optimized Assets**: CDN fonts and icons
- **Debounced Events**: Smooth scroll performance
- **Fast Loading**: Minimal JavaScript footprint

## File Structure

```
blog-website-landing-page-code/
├── index.html          # Main landing page
├── index2.html         # Alternative version with hero slider
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality and translations
└── README.md           # This file
```

## Sections

1. **Hero Section** - Main banner with call-to-action buttons
2. **Latest Blog Posts** - Grid of featured articles
3. **Categories** - Topic exploration cards
4. **About Section** - Company information and statistics
5. **Authors** - Global contributor highlights
6. **Newsletter** - Email subscription form
7. **Footer** - Navigation and social links

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript ES6** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **Unsplash** - High-quality images

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Setup

1. Clone or download the files
2. Open `index.html` or `index2.html` in a web browser
3. No build process required - works directly in browser

## Customization

### Adding New Languages
Edit the `translations` object in `script.js`:

```javascript
const translations = {
    newLang: {
        'hero.title': 'Your Translation',
        // Add more translations...
    }
};
```

### Changing Colors
Modify CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding Content
Update HTML sections with your content while maintaining the `data-translate` attributes for multilingual support.

## License

This project is open source and available under the MIT License.