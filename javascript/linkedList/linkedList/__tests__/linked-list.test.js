'use strict';

let LL = require('../linked-list');

describe('Linked List', () => {
  // Can properly insert into the linked list
  it('inserts a node at the beginning an an empty list', () => {
    const list = new LL();
    list.insert('Sara was here');
    expect(list.head.value).toEqual('Sara was here');
  });

  // The head property will properly point to the first node in the linked list
  it('the head property will properly point to the first node in the linked list', ()=> {
    const list = new LL();
    list.insert('unicorn');
    list.insert('narwhal');
    expect(list.head.value).toEqual('narwhal');
  });

  // Can successfully instantiate an empty linked list
  it('can successfully instantiate an empty linked list', () => {
    const list = new LL();
    expect(list.head).toBeDefined;
  });

  // Can properly return a collection of all the values that exist in the linked list
  it('can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LL();
    list.insert('unicorn');
    list.insert('narwhal');
    list.insert('elf');
    expect(list.toString()).toEqual('{ elf } -> { narwhal } -> { unicorn } -> NULL');
  });

  // Can properly insert multiple nodes into the linked list
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new LL();
    list.insert('apple');
    list.insert('banana');
    expect(list.includes('banana')).toStrictEqual(true);
  });

  // Will return true when finding a value within the linked list that exists
  it('will return true when finding a value within the linked list that exists', () => {
    const list = new LL();
    list.insert('apple');
    expect(list.includes('apple')).toStrictEqual(true);
  });

  // Will return false when searching for a value in the linked list that does not exist
  it('will return false when searching for a value within the linked list that does not exist', () => {
    const list = new LL();
    list.insert('apple');
    expect(list.includes('banana')).toStrictEqual(false);
  });

});


