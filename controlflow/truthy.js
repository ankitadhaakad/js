const useremail = []//"anku@dhakad.ai";
 if(useremail){
    console.log("got it");
    
 }else{
    console.log("don't");
    
 }

 //falsy value : false , 0,-0,BigInt,"",null,undefined,NaN
//truthy value : "0", 'false', " ", [],{},function(){}
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??) : null ,undefine

let val1;
//val1 = 5 ?? 10 output:5
val1 = null ?? 10
console.log(val1);//10

// Terniary Operator : condition ? true : false

const iceTea = 100
iceTea <=80 ? console.log("less than 80") : console.log("grater than 80");

