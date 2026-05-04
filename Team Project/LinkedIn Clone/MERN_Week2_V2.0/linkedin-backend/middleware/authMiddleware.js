const jwt = require("jsonwebtoken");
const AppError = require("../utils/customError");

module.exports = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) return next(new AppError("Unauthorized", 401));

  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = decoded;
    next();
  } catch {
    next(new AppError("Invalid Token", 401));
  }
};