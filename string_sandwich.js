/* take two strings in. split one and stick the other one in the middle. */

function stringsandwich(string1, string2) {
var string1_length = string1.length //get the length of the first string
var string1_half = string1_length/2 //get the halfway point of the first string
var top_bread = string1.slice(0,string1_half) //get the first half of the first string as top_bread
var bottom_bread = string1.slice(string1_half, string1_length) //get the second half as bottom bread
console.log(top_bread + string2 + bottom_bread) //spit out the sandwich
}

stringsandwich("giraffe", "turkey")

