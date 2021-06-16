import pytest
from code_challenges.arrays.smaller_numbers.smaller_numbers import Solution

t = Solution()

def test_smaller_numbers():
    list = [8,1,2,2,3]
    actual = t.smallerNumbersThanCurrent(nums=list)
    expected = [4,0,1,1,3]
    assert actual == expected


def test_smaller_numbers_two():
    list = [6,5,4,8]
    actual = t.smallerNumbersThanCurrent(nums=list)
    expected = [2,1,0,3]
    assert actual == expected


def test_smaller_numbers_three():
    list = [2,2,2,2]
    actual = t.smallerNumbersThanCurrent(nums=list)
    expected = [0,0,0,0]
    assert actual == expected