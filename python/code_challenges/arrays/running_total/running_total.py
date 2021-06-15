from typing import List


class Solution:
  def runningSum(self, nums: List[int]) -> List[int]:
      newList = []
      runningTotal = 0
      for number in nums:
        runningTotal += number
        newList.append(runningTotal)
      return newList