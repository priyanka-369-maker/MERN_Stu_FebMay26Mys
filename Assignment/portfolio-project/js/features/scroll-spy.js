function initScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-blue-600");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("text-blue-600");
            }
        });
    });
}
initScrollSpy();