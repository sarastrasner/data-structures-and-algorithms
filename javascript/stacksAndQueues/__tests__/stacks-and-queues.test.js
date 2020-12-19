'use strict';
const obj = require('../stacks-and-queues');

describe('Stacks', () => {
  it('Can successfully instantiate an empty stack', () => {
    let stack = new obj.Stack();
    expect(stack).toEqual( {'top': null}) ;
  });

});

describe('push()', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new obj.Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully push multiple items onto a stack', () => {
    let stack = new obj.Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
  });

});

describe('pop()', () => {
  it('Can successfully pop off the stack', () => {
    let stack = new obj.Stack();
    stack.push(1);
    expect(stack.pop()).toEqual(1);
  });

  it('Calling pop on empty stack raises exception', () => {
    let stack = new obj.Stack();
    expect(stack.pop()).toEqual('Exception');
  });

});

describe('peek()', () => {
  it('Can successfully peek the next item on the stack', () => {
    let stack = new obj.Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Calling peek on empty stack raises exception', () => {
    let stack = new obj.Stack();
    expect(stack.peek()).toEqual('Exception');
  });

});

describe('isEmpty()', () => {
  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new obj.Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTrue;
  });
});

describe('Queues', () => {
  it('Can successfully instantiate an empty queues', () => {
    let queue = new obj.Queue();
    expect(queue.front && queue.rear).not.toBeDefined;
  });
});


describe('Enqueues', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new obj.Queue();
    queue.enqueue('cats');
    expect(queue.front.value).toStrictEqual('cats');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new obj.Queue();
    queue.enqueue('narwhals');
    queue.enqueue('unicorns');
    expect(queue.rear.value).toStrictEqual('unicorns');
  });
});

describe('Dequeues', () => {
  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new obj.Queue();
    queue.enqueue('Ireland');
    queue.enqueue('Scotland');
    expect(queue.dequeue()).toStrictEqual('Ireland');
  });

  it('Calling dequeue on empty queue raises exception', () => {
    let queue = new obj.Queue();
    expect(queue.dequeue()).toStrictEqual('Exception');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new obj.Queue();
    queue.enqueue('Ireland');
    queue.enqueue('Scotland');
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTrue;
  });

});

describe('Peek', () => {
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new obj.Queue();
    queue.enqueue('Ireland');
    queue.enqueue('Scotland');
    expect(queue.peek()).toStrictEqual('Ireland');
  });

  it('Calling peek on empty queue raises exception', () => {
    let queue = new obj.Queue();
    expect(queue.peek()).toStrictEqual('Exception');
  });
});
