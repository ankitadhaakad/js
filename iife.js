//Immediately Invoked Function Expressions(IIFE):global scoppe k polution se kai br problem hoti hai to global varibae k decleartion ko htane k liye use kte hai 
(function user(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();


((name)=>
{
console.log(`db connected ${name}`);

})("ankita")
