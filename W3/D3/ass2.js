function invoice(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {

        let item = items[i];

        if (!item) continue;

        if (item.name === "Wire") {
            break;
        }

        if (
            typeof item.price !== "number" ||
            typeof item.qty !== "number" ||
            item.price <= 0 ||
            item.qty <= 0
        ) {
            continue;
        }

        subtotal += item.price * item.qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return { subtotal, gst, total };
}

console.log(
    invoice(
        0.18,
        { name: "Handbag", price: 500, qty: 2 },
        { name: "Bottle", price: 100, qty: 4 },
        { name: "Wire", price: 100, qty: 1 },
        { name: "choclate", price: 15, qty: 5 }
    )
);