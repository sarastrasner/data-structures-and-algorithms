# Merge Sort
Merge Sort follows the rule of Divide and Conquer to sort a given set of numbers/elements, recursively, hence consuming less time.

## Pseudocode
````
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
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



