 function sayMyName(){
    console.log("niranjan");
 }
 sayMyName();

//  function addTwoNumber(number1,number2){
//     console.log(number1+number2);
//  }
//  addTwoNumber(2,3);

 function addTwoNumber(number1,number2){
    // let result = number1 + number2;
    // return result;
    return number1+number2
 }
 const result=addTwoNumber(2,3);
 //console.log("Result:", result);


 function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`
 }
 //console.log(loginUserMessage("niranjan"));


 function calculateCartPrice(...num1){
     return num1;
 }
 //console.log(calculateCartPrice(200,300,400));

 const user = {
   username:"hitesh",
   price:199
 }
 function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }
//handleObject(user)

//direct pass the object
handleObject({
   username:"sam",
   price:399
})

//pass the array
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]));
