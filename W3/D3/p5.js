// Basics of objects
const person = {
    name: "Rahul",
    age: 30,
    isStudent: false
};

console.log("person", person);
console.log("Name: ", person.name);
console.log("age: ", person["age"]);

// Add a new property
person.city = "Mysore";
console.log("Person", person);

// Modify
person.age = 31;

// Delete
delete person.isStudent;
console.log("delete", person);

// Object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;

console.log(car);