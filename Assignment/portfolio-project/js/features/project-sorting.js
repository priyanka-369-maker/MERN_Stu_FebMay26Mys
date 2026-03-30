function initProjectSorting() {
    const sortSelect = document.getElementById("project-sort");

    if (!sortSelect || typeof projectsData === "undefined") return;

    sortSelect.addEventListener("change", function () {
        const value = this.value;

        let sortedProjects = [...projectsData]; // copy array

        if (value === "name-asc") {
            sortedProjects.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } 
        else if (value === "name-desc") {
            sortedProjects.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        } 
        else if (value === "status") {
            sortedProjects.sort((a, b) =>
                a.status.localeCompare(b.status)
            );
        }

        if (typeof renderProjects === "function") {
            renderProjects(sortedProjects);
        }

        // Optional: update count
        const countElement = document.getElementById("project-count");
        if (countElement) {
            countElement.textContent = sortedProjects.length + " projects found";
        }

    });

    console.log("Project Sorting Initialized");
}
initProjectSorting();