// User Management Module - Handles Profile Creation, Login, and User Data
let users = [];
let currentUser = null;

// Create Profile
function createUser(name, headline) {
    const user = {
        id: users.length + 1,
        name,
        headline,
        skills: [],
        experience: [],
        education: []
    };

    users.push(user);
    currentUser = user;
    return user;
}

// Login
function loginUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        currentUser = user;
        return user;
    }
    return null;
}

function getCurrentUser() {
    return currentUser;
}

function getAllUsers() {
    return users;
}

module.exports = {
    createUser,
    loginUser,
    getCurrentUser,
    getAllUsers
};