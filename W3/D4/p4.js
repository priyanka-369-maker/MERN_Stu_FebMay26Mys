// Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >= 70);
console.log(marks);
console.log(passed);
let students = [
    {name:"a", score:75},
    {name:"b",score:56},
    {name:"c",score:70},
    {name:"d",score:82},
    {name:"e",score:51},
    {name:"f",score:68},
    {name:"g",score:49}
];
console.log("",students);
let qualifiedStudents = students.filter(student => student.score >= 70).map(student => student.name); 
console.log("qualifiedStudents:", qualifiedStudents);

