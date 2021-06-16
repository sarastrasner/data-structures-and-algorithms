# How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid j's such that `j != i` and `nums[j] < nums[i]`.

Return the answer in an array.

## Approach
1. Create an empty list,`result`, to return later.
1. Create a copy of the original list `tempNums`
1. Sort the original list
1. Iterate over `tempNums`, which will keep the original order of ine input list
1. Use `.index()` to get the index of an item from the sorted `nums`
1. Push that index into `result`
1. Return `result`

## Efficiency
The nested `index()` inside the for loop make the time efficiency O(N^2)

## Solutions
- [Python Solution](./smaller_numbers.py)
- [JavaScript Solution](../../../javascript/arrays/smallerNumbers/smallerNumbers.js)
