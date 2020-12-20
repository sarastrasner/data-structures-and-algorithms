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

function zipLists(list1, list2) {
  let listOneCurrentNode = list1.head;
  let listTwoCurrentNode = list2.head;
  while(listOneCurrentNode && listTwoCurrentNode){
    let leftovers = listOneCurrentNode.next;
    listOneCurrentNode.next = new Node(listTwoCurrentNode.value);
    listOneCurrentNode.next.next = leftovers;
    listOneCurrentNode = leftovers;
    listTwoCurrentNode = listTwoCurrentNode.next;
  }
  if (listOneCurrentNode === null){
    listOneCurrentNode = listTwoCurrentNode;
  }
  return list1;
}

module.exports = { zipLists: zipLists, Node: Node, LinkedList: LinkedList };

//module.exports = LinkedList;
