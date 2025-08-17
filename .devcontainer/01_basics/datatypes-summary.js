//data kese memory m or access krte h us base pr 2 category m divide h
// #Primitive (call by value)  
// types:7
//String, boolean, number ,null ,undefined ,symbol ,BigInt

//refrencetype nonprimitive
//array ,objects ,functions

const id =Symbol('123');
const anotherId =Symbol('123');
console.log(id === anotherId);

//arrays
const heros =["saktiman","dogo","dora"];
//object
let myObj ={
    name:'ankita',
    age: 23,

}
//function
const myFunction =function(){
    console.log("hello world");
    
}
myFunction();

console.log(typeof id);
