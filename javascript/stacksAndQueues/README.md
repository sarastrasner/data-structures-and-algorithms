# Stacks and Queues
Implementation of Stack and Queue methods.

## Challenge
1. Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.
1. Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created.
1. Define a method called `push` which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
1. Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value. Should raise exception when called on empty stack
1. Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Should raise exception when called on empty stack
1. Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the stack is empty.
1. Create a `Queue` class that has a `front` property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
1. Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
1. Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value. Should raise exception when called on empty queue
1. Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Should raise exception when called on empty queue
1. Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
I tried to write dry methods using the Single-responsibility principle. The Big O for all of the methods is O(1), since I'm not iterating over the entire stack/queue, but instead performoning one or more single operations.

## API
- Stack
  - `push` which takes any value as an argument and adds a new node with that value to the top of the stack.
  - `pop` does not take any argument, removes the node from the top of the stack, and returns the node’s value. Raises exception when called on empty stack.
  - `peek` does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Raises exception when called on empty stack.
  - `isEmpty` takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Queue
  - `enqueue` takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  - `dequeue` does not take any argument, removes the node from the front of the queue, and returns the node’s value. Raises an exception when called on empty queue
  - `peek` does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Raises an exception when called on empty queue
  - `isEmpty` that takes no argument, and returns a boolean indicating whether or not the queue is empty.
