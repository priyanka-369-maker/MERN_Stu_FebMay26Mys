//User feed logic
const { posts } = require("./posts");
const emitter = require("./events");
const { getAllUsers } = require("./user");

async function getFeed(user) {
  try {
    if (!user) throw new Error("Login required");

    const users = getAllUsers();

    const feed = posts
      .filter(p =>
        user.connections.includes(p.author) || p.author === user.id
      )
      .map(p => {
        const author = users.find(u => u.id === p.author);
        return {
          ...p,
          authorName: author?.name
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp);

    emitter.emit("feedViewed");

    return feed;

  } catch (err) {
    emitter.emit("operationFailed", err.message);
    return [];
  }
}

module.exports = { getFeed };