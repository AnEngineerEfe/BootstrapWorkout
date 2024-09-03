const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 30
};

const target = {
    x: Math.random() * (canvas.width - 30),
    y: Math.random() * (canvas.height - 30),
    width: 30,
    height: 30,
    color: 'red'
};

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player and target
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(target.x, target.y, target.width, target.height, target.color);

    // Check for collision
    if (player.x < target.x + target.width &&
        player.x + player.width > target.x &&
        player.y < target.y + target.height &&
        player.y + player.height > target.y) {
        alert('Tebrikler! Hedefi yakaladınız.');
        // Move target to a new random position
        target.x = Math.random() * (canvas.width - target.width);
        target.y = Math.random() * (canvas.height - target.height);
    }
}

function movePlayer(e) {
    switch (e.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
}

document.addEventListener('keydown', movePlayer);

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
