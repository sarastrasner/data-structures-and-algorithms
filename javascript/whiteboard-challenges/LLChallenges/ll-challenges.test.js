const obj = require('./ll-challenges');
const ll = require('../../linkedList/linkedList/linked-list');


describe('Linked list challenges',() => {
  it('adds the sums of linked lists', ()=>{
    const list1 = new ll.LinkedList();
    list1.insert(6);
    list1.insert(1);
    list1.insert(7);
    const list2 = new ll.LinkedList();
    list2.insert(2);
    list2.insert(9);
    list2.insert(5);
    expect(list1.toString()).toBe('{ 7 } -> { 1 } -> { 6 } -> NULL');
    expect(list2.toString()).toBe('{ 5 } -> { 9 } -> { 2 } -> NULL');
    let answer = obj.sumLists(list1,list2);
    expect(answer.toString()).toBe(912);
  });
});
