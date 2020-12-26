'use strict';
const obj = require('./tree');

describe('Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new obj.BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new obj.BinaryTree(new obj.Node('I am G(root)!'));
    expect(tree.root.value).toEqual('I am G(root)!');
  });

  it('Can successfully add a left child and a right child to a single root node', () => {
    let tree = new obj.Node(10, new obj.Node('left!'), new obj.Node('right!'));
    expect(tree.left.value).toEqual('left!');
    expect(tree.right.value).toEqual('right!');
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.preOrder(tree.root)).toEqual(['I am G(root)!', 'left!', 'right!']);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.inOrder(tree.root)).toStrictEqual(['left!', 'I am G(root)!', 'right!']);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.postOrder(tree.root)).toEqual(['left!','right!','I am G(root)!']);
  });

  it('Can search for a value in a Binary Search Tree', () => {
    let nodes = new obj.Node(4, new obj.Node(5), new obj.Node(6));
    let tree = new obj.BinarySearchTree(nodes);
    expect(tree.search(tree.root, 4)).toEqual(true);
  });

});
