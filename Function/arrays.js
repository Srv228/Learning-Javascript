const words =['Sourav' , 'Grv' , "Saurabh" ,true];
//forloop

// for(let i =0;i<words.length;i++){
//     console.log("Namaste", words[i]);
// }

//for-in loop

// for(let i in words){
//     console.log("Namaste", words[i]);
// }

// const words=new Array("Eat","Sleep");
// words[1]="Sourav";
// console.log(words);
// console.log(words[1]);//access 
// console.log(words.length);

//push

// words.push('Dey');//add in last
// console.log(words);
// console.log(words.length);
//pop

// words.pop("Dey") //delete last element
// console.log(words);

//sort

// words.sort();
// console.log(words);

// const a= [10,4,23];    //convert to string
// console.log(a.sort()); //10,23,4
//a=12 //not allowed to change(const) , but you change in array 

//Include

// console.log(words.includes('Srv'));

//IndexOf
// console.log(words.indexOf("Saurabh"));

//splice()
// words.splice(0,2)
// words.splice(2,0,"Dey")
// console.log(words);


//for each loop

let a = [10, 4 , 23 , "hi"];

a.forEach((element,index)=>{
   console.log("printing",element, "index is ",index);
})


//sort
a.sort((firstName,secondName) => {
    return firstName-secondName;
})
console.log(a);