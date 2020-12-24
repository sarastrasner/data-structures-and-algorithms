'use strict';

const obj = require('./fifo-animal-shelter');

describe('Fifo Animal Shelter', () => {
  it('enqueue adds an animal to the shelter queue', () => {
    let queue = new obj.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.front.top.value).toStrictEqual('dog');
  });

  it('enqueue returns null for a non-cat for non-dog', () => {
    let queue = new obj.AnimalShelter();
    expect(queue.enqueue('iguana')).toBe(null);
  });

  it('dequeue returns null for a non-cat for non-dog', () => {
    let queue = new obj.AnimalShelter();
    expect(queue.dequeue('iguana')).toBe(null);
  });

});
