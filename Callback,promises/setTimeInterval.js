const a = 23;
const b = 12;

 //execute 1 by one first line,second line ......   (This is called Synchronize code)
const c = a+b; //to go buy burger ,next line block  ,if you run for loop then it will be clear

// console.log('ordering burger');

// // for(let i = 0 ; i<500 ;i++){
// //     let n = i*7876878;
// // }

// console.log('burger eaten ')

// const d = 12;

function greet(name ){
    console.log('hello',name);
}

//if you want 2 min bad yeah function call ho 

// console.log('before greet');

// setTimeout(greet,2000,'sourav');

// const timeoutId = setTimeout(()=>{
//     greet('sourav')
// } , 5000)




// clearTimeout(timeoutId)   //no execute after 5 sec

// console.log('this is written after greet');    //pehle yeah print ho gaya ,2 second bad hello world print huya its async nature


//setInterval

const id= setInterval(increaseCount,1000) //after 1 sec ->1 ->after 2 sec-> 2

let count=0;
function increaseCount() {
    count ++;

    const date = new Date().toTimeString();
    console.log(date);
  
    // console.log(count);


// increaseCount()

if(count == 5){
    clearInterval(id)
}
}