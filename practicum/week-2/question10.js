/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function (n) {
    var max = -1;
    var min = 10;
    var currDigit;

    while (n >= 10) {
        currDigit = n % 10;

        if (currDigit > max) {
            max = currDigit;
        }

        if (currDigit < min) {
            min = currDigit;
        }

        n /= 10;
    }

    if (n > max) {
        max = n;
    }

    if (n < min) {
        min = n;
    }

    return max - min;
};