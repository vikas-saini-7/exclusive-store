const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController.js");

// create address
router.post("/", addressController.createAddress);

// get all addresses by user
router.get("/user/:id", addressController.getAllAddressesByUser);

// get address by id
router.get("/:id", addressController.getAddressById);

// update address by id
router.put("/:id", addressController.updateAddress);

// delete address by id
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
