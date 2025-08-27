//this : current contest(simple values) ko run krta hai!
const user = {
    username :"ankita",
    price : 999,
    welcomemessage : function(){

        console.log(`${this.username},welcome to website`);
        console.log(this);
        

    }
}
user.welcomemessage()//ankita,welcome to website
user.username ="dhakad"
user.welcomemessage();
console.log(this);//{} browser k ander sare window object hai


function chai(){
    //let username:"sam"
    console.log(this);
    
}
chai()

const one = () =>{
    console.log(this);
    
}
one()//{}

//explicit : use return keyword
const addtwo =(num1,num2)=>{
    return num1 + num2
}
console.log(addtwo(50,50))

//implicit method :return keyword nhi lgana pdta hai
//const three =(num1,num2,num3)=> num1+num2+num3
//const three =(num1,num2,num3)=>  (num1+num2+num3)
const three =(num1,num2,num3)=> ({username:"rakhi"})
console.log(three(100,200,300));






