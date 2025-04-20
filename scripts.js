// string methods = allows you to manipulate and work with text (strings)

let userName = "rika_sucks  ";

// charAt()
userName.charAt(0)
console.log(userName.charAt(0));

// indexOF()
userName.indexOf("o");
console.log(userName.indexOf("s"));

// legenth 

console.log(userName.length)

// trim()
userName = userName.trim();

console.log(userName);

// toUpperCase and toLowerCase

userName = userName.toUpperCase();
console.log(userName);

// repeat
userName = userName.repeat(3);
console.log(userName);

// startwith() and endsWith()

let reuslt = userName.startsWith(" ");
 if(reuslt){
    console.log("You're Username cannot have spaces!");
 }
 else{
    console.log(`You're in, ${userName}`);
 }

 // includes()

 let sm = userName.includes(" ");
 if(sm){
    console.log("You're Username cannot include spaces!");
 }
 else{
    console.log(`You're in, ${userName}`);
 }

 let phoneNumber = "718-967-2311";

 phoneNumber = phoneNumber.replaceAll("-", "");
 console.log(phoneNumber);

 
 // padStart()/ padEnd(); Put this "0" as many necesary times at the start/end until there are 15 charecters
 let numberPhone = "718-967-2311";

 numberPhone = numberPhone.padStart(15, "0");
 console.log(numberPhone);

