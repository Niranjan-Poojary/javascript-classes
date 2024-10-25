//for of

// ["", "", ""]
//[{}, {}, {}]

const arr= [1, 2, 3, 4, 5]

//for of loop using in arr
// for (const num of arr) {
//     console.log(num);
// }

// for of loop using in string
const greetings ="Hello world!";
for (const greet of greetings) {
   //console.log(`Each char is ${greet}`) 
}

//Maps

const map = new Map()
map.set('IN',"India");
map.set('USA', "United states of America");
map.set('FRA', "France");

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}


const myObject = {
    'game1': 'NFS',
    'game2': 'pubg'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }