//for of

const arr =[1,2,3,4,5,6];
for (const num of arr) {
    console.log(num);
    
    
}

const grreting = "hello ANKITA";
for (const greet of grreting) {
    console.log(`Each chat is :  ${greet}`);
    
    
}


//MAP
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"America")
map.set('FR',"Franch")
map.set('IN',"INDIA")//vaps print nhi hoga unique rehta hai

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value);
}


//for (const [key,value] of myObject) {
    
      //console.log(key, ':-' , value);//myobject is not iterable : error
//}

