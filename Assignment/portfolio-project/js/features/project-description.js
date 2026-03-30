function attachToggleEvents(projects) {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");

            // Toggle boolean flag
            projects[index].expanded = !projects[index].expanded;

            // Re-render UI
            if (typeof renderProjects === "function") {
                renderProjects(projects);
            }
        });
    });
}