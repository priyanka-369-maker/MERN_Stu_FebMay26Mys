//Connection request handler
const emitter = require("./events");

const requests = [];

function sendRequest(sender, receiver) {
  return new Promise((resolve, reject) => {
    if (sender.id === receiver.id)
      return reject("Cannot connect to yourself");

    const exists = requests.find(
      r => r.sender === sender.id && r.receiver === receiver.id
    );

    if (exists) return reject("Request already sent");

    requests.push({
      sender: sender.id,
      receiver: receiver.id,
      status: "pending"
    });

    emitter.emit("connectionRequested");
    resolve();
  });
}

async function acceptRequest(receiverId, senderId) {
  const req = requests.find(
    r => r.sender === senderId && r.receiver === receiverId
  );

  if (!req) throw new Error("Request not found");

  req.status = "accepted";
  emitter.emit("connectionAccepted");
}

module.exports = {
  sendRequest,
  acceptRequest,
  requests
};