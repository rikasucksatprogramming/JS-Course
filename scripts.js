// functions = a seclection of resusable code 
            // Declare code once, use it whenever you want.
            // Call the function to execute the code

/*function happyBirthday(username, age){
   console.log("Happy birthday to you");
   console.log("Happy birthday to you");
   console.log(`Happy birthday dear ${username}!`);
   console.log(`You are ${age} years old!`);
}

happyBirthday("Ricky", 15);
happyBirthday("Spongbob", 30);
happyBirthday("Patrick", 37);
*/
function add(x , y){
   let result = x +y;
   return result;

}

function sub(x,y){
   return x -y 
}
function multi(x,y){
   return x*y;
}
function divide(x,y){
   return x / y;
}
let answer = divide(2,3);
console.log(answer);

function isEven(number){
   if(number % 2 === 0){
      return true; 
   }
   else{
      return false;
   }
}

function isvalidEmail(email){
   if(email.includes("@")){
      return true;
}
   else{
      return false;
   }
}
console.log(isvalidEmail("r.mayama"))