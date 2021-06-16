# How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid j's such that `j != i` and `nums[j] < nums[i]`.

Return the answer in an array.

## Approach
1. Use `.sort()` to sort the array
1. Use `.indexOf()` to returns the first index at which a given element can be found in the array.
1. Wrap `.indexOf()` in a `.map()` to return an array of the results of `.indexOf()`

## Efficiency
The nested `indexOf()` inside the `sort()` make the time efficiency O(N^2)

## Solutions
- [JavaScript Solution](./smallerNumbers.js)
- [Python Solution](../../../python/code_challenges/arrays/smaller_numbers/smaller_numbers.py)