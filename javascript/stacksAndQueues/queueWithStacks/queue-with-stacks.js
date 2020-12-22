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
    this.front.pop;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

}

module.exports = { Node, Stack, PseudoQueue};
