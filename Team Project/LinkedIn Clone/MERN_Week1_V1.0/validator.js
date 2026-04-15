const MAX_ATTEMPTS = 3;

function validateInput(input, attempts, callback) {
  if (!input) {
    if (attempts >= MAX_ATTEMPTS) {
      return callback("Max attempts reached", null);
    }
    return callback("Invalid input", null);
  }
  callback(null, input);
}

module.exports = { validateInput, MAX_ATTEMPTS };