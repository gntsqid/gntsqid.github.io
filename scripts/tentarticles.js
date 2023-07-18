class Particle {
    constructor(angle) {
        this.angle = angle;
        this.x = 0;
        this.y = 0;
        this.length = Math.random() * 50 + 50; // increase the range
        this.speed = Math.random() * 3 + 1; // increase the speed
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

for (let i = 0; i < 200; i++) { // increase the number of particles
    particles.push(new Particle(Math.random() * 2 * Math.PI));
}

let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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


