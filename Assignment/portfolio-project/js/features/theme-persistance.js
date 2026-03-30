function initThemePersistence() {
    const toggleBtn = document.getElementById("theme-toggle");
    const root = document.documentElement;

    if (!toggleBtn) {
        console.log("Theme button not found");
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        root.classList.add("dark");
    }

    toggleBtn.addEventListener("click", function () {
        root.classList.toggle("dark");

        if (root.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        console.log("Theme toggled");
    });

    console.log("Theme Persistence Initialized");
}

initThemePersistence();