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
Object.freeze(JsUser)
JsUser.email = "niranjan@microsoft.com"
console.log(JsUser);


