const score =400
const play =new Number(100);
console.log(play);//[number :100]
console.log(score);400
console.log(play.toString().length);//3
console.log(play.toFixed(2));//100.00

const other = 23.67899
console.log(other.toPrecision(3));//23.7

const zeros=10000000000
console.log(zeros.toLocaleString('en-IN'));

//++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-12));//- ko plus krega pr plus value - nhi hoti
console.log(Math.round(4.6));//5(4.5 se upr ko 5 m change kr dega)
console.log(Math.ceil(4.2));//5(upper value 4 se thoda bhi jyada ho to 5 krega)
console.log(Math.floor(4.9));//4(lower age 4 ki range m h to 4 hi rkhega)
console.log(Math.sqrt(49));
console.log(Math.min(3,5,7,1,23,16,65,35,80));
console.log(Math.max(3,5,7,1,23,16,65,35,80));
console.log(Math.random());//0-1 ke bich value aati hai
console.log(Math.floor(Math.random()*10)+1);//to avoid 0.04 ase values

const min =10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);













