const prisma = require("../prisma/client");

// model Product {
//   id            Int            @id @default(autoincrement())
//   name          String
//   description   String
//   price         Float
//   discount      Float          @default(0.0)
//   stock         Int
//   sku           String         @unique
//   imageUrl      String?
//   isActive      Boolean        @default(true)
//   categoryId    Int
//   category      Category       @relation(fields: [categoryId], references: [id])
//   wishlistItems WishlistItem[]
//   createdAt     DateTime       @default(now())
//   updatedAt     DateTime       @updatedAt
//   CartItem      CartItem[]

//   orderItems OrderItem[] // New relation for orders

//   @@index([categoryId])
// }

// model Order {
//   id            Int      @id @default(autoincrement())
//   userId        Int
//   addressId     Int
//   user          User     @relation(fields: [userId], references: [id])
//   address       Address  @relation(fields: [addressId], references: [id])
//   paymentMethod String
//   status        String   @default("pending")
//   totalAmount   Float
//   currency      String   @default("INR")
//   discount      Float    @default(0)
//   // taxAmount     Float    @default(0)
//   shippingCost  Float    @default(0)
//   // trackingId    String?
//   createdAt     DateTime @default(now())
//   updatedAt     DateTime @updatedAt

//   orderItems OrderItem[]
// }

// model OrderItem {
//   id        Int   @id @default(autoincrement())
//   orderId   Int
//   productId Int
//   quantity  Int   @default(1)
//   price     Float // Price at order time
//   total     Float // quantity * price

//   order   Order   @relation(fields: [orderId], references: [id])
//   product Product @relation(fields: [productId], references: [id])

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   @@unique([orderId, productId]) // Ensures unique product per order
// }

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create order
exports.createOrder = async (req, res) => {
  const {
    userId,
    addressId,
    paymentMethod,
    totalAmount,
    currency,
    discount,
    shippingCost,
    orderItems,
  } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        userId,
        addressId,
        paymentMethod,
        totalAmount,
        currency,
        discount,
        shippingCost,
        orderItems: {
          create: orderItems,
        },
      },
    });

    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.updateOrder = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   try {
//     const order = await prisma.order.update({
//       where: {
//         id: parseInt(id),
//       },
//       data: {
//         status,
//       },
//     });

//     res.status(200).json({ order });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await prisma.order.update({
      where: {
        id: parseInt(id),
      },
      data: {
        status,
      },
    });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.order.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
