'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class AnimalShelter {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value){
    if (value !== 'dog' && value !== 'cat'){
      return null;
    }
    while (this.front.top) {
      let newNode = this.front.pop();
      this.rear.push(newNode);
    }
    this.front.push(value);
    while(this.rear.top){
      let newNode = this.rear.pop();
      this.front.push(newNode);
    }
  }

  dequeue(value){
    if (value !== 'dog' && value !== 'cat'){
      return null;
    } else if (this.front === null){
      return 'Exception';
    } else if (value ==='cat' && this.front.value ==='cat'){
      this.front.pop();
    } else if (value ==='dog' && this.front.value ==='dog'){
      this.front.pop();
    }
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

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

  push(item) {
    const node = new Node(item);
    node.next = this.top;
    this.top = node;
  }
}

module.exports = {Node, AnimalShelter, Stack};
