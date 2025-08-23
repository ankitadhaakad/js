const name="ankita"
const repo =11

//console.log(name+repo+"value");
console.log(`my name is ${name} and my repo is ${repo}`);

const newGame='hyemilii';
console.log(newGame);

const gameName =new String('cricket-game')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));

const newString =gameName.substring(0,9)//last value include nhi ho rhi h jese index 0 se 8 tk 
console.log(newString);

const anotherString =gameName.slice(-9,8)//negative le skte hai
console.log(anotherString);

const newStringOne= "    ankita   ";
console.log(newStringOne);
console.log(newStringOne.trim());//space remove karta hai

const url="https://ankita.com/ankita%20dhakad"
console.log(url.replace('%20','_'))
console.log(url.includes('ankita'));
console.log(gameName.split('-'));















