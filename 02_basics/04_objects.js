//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"niranjan",
            lastname:"poojary"
        }
    }
}
//value accessing
//console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)

//fetching data from database
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check property is there or not

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

//destructuring
const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//JSON
// {
//     name:"niranjan",
//     coursename:"js in hindi",
//     price:"free"
// }
