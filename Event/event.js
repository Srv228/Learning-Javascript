const grandparent =document.getElementById("grandparent"); 
const parent =document.getElementById("parent"); 
const  child =document.getElementById("child ");
// const  container  =document.getElementById("container"); 


child.addEventListener('click' ,() => {
    console.log('child clicked');
});
parent.addEventListener('click' ,() => {
    console.log('parent clicked');
});
grandparent.addEventListener('click' ,() =>  {
    console.log('grandparent clicked');
});






  




// function logMessage(){
//     console.log('Hi this is log');
// }

// const coordinates = document.createElement("p");
// document.body.append(coordinates);
// const logMessage = (event) => {
//     // console.log('Hi this is log');
//     // console.log(event);
//     coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
//     box.style.left=`${event.offsetX}px`;
//     box.style.top=`${event.offsetY}px`;
// }


// logMessage();

// box.addEventListener('click' , logMessage) //click event
//jabbhi  click event trigger hoga logMessage function call hoga apne aap

// box.addEventListener("mousemove" , logMessage);

// container.addEventListener("mousemove" , logMessage);