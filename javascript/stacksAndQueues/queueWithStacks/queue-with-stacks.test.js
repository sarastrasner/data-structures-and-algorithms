'use strict';

const code = require ('./queue-with-stacks');

describe(('Queue with Stacks'), () => {

  it(('enqueues a value onto the queue'), () => {
    const Queue = new code.PseudoQueue;
    Queue.enqueue(4);
    expect(Queue.front.top.value).toBe(4);
  });


  it(('dequeues a value off the queue'), () => {
    const Queue = new code.PseudoQueue;
    Queue.enqueue(4);
    Queue.enqueue(5);
    expect(Queue.dequeue(4)).toBe(4);
  });

});

