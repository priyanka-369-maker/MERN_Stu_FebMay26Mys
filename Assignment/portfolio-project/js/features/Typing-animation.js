function initTypingAnimation() {
    const textElement = document.getElementById("typing-text");

    if (!textElement) return;

    const roles = [
        "Full-Stack Developer",
        "MERN Enthusiast",
        "Digital Marketer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        textElement.textContent = currentRole.slice(0, charIndex);

        // Typing speed
        let speed = isDeleting ? 50 : 100;

        // When word is fully typed
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            speed = 1500; // pause before deleting
        }

        // When word is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    console.log("Typing Animation Initialized");
}
initTypingAnimation();