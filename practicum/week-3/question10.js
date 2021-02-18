/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function (input) {
    let sorted = input.sort(function (a, b) {
        return a - b;
    });

    // Find the minimum difference
    let minDiff = 999999999;

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] < minDiff) {
            minDiff = sorted[i] - sorted[i - 1];
        }
    }

    // Find all pairs with minimum difference
    let output = [];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] === minDiff) {
            let newPair = [];
            newPair.push(sorted[i - 1]);
            newPair.push(sorted[i]);
            output.push(newPair);
        }
    }

    return output;
};