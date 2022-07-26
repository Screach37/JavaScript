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
}

//to declare pvt variables we use '#'
//Eg: #courseList = [];
// and to access this we have to use # everytime 
//like in line 10 this.#courseList.push(name) and in line 14 return this.#courseList
//export default User; //exports whole class for use in other files
module.exports = User; //exports whole class for use in other files