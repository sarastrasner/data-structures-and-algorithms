const { LinkedList } = require('../../hashtable/hashtable');

// REMOVE DUPS: Write a function to remove duplicates from an unsorted linked list
function removeDuplicates(linkedList) {
  let current = linkedList.head;
  let map = new Hashmap();
  while (current.next !== null) {
    if (map.contains(current.next.value)) {
      current.next = current.next.next;
    } else map.set(current.value, true);
    current = current.next;
  }
  return linkedList;
}

//RETURN KTH TO LAST: implement an algorithm to find the kth to last element of a singly linked list
function kthFromEnd(ll, k) {
  if (k < 0) {
    return 'Exception';
  } else {
    let currentNode = ll.head;
    let index = 0;
    while (currentNode) {
      index = index + 1;
      currentNode = currentNode.next;
    }
    if (index < k) {
      return 'Exception';
    }
    let countdown = index - k - 1;
    currentNode = ll.head;
    for (let i = 0; i < countdown; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}

//DELETE MIDDLE NODE: implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node
function deleteMiddleNote(middleNode) {
  // INPUT: 1 -> 2 -> 3 -> 4 ->
  if (middleNode !== null && middleNode.next !== null) {
    //override the middleNode's value to be the value of the next node's value
    // 1 -> 2 -> 4 -> 4 ->
    middleNode.value = middleNode.next.value;
    middleNode.next = middleNode.next.next;
    //get rid of the duplicate node, but having middle node's next skip over it
    // 1 -> 2 -> 4 ->
  }
}

//PARTITION: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than x. (IMPORTANT: The partition element "x" can appear anywhere in the "right partition";it does not need to appear between the left and right partitions, The additional spacing in the example below indicates the partition. Yes, the output below is one of many outputs!)
//EXAMPLE INPUT: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 ->  [partition=5]
//OUTPUT: 3 -> 1 -> 2 -> | 10 -> 5 -> 5 -> 8 ->
function partitionLL(linkedList, partition) {
  if (!linkedList.head) throw new Error('LL has no head, cannot partition');
  if (typeof partition !== 'number')
    throw new Error('partition must be a number');
  let lessThanPartition = new LinkedList();
  let greaterThanPartition = new LinkedList();
  let current = linkedList.head;
  while (current.next !== null) {
    if (current.value >= partition) greaterThanPartition.insert(current.value);
    if (current.value < partition) lessThanPartition.insert(current.value);
    current.current.next;
  }

  return lessThanPartition, greaterThanPartition;
}

//SUM LISTS:
//You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer).

//EXAMPLE: inupt: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
// output: 2-> 1-> 9 -> | That is 912.

function sumLists(ll1, ll2) {
  if (!ll1.head || !ll2.head)
    throw new Error('Error: one or more invalid linked lists');
  let current1 = ll1.head;
  let current2 = ll2.head;
  let newLL = new LinkedList();
  let newLLCurrent = newLL.head;
  while (current1 !== null || current2 !== null) {
    console.log(newLLCurrent);
    if (current1 !== null && current2 !== null) {
      newLLCurrent.value = current1.value + current2.value;
      if (current2.next !== null) current2 = current2.next;
      if (current1.next !== null) current1 = current1.next;
    } else if (current1.next !== null) {
      newLLCurrent.value = current1.value;
      current1 = current1.next;
    } else if (current2.next !== null) {
      newLLCurrent.value = current2.value;
      current2 = current2.next;
    }
  }
  return newLLCurrent;
}

function sumLinkedLists(node1, node2, carry = 0) {
  if (!node1 && !node2 && carry === 0) {
    return null;
  }
  let value = carry;
  value += node1 ? node1.value : 0;
  value += node2 ? node2.value : 0;
  const node = new LinkedList(value % 10);
  node.next = sumLinkedLists(
    node1 ? node1.next : null,
    node2 ? node2.next : null,
    value > 10 ? 1 : 0
  );
  return node;
}

//PALINDROME: Implement a function to check if a linked list is a palindrom
function palindrome(ll) {
  let array = [];
  let currentNode = ll.head;
  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  const len = array.length;
  for (let i = 0; i < len / 2; i++) {
    if (array[i] !== array[len - i - 1]) return false;
  }
  return true;
}

function printList(head) {
  while (head !== null) {
    head = head.next;
  }
}

function CreateLL (value) {
  this.value = value;
  this.next = null;
}

module.exports = {
  CreateLL,
  removeDuplicates,
  kthFromEnd,
  deleteMiddleNote,
  partitionLL,
  palindrome,
  sumLinkedLists,
  sumLists,
  printList,
};
