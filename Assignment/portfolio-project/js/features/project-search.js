function initProjectSearch() {
    const searchInput = document.getElementById("project-search");

    if (!searchInput || typeof projectsData === "undefined") return;

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        const filteredProjects = projectsData.filter(project =>
            project.name.toLowerCase().includes(searchText) ||
            project.category.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText)
        );

        if (typeof renderProjects === "function") {
            renderProjects(filteredProjects);
        }
    });

    console.log("Project Search Initialized");
}
initProjectSearch();