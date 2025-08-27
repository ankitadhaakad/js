function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    console.log("A");
    
}
sayMyName()
function addtwoNumber(no1,no2){
    console.log(no1+no2);
}
const result= addtwoNumber(33,44)
console.log("result:",result);

function addNumber(no3,no4){
  // let r2=no3+no4
  // return r2//eske bad kuch bhi likho print nhi hoga
    return no3 +no4
}
const r3 =addNumber(21,34)
console.log(("result:",r3));

function loginUser(username="sam"){
    if(username===undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just login`
}
//console.log(loginUser("ankita"))
console.log(loginUser())

function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(200,400,500,20000));//...restopretor or spread opretor


const user ={
    name:"ankita",
    price:455
}
function Handle(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
  
    
}
Handle(user)

const array =[200,499,677]
function returnNew(getArray){
    return getArray[1]
}
console.log(returnNew(array));
