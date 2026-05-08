function renderEducation(data) {
  const container = document.getElementById("experience-container");

  if (!container) return;

  container.innerHTML = data.map((edu) => `
    <div class="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">

      <h3 class="text-xl font-bold text-blue-400">
        ${edu.course}
      </h3>

      <p class="text-gray-300 mt-1">
        ${edu.college}
      </p>

      <p class="text-gray-400 text-sm">
        ${edu.board} • ${edu.year}
      </p>

      <p class="text-green-400 font-semibold mt-2">
        ${edu.percentage}
      </p>

    </div>
  `).join("");
}