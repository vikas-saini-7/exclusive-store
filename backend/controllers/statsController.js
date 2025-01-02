const prisma = require("../prisma/client");

exports.getHomeStats = async (req, res) => {
  try {
    const users = await prisma.user.count();
    const categories = await prisma.category.count();
    const products = await prisma.product.count();
    const orders = await prisma.order.count();
    // const revenue = await prisma.order.aggregate({
    //   _sum: {
    //     // total: true,
    //   },
    // });
    res.status(200).json({
      users,
      categories,
      products,
      orders,
      //   revenue,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
