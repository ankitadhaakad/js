const array =[0,1,2,3,4,5];
const myheros=["sak","hero"]

const arr2=new Array(1,2,3,4);
console.log(array[3]);

//array methods
array.push(6);
array.push(7);
array.pop();

array.unshift(9)//start m 9 add kr dega
array.shift()
console.log(array.includes(9));//false
console.log(array.indexOf(3));

const newArr=array.join();


console.log(array);
console.log(typeof newArr);

//slice,splice=>
console.log("a",array);
const mya1=array.slice(1, 3);//[1,2]
console.log(mya1);
console.log("b",array);
const mya2=array.splice(1, 3);//[1,2,3]
console.log("c",array);

console.log(mya2);










