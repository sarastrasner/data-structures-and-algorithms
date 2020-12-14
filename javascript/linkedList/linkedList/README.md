# Singly Linked List
a series of challenges based on singly linked lists

## Challenge

#### Features
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- Define a method called `insert` which takes any value as an argument and adds a new node with that value to the `head` of the list with an O(1) Time performance.
- Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
`"{ a } -> { b } -> { c } -> NULL"`

Write tests to prove the following functionality:
1. Can successfully instantiate an empty linked list
1. Can properly insert into the linked list
1. The head property will properly point to the first node in the linked list
1. Can properly insert multiple nodes into the linked list
1. Will return true when finding a value within the linked list that exists
1. Will return false when searching for a value in the linked list that does not exist
1. Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency
I did test-driven development, so I wrote all my tests before writing code. All tests are passing. I believe the Big O for this approach is 0(n) since the linked list can be of an unknown size. 

## API
- `isEmpty()` checks whether or not a linked list is empty and returns true for an empty linked list and false for a linked list with values.
- `insert(value)` inserts a node at the beginning of a given linked list.
- `append(value)` adds a value to the end of a linked list.
- `includes(val)` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
- `toString()` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"