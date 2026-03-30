function initSkillsSection() {
    const container = document.getElementById("skills-container");

    if (!container || typeof skillsData === "undefined") return;

    // Get unique categories
    const categories = [...new Set(skillsData.map(skill => skill.category))];

    // Render grouped skills
    function renderSkills(filteredData) {
        container.innerHTML = "";

        categories.forEach(category => {
            const categorySkills = filteredData.filter(skill => skill.category === category);

            if (categorySkills.length === 0) return;

            // Create section title
            const title = document.createElement("h3");
            title.className = "text-xl font-bold mb-4";
            title.textContent = category;

            // Create skill list
            const list = document.createElement("div");
            list.className = "flex flex-wrap gap-2 mb-6";

            categorySkills.forEach(skill => {
                const item = document.createElement("span");
                item.className = "px-3 py-1 bg-white rounded shadow text-sm";
                item.textContent = skill.name;
                list.appendChild(item);
            });

            container.appendChild(title);
            container.appendChild(list);
        });
    }

    // Initial render (All skills)
    renderSkills(skillsData);

    console.log("Skills Grouping Initialized");
}
initSkillsSection() ;
