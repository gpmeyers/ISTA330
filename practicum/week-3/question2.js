
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {

        let max = -999999999;
        let curr = 0;

        for (let i = 0; i < input.length; i++) {
                curr = curr + input[i];
                if (max < curr) {
                        max = curr;
                }

                if (curr < 0) {
                        curr = 0;
                }
        }
        return max;
};
