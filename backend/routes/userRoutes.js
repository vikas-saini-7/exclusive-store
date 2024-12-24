const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// get all users
router.get("/", userController.getAllUsers);

//update user
router.put("/:id", userController.updateUser);

module.exports = router;
