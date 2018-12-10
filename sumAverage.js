/* Write a JavaScript program that sums all elements
 in array. Once you have the sum, find the average. */

 function addArrayElements(myArray) {
   var myArrayLength = myArray.length  //get number of elements in the array
     var sum = 0 // initialize value of sum

   for (i=0; i < myArrayLength; i++) {
       sum = sum + myArray[i]
   }
console.log(sum+" is the total")
console.log(sum/myArrayLength+" is the average.")

 }

 myArray = [3,2,5,1]
 addArrayElements(myArray)
