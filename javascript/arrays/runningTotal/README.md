# Running Sum of 1d Array
Given an array nums. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i]).`
Return the running sum of nums.

## Challenge 
Example 1:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

## Approach & Efficiency
My parner and I worked together on the whiteboard and gave ourselves one hour. We decided to:
- create a new empty array for output 
- find out the midpoint index by dividing the length and rounding up for arrays with an odd length
- All items before the midpoint can stay in place
- All items after the midpoint need to be shifted by to an index of +1 to their original index

## Solution
Array Shift Whiteboard
- [Running Sum JavaScript](./runningtotal.js)
- [Running Sum Python](./runningtotal.py)