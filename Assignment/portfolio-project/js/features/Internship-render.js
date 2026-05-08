document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("internship-container");

  if (!container || !internshipData) return;

  function renderInternships(data) {
    container.innerHTML = "";

    data.forEach((item) => {
      const card = document.createElement("div");

      card.className =
        "bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition";

      card.innerHTML = `
        <h3 class="text-xl font-bold text-blue-400">${item.role}</h3>
        <h4 class="text-gray-300 mt-1">${item.company}</h4>
        <p class="text-sm text-gray-400 mt-1"><strong>Duration:</strong> ${item.duration}</p>
        <p class="text-gray-300 mt-3">${item.description}</p>
      `;

      container.appendChild(card);
    });
  }

  // initial render
  renderInternships(internshipData);
});