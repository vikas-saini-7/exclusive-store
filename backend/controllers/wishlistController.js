const prisma = require("../prisma/client");

exports.getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: Number(userId) },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found." });
    }

    res.json(wishlist.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch wishlist." });
  }
};

exports.addProduct = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Find or create wishlist for user
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: { userId },
      });
    }

    // Check if product already exists
    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId: productId,
      },
    });

    if (existingItem) {
      return res.status(400).json({ message: "Product already in wishlist." });
    }

    // Add item to wishlist
    const wishlistItem = await prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId,
      },
    });

    res.status(201).json(wishlistItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add product to wishlist." });
  }
};

// Remove product from wishlist
exports.removeProduct = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: Number(userId) },
    });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found." });
    }

    const removedItem = await prisma.wishlistItem.deleteMany({
      where: {
        wishlistId: wishlist.id,
        productId: Number(productId),
      },
    });

    res.json({ message: "Product removed from wishlist." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to remove product." });
  }
};
