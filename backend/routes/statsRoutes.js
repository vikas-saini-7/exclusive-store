const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController.js");

// get home stats
router.get("/", statsController.getHomeStats);

module.exports = router;
