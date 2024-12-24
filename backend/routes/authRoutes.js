const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

// POST /signup - Create a new user
router.post("/signup", authController.signup);

// POST /login - Authenticate a user
router.post("/login", authController.login);

module.exports = router;
