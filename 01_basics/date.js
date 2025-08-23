//dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//object

const date =new Date(2002, 4,11);//month 0 se start hote hai!
console.log(date.toLocaleDateString());//5/11/2002
const ndate =new Date(2002, 4,11,5,3,9);//time bhi deta hai 
console.log(ndate.toLocaleString());
const n1date =new Date("2025-01-21");//year month k format me
console.log(n1date.toLocaleString());

const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(n1date.getTime());
console.log(Math.floor(Date.now()/1000));

const newDate =new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleDateString('default',{
    weekday : "long"
})








