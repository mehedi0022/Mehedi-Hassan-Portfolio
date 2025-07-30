const { createJWT } = require("../utils/JWT");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Here you would typically check the credentials against a database
    // For demonstration, let's assume a simple check
    if (
      email === process.env.USER_EMAIL &&
      password === process.env.USER_PASSWORD
    ) {
      // Create a JWT token
      const token = await createJWT(
        { email, name: process.env.USER_NAME },
        "7d"
      );
      return res.status(200).json({ message: "Login successful!", token });
    } else {
      return res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = login;
