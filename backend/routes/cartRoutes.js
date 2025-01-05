const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.post("/", cartController.addItem);
router.delete("/", cartController.removeItem);
router.get("/", cartController.viewCart);

module.exports = router;
