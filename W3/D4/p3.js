//Array map
let numArray=[1,2,3,4];
let squareArray = numArray.map(function(num){
    return num * num;
});

console.log(squareArray);

let prices = [100,200,300,400];
let priceWithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax",prices);
console.log("price with tax: ", priceWithGST);

//using map to extract files
let users = [
    {name:"arjun", age:21},
    {name:"krish",age:28}
];
let names = users.map(user => user.name);
console.log("",names);
