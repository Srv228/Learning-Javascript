// const a = 5;
// const b = 4;

// const result = addition(a,b);


// console.log(result);

// import { addition, subtract } from "./utility.js";
import { addition as add , subtract } from "./utility.js"; //rename  function 


// import multiply from "./utility.js"; //bydeafault export ho raha hain    
import random_name  from "./utility.js"; 

const a = 5;
const b = 4;

// const result = addition(a,b);
const result = add(a,b);

const ans = subtract(a,b);

// const  x = multiply(a,b);

const  x = random_name(a,b);


console.log(result);
console.log(ans);
console.log(x);