// Combining multiple promise-based steps with async/await
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(501);
        },500);
    });
        }

function getOrderDeatails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"Laptop",
                quantity:2
            });
        },700);
    });
}
async function showOrderSummary(){
    const orderId = await getOrderId();
    console.log("order id:",orderId);
    const getOrderDetails = await getOrderDeatails(orderId);
    console.log("Product:",getOrderDetails.product);
    console.log("Quantity:",getOrderDetails.quatity);
}
showOrderSummary();
      