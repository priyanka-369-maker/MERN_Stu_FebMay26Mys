// Event Management Module using EventEmitter
const EventEmitter = require("events");
const chalk = require("chalk");

const emitter = new EventEmitter();

emitter.on("sessionStarted", () =>
  console.log(chalk.blue("Session Started"))
);

emitter.on("profileCreated", (user) =>
  console.log(chalk.green(`Profile created for ${user.name}`))
);

emitter.on("connectionRequested", () =>
  console.log(chalk.cyan("Connection request sent"))
);

emitter.on("connectionAccepted", () =>
  console.log(chalk.green("Connection accepted"))
);

emitter.on("postCreated", () =>
  console.log(chalk.green("Post created successfully"))
);

emitter.on("operationFailed", (msg) =>
  console.log(chalk.red(msg))
);

module.exports = emitter;