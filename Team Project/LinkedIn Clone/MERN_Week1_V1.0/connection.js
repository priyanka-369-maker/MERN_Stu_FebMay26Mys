//Connection request handler
const emitter = require("./events");

let requests = [];

function sendRequest(sender, receiver) {
  return Promise.resolve()
    .then(() => {
      if (!receiver) throw new Error("User not found");
      if (sender.id === receiver.id) throw new Error("Cannot connect yourself");
      if (sender.connections.includes(receiver.id)) throw new Error("Already connected");
    })
    .then(() => {
      const exists = requests.find(
        r => r.sender === sender.id && r.receiver === receiver.id && r.status === "pending"
      );
      if (exists) throw new Error("Request already sent");
    })
    .then(() => {
      requests.push({
        sender: sender.id,
        receiver: receiver.id,
        status: "pending",
        timestamp: new Date()
      });
      emitter.emit("connectionRequested");
    });
}

async function acceptRequest(receiver, senderId) {
  try {
    const req = requests.find(
      r => r.sender === senderId && r.receiver === receiver.id && r.status === "pending"
    );

    if (!req) throw new Error("Request not found");

    req.status = "accepted";

    receiver.connections.push(senderId);

    const allUsers = require("./user").getAllUsers();
    const sender = allUsers.find(u => u.id === senderId);

    if (sender) sender.connections.push(receiver.id);

    emitter.emit("connectionAccepted");
  } catch (err) {
    emitter.emit("operationFailed", err.message);
  }
}

async function rejectRequest(receiver, senderId) {
  try {
    const req = requests.find(
      r => r.sender === senderId && r.receiver === receiver.id && r.status === "pending"
    );

    if (!req) throw new Error("Request not found");

    req.status = "rejected";

    emitter.emit("connectionRejected");
  } catch (err) {
    emitter.emit("operationFailed", err.message);
  }
}

function getRequests(userId) {
  return requests.filter(r => r.receiver === userId && r.status === "pending");
}

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getRequests,
  requests
};