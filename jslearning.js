//Sorting numbers 
// let numbers = [3,12,14,2];
// let sortednumbers = numbers.sort((a, b)=> a - b);
// console.log(sortednumbers);


//Creating  sorted copy
// const originalNumbers = [40, 100, 1, 5];
// const sortedNumbers = originalNumbers.toSorted((a, b) => a - b);
// console.log(originalNumbers); 
// console.log(sortedNumbers); 

//Using forEach() function 
//     var fruits = ["apple", "banana", "orange"];

//     fruits.forEach(function(fruit){
//         fruit+= " of Ngenzi";
//         fruit= fruit.toUpperCase();
//         console.log(fruit);
//     });

//  //Using forEach()with arrow operator function
//     fruits.forEach(fruit => {
//     fruit+= " of Ngenzi";
//     fruit = fruit.toUpperCase();
//     console.log(fruit);
//  });

 //forEach() using all three parameters
 const scores = [45, 60, 55, 90];

 scores.forEach(function(score, index, allScores){
   if(index < allScores.length - 1){
    console.log(`${score} followed by ${allScores[index+1]}`);
   }
   else{
    console.log(`${score} not follwed`);
   }
 });


 //Codewars challennge
 function modifyMultiply (str,loc,num) {
  str.split(" ");
  for(i=1; i<=num; i++){
    console.log(str[i]);
  }
} 