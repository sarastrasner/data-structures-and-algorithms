import pytest
from code_challenges.arrays.array_shuffle.array_shuffle import Solution

my_function = Solution()

def test_running_sum():
    nums = [2,5,1,3,4,7]
    n = 3
    actual = my_function.shuffle(nums,n)
    expected = [2,3,5,4,1,7]
    assert actual == expected


def test_running_sum_two():
    nums = [1,2,3,4,4,3,2,1]
    n = 4
    actual = my_function.shuffle(nums, n)
    expected = [1,4,2,3,3,2,4,1]
    assert actual == expected
