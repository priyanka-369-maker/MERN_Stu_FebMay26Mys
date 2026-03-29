function renderInternship() {
    const container = document.getElementById("internship-container");

    if (!container) {
        console.log("Internship container not found");
        return;
    }

    container.innerHTML = "";

    internshipData.forEach(function (item) {

        // Card
        const card = document.createElement("div");
        card.className =
            "group shadow-2xl rounded-3xl p-8 hover:shadow-2xl transition-all relative overflow-hidden";

        // Overlay
        const overlay = document.createElement("div");
        overlay.className =
            "absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity";

        // Content Wrapper
        const wrapper = document.createElement("div");
        wrapper.className = "relative z-10 flex items-center gap-4";

        // Circle
        const circle = document.createElement("div");
        circle.className =
            "w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg";

        const short = document.createElement("span");
        short.className = "text-white font-bold";
        short.textContent = item.short;

        circle.appendChild(short);

        // Content
        const content = document.createElement("div");

        const role = document.createElement("h3");
        role.className = "text-2xl font-semibold";
        role.textContent = item.role;

        const company = document.createElement("p");
        company.className = "text-md font-semibold";
        company.textContent = item.company;

        const duration = document.createElement("p");
        duration.className = "text-sm";
        duration.textContent = "Duration: " + item.duration;

        const desc = document.createElement("p");
        desc.className = "text-sm";
        desc.textContent = item.description;

        // Append content
        content.appendChild(role);
        content.appendChild(company);
        content.appendChild(duration);
        content.appendChild(desc);

        wrapper.appendChild(circle);
        wrapper.appendChild(content);

        card.appendChild(overlay);
        card.appendChild(wrapper);

        container.appendChild(card);
    });

    console.log("Internship rendered successfully");
}
renderInternship();