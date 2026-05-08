function initContactValidation() {
  const form = document.getElementById("contact-form");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  if (!form) return; // safety check

  function showError(input, errorEl, message) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
    input.classList.add("border", "border-red-500");
  }

  function clearError(input, errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
    input.classList.remove("border", "border-red-500");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let isValid = true;

    // Name
    if (name.value.trim() === "") {
      showError(name, nameError, "Name is required");
      isValid = false;
    } else {
      clearError(name, nameError);
    }

    // Email
    if (email.value.trim() === "") {
      showError(email, emailError, "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, emailError, "Enter a valid email");
      isValid = false;
    } else {
      clearError(email, emailError);
    }

    // Message
    if (message.value.trim() === "") {
      showError(message, messageError, "Message cannot be empty");
      isValid = false;
    } else if (message.value.length < 10) {
      showError(message, messageError, "Message must be at least 10 characters");
      isValid = false;
    } else {
      clearError(message, messageError);
    }

    return isValid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
}

/* Initialize */
document.addEventListener("DOMContentLoaded", initContactValidation);