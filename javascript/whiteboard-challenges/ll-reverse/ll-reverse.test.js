const reverseLinkedList = require('./ll-reverse');
const ll = require('../../linkedList/linkedList/linked-list');

describe('Liked list reversal', () => {
  it('returns a reversed version of the linked list', () => {
    const list = new ll.LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let reversedList = reverseLinkedList(list);
    expect(reversedList).toEqual('{ 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });

  // it('returns true for a palindrome linked list', () => {
  //   const list = new ll.LinkedList();
  //   list.append(1);
  //   list.append(2);
  //   list.append(1);
  //   expect(palindrome(list)).toBe(true);
  // });

  // it('returns true for a palindrome linked list', () => {
  //   const list = new ll.LinkedList();
  //   list.append(1);
  //   list.append(2);
  //   list.append(2);
  //   list.append(1);
  //   expect(palindrome(list)).toBe(true);
  // });
});
