function initScrollProgress() {
    const scrollBar = document.getElementById("scroll-bar");

    if (!scrollBar) {
        console.warn("Scroll bar element not found");
        return;
    }

    function updateScrollProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Prevent division by 0
        if (docHeight <= 0) {
            scrollBar.style.width = "0%";
            return;
        }

        const scrolled = (scrollTop / docHeight) * 100;
        scrollBar.style.width = scrolled + "%";
    }

    // Use requestAnimationFrame for smoother updates
    window.addEventListener("scroll", () => {
        requestAnimationFrame(updateScrollProgress);
    });

    console.log("✅ Scroll Progress Initialized");
}

/* Run after DOM loads */
document.addEventListener("DOMContentLoaded", initScrollProgress);