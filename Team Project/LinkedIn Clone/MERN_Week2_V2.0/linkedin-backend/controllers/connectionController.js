const connections = require("../data/connections");
const AppError = require("../utils/customError");

exports.sendRequest = (req, res, next) => {
  const sender = req.user.id;
  const receiver = req.params.userId;

  if (sender === receiver)
    return next(new AppError("Cannot connect to yourself", 400));

  const exists = connections.find(
    (c) =>
      (c.sender === sender && c.receiver === receiver) ||
      (c.sender === receiver && c.receiver === sender)
  );

  if (exists)
    return next(new AppError("Request already exists", 400));

  connections.push({
    id: Date.now().toString(),
    sender,
    receiver,
    status: "pending",
  });

  res.json({ message: "Request sent" });
};

exports.getRequests = (req, res) => {
  const myRequests = connections.filter(
    (c) => c.receiver === req.user.id && c.status === "pending"
  );

  res.json(myRequests);
};

exports.acceptRequest = (req, res, next) => {
  const request = connections.find((c) => c.id === req.params.requestId);

  if (!request) return next(new AppError("Request not found", 404));

  request.status = "accepted";
  res.json({ message: "Accepted" });
};

exports.rejectRequest = (req, res, next) => {
  const request = connections.find((c) => c.id === req.params.requestId);

  if (!request) return next(new AppError("Request not found", 404));

  request.status = "rejected";
  res.json({ message: "Rejected" });
};

exports.getConnections = (req, res) => {
  const myConnections = connections.filter(
    (c) =>
      (c.sender === req.user.id || c.receiver === req.user.id) &&
      c.status === "accepted"
  );

  res.json(myConnections);
};