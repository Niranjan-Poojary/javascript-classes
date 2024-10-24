// const user={
//     username:"hitesh",
//     price:999,

//     welcomeMessage:function(){
//        console.log(`${this.username}, welcome to website`)
//       // console.log(this);//showing current context
//     }

// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);//showing empty {}

//In the browser object is window object

// function chai(){
//     let username = "niranjan"
//     console.log(this.username);
// }
// chai()

//arrow function
const chai = ()=>{
    let username = "niranjan"
    console.log(this.username);
}
chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// const addTwo = (num1,num2)=>num1 + num2
// console.log(addTwo(3,4));


// const addTwo = (num1,num2)=>(num1 + num2)
// console.log(addTwo(3,4));

const addTwo = (num1,num2)=>({username:"niranjan"})
console.log(addTwo(3,4));