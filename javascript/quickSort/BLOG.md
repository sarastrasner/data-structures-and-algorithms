# Merge Sort
Merge Sort follows the rule of Divide and Conquer to sort a given set of numbers/elements, recursively, hence consuming less time.

## Pseudocode
````
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
````
## Trace
Sample Array: [8,4,23,42,16,15]

### Pass 1:
- left: 8
- right: 4
- i: 0
- j: 0
- resultArray: 4

### Pass 2:
- left: 4,8
- right: 23
- i: 0
- j: 0
- resultArray: 4
- resultArray: 4,8

### Pass 3:
- left: 42
- right: 16
- i: 0
- j: 0
- resultArray: 16

### Pass 4:
- left: 16,42
- right: 15
- i: 0
- j: 0
- resultArray: 15

### Pass 5:
- left: 4,8,23
- right: 15,16,42
- i: 0
- j: 0
- resultArray: 4
- resultArray: 4,8
- resultArray: 4,8,15
- resultArray: 4,8,15,16
- resultArray: 4,8,15,16,23



