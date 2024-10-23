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
 console.log(loginUserMessage("niranjan"));