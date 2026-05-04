const posts = require("../data/posts");
const connections = require("../data/connections");
const AppError = require("../utils/customError");

exports.createPost = (req, res) => {
  const post = {
    id: Date.now().toString(),
    author: req.user.id,
    content: req.body.content,
    likes: [],
    comments: [],
    timestamp: Date.now(),
  };

  posts.push(post);
  res.json(post);
};

exports.getFeed = (req, res) => {
  const myConnections = connections
    .filter(
      (c) =>
        (c.sender === req.user.id || c.receiver === req.user.id) &&
        c.status === "accepted"
    )
    .map((c) => (c.sender === req.user.id ? c.receiver : c.sender));

  const feed = posts
    .filter((p) => myConnections.includes(p.author))
    .sort((a, b) => b.timestamp - a.timestamp);

  res.json(feed);
};

exports.likePost = (req, res, next) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) return next(new AppError("Post not found", 404));

  if (post.likes.includes(req.user.id))
    return next(new AppError("Already liked", 400));

  post.likes.push(req.user.id);
  res.json(post);
};

exports.commentPost = (req, res, next) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) return next(new AppError("Post not found", 404));

  post.comments.push({
    user: req.user.id,
    text: req.body.text,
  });

  res.json(post);
};