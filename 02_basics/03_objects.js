//singleton->Object made from constructor

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Niranjan",
    "full name":"Hitesh Choudhary",
    [mySym]:"mykey1",
    age:18,
    location:"udupi",
    email:"niranjan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//accessing the object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "niranjan@chatgpt.com"
//Object.freeze(JsUser)//to lock the value we use freeze
JsUser.email = "niranjan@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

