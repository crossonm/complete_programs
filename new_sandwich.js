/* take two strings in. find out which is longer. split that one and stick the other one 
in the middle. */


/* determine which of the two words is the longer. set first word as default "longest
in the case that both are the same length */

function longstringsandwich(string1, string2) {
    if (string1.length > string2.length) {
        var longer_word = string1
        var shorter_word = string2
    } else if (string2.length > string1.length) {
        var longer_word = string2
        var shorter_word = string1
    } else if (string1.length = string2.length){
        var longer_word = string1
        var shorter_word = string2
    }
    

    var longer_word_length = longer_word.length //get the length of the longer string
    var longer_word_half = longer_word_length/2 //get the halfway point of the longer string
    var top_bread = longer_word.slice(0,longer_word_half) //get the first half of the longer string as top_bread
    var bottom_bread = longer_word.slice(longer_word_half, longer_word_length) //get the second half as bottom bread
    console.log(top_bread + shorter_word + bottom_bread) //spit out the sandwich
    }
    
    longstringsandwich("supercalifragilisticexpialidocious", "turkey")
    
    