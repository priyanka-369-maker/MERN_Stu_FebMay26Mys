const wallet = {
    owner: "Priya",
    balance: 0,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },

    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return;
        }

        if (amount <= this.balance) {
            this.balance -= amount;

            this.lastTransaction = {
                type: "WITHDRAWAL",   
                amount: amount,
                balanceAfter: this.balance
            };
        }
    }
};
wallet.owner = "Priya";

wallet.deposit(500);
console.log("Balance after deposit:", wallet.balance);

wallet.withdraw(200);
console.log("Balance after withdrawal:", wallet.balance);

console.log("Last Transaction:", wallet.lastTransaction);