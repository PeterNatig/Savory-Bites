// Product Data - Expanded Menu
const products = [
    // Appetizers & Salads
    {
        id: 1,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan, croutons, and creamy Caesar dressing",
        price: 9.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Truffle Mac & Cheese",
        description: "Creamy mac and cheese with black truffle and breadcrumb topping",
        price: 13.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        name: "Chicken Wings",
        description: "Crispy wings tossed in buffalo, BBQ, or honey garlic sauce",
        price: 10.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze",
        price: 11.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        name: "French Onion Soup",
        description: "Classic soup with caramelized onions and melted gruyere cheese",
        price: 8.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Spring Rolls",
        description: "Crispy vegetable rolls with sweet chili dipping sauce",
        price: 7.99,
        category: "Appetizers & Salads",
        image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=600&h=400&fit=crop"
    },

    // Main Courses
    {
        id: 7,
        name: "Classic Burger",
        description: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
        price: 12.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomatoes, and basil on a crispy thin crust",
        price: 14.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Pasta Carbonara",
        description: "Creamy Italian pasta with pancetta, egg, and parmesan cheese",
        price: 16.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop"
    },
    {
        id: 10,
        name: "BBQ Ribs",
        description: "Slow-cooked baby back ribs with tangy BBQ sauce and coleslaw",
        price: 19.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"
    },
    {
        id: 11,
        name: "Chicken Tacos",
        description: "Three soft tacos with grilled chicken, fresh salsa, and guacamole",
        price: 11.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop"
    },
    {
        id: 12,
        name: "Steak Frites",
        description: "8oz ribeye steak with crispy fries and peppercorn sauce",
        price: 26.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop"
    },
    {
        id: 13,
        name: "Vegetable Stir Fry",
        description: "Fresh seasonal vegetables in a savory Asian-inspired sauce",
        price: 12.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop"
    },
    {
        id: 14,
        name: "Lamb Chops",
        description: "Grilled lamb chops with rosemary, garlic, and mint jelly",
        price: 28.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop"
    },
    {
        id: 15,
        name: "Chicken Parmesan",
        description: "Breaded chicken breast with marinara sauce and melted mozzarella",
        price: 17.99,
        category: "Main Courses",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop"
    },

    // Seafood
    {
        id: 16,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
        price: 22.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=400&fit=crop"
    },
    {
        id: 17,
        name: "Lobster Roll",
        description: "Fresh Maine lobster on a toasted roll with butter and herbs",
        price: 24.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&h=400&fit=crop"
    },
    {
        id: 18,
        name: "Sushi Platter",
        description: "Assorted nigiri and maki rolls with wasabi and pickled ginger",
        price: 28.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop"
    },
    {
        id: 19,
        name: "Seafood Paella",
        description: "Spanish rice dish with shrimp, mussels, clams, and saffron",
        price: 21.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&h=400&fit=crop"
    },
    {
        id: 20,
        name: "Fish & Chips",
        description: "Beer-battered cod with crispy chips and tartar sauce",
        price: 15.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=600&h=400&fit=crop"
    },
    {
        id: 21,
        name: "Shrimp Scampi",
        description: "Garlic butter shrimp served over linguine pasta",
        price: 19.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop"
    },
    {
        id: 22,
        name: "Tuna Poke Bowl",
        description: "Fresh tuna, avocado, edamame, and seaweed over sushi rice",
        price: 18.99,
        category: "Seafood",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
    },

    // Desserts
    {
        id: 23,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: 8.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop"
    },
    {
        id: 24,
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
        price: 7.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop"
    },
    {
        id: 25,
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        price: 8.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop"
    },
    {
        id: 26,
        name: "Crème Brûlée",
        description: "Classic French custard with caramelized sugar crust",
        price: 9.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop"
    },
    {
        id: 27,
        name: "Apple Pie",
        description: "Homemade apple pie with cinnamon and vanilla ice cream",
        price: 7.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600&h=400&fit=crop"
    },
    {
        id: 28,
        name: "Panna Cotta",
        description: "Silky Italian dessert with mixed berry sauce",
        price: 8.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop"
    },

    // Beverages
    {
        id: 29,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: 4.99,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop"
    },
    {
        id: 30,
        name: "Iced Coffee",
        description: "Cold brew coffee served over ice with milk",
        price: 5.99,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop"
    },
    {
        id: 31,
        name: "Smoothie Bowl",
        description: "Blended acai berry smoothie topped with granola and fresh fruit",
        price: 8.99,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop"
    },
    {
        id: 32,
        name: "Mojito",
        description: "Classic rum cocktail with mint, lime, and soda",
        price: 10.99,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop"
    }
];

// Cart Array
let cart = [];
let currentFilter = 'all';

// Load cart from localStorage on page load
function loadCart() {
    try {
        const savedCart = localStorage.getItem('restaurant-cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    } catch (error) {
        console.log('No existing cart found, starting fresh');
        cart = [];
    }
}

// Save cart to localStorage
function saveCart() {
    try {
        localStorage.setItem('restaurant-cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Failed to save cart:', error);
    }
}

// Navigation Function
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    if (pageId === 'checkout') {
        renderCart();
    }
}

// Filter by Category
function filterByCategory(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts();
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    renderProducts(searchTerm);
}

// Render Products
function renderProducts(searchTerm = '') {
    const container = document.getElementById('menuByCategory');
    
    // Filter products
    let filteredProducts = products;
    
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(p => p.category === currentFilter);
    }
    
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Group by category
    const categories = {};
    filteredProducts.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Render
    if (Object.keys(categories).length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #b0b0b0; padding: 3rem;">No items found</p>';
        return;
    }

    container.innerHTML = Object.keys(categories).map(category => `
        <div class="category-section">
            <h3 class="category-title">${category}</h3>
            <div class="products-grid">
                ${categories[category].map(product => `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <div class="product-footer">
                                <span class="price">$${product.price.toFixed(2)}</span>
                                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    saveCart();
    
    // Show feedback
    const btn = event.target;
    btn.textContent = 'Added!';
    btn.style.background = '#28a745';
    setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.style.background = '#ff6b35';
    }, 1000);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// Render Cart
function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalDiv = document.getElementById('cartTotal');
    const paymentFormDiv = document.getElementById('paymentForm');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some delicious items from our menu!</p>
                <button class="cta-button" onclick="navigateTo('products')" style="margin-top: 1rem;">Browse Menu</button>
            </div>
        `;
        cartTotalDiv.style.display = 'none';
        paymentFormDiv.style.display = 'none';
        return;
    }

    cartItemsDiv.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <span class="item-price">$${item.price.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
    cartTotalDiv.style.display = 'block';
    paymentFormDiv.style.display = 'block';
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCart();
    renderCart();
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    alert('Logged in successfully!');
    navigateTo('home');
}

// Handle Payment
function handlePayment(event) {
    event.preventDefault();
    alert('Payment successful! Thank you for your order!');
    cart = [];
    updateCartCount();
    saveCart();
    navigateTo('home');
}

// Initialize
loadCart();
renderProducts();