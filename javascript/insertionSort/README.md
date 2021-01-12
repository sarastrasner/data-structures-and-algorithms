# Challenge Summary
Insertion Sort

## Challenge Description
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Pseudocode
```
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
## Trace
Demo Code [8,4,23,42,16,15]
### 1st pass
- i is index 0, j is index 1, temp is 4 (the value at index 1)
- The fn is evaluating the value of temp vs the value at j (8)
- if i is larger, the values are switched, which happens in this case
![one](./one.png)

### 2nd pass
- i is index 1, j is index 2, temp is 23 (the value at index 2)
- The fn is evaluating the value of temp vs the value at j (23)
- if i is larger, the values are switched, which happens in this case
![two](./two.png)

### 3rd pass
- i is index 2, j is index 3, temp is 42 (the value at index 3)
- The fn is evaluating the value of temp vs the value at j (8)
- if i is larger, the values are switched, which happens in this case
![three](./three.png)

### 4th pass
- i is index 3, j is index 4, temp is 16 (the value at index 4)
- The fn is evaluating the value of temp vs the value at j (8)
- if i is larger, the values are switched, which happens in this case. The while loop runs until the values are sorted.
![four](./four.png)

### 5th pass
- i is index 4, j is index 5, temp is 15 (the value at index 5)
- The fn is evaluating the value of temp vs the value at j (8)
- if i is larger, the values are switched, which happens in this case. The while loop runs until the values are sorted.
![five](./five.png)


## Approach & Efficiency
Big O for time is 0(n^2). 

## Solution
![insertionSort solution](./code-challenge-26.png)