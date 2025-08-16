const accountId =1234 //not re-declear re-assign block scope
var accountEmail=  "ankita@gmail.com"
let accountPassword ="34521" //block scope
accountCity ="indore"
let accountState;

accountEmail="ak@gmail.com"
accountCity="jaipur"
accountPassword="8901"


/* not use var because its function scope */


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
