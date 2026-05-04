const express = require("express");
const auth = require("../middleware/authMiddleware");

const {
  sendRequest,
  getRequests,
  acceptRequest,
  rejectRequest,
  getConnections,
} = require("../controllers/connectionController");

const router = express.Router();

router.post("/request/:userId", auth, sendRequest);
router.get("/requests", auth, getRequests);
router.put("/accept/:requestId", auth, acceptRequest);
router.put("/reject/:requestId", auth, rejectRequest);
router.get("/", auth, getConnections);

module.exports = router;    