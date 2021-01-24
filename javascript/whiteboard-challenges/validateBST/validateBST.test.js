'use strict';
const obj = require('./tree');

describe('Validate a Binary Search Tree', () => {
  it('Returns false for a non-binary search tree', () => {
    let tree = new obj.BinaryTree();
    const Node1 = new obj.Node(1);
    const Node2 = new obj.Node(19);
    const Node3 = new obj.Node(38);
    const Node4 = new obj.Node(22);
    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;
    expect(obj.validateBinarySearchTree(tree)).toEqual(false);
  });

  it('Returns true for a valid binary search tree', () => {
    let tree = new obj.BinaryTree();
    const Node1 = new obj.Node(50);
    const Node2 = new obj.Node(25);
    const Node3 = new obj.Node(55);
    const Node4 = new obj.Node(80);
    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.right = Node4;
    expect(obj.validateBinarySearchTree(tree)).toEqual(true);
  });
});
