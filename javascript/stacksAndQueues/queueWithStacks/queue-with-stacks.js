'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {
  constructor(){
    this.front = new Stack();
    this.rear = new Stack();

  }
  enqueue(value) {
    while (this.front.top) {
      let tempNode = this.front.pop();
      this.rear.push(tempNode);
    }
    this.front.push(value);
    while (this.rear.top) {
      let tempNode = this.rear.pop();
      this.front.push(tempNode);
    }
  }
  dequeue() {
    let frontValue = this.front.pop();
    return frontValue;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  push(value){
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    let node = this.top;
    this.top = node.next;
    node.next = null;
    return node.value;
  }

  peek() { return this.front === null ? 'Exception' : this.front.value; }

  isEmpty() { return this.front === null; }
}

module.exports = { Node, Stack, PseudoQueue};
