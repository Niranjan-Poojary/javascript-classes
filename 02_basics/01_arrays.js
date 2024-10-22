//array

const myArr = [0,1,2,3,4,5];
const myHeros = ["thor","ironman"];
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);

//Array methods

// myArr.push(6);   //add the value to the array
// myArr.push(7);
// myArr.pop();     //remove the last value of array

// myArr.unshift(9);  //value enter in first
// myArr.shift();

// console.log(myArr.includes(9));//boolean value
// console.log(myArr.indexOf(1));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();//

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

//slice,splice

console.log("A" , myArr);

const myn1=myArr.slice(1,4);//returns the copy of section of array
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,4 );
console.log("C",myArr);
console.log(myn2);
