// for loop = will repeat code for a limited amount of time 
// I = index(used for counter) declares how many times the loop will run(3 times) i ++ everytime the loop is run add one to the counter but stop when it gets to 3 
/*
for(let i = 10; i > 0; i-=2){
   console.log(i);
}

console.log("Happy new year!");
*/

// Allows you to skip an iteration 
for(let i = 1; i <= 20; i++){
   if(i == 13){
      continue;
   }
   else{
      console.log(i);
   }
   console.log(i);
}

for(let e = 1; e <= 20; e++){
   if(e == 13){
      break;
      // exits the loop entirely
   }
   else{
      console.log(e);
   }
   console.log(e);
}
