const myObject ={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"

}
//forin
for (const key in myObject) {
   // console.log(myObject[key]);
   console.log(`${key} : ${myObject[key]}`); 
}

const arr =[1,2,3,4,5]
for (const key in arr) {
    console.log(key);
    }
