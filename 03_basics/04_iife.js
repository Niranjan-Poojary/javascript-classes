//Immediately Invoked function Expressions(IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//using iife
//To avoid global scope polution we start use iife
// ()()=>iife

(function chai(){
    //named iife
    console.log(`DB connected`);
}) ();//use semicolon to end the function

(function chai(){
    console.log(`DB connected two`);
}) ();

//arrow function
( ()=>{
    console.log(`DB connected three`);
}) ();

( (name)=>{
    console.log(`DB connected three ${name}`);
}) ('niranjan')







