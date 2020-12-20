'use strict';

const Node = require('./node');

class LinkedList {
  constructor(value) {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  // Add a Node to the front of a linked list
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      node.next = this.head;
    }

    this.head = node;
  }

  // Add a Node to the end of a linked list
  append(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value);
  }

  // Search for a value within the list.
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      // End of the list
      if (currentNode.next === null) {
        return false;
      }

      currentNode = currentNode.next;
    }
  }

  // Return a String representation of the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    let runningValue = "";
    let currentNode = this.head;
    while (currentNode) {
      runningValue += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }

    return `${runningValue}NULL`;

  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.value === value) {
        currentNode = currentNode.next;
        return;
      }

      const newNode = new Node(newValue);
      newNode.next = currentNode.next;

      currentNode.next = newNode;
      break;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value !== value) {
        current = current.next;
        return;
      }

      let newNode = new Node(newValue);
      newNode.next = current.next;

      current.next = newNode;
      break;
    }
  }

  kthFromEnd(k) {
    if (k < 0) {
      return 'Exception';
    } else {
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
        index = index + 1;
        currentNode = currentNode.next;
      }
      if (index < k) {
        return 'Exception';
      }
      let countdown = index - k - 1;
      currentNode = this.head;
      for (let i = 0; i < countdown; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }
}

// Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

//list1: head -> [1] -> [3] -> [2] -> X
//list2: head -> [5] -> [9] -> [4] -> X
//output: head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X

//list1: head -> [1] -> [3] -> X
//list2: head -> [5] -> [9] -> [4] -> X
//output: head -> [1] -> [5] -> [3] -> [9] -> [4] -> X

function zipLists(list1, list2) {
  // This is list1: { apple } -> { banana } -> NULL
  // This is list2: { peach } -> { pear } -> NULL
  // WANT:  { apple } -> { peach } -> { banana } -> { pear } -> NULL'

  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  currentNode1.next = currentNode2;
  //This is list1: { apple } -> { peach } -> { pear } -> NULL
  currentNode1 = currentNode1.next;
  //This is currentNode1 & currentNode2: peach
  //This is currentNode1.next: pear

  //console.log(`This is currentNode2: ${currentNode2.value}`);

  currentNode1.next = currentNode2;

  //WANT:  { apple } -> { peach } -> { banana } -> { pear } -> NULL'

  // let currentNode1 = list1.head;

  // let currentNode2 = list2.head;
  // let magicNumber = 1;
  // while(currentNode1){
  //   currentNode1 = currentNode1.next;
  //   magicNumber ++;
  // } if (magicNumber % 2 === 0){
  //   currentNode1.next = currentNode2;
  //   currentNode2.next = currentNode2;
  // }
  // console.log(`This is list1: ${list1}`);
  // console.log(`This is list2: ${list2}`);
  // return list1;
}

module.exports = { zipLists: zipLists, Node: Node, LinkedList: LinkedList };

//module.exports = LinkedList;
