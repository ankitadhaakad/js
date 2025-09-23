const myNums =[1,2,3,4,5,6,7,8,9,10];

myNums.filter((num) => {
    return num > 5;
});
console.log(myNums.filter((num) => num > 5));// [6,7,8,9,10]

const fresh =[1,2,3,4,5,6,7,8,9,10];
//const newFresh = fresh.map((num) => num +10)
const newFresh = fresh.map((num) => num *10).map((num)=> num + 1).filter((num)=> num >=40)

console.log(newFresh);// [11,12,13,14,15,16,17,18,19,20]

const array =[1,3,4,5];
 const reduce = array.reduce(function(acc,currvalue){
    console.log(`acc: ${acc} and currvalue: ${currvalue}`);
    
    return acc + currvalue;
 },0);
    console.log(reduce);//13

const array2 =[1,2,3,4,5];
    const reduce2 = array2.reduce((acc,currvalue) => acc + currvalue,0);
        console.log(reduce2);//15

    const shoppingCart =[
        {item: 'phone', price: 699},
        {item: 'laptop', price: 999},
        {item: 'monitor', price: 199},
        {item: 'mouse', price: 25},
        {item: 'keyboard', price: 75},
    ];
    const total = shoppingCart.reduce((acc,item)=> acc + item.price,0);
    console.log(total);//1997
