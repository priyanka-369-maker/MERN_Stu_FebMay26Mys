const users = require("../data/users");
const AppError = require("../utils/customError");

exports.getMe = (req, res, next) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return next(new AppError("User not found", 404));

  res.json(user.profile || {});
};

exports.updateProfile = (req, res, next) => {
  const user = users.find((u) => u.id === req.user.id);

  if (!user) return next(new AppError("User not found", 404));

  user.profile = {
    name: req.body.name,
    headline: req.body.headline,
    skills: req.body.skills || [],
    experience: req.body.experience || [],
    education: req.body.education || [],
  };

  res.json(user.profile);
};

exports.getProfileById = (req, res, next) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return next(new AppError("User not found", 404));

  res.json(user.profile || {});
};