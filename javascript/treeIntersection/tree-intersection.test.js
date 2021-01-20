'use strict';
const treeIntersection = require('./tree-intersection');
const obj = require('../tree/tree');


describe('repeat word hash map', () => {
  it('will return the first repeated word', () => {
    let tree = new obj.BinaryTree();
    const Node1 = new obj.Node(1);
    const Node2 = new obj.Node(19);
    const Node3 = new obj.Node(38);
    const Node4 = new obj.Node(22);
    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;
    const string = 'Once upon a time, there was a brave princess who';
    let result = treeIntersection(string);
    expect(result).toBe('a');
  });
});
