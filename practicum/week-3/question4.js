/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function (input) {
    let hasSeen = [];

    for (let i = 0; i < input.length; i++) {
        if (hasSeen.includes(input[i])) {
            return true;
        }

        hasSeen.push(input[i]);
    }

    return false;
};