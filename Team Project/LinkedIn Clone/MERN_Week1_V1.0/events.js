// Event Management Module using EventEmitter
const EventEmitter = require("events");
const chalk = require("chalk");

const emitter = new EventEmitter();

emitter.on("sessionStarted", () => console.log(chalk.blue("Session Started")));
emitter.on("profileCreated", u => console.log(chalk.green(`Profile created: ${u.name}`)));
emitter.on("profileUpdated", () => console.log(chalk.yellow("Profile updated")));
emitter.on("connectionRequested", () => console.log(chalk.cyan("Request sent")));
emitter.on("connectionAccepted", () => console.log(chalk.green("Request accepted")));
emitter.on("connectionRejected", () => console.log(chalk.red("Request rejected")));
emitter.on("postCreated", () => console.log(chalk.green("Post created")));
emitter.on("postLiked", () => console.log(chalk.blue("Post liked")));
emitter.on("commentAdded", () => console.log(chalk.blue("Comment added")));
emitter.on("feedViewed", () => console.log(chalk.cyan("Feed viewed")));
emitter.on("operationFailed", msg => console.log(chalk.red(msg)));

module.exports = emitter;