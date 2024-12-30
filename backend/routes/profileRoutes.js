const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// get profile by id
router.get("/", authenticateToken, profileController.getProfile);

module.exports = router;
