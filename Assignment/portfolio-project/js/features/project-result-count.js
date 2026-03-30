function initProjectCount() {
    const countElement = document.getElementById("project-count");

    if (!countElement || typeof projectsData === "undefined") return;

    // Function to update count
    function updateCount(projects) {
        countElement.textContent = projects.length + " projects found";
    }

    // Initial count (when page loads)
    updateCount(projectsData);

    // Hook into search (reuse filtering)
    const searchInput = document.getElementById("project-search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase();

            const filteredProjects = projectsData.filter(project =>
                project.name.toLowerCase().includes(searchText) ||
                project.category.toLowerCase().includes(searchText) ||
                project.description.toLowerCase().includes(searchText)
            );

            updateCount(filteredProjects);
        });
    }

    console.log("Project Count Initialized");
}
initProjectCount();