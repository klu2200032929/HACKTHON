const express = require("express");
const { createRequest, getAllRequests, getPendingRequests , deleteRequest, getUserRequests} = require("../controllers/requestController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createRequest);
router.get("/", getAllRequests);
router.get("/pending", protect, getPendingRequests); // ✅ Ensure only volunteers/admins can access
router.delete("/:id", protect, deleteRequest);
router.get("/my-requests", protect, getUserRequests);  // ✅ Get logged-in user's requests

module.exports = router;
