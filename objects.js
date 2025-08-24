//singleton=>litrels ki trh use krte h to nhi bnta hai =>object.create
//object literals
const mySym =Symbol("key1")
const JsUser = {
    name:"Ankita",
   [ mySym]:"mykey1",
    age:23,
    location:"indore",
    Email:"anki@google.com",
    isLogged: false,
    lastLogin:["monday","saturday"]
}
console.log(JsUser.name);

console.log(JsUser["Email"]);
console.log( JsUser[mySym]);


JsUser.Email="anki@chatgpt.com"
//Object.freeze(JsUser)//micro print nhi hoga

JsUser.Email="anki@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}
JsUser.greeting2 = function(){
    console.log(`hello JS user.${this.name}`);
    
}
console.log(JsUser.greeting()); 
console.log(JsUser.greeting2()); 



