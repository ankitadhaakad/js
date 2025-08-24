// Using constructor
//const tinder = new Object();
const tinder ={};
 tinder.id ="123abc"
tinder.name ="semi"
tinder.isLoggedIn =false
console.log(tinder);   // {}

const regular={
    email:"some@gmail.com",
    name:{
        username:{
            first :"ankita",
            last: "dhakad"
        }
    }
}
console.log(regular);

console.log(regular.name);
console.log(regular.name.username);

const object1 ={1:"a", 2: "b"}
const object2 ={3: "a", 4:"b"}

//const obj3 = Object.assign({},object1,object2);//{}h target or baki objects h sourse
const obj3={...object1,...object2}
console.log(obj3);

const users =[
    {
        id:1,
        email:"an@gmail.com"
    },
    {

    },
]
users[1].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));


const course ={
    name:"js in hindi",
    price:"999",
    teacher:"ankita"
}
const {teacher:master}=course
console.log(master);//ankita










