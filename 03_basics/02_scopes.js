function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two();
}
//one();

if(true){
    const username ="niranjan"
    if(username === "hitesh"){
        const website = "youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++intresting+++++++++++++++++++++

console.log(addOne(5));//hoisting possibble

function addOne(num){
 return num + 1;
}
//console.log(addOne(5));

//expression
const addTwo = function(num){
    return num +2;
}
addTwo(5) //hoisting not possible in this case