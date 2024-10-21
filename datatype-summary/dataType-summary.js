//Primitive

// 7 types : string , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue=100.3;

const isLoggedIn = false
const outsideTemp=null;

const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);//false

const bigNumber = 3456897451236542n


//Reference Type(Non primitive)

//Array, objects, functions

const heros = ["shaktiman","nagraj","doga"];//array
let myObj ={
    name:"niranjan",
    age:22,
}//object

const myFunction = function(){
    console.log("Hello world");
}