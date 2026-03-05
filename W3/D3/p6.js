//Nested object and method
const student = {
    firstname: "Priya",
    lastname: "shivaram",
    scores:{
        math: 80,
        science:83
    },
    hobbies:["reding","singing"],
    fullname: function(){
        return this.firstname + " "+this.lastname;
    },
    greet(){
        console.log("Hi, ", this.fullname());
    }
};
    console.log(student.fullname());
    student.greet();
