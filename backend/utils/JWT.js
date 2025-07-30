const jwt = require("jsonwebtoken");

const createJWT = async (data, expiresIn) => {
  const token = await jwt.sign(data, process.env.JWT_SECRET, { expiresIn });
  return token;
};

const verifyJWT = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Return the decoded token if verification is successful
  } catch (error) {
    return null; // Return null if verification fails
  }
};

module.exports = {
  createJWT,
  verifyJWT,
};
