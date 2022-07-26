class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo(){
        return {name: this.name, email: this.email}
    }
    enrollInCourse(name){ //setter as it sets value; usually we expect args in setters
        this.courseList.push(name);
    }
    getCourseList(){  //getter as it gets some values; usually dont expect args
        return this.courseList;
    }

    static login(){ //pvt property
        return "You are logged in";
    }
}

class subAdmin extends User{ //inherited class
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am Sub-Admin";
    }
    login(){
        return "Login from SubAdmin";
    }
} 

const Harsh = new subAdmin("Harsh", "h1@xyz.com ");
console.log(Harsh.getAdminInfo);
console.log(Harsh.login());
console.log(Harsh.getInfo());