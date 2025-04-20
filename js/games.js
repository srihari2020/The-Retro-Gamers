document.addEventListener('DOMContentLoaded', () => {
    // Animate game cards on load
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        anime({
            targets: card,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: index * 200,
            easing: 'easeOutExpo'
        });
    });

    // Hover animations for game cards
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });

    // Animate game images
    const gameImages = document.querySelectorAll('.game-card img');
    gameImages.forEach(image => {
        anime({
            targets: image,
            scale: [1.1, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        });
    });

    // Animate section headers
    const headers = document.querySelectorAll('h1, h2, h3');
    headers.forEach(header => {
        anime({
            targets: header,
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Login modal animation
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
        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            anime({
                targets: modal,
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutExpo',
                complete: () => modal.classList.add('hidden')
            });
        }
    });
}); 