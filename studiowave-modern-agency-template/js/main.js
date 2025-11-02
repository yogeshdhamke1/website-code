// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Dropdown menu click toggle
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownMenu) {
    const dropdownBtn = dropdownMenu.querySelector('button');
    const dropdownContent = dropdownMenu.querySelector('.dropdown-content');
    
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('hidden');
        });
        
        document.addEventListener('click', () => {
            dropdownContent.classList.add('hidden');
        });
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Sticky Header & Parallax
const header = document.getElementById('header');
const heroBg = document.querySelector('.hero-bg');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Parallax effect
    if (heroBg) {
        heroBg.style.transform = `translateY(${currentScroll * 0.5}px)`;
    }
    
    lastScroll = currentScroll;
});

// Case Study Slider
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

if (sliderTrack && prevBtn && nextBtn) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    // Auto-slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        } else if (touchEndX - touchStartX > 50) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
    });
}

// Animated Counters
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message
        const successMsg = document.getElementById('success-message');
        if (successMsg) {
            successMsg.classList.remove('hidden');
            contactForm.reset();
            
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }
    });
}

// Google Analytics (placeholder)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
