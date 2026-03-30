function initBackToTop() {
    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    // Show / Hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.classList.remove("hidden"); // show
        } else {
            topBtn.classList.add("hidden"); // hide
        }
    });

    // Scroll to top when clicked
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    console.log("Back To Top Initialized");
}
initBackToTop();
