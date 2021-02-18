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
    let iSum;

    for (let i = 1; i <= n; i++) {
        iSum = 0;
        let x = i;

        while (x != 0) {
            iSum += x % 10;
            x = Math.floor(x / 10);
        }

        if (iSum in map) {
            map[iSum]++;
        }
        else {
            map[iSum = 0];
        }
    }

    let ans = 1;
    let max = 0;

    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            ans = 1;
        }

        else if (map[key] == max) {
            ans++;
        }
    }

    return ans;
};