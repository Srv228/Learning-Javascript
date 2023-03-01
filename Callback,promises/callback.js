//callback function 

// const  orderPizza = () => {

//     setTimeout(() =>{
//         const pizza = 'margarita' ;
//         return pizza;
//     },2000)

// }

// const pizza = orderPizza();
// console.log(pizza);
  
//output : undefined 

// const  orderPizza = (myFunction) => {

//     setTimeout(() =>{
//         const pizza = 'margarita' ;
//         myFunction(pizza);
//         // return pizza;
//     },2000)

// }

// function notifyMeOnSuccess(pizza){
//     console.log('here is my notification for ' , pizza);
// }

// // orderPizza((pizza) => {
// //    console.log('Here is my' , pizza);
// // });
// // console.log(pizza);

// orderPizza(notifyMeOnSuccess)

// console.log('rest');
// console.log("wait");



//callback hell : 


const  orderPizza = (myFunction) => {

    getCheese((cheese) =>{
        makeDough(cheese , (dough)=>{
              bakePizza(dough,(pizza) =>{
                myFunction(pizza)

              })
        })

    })

    const pizza = 'mypizza'
    myFunction(pizza);

}

function getCheese(next){ //next is the callback function
         setTimeout(() =>{ 
            const cheese = 'chiz';
            console.log(`Sending the ${cheese}`);
            next(cheese)
             
         },2000);
}

function makeDough(cheese ,next){
    setTimeout(() =>{ 
        const dough = cheese + 'bread';
        console.log(`Sending the ${dough}`);
       next(dough);
         
     },2000);

}

function bakePizza(dough ,next){
    setTimeout(() =>{ 
        const pizza= dough +  'barbqcue';
        console.log(`Sending the ${pizza}`);
        next(pizza)
         
     },2000);

}

function notifyMeOnSuccess(pizza){
    console.log('here is my notification for ' , pizza);
}

// orderPizza((pizza) => {
//    console.log('Here is my' , pizza);
// });
// console.log(pizza);

orderPizza(notifyMeOnSuccess)

console.log('rest');
console.log("wait");