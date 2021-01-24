'use strict';

//let obj.LL = require('../linked-list');
let obj = require('../linked-list');

xdescribe('Linked List Code Challenge 5', () => {
  // Can properly insert into the linked list
  it('inserts a node at the beginning an an empty list', () => {
    const list = new obj.LL();
    list.insert('Sara was here');
    expect(list.head.value).toEqual('Sara was here');
  });

  // The head property will properly point to the first node in the linked list
  it('the head property will properly point to the first node in the linked list', ()=> {
    const list = new obj.LL();
    list.insert('unicorn');
    list.insert('narwhal');
    expect(list.head.value).toEqual('narwhal');
  });

  // Can successfully instantiate an empty linked list
  it('can successfully instantiate an empty linked list', () => {
    const list = new obj.LL();
    expect(list.head).toBeDefined;
  });

  // Can properly return a collection of all the values that exist in the linked list
  it('can properly return a collection of all the values that exist in the linked list', () => {
    const list = new obj.LL();
    list.insert('unicorn');
    list.insert('narwhal');
    list.insert('elf');
    expect(list.toString()).toEqual('{ elf } -> { narwhal } -> { unicorn } -> NULL');
  });

  // Can properly insert multiple nodes into the linked list
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new obj.LL();
    list.insert('apple');
    list.insert('banana');
    expect(list.includes('banana')).toStrictEqual(true);
  });

  // Will return true when finding a value within the linked list that exists
  it('will return true when finding a value within the linked list that exists', () => {
    const list = new obj.LL();
    list.insert('apple');
    expect(list.includes('apple')).toStrictEqual(true);
  });

  // Will return false when searching for a value in the linked list that does not exist
  it('will return false when searching for a value within the linked list that does not exist', () => {
    const list = new obj.LL();
    list.insert('apple');
    expect(list.includes('banana')).toStrictEqual(false);
  });

  // Will return false when searching for a value in the linked list that does not exist
  it('will return false when searching for a value within the linked list that does not exist', () => {
    const list = new obj.LL();
    list.insert('apple');
    expect(list.includes('banana')).toStrictEqual(false);
  });

});

xdescribe('Linked List Code Challenge 6', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new obj.LL();
    list.insert('apple');
    list.append('banana');
    expect(list.toString()).toEqual('{ apple } -> { banana } -> NULL');
  });

  it('Can successfully add multiple nodes to the end of the linked list', () => {
    const list = new obj.LL();
    list.insert('pineapple');
    list.insert('peach');
    list.append('apple');
    list.append('banana');
    expect(list.toString()).toEqual('{ peach } -> { pineapple } -> { apple } -> { banana } -> NULL');
  });

  it('Can successfully insert a node after the last node of a linked list', () => {
    const list = new obj.LL();
    list.insert('pineapple');
    list.insert('peach');
    list.insertAfter('pineapple','banana');
    expect(list.toString()).toEqual('{ peach } -> { pineapple } -> { banana } -> NULL');
  });

  it('Can successfully insert a node after a node located in the middle of a linked list', () => {
    const list = new obj.LL();
    list.insert('pineapple');
    list.insert('peach');
    list.insert('plum');
    list.insertAfter('peach','banana');
    expect(list.toString()).toEqual('{ plum } -> { peach } -> { banana } -> { pineapple } -> NULL');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new obj.LL();
    list.insert('pineapple');
    list.insert('peach');
    list.insert('plum');
    list.insertBefore('peach','banana');
    expect(list.toString()).toEqual('{ plum } -> { banana } -> { peach } -> { pineapple } -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new obj.LL();
    list.insert('peach');
    list.insert('plum');
    list.insertBefore('peach','banana');
    expect(list.toString()).toEqual('{ plum } -> { banana } -> { peach } -> NULL');
  });

});

xdescribe('Linked List Code Challenge 7', () => {
  it('returns an Exception Where k is greater than the length of the linked list', () => {
    const list = new obj.LL();
    list.insert(1);
    list.insert(2);
    expect(list.kthFromEnd(5)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    const list = new obj.LL();
    list.insert(1);
    list.insert(2);
    expect(list.kthFromEnd(2)).toEqual(2);
  });

  it('Where k is not a positive integer', () => {
    const list = new obj.LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(-1)).toEqual('Exception');
  });

  it('Where the linked list is of a size 1', () => {
    const list = new obj.LL();
    list.insert(1);
    expect(list.kthFromEnd(0)).toEqual(1);
  });


  it('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new obj.LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(2)).toEqual(3);
  });

});

describe('Zipping Linked Lists', () => {
  it('Can successfully zip two linked lists', () => {
    const list1 = new obj.LinkedList();
    list1.insert('apple');
    list1.append('banana');
    const list2 = new obj.LinkedList();
    list2.insert('peach');
    list2.append('pear');
    expect(obj.zipLists(list1,list2).toString()).toEqual('{ apple } -> { peach } -> { banana } -> { pear } -> NULL');
  });
});

describe('Finding minimum value', () => {
  it('Can find the minimum value', () => {
    const list1 = new obj.LinkedList();
    list1.insert(7);
    list1.insert(4);
    list1.insert(2);
    list1.insert(8);
    expect(obj.findMinValue(list1)).toEqual(2);
  });
});
