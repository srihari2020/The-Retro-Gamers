// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden text-white p-2';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;
    
    const nav = document.querySelector('nav .container');
    nav.appendChild(mobileMenuButton);
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden md:hidden bg-gray-800 p-4';
    mobileMenu.innerHTML = `
        <a href="#" class="block text-white py-2 hover:text-purple-400">Community</a>
        <a href="#" class="block text-white py-2 hover:text-purple-400">Games</a>
        <a href="#" class="block text-white py-2 hover:text-purple-400">Leaderboards</a>
        <button class="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg mt-2">Login</button>
    `;
    
    nav.appendChild(mobileMenu);
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

// Search Functionality
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button svg').parentElement;

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Implement search functionality
        console.log('Searching for:', searchTerm);
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Game Card Animation
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('transform', 'scale-105');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('transform', 'scale-105');
    });
});

// Loading Animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-dots';
    loadingDiv.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.querySelector('.loading-dots');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// Login Modal
const loginButton = document.querySelector('button:contains("Login")');
const modal = document.createElement('div');
modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden';
modal.innerHTML = `
    <div class="bg-gray-800 p-8 rounded-lg max-w-md mx-auto mt-20">
        <h2 class="text-2xl font-press-start mb-4">Login</h2>
        <form>
            <input type="email" placeholder="Email" class="w-full p-2 mb-4 bg-gray-700 rounded">
            <input type="password" placeholder="Password" class="w-full p-2 mb-4 bg-gray-700 rounded">
            <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded">Login</button>
        </form>
    </div>
`;
document.body.appendChild(modal);

loginButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
}); 