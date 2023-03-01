 const box2 = document.getElementById("box-2");
 const divs=document.getElementsByTagName("div");//sare ke sare div mil jate
 const container = document.getElementsByClassName("container");

 //create and appending new HTML
// for(let i =0;i<10;i++){
//      const boxElement = document.createElement("div");
//      boxElement.classList.add("box")

//      container[0].append(boxElement);
// }



//  const box3=document.querySelector("#box-3");
//  const boxMultiples = document.querySelectorAll(".container div"); //container ke ander wala div
// console.log(box1);
// console.log(divs[3]);
// console.log(container);
// console.log(box3);
// console.log(boxMultiples[1]); 


//runtime kisike ander html dalna or ander ke html ko change
box2.innerHTML ="This is box 2 "

//changing html style 

box2.style.borderRadius="50%"  //camelcase
box2.style.backgroundColor="purple" 


//adding a class in Html ->add,remove,toggle

// box2.classList.add("fancy"); 
// box2.classList.remove("box"); 

 //attribute chnage
 
 document.getElementById("myimage").src="https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw "

