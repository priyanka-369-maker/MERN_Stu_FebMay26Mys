function initProjectSearch() {
    const searchInput = document.getElementById("project-search");
    const projectCount = document.getElementById("project-count");

    if (!searchInput) {
        console.log("Search input not found");
        return;
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();

        // Filter projects
        const filteredProjects = projectsData.filter(function (project) {
            return (
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                (project.tech && project.tech.join(" ").toLowerCase().includes(query))
            );
        });

        // Re-render projects
        renderProjects(filteredProjects);

        // Update count
        if (projectCount) {
            projectCount.textContent = `Showing ${filteredProjects.length} project(s)`;
        }
    });
}