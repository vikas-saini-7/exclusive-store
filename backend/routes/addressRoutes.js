const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController.js");

// create address
router.post("/create", addressController.createAddress);

// get all addresses
router.get("/", addressController.getAllAddresses);

// get address by id
router.get("/:id", addressController.getAddress);

// update address by id
router.put("/:id", addressController.updateAddress);

// delete address by id
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
