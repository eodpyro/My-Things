/*
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
* The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
*/

 let multiplesOfThree = []; /*This is an empty array that we will be adding an unkown amount of indexs to*/
 let multiplesOfFive = [];
 let i = 0;/*This is our counter for the 'for' loop*/
 let n = 0;/*Second counter needed for 2nd for loop*/
 const initialValue = 0;
	 for(;i < 1000; i+=3){
		 multiplesOfThree.push(i);
	 }  /*Here we created a for loop that starts at 0, checkes to see if it's under 1000, prints the 0 to 
arry, then adds 3 to the current number. It is passed through again as the updated 3 and repeats this
process until it is no longer less than 1000*/
	 for(;n < 1000; n+=5){
		 multiplesOfFive.push(n);
	 }

let combinedMultiples = multiplesOfThree.concat(multiplesOfFive); /*Merging the two arrays together*/
	 
combinedMultiples.sort(); /*Putting the numbers in proper order*/

let finalMultiples = combinedMultiples.filter(function(item,index){
	return combinedMultiples.indexOf(item) >= index;
}); /*This removes duplicate numbers from the two arrays merging. Like 15 appearing twice*/

let answer = finalMultiples.reduce(function (accumulator, currentValue) {
		  return accumulator + currentValue;
		}, initialValue);
	 /*This is a little harder to understand, you HAVE to create a function for the reduce method and the
parameters of accumulator and currentValue are passed through. InitialValuse tells the function to start at
index 0 instead of index 1. Accumulator is the current total of the process whereas currentValue is better 
defined as the current index in the array. The parameters are thenpassed through the function and returned 
at the end.*/ 