const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController.js");

// get wishlist by userId
router.get("/", wishlistController.viewWishlist);

// add product to wishlist
router.post("/add", wishlistController.addItem);

// remove product from wishlist
router.delete("/remove", wishlistController.removeItem);

module.exports = router;
