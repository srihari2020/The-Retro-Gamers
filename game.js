// Game configuration
const config = {
    width: 800,
    height: 600,
    backgroundColor: '#1a202c',
    fps: 60
};

// Game state
let gameState = {
    score: 0,
    highScore: 0,
    lives: 3,
    isGameOver: false,
    isPaused: false
};

// Initialize game
function initGame() {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = config.width;
    canvas.height = config.height;
    document.body.appendChild(canvas);
    
    // Get context
    const ctx = canvas.getContext('2d');
    
    // Set background
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, config.width, config.height);
    
    // Start game loop
    setInterval(() => {
        if (!gameState.isPaused && !gameState.isGameOver) {
            update();
            render(ctx);
        }
    }, 1000 / config.fps);
}

// Update game state
function update() {
    // Update game logic here
}

// Render game
function render(ctx) {
    // Clear canvas
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, config.width, config.height);
    
    // Draw game elements here
    
    // Draw score
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Press Start 2P';
    ctx.fillText(`Score: ${gameState.score}`, 20, 30);
    ctx.fillText(`High Score: ${gameState.highScore}`, 20, 60);
    ctx.fillText(`Lives: ${gameState.lives}`, 20, 90);
    
    // Draw game over message
    if (gameState.isGameOver) {
        ctx.fillStyle = '#9333ea';
        ctx.font = '40px Press Start 2P';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', config.width / 2, config.height / 2);
        ctx.font = '20px Press Start 2P';
        ctx.fillText('Press SPACE to restart', config.width / 2, config.height / 2 + 40);
    }
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ' ':
            if (gameState.isGameOver) {
                resetGame();
            }
            break;
        case 'p':
            gameState.isPaused = !gameState.isPaused;
            break;
    }
});

// Reset game
function resetGame() {
    gameState.score = 0;
    gameState.lives = 3;
    gameState.isGameOver = false;
    gameState.isPaused = false;
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame); 