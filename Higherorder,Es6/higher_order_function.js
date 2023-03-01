const a = [1,2,3,-4,5,-6];


// function filterNumbers(){
//     const b = [];

//     for(let i = 0;i<a.length;i++){
//         if(a[i]%2==0){
//             b.push(a[i]);
//         }
//     }
//     return b ;
// }

function filterNumbers(conditionFunction){ //aab filter function argument except kar raha hain which is another function(conditionFunction) 
    const b = [];

    for(let i = 0;i<a.length;i++){
        if(conditionFunction(a[i])){
            b.push(a[i]);
        }
    }
    return b ;
}

  function isEven(num){
    return num%2==0;
   }
   
  function isOdd(num){
    return num%2!=0;
   }




//bar bar pura ka pura function copy karna padega , code to same rehta hain , kuch kuch logic change ho raha hain

//To avoid that function ke andar function pass kar sakte hain 


// function filterNumbersPositive(){
//     const b = [];

//     for(let i = 0;i<a.length;i++){
//         if(a[i]>0){
//             b.push(a[i]);
//         }
//     }
//     return b ;
// }

// const evenNumbers = filterNumbers();
// const evenNumbers = filterNumbers(isEven);
// const evenNumbers = filterNumbers(isOdd);
const evenNumbers = filterNumbers(() => {
    return true;
});
console.log(evenNumbers);

// const PosNumber = filterNumbersPositive();
// console.log(PosNumber);


