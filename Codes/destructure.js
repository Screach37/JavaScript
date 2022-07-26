//destructure - whatever data type is on rhs should be on lhs

// const user = ["Akshat", 3, "Admin"];
// // var name = user[0];
// // var role = user[2];

// var [name, courseCount, role] = user;
// console.log(name);  
// console.log(role);  

const MyUser = {
    name: "Akshat",
    courseCount: 5,
    role: "Admin",
};
//to destructure this object :
var {name, courseCount, role} = MyUser;
console.log(courseCount);