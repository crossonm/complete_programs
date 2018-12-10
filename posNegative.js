// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are
// negative.
// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function fMess(number1,number2)  {
    if (number1 < 0  && number2 < 0) {
        console.log("true")
    } else if (number1 >= 0 && number2 >= 0) {
        console.log("true")
    } else {console.log("false")}
}

fMess(6,-3)