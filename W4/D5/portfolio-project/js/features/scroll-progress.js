function initScrollProgress() {
    const scrollBar = document.getElementById("scroll-bar");

    if (!scrollBar) return;

    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (scrollTop / height) * 100;

        scrollBar.style.width = scrolled + "%";
    });
    console.log("Scroll working");
}
initScrollProgress();