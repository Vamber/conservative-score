let canvas = document.querySelector("canvas");
canvas.width = 630;
canvas.height = 630;
var c = canvas.getContext("2d");
let mouse = {
    x: undefined,
    y: undefined
};
let maxRadius = 100;
let colorArray = [
    "#FF6666",
    "#3399FF"
];
canvas.addEventListener("mousemove", event => {
    mouse.x = event.x-50;
    mouse.y = event.y-50;
});


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.original = this.color;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        if (mouse.x - this.x < 30 && mouse.x - this.x > -30 && mouse.y - this.y < 30 && mouse.y - this.y > -30) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
            if (this.color == "#FF6666" ) {
                this.color = "#ff0000";
            } 

            if (this.color == "#3399FF") {
                this.color = "#0000ff";
            }
  
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
            this.color = this.original;
        }
        this.draw();
    }
}

let circleArray = [];

for (let i = 0; i < 300; i++) {
    let radius = Math.floor(Math.random() * 30 + 2);
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();