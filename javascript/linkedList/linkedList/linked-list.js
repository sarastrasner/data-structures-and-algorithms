'use strict';

const Node = require('./node');

class LinkedList {
  constructor(value) {
    this.value = value;
    this.head = null;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  insert(value) {
    //insert a node at the beginning of a given LL

    if (this.isEmpty() === true) {
      // the list is empty
      // make a new Node with the value given
      const node = new Node(value);
      //   // assign this.head to that new node
      this.head = node;
    } else if (this.isEmpty() === false) {
      // the list is NOT empty
      // make a new Node with the value given
      const node = new Node(value);
      // make the new Node's .next point at the current head
      node.next = this.head;
      // reassign the head to the new node
      this.head = node;
    }
  }
  append(value) {
    // add a value to the end of a linked list
    const node = new Node(value);
    // traverse the entire list until I find the one whose next is null

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // when I find that one, make the next my new node
    currentNode.next = node;
    // make my new node's next null - already done
  }
  includes(val) {
    // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    let currentNode = this.head;
    // start at the head
    while (currentNode) {
      // iterate through the whole list until you hit a return statement
      if (currentNode.value === val) {
        return true;
        // if the current node contains the value, return true
      } else if (!currentNode.value === val) {
        currentNode = currentNode.next;
        // if the current node DOES NOT contain the value, keep iterating
      }
      if (currentNode.next === null) {
        return false;
        // if you reach the end of the linked list, return false
      }
    }
  }
  toString() {
    // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    // "{ a } -> { b } -> { c } -> NULL"
    let runningValue = '';
    let currentNode = this.head;
    while (currentNode) {
      // iterate through the whole list
      runningValue += `{ ${currentNode.value} } -> `;
      // add this vallue to the runningValue
      currentNode = currentNode.next;
      // keep iterating
    }
    runningValue += 'NULL';
    return runningValue;
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.value !== value) {
        currentNode = currentNode.next;
      } else {
        let newNode = new Node(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value !== value) {
        current = current.next;
      } else {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
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
