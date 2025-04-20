class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.gameRunning = false;
        
        // Player properties
        this.player = {
            x: 50,
            y: 300,
            width: 32,
            height: 32,
            speed: 5,
            jumpForce: 15,
            velocityY: 0,
            isJumping: false
        };
        
        // Platform properties
        this.platforms = [
            { x: 0, y: 350, width: 800, height: 50 },
            { x: 200, y: 250, width: 100, height: 20 },
            { x: 400, y: 200, width: 100, height: 20 },
            { x: 600, y: 150, width: 100, height: 20 }
        ];
        
        // Collectible properties
        this.collectibles = [
            { x: 250, y: 220, width: 16, height: 16, collected: false },
            { x: 450, y: 170, width: 16, height: 16, collected: false },
            { x: 650, y: 120, width: 16, height: 16, collected: false }
        ];
        
        // Gravity
        this.gravity = 0.8;
        
        // Event listeners
        document.getElementById('startButton').addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }
    
    startGame() {
        this.gameRunning = true;
        this.score = 0;
        document.getElementById('score').textContent = this.score;
        this.gameLoop();
    }
    
    handleKeyDown(e) {
        if (!this.gameRunning) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                this.player.x -= this.player.speed;
                break;
            case 'ArrowRight':
                this.player.x += this.player.speed;
                break;
            case 'ArrowUp':
            case ' ':
                if (!this.player.isJumping) {
                    this.player.velocityY = -this.player.jumpForce;
                    this.player.isJumping = true;
                }
                break;
        }
    }
    
    handleKeyUp(e) {
        // Add any key up handling if needed
    }
    
    checkCollisions() {
        // Platform collisions
        this.player.velocityY += this.gravity;
        this.player.y += this.player.velocityY;
        
        this.platforms.forEach(platform => {
            if (this.player.x < platform.x + platform.width &&
                this.player.x + this.player.width > platform.x &&
                this.player.y + this.player.height > platform.y &&
                this.player.y < platform.y + platform.height) {
                
                this.player.y = platform.y - this.player.height;
                this.player.velocityY = 0;
                this.player.isJumping = false;
            }
        });
        
        // Collectible collisions
        this.collectibles.forEach((collectible, index) => {
            if (!collectible.collected &&
                this.player.x < collectible.x + collectible.width &&
                this.player.x + this.player.width > collectible.x &&
                this.player.y + this.player.height > collectible.y &&
                this.player.y < collectible.y + collectible.height) {
                
                collectible.collected = true;
                this.score += 100;
                document.getElementById('score').textContent = this.score;
            }
        });
        
        // Screen boundaries
        if (this.player.x < 0) this.player.x = 0;
        if (this.player.x + this.player.width > this.canvas.width) {
            this.player.x = this.canvas.width - this.player.width;
        }
    }
    
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw platforms
        this.ctx.fillStyle = '#4a4a4a';
        this.platforms.forEach(platform => {
            this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        });
        
        // Draw collectibles
        this.ctx.fillStyle = '#ffd700';
        this.collectibles.forEach(collectible => {
            if (!collectible.collected) {
                this.ctx.fillRect(collectible.x, collectible.y, collectible.width, collectible.height);
            }
        });
        
        // Draw player
        this.ctx.fillStyle = '#ff6b6b';
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }
    
    gameLoop() {
        if (!this.gameRunning) return;
        
        this.checkCollisions();
        this.draw();
        
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize the game when the page loads
window.onload = () => {
    new Game();
}; 