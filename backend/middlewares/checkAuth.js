const { verifyJWT } = require("../utils/JWT");

const checkAuth = async (req, res, next) => {
  // Check if the request has an authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    const isValid = await verifyJWT(token);

    if (isValid) {
      req.user = isValid;
      return next();
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = checkAuth;
