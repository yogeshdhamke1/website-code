// Product data
const products = [
    {
        id: 1,
        name: "Vitamin C Brightening Serum",
        category: "serums",
        price: 45.99,
        image: "images/vitamin C serum-1.jpg",
        images: [
            "images/vitamin C serum-1.jpg",
            "images/vitamin C serum-2.jpg",
            "images/vitamin C serum-3.jpg"
        ],
        description: "A powerful vitamin C serum that brightens skin and reduces dark spots. Formulated with 20% L-Ascorbic Acid and hyaluronic acid for maximum effectiveness.",
        rating: 4.8,
        reviews: 127,
        ingredients: "Vitamin C, Hyaluronic Acid, Vitamin E, Ferulic Acid",
        customerReviews: [
            {
                name: "Sarah Johnson",
                rating: 5,
                date: "2024-01-15",
                comment: "Amazing results! My skin looks brighter after just 2 weeks of use."
            },
            {
                name: "Emily Chen",
                rating: 4,
                date: "2024-01-10",
                comment: "Great product, though it took a month to see significant results."
            }
        ]
    },
    {
        id: 2,
        name: "Hydrating Rose Moisturizer",
        category: "moisturizers",
        price: 38.50,
        image: "images/rose-infused moisturizer-1.jpg",
        images: [
            "images/rose-infused moisturizer-1.jpg",
            "images/rose-infused moisturizer-2.jpg",
            "images/rose-infused moisturizer-3.jpg"
        ],
        description: "Luxurious rose-infused moisturizer that provides 24-hour hydration. Perfect for all skin types, especially dry and sensitive skin.",
        rating: 4.6,
        reviews: 89,
        ingredients: "Rose Water, Shea Butter, Jojoba Oil, Ceramides",
        customerReviews: [
            {
                name: "Maria Garcia",
                rating: 5,
                date: "2024-01-12",
                comment: "Love the rose scent and how soft it makes my skin feel!"
            }
        ]
    },
    {
        id: 3,
        name: "Gentle Foam Cleanser",
        category: "cleansers",
        price: 28.99,
        image: "images/Gentle Foam Cleanser-1.jpg",
        images: [
            "images/Gentle Foam Cleanser-1.jpg",
            "images/Gentle Foam Cleanser-2.jpg"
        ],
        description: "A gentle, sulfate-free cleanser that removes impurities without stripping natural oils. Suitable for daily use on all skin types.",
        rating: 4.7,
        reviews: 156,
        ingredients: "Coconut-derived Surfactants, Chamomile Extract, Aloe Vera",
        customerReviews: [
            {
                name: "Jessica Lee",
                rating: 5,
                date: "2024-01-08",
                comment: "Perfect for my sensitive skin. Doesn't cause any irritation."
            }
        ]
    },
    {
        id: 4,
        name: "Retinol Night Serum",
        category: "serums",
        price: 52.00,
        image: "images/Retinol Night Serum-1.jpg",
        images: [
            "images/Retinol Night Serum-1.jpg",
            "images/Retinol Night Serum-2.jpg"
        ],
        description: "Advanced retinol serum for anti-aging and skin renewal. Helps reduce fine lines and improve skin texture overnight.",
        rating: 4.9,
        reviews: 203,
        ingredients: "Retinol, Squalane, Niacinamide, Peptides",
        customerReviews: [
            {
                name: "Amanda Wilson",
                rating: 5,
                date: "2024-01-05",
                comment: "Best retinol serum I've ever used. Visible results in 3 weeks!"
            }
        ]
    },
    {
        id: 5,
        name: "Nourishing Night Cream",
        category: "moisturizers",
        price: 42.75,
        image: "images/Nourishing Night Cream-1.jpg",
        images: [
            "images/Nourishing Night Cream-1.jpg",
            "images/Nourishing Night Cream-2.jpg"
        ],
        description: "Rich, nourishing night cream that repairs and regenerates skin while you sleep. Packed with antioxidants and peptides.",
        rating: 4.5,
        reviews: 74,
        ingredients: "Peptides, Antioxidants, Argan Oil, Collagen Boosters",
        customerReviews: [
            {
                name: "Lisa Brown",
                rating: 4,
                date: "2024-01-03",
                comment: "Very rich texture, perfect for winter nights."
            }
        ]
    },
    {
        id: 6,
        name: "Exfoliating Clay Mask",
        category: "cleansers",
        price: 35.25,
        image: "images/Exfoliating Clay Mask-1.jpg",
        images: [
            "images/Exfoliating Clay Mask-1.jpg",
            "images/Exfoliating Clay Mask-2.jpg"
        ],
        description: "Deep-cleansing clay mask with natural exfoliants. Removes dead skin cells and unclogs pores for smoother, clearer skin.",
        rating: 4.4,
        reviews: 92,
        ingredients: "Bentonite Clay, Kaolin Clay, Bamboo Extract, Tea Tree Oil",
        customerReviews: [
            {
                name: "Rachel Davis",
                rating: 4,
                date: "2024-01-01",
                comment: "Great for weekly deep cleaning. Leaves skin feeling fresh."
            }
        ]
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.getElementById('searchModal');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const contactForm = document.getElementById('contactForm');
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatMinimize = document.getElementById('chatMinimize');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    setupEventListeners();
    setupIntersectionObserver();
});

// Event listeners
function setupEventListeners() {
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Search
    searchBtn.addEventListener('click', openSearchModal);
    searchClose.addEventListener('click', closeSearchModal);
    searchInput.addEventListener('input', handleSearch);
    
    // Product filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
    });
    
    // Product modal
    modalClose.addEventListener('click', closeProductModal);
    
    // Cart
    cartBtn.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', closeCart);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Chat
    chatToggle.addEventListener('click', toggleChat);
    chatMinimize.addEventListener('click', minimizeChat);
    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            scrollToProducts();
            setTimeout(() => filterProducts(category), 500);
        });
    });
    
    // Close modals on outside click
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearchModal();
    });
    
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
            }
        });
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    navMenu.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

function closeMobileMenu() {
    navMenu.classList.remove('open');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
}

// Search functions
function openSearchModal() {
    searchModal.style.display = 'flex';
    searchInput.focus();
}

function closeSearchModal() {
    searchModal.style.display = 'none';
    searchInput.value = '';
    searchResults.innerHTML = '';
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    
    displaySearchResults(filteredProducts);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-light);">No products found</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="openProductModal(${product.id}); closeSearchModal();" style="display: flex; align-items: center; padding: 1rem; border-bottom: 1px solid var(--border-color); cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--border-radius); margin-right: 1rem;">
            <div>
                <h4 style="color: var(--primary-color); margin-bottom: 0.25rem;">${product.name}</h4>
                <p style="color: var(--text-light); font-size: 0.9rem; margin: 0;">$${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Product functions
function loadProducts(filter = 'all') {
    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 80)}...</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // Load filtered products
    loadProducts(category);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-images">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage">
                </div>
                <div class="thumbnail-images">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="price">$${product.price}</div>
                <div class="description">${product.description}</div>
                <div class="ingredients">
                    <strong>Key Ingredients:</strong> ${product.ingredients}
                </div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" id="productQuantity">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCartFromModal(${product.id})" style="width: 100%; margin-bottom: 1rem;">
                    Add to Cart
                </button>
                <div class="reviews-section">
                    <h3>Customer Reviews</h3>
                    ${product.customerReviews.map(review => `
                        <div class="review">
                            <div class="review-header">
                                <span class="reviewer-name">${review.name}</span>
                                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                            </div>
                            <div class="stars">${generateStars(review.rating)}</div>
                            <p>${review.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeMainImage(src, thumbnail) {
    document.getElementById('mainProductImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function changeQuantity(delta) {
    const quantityInput = document.getElementById('productQuantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, currentValue + delta);
    quantityInput.value = newValue;
}

// Cart functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCartUI();
    saveCart();
    showNotification('Product added to cart!');
}

function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    addToCart(productId, quantity);
    closeProductModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-light);">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-quantity">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button onclick="removeFromCart(${item.id})" style="margin-left: 1rem; color: #e74c3c;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    showLoading();
    
    // Simulate checkout process
    setTimeout(() => {
        hideLoading();
        showNotification('Redirecting to secure checkout...');
        // In a real application, this would redirect to a payment processor
        console.log('Checkout data:', cart);
    }, 2000);
}

// Contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!validateEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        return;
    }
    
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        return;
    }
    
    if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        return;
    }
    
    // Clear errors
    clearErrors();
    
    showLoading();
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading();
        showNotification('Thank you! Your message has been sent.');
        contactForm.reset();
    }, 2000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// Chat functions
function toggleChat() {
    chatWindow.classList.toggle('open');
}

function minimizeChat() {
    chatWindow.classList.remove('open');
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "Thank you for your message! How can I help you with our skincare products?",
            "I'd be happy to help you find the perfect product for your skin type.",
            "Our customer service team will get back to you shortly. Is there anything specific you'd like to know?",
            "Great question! Let me connect you with a skincare specialist.",
            "Thanks for reaching out! What skin concerns would you like to address?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Utility functions
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .product-card, .blog-card, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
        showNotification('Thank you for subscribing to our newsletter!');
        this.reset();
    } else {
        showNotification('Please enter a valid email address.');
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        if (searchModal.style.display === 'flex') {
            closeSearchModal();
        }
        if (productModal.style.display === 'flex') {
            closeProductModal();
        }
        if (cartSidebar.classList.contains('open')) {
            closeCart();
        }
        if (chatWindow.classList.contains('open')) {
            minimizeChat();
        }
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}