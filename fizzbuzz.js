/* Count to 100. If a number is divisible by 3, replace it with Fizz.
 * If divisible by 5, replace it with Buzz.                           */

  function fizzbuzz() {
    var somenumber = 0
    console.log(somenumber)
    for (i = 0; i < 100; i++){
        somenumber = somenumber + 1;
        if (somenumber % 3 === 0){
            console.log("Fizz")
        }
       else if (somenumber % 5 === 0) {
           console.log("Buzz")
       }
       else console.log(somenumber);
    }
}

fizzbuzz();
