function renderTestimonials() {
  const container = document.getElementById("testimonials-container");

  if (!container) {
    console.log("Testimonials container not found");
    return;
  }

  container.innerHTML = "";

  testimonialsData.forEach(function (item) {

    const card = document.createElement("div");
    card.className =
      "bg-white p-6 rounded-2xl shadow-lg text-center transition hover:shadow-2xl";

    //  rating stars
    let stars = "";
    for (let i = 0; i < item.rating; i++) {
      stars += "*";
    }

    card.innerHTML = `
      <p class="text-gray-600 italic mb-4">"${item.message}"</p>
      <h3 class="font-bold text-lg">${item.name}</h3>
      <p class="text-sm text-gray-500">${item.role}</p>
      <div class="mt-2">${stars}</div>
    `;

    container.appendChild(card);
  });
}
 renderTestimonials();