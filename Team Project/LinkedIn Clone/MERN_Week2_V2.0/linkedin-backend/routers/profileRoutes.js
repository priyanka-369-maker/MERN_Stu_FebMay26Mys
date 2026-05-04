const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  getMe,
  updateProfile,
  getProfileById,
} = require("../controllers/profileController");

const router = express.Router();

router.get("/me", auth, getMe);
router.put("/", auth, updateProfile);
router.get("/:id", auth, getProfileById);

module.exports = router;