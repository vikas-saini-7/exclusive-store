const prisma = require("../prisma/client");

// model Wishlist {
//     id     Int            @id @default(autoincrement())
//     userId Int            @unique
//     user   User           @relation(fields: [userId], references: [id])
//     items  WishlistItem[]

//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }

//   model WishlistItem {
//     id         Int      @id @default(autoincrement())
//     wishlistId Int
//     productId  Int
//     wishlist   Wishlist @relation(fields: [wishlistId], references: [id])
//     product    Product  @relation(fields: [productId], references: [id])

//     createdAt DateTime @default(now())

//     @@unique([wishlistId, productId]) // Prevent duplicate product entries
//   }

exports.viewWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await prisma.wishlist.findFirst({
      where: {
        userId: parseInt(userId),
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!wishlist) {
      return res.status(200).json({ message: "Wishlist is empty", items: [] });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.addItem = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const wishlist = await prisma.wishlist.findFirst({
      where: {
        userId: parseInt(userId),
      },
    });

    if (!wishlist) {
      await prisma.wishlist.create({
        data: {
          userId: parseInt(userId),
          items: {
            create: {
              productId: parseInt(productId),
            },
          },
        },
      });
    } else {
      await prisma.wishlistItem.create({
        data: {
          wishlistId: wishlist.id,
          productId: parseInt(productId),
        },
      });
    }

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
    });

    res.status(200).json({ message: "Product added to wishlist", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.removeItem = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const wishlist = await prisma.wishlist.findFirst({
      where: {
        userId: parseInt(userId),
      },
    });

    await prisma.wishlistItem.deleteMany({
      where: {
        wishlistId: wishlist.id,
        productId: parseInt(productId),
      },
    });

    res
      .status(200)
      .json({ message: "Product removed from wishlist", productId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
