'use strict';

//const e = require('express');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  //does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  peek() { return this.top === null ? 'Exception' : this.top.value; }

  push(item) {
    //takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
    // made a new node with our item
    const node = new Node(item);
    //make add it in front of the current top
    node.next = this.top;
    //reassign the top to be my new node
    this.top = node;
  }

  //does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  pop() {
    if (this.top === null){
      return 'Exception';
    } else {
      let tempNode = this.top;
      //identify the current top;
      this.top = tempNode.next;
      //reassign the top to be the next node
      return tempNode.value;
    }
  }

  //that takes no argument, and returns a boolean indicating whether or not the queue is empty.
  isEmpty() { return this.top === null; }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value){
    const newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    if (!this.front) {
      this.front = this.rear;
    }
  }

  // Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
  dequeue(){
    if (this.front === null){
      return 'Exception';
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() { return this.front === null ? 'Exception' : this.front.value; }

  isEmpty() { return this.front === null; }


}

// Should raise exception when called on empty queue

// Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
// Should raise exception when called on empty queue
// Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.


module.exports = { Node: Node, Stack: Stack, Queue:Queue };
