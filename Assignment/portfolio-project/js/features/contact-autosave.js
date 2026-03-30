function initContactAutoSave() {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");

    if (!nameInput || !emailInput) return;

    // Save data function
    function saveFormData() {
        const formData = {
            name: nameInput.value,
            email: emailInput.value
        };

        localStorage.setItem("contactForm", JSON.stringify(formData));
    }

    // Attach input events
    nameInput.addEventListener("input", saveFormData);
    emailInput.addEventListener("input", saveFormData);

    // Load saved data
    const savedData = localStorage.getItem("contactForm");

    if (savedData) {
        const parsedData = JSON.parse(savedData);

        nameInput.value = parsedData.name || "";
        emailInput.value = parsedData.email || "";
    }

    console.log("Contact AutoSave Initialized");
}

// Initialize
initContactAutoSave();