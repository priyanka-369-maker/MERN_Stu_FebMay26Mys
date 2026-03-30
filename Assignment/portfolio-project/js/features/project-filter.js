function initProjectFilters() {
    const filterContainer = document.getElementById("project-filters");

    if (!filterContainer || typeof projectsData === "undefined") return;

    // Get unique categories
    const categories = ["All", ...new Set(projectsData.map(p => p.category))];

    // Create buttons dynamically
    filterContainer.innerHTML = categories.map(category => `
        <button class="filter-btn px-4 py-2 border rounded" data-category="${category}">
            ${category}
        </button>
    `).join("");

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            // Remove active class from all
            buttons.forEach(btn => btn.classList.remove("bg-blue-500", "text-white"));

            // Add active class to clicked button
            this.classList.add("bg-blue-500", "text-white");

            const selectedCategory = this.getAttribute("data-category");

            let filteredProjects;

            if (selectedCategory === "All") {
                filteredProjects = projectsData;
            } else {
                filteredProjects = projectsData.filter(project =>
                    project.category === selectedCategory
                );
            }

            if (typeof renderProjects === "function") {
                renderProjects(filteredProjects);
            }

            // Optional: update count
            const countElement = document.getElementById("project-count");
            if (countElement) {
                countElement.textContent = filteredProjects.length + " projects found";
            }

        });
    });

    console.log("Project Filters Initialized");
}
initProjectFilters();