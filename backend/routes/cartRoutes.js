const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.post("/add", cartController.addItem);
router.delete("/remove", cartController.removeItem);
router.get("/", cartController.viewCart);

module.exports = router;
