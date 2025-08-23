const heros =["prit","geet","reet"]
const dc =["chor","moor","soor"]
heros.push(dc);
// console.log(heros);
// console.log(heros[3][1]);

const all=[...heros,...dc]//spread opretor
console.log(all);

const newarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real =newarray.flat(Infinity);
console.log(real);

 console.log(Array.isArray('ankita'));
 
 console.log(Array.from('ankita'));
 
 console.log(Array.from({name:'ankita'}));//[]output

 let score1=100
 let score2=700
  let score3=300
  console.log(Array.of(score1,score2,score3));
  








