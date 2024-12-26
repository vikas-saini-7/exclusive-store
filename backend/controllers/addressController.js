const prisma = require("../prisma/client");

// model Address {
//     id        Int     @id @default(autoincrement())
//     userId    Int
//     user      User    @relation(fields: [userId], references: [id])
//     street    String
//     city      String
//     state     String
//     zipCode   String
//     country   String
//     isDefault Boolean @default(false)
//     orders    Order[]
//   }

// router.post("/create", addressController.createAddress);

// // get all addresses
// router.get("/", addressController.getAllAddresses);

// // get address by id
// router.get("/:id", addressController.getAddress);

// // update address by id
// router.put("/:id", addressController.updateAddress);

// // delete address by id
// router.delete("/:id", addressController.deleteAddress);

exports.createAddress = async (req, res) => {
  const { userId, street, city, state, zipCode, country, isDefault } = req.body;

  try {
    const address = await prisma.address.create({
      data: {
        userId,
        street,
        city,
        state,
        zipCode,
        country,
        isDefault,
      },
    });

    res.status(201).json({ address });
  } catch (error) {
    res.status(500).json({ error: "Could not create address" });
  }
};

// by user
exports.getAllAddresses = async (req, res) => {
  const { userId } = req.query;

  try {
    const addresses = await prisma.address.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch addresses" });
  }
};

exports.getAddress = async (req, res) => {
  const { id } = req.params;

  try {
    const address = await prisma.address.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch address" });
  }
};

exports.updateAddress = async (req, res) => {
  const { id } = req.params;
  const { street, city, state, zipCode, country, isDefault } = req.body;

  try {
    const address = await prisma.address.update({
      where: {
        id: parseInt(id),
      },
      data: {
        street,
        city,
        state,
        zipCode,
        country,
        isDefault,
      },
    });

    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ error: "Could not update address" });
  }
};

exports.deleteAddress = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.address.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Address deleted" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete address" });
  }
};
