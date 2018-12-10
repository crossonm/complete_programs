
/* Count to 100. If a number is divisible by 3, replace it with Fizz.
 * If divisible by 5, replace it with Buzz. If factorable by 3 AND 5,
 * replace it with Fizzbuzz                                             */

  
  
  
  function fizzbuzz() {
    var somenumber = 0
    console.log(somenumber)
    for (i = 0; i < 100; i++){
        somenumber = somenumber + 1;
        if ((somenumber % 3 === 0) && (somenumber % 5 === 0 )){
            console.log("Fizzbuzz")
        }
       else if (somenumber % 3 === 0) {
        console.log("Fizz")
       }
       else if (somenumber % 5 === 0) {
           console.log("Buzz")
       }
       else console.log(somenumber)
       }
       
       console.log(somenumber);
    }


fizzbuzz();
