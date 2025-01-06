const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/client"); // Prisma client instance

// Signup - register a new user
exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!email && !phone) {
    return res
      .status(400)
      .json({ message: "Either email or phone is required" });
  }

  try {
    // Check if user already exists by email or phone
    const existingUser = await prisma.user.findFirst({
      where: {
        // Only check email or phone if they are not null or undefined
        OR: [
          email ? { email: email } : null,
          phone ? { phone: phone } : null,
        ].filter(Boolean), // Remove any null values
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

// Login - authenticate a user
exports.login = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  if (!emailOrPhone) {
    return res
      .status(400)
      .json({ message: "Either email or phone is required" });
  }

  console.log(emailOrPhone, password);

  try {
    // Find the user by email or phone
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrPhone }, { phone: emailOrPhone }],
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
