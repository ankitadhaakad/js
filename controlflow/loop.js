//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 is best number")
    }
    console.log(element);
}

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
  //  console.log(`inner loop value: ${j}`);
    console.log(i +'*'+ j + ' = ' + i*j);
    
    
    }
    
}

let myArr =["flash" ,"batman","super"]
console.log(myArr.length);


for (let i = 0; i <myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
    
}

//break and continue

for (let index = 1; index < 20; index++) {
    if(index ==5){
        console.log(`detected 5`);
        //break;
        continue;
        
    }
    console.log(`Value of i is ${index}`);

    
}

