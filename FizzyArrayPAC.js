/* This function takes a number n as argument, then creates an
 * array with elements {0, 1, ... n-1}                          */


function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i ;
    }
    console.log(resultArr);
}

// Pass the fxn some values to check that it's working

numarray(5);
numarray(1);
