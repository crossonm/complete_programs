// Given two temperatures, return true if one is less than 0 and the other is
// greater than 100.
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false 

function icyHot(temp1,temp2) {
    if (temp1 < 0 && temp2 > 100){
        console.log("true")
    } else if (temp1 > 100 && temp2 < 0) {
        console.log("true")
    }
    else {console.log("false")}
}

icyHot(3,6)
icyHot(-2,88)
icyHot(101, 132)
icyHot(-1,109)