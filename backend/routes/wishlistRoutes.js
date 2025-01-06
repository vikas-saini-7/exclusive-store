const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController.js");

// get wishlist by userId
router.get("/:userId", wishlistController.viewWishlist);

// add product to wishlist
router.post("/", wishlistController.addItem);

// remove product from wishlist
router.delete("/:userId/:productId", wishlistController.removeItem);

module.exports = router;
