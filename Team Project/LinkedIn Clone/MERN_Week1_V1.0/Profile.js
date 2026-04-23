// Module for Managing User Profile Details
const emitter = require("./events");

function addSkill(user, skill) {
  user.skills.push(skill);
  emitter.emit("profileUpdated");
}

function addExperience(user, exp) {
  user.experience.push(exp);
  emitter.emit("profileUpdated");
}

function addEducation(user, edu) {
  user.education.push(edu);
  emitter.emit("profileUpdated");
}

module.exports = { addSkill, addExperience, addEducation };