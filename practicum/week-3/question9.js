/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function (n) {
    let map = {};
    let sum1;
    let x;

    for (let i = 1; i < n + 1; i++) {
        sum1 = 0;
        x = n;
        while (x != 0) {
            sum1 += x % 10;
            x = Math.floor(x / 10);
        }

        if (sum1 in map) {
            map[sum1]++;
        }
        else {
            map[sum1] = 1;
        }
    }

    let size = 0;
    let count = 0;

    for (key in map) {
        if (map[key] > size) {
            size = map[key];
            count = 1;
        }
        else if (map[key] == size) {
            count++;
        }
    }

    return count;
};