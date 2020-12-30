# Trees

## Challenge
1. Create a Node class that has properties for the value stored in the node, the left child node, and the right child node. 
1. Create a BinaryTree class
1. Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.
1. Create a BinarySearchTree class
1. Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
1. Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
I referenced a few articles from [tutorialspoint.com](https://www.tutorialspoint.com/In-order-traversal-in-Javascript-Tree). Big O is listed next to each method below.

## API
1. `preOrder` performs a pre-order traversal and returns an array of the values, ordered appropriately. Big O for space: O(n);
1. `inOrder` performs an in-order traversal and returns an array of the values, ordered appropriately. Big O for space: O(n);
1. `postOrder` performs a post-order traversal and returns an array of the values, ordered appropriately.Big O for space: O(n);
1. `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree, filling all “child” spots from the top down. Big O for time: O(height); Big O for space: O(1);
1. `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once. Big O for time: O(height); Big O for space: O(1);

# Code Challenge 16: 
Find the Maximum Value in a Binary Tree

## Challenge Description
Write an instance method called `find-maximum-value`. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
We whiteboarded for about 90 minutes and decided to use a depth-first traversal. Big O is O(n).

## Solution
![whiteboard](code-challenge16.png)

# Code Challenge 17: 
Breadth-first Traversal.

## Challenge Description
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
We whiteboarded for about 90 minutes and decided to use a depth-first traversal. Big O is O(n*h).

## Solution
![whiteboard](Breadth-first-Traversal.png)