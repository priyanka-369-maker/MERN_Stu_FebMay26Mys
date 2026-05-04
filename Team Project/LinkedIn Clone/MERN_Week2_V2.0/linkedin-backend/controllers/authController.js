const jwt = require("jsonwebtoken");
const users = require("../data/users");
const AppError = require("../utils/customError");

exports.register = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("All fields required", 400));

  const exists = users.find((u) => u.email === email);
  if (exists) return next(new AppError("User already exists", 400));

  const user = {
    id: Date.now().toString(),
    email,
    password,
    profile: null,
  };

  users.push(user);

  res.status(201).json(user);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return next(new AppError("Invalid credentials", 401));

  const token = jwt.sign({ id: user.id }, "secret123", {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true });

  req.session.user = user;

  res.json({ token });
};