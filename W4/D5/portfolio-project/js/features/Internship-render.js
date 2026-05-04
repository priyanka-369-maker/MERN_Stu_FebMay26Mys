function renderInternship() {
  const container = document.getElementById("internship-container");

  if (!container) return;

  container.innerHTML = internshipData.map((item) => `
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

      <h3 class="text-xl font-bold text-blue-500">
        ${item.role}
      </h3>

      <p class="text-gray-600 dark:text-gray-300">
        ${item.company}
      </p>

      <p class="text-sm text-gray-400">
        ${item.duration}
      </p>

      <p class="mt-2 text-gray-700 dark:text-gray-200">
        ${item.description}
      </p>

    </div>
  `).join("");
}