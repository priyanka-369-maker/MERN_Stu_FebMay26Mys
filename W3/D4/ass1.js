// 1 Initial queue with at least 5 tickets
let tickets = [
  
  { id: "111", priority: "MEDIUM", resolved: true },
  { id: "222", priority: "LOW", resolved: false },
  { id: "333", priority: "HIGH", resolved: false },
  { id: "444", priority: "MEDIUM", resolved: true },
  { id: "555", priority: "HIGH", resolved: false }
];
// 2 Add urgent ticket to the front
tickets.unshift({ id: "111", priority: "HIGH", resolved: false });

// 3 Add two normal tickets to the end
tickets.push(
  { id: "666", priority: "LOW", resolved: false },
  { id: "777", priority: "MEDIUM", resolved: true }
);

// 4 Remove first ticket to process
let currentTicket = tickets.shift();

// 5 Remove last ticket (duplicate)
let droppedTicket = tickets.pop();

// 6 Build pending array (only unresolved tickets)
let pending = tickets.filter(ticket => ticket.resolved === false);

// 7 Build pendingIds array
let pendingIds = pending.map(ticket => ticket.id);

// 8 Print results
console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);