// Default parameters
function Product (a=1,b=1){
    return a*b;
}
console.log("Product of 15 and 4:",Product(15,4));
console.log("Product of 15:",Product(15));

//Rest parameters
function sumOfAll(...numbers){
   console.log(...numbers);
    }
    sumOfAll(1,2,3);
    sumOfAll(10);
    

