const palindrome = require('./palindrome');
const ll = require('../../linkedList/linkedList/linked-list');

describe('Palindrome checker', () => {
  it('returns false for a non-palindrome list', () => {
    const list = new ll.LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(palindrome(list)).toBe(false);
  });

  it('returns true for a palindrome linked list', () => {
    const list = new ll.LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(1);
    expect(palindrome(list)).toBe(true);
  });

  it('returns true for a palindrome linked list', () => {
    const list = new ll.LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(2);
    list.insert(1);
    expect(palindrome(list)).toBe(true);
  });
});
