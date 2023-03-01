//destructuring 

 const obj =  {
     name : "sourav" ,
     age : 26
}

const {name,age} = obj;
// console.log(name,age);

//default parameter 

// function greet(name = "Learner"){ //default 
//     console.log('Namaste' + name);
// }

// greet()   //undefined 
// greet("Sourav") //pass the value 


//spread Operartor 

function greet (...args){
    console.log('Hello' ,args);
}

greet("sourav" ,"srv ",228)

const a = [1,2,3]
const b = [a,4,5,6] //this gives me array
const c =[...a,4,5,6] //this give me value inside array a 

console.log(b);
console.log(c);

