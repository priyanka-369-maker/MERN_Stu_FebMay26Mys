// User Management Module - Handles Profile Creation, Login, and User Data
let users = [];
let currentUser = null;
let id = 1;

function createUser(name, headline) {
  if (!name || !headline) throw new Error("Invalid input");

  const user = {
    id: id++,
    name,
    headline,
    skills: [],
    experience: [],
    education: [],
    connections: []
  };

  users.push(user);
  currentUser = user;
  return user;
}

function loginUser(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return null;
  currentUser = user;
  return user;
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