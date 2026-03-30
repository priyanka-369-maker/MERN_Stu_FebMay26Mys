function initRecentlyViewedProjects() {
    const container = document.getElementById("recent-container");

    if (!container || typeof projectsData === "undefined") return;

    // Load from localStorage
    let recentProjects = JSON.parse(localStorage.getItem("recentProjects")) || [];

    // Render function
    function renderRecent() {
        if (recentProjects.length === 0) {
            container.innerHTML = "<p class='text-center col-span-full'>No recently viewed projects</p>";
            return;
        }

        container.innerHTML = recentProjects.map(project => `
            <div class="border p-4 rounded shadow">
                <h3 class="font-bold text-lg">${project.name}</h3>
                <p class="text-sm text-gray-600">${project.category}</p>
            </div>
        `).join("");
    }

    // Handle click on project cards
    document.addEventListener("click", function (e) {
        const card = e.target.closest(".project-card");

        if (!card) return;

        const projectId = card.getAttribute("data-id");

        const clickedProject = projectsData.find(p => p.id == projectId);

        if (!clickedProject) return;

        // Avoid duplicates
        const exists = recentProjects.some(p => p.id == clickedProject.id);

        if (!exists) {
            recentProjects.unshift(clickedProject); // add to start

            // Limit to 5 items
            recentProjects = recentProjects.slice(0, 5);

            localStorage.setItem("recentProjects", JSON.stringify(recentProjects));
        }

        renderRecent();
    });

    renderRecent();

    console.log("Recently Viewed Projects Initialized");
}

initRecentlyViewedProjects();