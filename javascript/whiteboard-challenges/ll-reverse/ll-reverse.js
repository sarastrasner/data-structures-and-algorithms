// write a function to reverse a Singly Linked List.
//https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-09/interview-01.html

function reverseLinkedList(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;

  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

module.exports = reverseLinkedList;
