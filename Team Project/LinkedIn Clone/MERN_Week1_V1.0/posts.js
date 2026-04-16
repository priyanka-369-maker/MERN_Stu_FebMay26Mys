//Posts logic
const emitter = require("./events");

let posts = [];
let id = 1;

async function createPost(user, content) {
  try {
    if (!user) throw new Error("Login required");

    const post = {
      id: id++,
      author: user.id,
      content,
      likes: [],
      comments: [],
      timestamp: new Date()
    };

    posts.push(post);
    emitter.emit("postCreated");

  } catch (err) {
    emitter.emit("operationFailed", err.message);
  }
}

function likePost(userId, post) {
  if (!post.likes.includes(userId)) {
    post.likes.push(userId);
    emitter.emit("postLiked");
  }
}

module.exports = {
  createPost,
  posts,
  likePost
};