// string splicing = creating a substring from a portion of another string
// I don't see how useful this is..
const fullName = "Eugene Cruz";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(7, 11);
console.log(lastName)

console.log(firstName);

let nameFirst = fullName.slice(0,fullName.indexOf(" "));
console.log(nameFirst);

// Example 

const email = "example@example.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);

