document.addEventListener('DOMContentLoaded', () => {
    // Game filter functionality
    const gameFilters = document.querySelectorAll('.game-filter');
    const leaderboardTables = document.querySelectorAll('.leaderboard-table');

    gameFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            gameFilters.forEach(f => f.classList.remove('active', 'bg-purple-600'));
            gameFilters.forEach(f => f.classList.add('bg-gray-700'));

            // Add active class to clicked filter
            filter.classList.add('active', 'bg-purple-600');
            filter.classList.remove('bg-gray-700');

            // Show/hide tables based on filter
            const gameType = filter.textContent.trim();
            leaderboardTables.forEach(table => {
                if (gameType === 'All Games' || table.querySelector('h2').textContent.includes(gameType)) {
                    anime({
                        targets: table,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutExpo'
                    });
                    table.style.display = 'block';
                } else {
                    anime({
                        targets: table,
                        opacity: [1, 0],
                        translateY: [0, 20],
                        duration: 500,
                        easing: 'easeOutExpo',
                        complete: () => {
                            table.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

    // Animate table rows on load
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        anime({
            targets: row,
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: index * 100,
            easing: 'easeOutExpo'
        });
    });

    // Hover animations for table rows
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            anime({
                targets: row,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        row.addEventListener('mouseleave', () => {
            anime({
                targets: row,
                scale: 1,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });

    // Animate table headers
    const tableHeaders = document.querySelectorAll('th');
    tableHeaders.forEach((header, index) => {
        anime({
            targets: header,
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 600,
            delay: index * 100,
            easing: 'easeOutExpo'
        });
    });

    // Animate section headers
    const sectionHeaders = document.querySelectorAll('h2');
    sectionHeaders.forEach(header => {
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

    // Animate player avatars
    const playerAvatars = document.querySelectorAll('img[alt^="Player"]');
    playerAvatars.forEach(avatar => {
        anime({
            targets: avatar,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutBack'
        });
    });
}); 