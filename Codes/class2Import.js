//import User from "./Class.js";

const User = require("./Class.js").default; //we get acces to User class from Class.js file
const Akshat = new User("Akshat", "abc@xyz.com");
console.log(Akshat.getInfo());
Akshat.enrollInCourse("ReactJS")
Akshat.enrollInCourse("MongoDB")

console.log(Akshat.getCourseList());
var courses = Akshat.getCourseList();
courses.forEach(c => console.log(c));