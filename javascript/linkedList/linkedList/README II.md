# Singly Linked List
a series of challenges based on singly linked lists

## Challenge

#### Features
- `.append(value)` which adds a new node with the given value to the end of the list
- `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node
- `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node

Write tests to prove the following functionality:
1. Can successfully add a node to the end of the linked list
1. Can successfully add multiple nodes to the end of a linked list
1. Can successfully insert a node before a node located i the middle of a linked list
1. Can successfully insert a node before the first node of a linked list
1. Can successfully insert after a node in the middle of the linked list
1. Can successfully insert a node after the last node of the linked list

## Approach & Efficiency
My teammates and I gave ourselves an hour to whiteboard. I believe the Big O for this approach is 0(n) since the linked list can be of an unknown size. 

## API
- `append(value)` finds the end of a linked list and appends the value to the end position.
- `.insertBefore(value, newVal)` iterates over the linked list in search of a node with the value. If it finds the value, it adds the newVal before it. 
- `.insertAfter(value, newVal)` iterates over the linked list in search of a node with the value. If it finds the value, it adds the newVal after it. 

## Solution
![whiteboard](./assets/LL-insertions.png)
