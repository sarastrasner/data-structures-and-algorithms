from typing import List

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        result = []
        tempNums = nums.copy()
        nums.sort()
        for n in tempNums:
            result.append(nums.index(n))
        return result