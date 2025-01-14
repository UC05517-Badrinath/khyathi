function createSparkles() {
    const body = document.body;

    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        body.appendChild(sparkle);
    }
}

function createDecorations() {
    const leftContainer = document.getElementById("balloons-left");
    const rightContainer = document.getElementById("balloons-right");

    for (let i = 0; i < 20; i++) {
        // Create balloons
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 3}s`;

        // Create ribbons
        const ribbon = document.createElement("div");
        ribbon.className = "ribbon";
        ribbon.style.left = `${Math.random() * 100}%`;
        ribbon.style.animationDelay = `${Math.random() * 3}s`;

        // Create flowers
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.animationDelay = `${Math.random() * 3}s`;

        // Add to containers
        if (i % 3 === 0) {
            leftContainer.appendChild(balloon);
            rightContainer.appendChild(flower);
        } else if (i % 3 === 1) {
            leftContainer.appendChild(flower);
            rightContainer.appendChild(ribbon);
        } else {
            leftContainer.appendChild(ribbon);
            rightContainer.appendChild(balloon);
        }
    }
}


// Initialize sparkles
document.addEventListener("DOMContentLoaded", () => {
    createDecorations();
    createSparkles();
});
// Initialize decorations
document.addEventListener("DOMContentLoaded", createDecorations);
