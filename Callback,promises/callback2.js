
//  Synchronous
// const  orderPizza = (myFunction) => { //myFuction is  referred to callback function
//   const pizza = 'mypizza'
//     myFunction(pizza);//pass to the callbacl funct

// }

// function notifyMeOnSuccess(pizza){
//     console.log('here is my notification for ' , pizza);
// }

// orderPizza(notifyMeOnSuccess)

//Async

// const  orderPizza = (myFunction) => { //myFuction is  referred to callback function

//    //now we are mimic of  real API (order karne se turant to humko pizza milta nahi hain ,kuch  time lagta hain )

//    setTimeout(()=>{
//     const pizza = 'mypizza'
//     myFunction(pizza);//pass to the callbacl funct
//    },2000)



   

// }

// function notifyMeOnSuccess(pizza){
//     console.log('here is my notification for ' , pizza);
// }

// orderPizza(notifyMeOnSuccess)



const  orderPizza = (myFunction) => { //myFuction is  referred to callback function

    //now we are mimic of  real API (order karne se turant to humko pizza milta nahi hain ,kuch  time lagta hain )
 

//    bakedPizza();//time lagega  complete hone ke baad notify karne ke liye use chahiye callback

bakedPizza((pizza)=>{
      myFunction(pizza);
})


}
 
 
 //now orderPizza turant nahi karte pizza bana bhi lete  ,orderPizza internally dusre function call karta hain which is called baked pizza

function bakedPizza(callback){
    
    setTimeout(()=>{
    const pizza = 'piza'
    console.log('baked the pizza ' ,pizza);
    callback(pizza);
    },2000)
   

 
 }
 
 function notifyMeOnSuccess(pizza){
     console.log('here is my notification for ' , pizza);
 }
 
 orderPizza(notifyMeOnSuccess)