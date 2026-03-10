function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let letterCount = 0;
    let numberCount = 0;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            letterCount++;
        }

        if (ch >= '0' && ch <= '9') {
            numberCount++;
        }
    }

    if (password.length < 8) {
        return "WEAK";
    }

    if (password.length >= 12 && letterCount > 0 && numberCount > 0) {
        return "STRONG";
    }

    if (letterCount > 0 && numberCount > 0) {
        return "MEDIUM";
    }

    return "WEAK";
}

console.log(tagPassword("pri000"));        // WEAK
console.log(tagPassword("pri111122"));     // MEDIUM
console.log(tagPassword("pri222223333"));  // STRONG
console.log(tagPassword(12345));           // INVALID