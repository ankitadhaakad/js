
let a =300//global scope
if(true){
    let a = 10
    const b =20
    console.log("INNER: ",a);
    

}
//console.log(a);//300
//console.log(b);
//console.log(c);
//**********nested loop : child class parent ki property ko access kr pate hai */
function one(){
    const username ="anki"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    //console.log(website);
    two();

    
}
one();

if(true){
    const username ="ankita"
    if(username ==="ankita"){
        const website ="youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);



//**********intresting */
console.log(addone(5));

function addone(num){

    return num + 1
}
//addone(5)

const addtwo = function (num){
    return num + 2
}
console.log(addtwo(5))