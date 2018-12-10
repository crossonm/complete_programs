// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(number1,number2) {
    if (number1 === number2) {
        var output = 2*(number1 + number2)
    } else {var output = number1 + number2
    }
    console.log(output)
}

sumDouble(1,4)
sumDouble(11,11)
