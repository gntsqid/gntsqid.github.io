class Particle {
    constructor(angle) {
        this.angle = angle;
        this.x = 0;
        this.y = 0;
        this.length = Math.random() * 10 + 10;
        this.speed = Math.random() * 2 + 1;
    }

    update() {
        this.angle += 0.01 * this.speed;
        this.x = Math.sin(this.angle) * this.length;
        this.y = Math.cos(this.angle) * this.length;
    }
}

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push(new Particle(Math.random() * 2 * Math.PI));
}

let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(mouse.x + p.x, mouse.y + p.y);
        ctx.stroke();
    }
    requestAnimationFrame(animate);
}

animate();

