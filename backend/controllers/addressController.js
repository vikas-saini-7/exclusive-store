const prisma = require("../prisma/client");

// model Address {
//   id        Int     @id @default(autoincrement())
//   userId    Int
//   user      User    @relation(fields: [userId], references: [id])
//   name      String
//   street    String
//   city      String
//   state     String
//   zipCode   String
//   country   String
//   isDefault Boolean @default(false)
//   phone     String
//   email     String
//   orders    Order[]
// }

exports.createAddress = async (req, res) => {
  try {
    const {
      userId,
      name,
      street,
      city,
      state,
      zipCode,
      country,
      phone,
      email,
      isDefault,
    } = req.body;
    const address = await prisma.address.create({
      data: {
        userId,
        name,
        street,
        city,
        state,
        zipCode,
        country,
        phone,
        email,
        isDefault,
      },
    });
    res.status(201).json({ message: "Address created", address });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAddressesByUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const addresses = await prisma.address.findMany({
      where: {
        userId,
      },
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).json({ message: "Addresses fetched", addresses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const address = await prisma.address.findUnique({
      where: {
        id,
      },
    });
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, street, city, state, zipCode, country, phone, email } =
      req.body;
    const address = await prisma.address.update({
      where: {
        id,
      },
      data: {
        name,
        street,
        city,
        state,
        zipCode,
        country,
        phone,
        email,
      },
    });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.address.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Address deleted", addressId: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
