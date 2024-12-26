const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController.js");

// get wishlist by userId
router.get("/", wishlistController.getWishlist);

// add product to wishlist
router.post("/", wishlistController.addProduct);

// remove product from wishlist
router.delete("/", wishlistController.removeProduct);

module.exports = router;
