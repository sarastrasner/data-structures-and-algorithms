const circularLLChecker = require('./circularLLChecker');
const obj = require('../../linkedList/linkedList/linked-list');

describe('Circular linked list checker', () => {
  it('returns false for a non-circular linked-list', ()=> {
    const list = new obj.LinkedList();
    list.insert('unicorn');
    list.insert('narwhal');
    list.insert('elf');
    expect(circularLLChecker(list)).toBe(false);
  });

  it('returns true for a circular linked-list', ()=> {
    const list = new obj.LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.head.next.next.next = list.head.next.next;
    expect(circularLLChecker(list)).toBe(true);
  });

});
