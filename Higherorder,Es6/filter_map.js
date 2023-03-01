// const a = [11,22,31,44,57,68,72,81];
const a = [1,2,3,4,5,6,];




function isEven(num){
    return num%2==0;
   }

   function isOdd(num){
    return num%2!=0;
   }

   //Filter  -> filter out


// const b = a.filter(isEven);

// const b = a.filter((element) => {
//     return element%3==0;

// });
// console.log(b);


//Map  -> modify


function square (num){
    return num*num;
}

function negative(num) {
    return -num;
}

const b = a.map(square); //call square function and to square the number karke b mein push kar de rahe hain
// const c = a.map(negative);
// const c = a.map((num) => -num);
// const c = a.map((num) =>  2*num);
const c = a.map((x) =>  "my number is " +2*x);

//find method  -> to find element

// const found = a.find((element) => element%2==0)    //ek value(pehli value ) -> return 

//most useful cases in javascript object array 


const students = [
    {
        name : "sourav" ,
        roll :   12
    } , {
        name : "anuj"  ,
        roll :  76  
    } ,{
        name : "srv" ,
        roll :  67
    }, {
        name : "raj" ,
        roll : 87
    }
]

//update JSON  through map function 


const grades = students.map ((element) => {
    if(element.roll<50){
        // element.isPassed = false;
        element.isPassed = `you are  ${element.name}`;   //template literals  (ES6)
    }
    else{
        element.isPassed = true ;
    }
    return element;
})

const found  = students.find((element) => {
    return element.roll > 50 ;  //anuj ( pehli value which is > 50 )
});


// console.log(found);

// console.log(b);
// console.log(c);
// console.log(found);

 console.log(grades);