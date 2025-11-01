/*==================== PORTFOLIO LIGHTBOX ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCounter = document.getElementById('lightbox-counter');
    
    let currentImageIndex = 0;
    let images = [];
    
    if (portfolioItems.length && lightbox) {
        images = Array.from(portfolioItems).map(item => item.querySelector('.portfolio__img').src);
        
        portfolioItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentImageIndex = index;
                lightboxImg.src = images[currentImageIndex];
                lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentImageIndex];
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        });
        
        lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % images.length;
            lightboxImg.src = images[currentImageIndex];
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (e.key === 'ArrowLeft') {
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                    lightboxImg.src = images[currentImageIndex];
                    lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
                }
                if (e.key === 'ArrowRight') {
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                    lightboxImg.src = images[currentImageIndex];
                    lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
                }
            }
        });
    }
    
    /*==================== MOBILE MENU ====================*/
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    const navLink = document.querySelectorAll('.nav__link');
    navLink.forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    }));
    
    /*==================== CLOSE MENU ON OUTSIDE CLICK ====================*/
    document.addEventListener('click', (e) => {
        if(navMenu && navMenu.classList.contains('show-menu')){
            if(!navMenu.contains(e.target) && !navToggle.contains(e.target)){
                navMenu.classList.remove('show-menu');
            }
        }
    });
    
    /*==================== SCROLL HEADER ====================*/
    function scrollHeader(){
        const header = document.getElementById('header');
        if(window.scrollY >= 80) header.classList.add('scroll-header'); 
        else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);
    
    /*==================== SCROLL UP ====================*/
    const scrollUpBtn = document.getElementById('scroll-up');
    
    function scrollUp(){
        if(window.scrollY >= 560) scrollUpBtn.classList.add('show-scroll'); 
        else scrollUpBtn.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
    
    if(scrollUpBtn) {
        scrollUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /*==================== SCROLL ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive(){
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);
    
    /*==================== COUNTER ANIMATION ====================*/
    const aboutSection = document.getElementById('about');
    let counterAnimated = false;
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterAnimated) {
                const counters = document.querySelectorAll('.about__stat-number');
                
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    };
                    
                    updateCounter();
                });
                
                counterAnimated = true;
                aboutObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    /*==================== CONTACT FORM ====================*/
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }
    
    /*==================== SMOOTH SCROLLING ====================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});
