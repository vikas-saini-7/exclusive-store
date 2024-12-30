const prisma = require("../prisma/client");

exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      throw new Error("User ID is missing from request");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error); // Log the error
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
