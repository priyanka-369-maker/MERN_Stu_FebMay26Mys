const express = require("express");
const auth = require("../middleware/authMiddleware");

const {
  createPost,
  getFeed,
  likePost,
  commentPost,
} = require("../controllers/postController");

const router = express.Router();

router.post("/", auth, createPost);
router.get("/feed", auth, getFeed);
router.post("/:id/like", auth, likePost);
router.post("/:id/comment", auth, commentPost);

module.exports = router;