// = asignment operator 
// == comparison operator (comapre if two values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator // return true if 2 values are not equal
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){
   console.log("That is pi");
}
else{
   console.log("That is not pi");
}

// Strict equality Operator would result in not pi because you are comparing a number to a string 
if(PI === "3.14"){
   console.log("That is pi");
}
else{
   console.log("That is not pi");
}
// inequality operator will basically asks if PI is not equal to 3.14
if(PI != "3.14"){
   console.log("That is not pi");
}
else{
   console.log("That is pi");
}

// Strict inequality sting comparison
if(PI !== "3.14"){
   console.log("That is not pi");
}
else{
   console.log("That is pi");
}