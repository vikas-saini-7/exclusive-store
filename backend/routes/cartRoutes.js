const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.post("/", cartController.addItem);

router.delete("/:userId/:productId", cartController.removeItem);

router.delete("/:userId/:cartItemId", cartController.removeCartItem);

router.delete("/:userId", cartController.clearCart);

router.get("/:userId", cartController.viewCart);

module.exports = router;
