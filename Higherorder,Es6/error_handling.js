// try{
//     console(x); //jaha error aa sakta hain
// }

// catch (e){
//     console.log(e); //to show x is not defined
//     console.log('the error occured');
// }


// try{
//     console.log("there is no error"); //jaha error aa sakta hain
// }

// catch (e){
//     //catch will not work if their is no error in try block

//     console.log(e); //to show x is not defined
//     console.log('the error occured');
// }
// finally{
//     console.log("this will always be executed");
// }





try{
    console.log("there is no error"); //jaha error aa sakta hain
    console.log(x);   // error will come -> x is not defined

    console.log("checking this");     //this will not print ,because pichle line mein error mila tha , wohi se code execute hona band ho jayega
}

catch (e){
    //catch will not work if their is no error in try block

    console.log(e); //to show x is not defined
    console.log('the error occured');
}
finally{
    console.log("this will always be executed");
}


// console(x);
// console.log('the error occured');
// const x = 4/;
// console.log(x);