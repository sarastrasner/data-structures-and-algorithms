'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;

  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(root){
    const preOrderHelper = root => {
      if (root !== null) {
        array.push(root.value);
        preOrderHelper(root.left);
        preOrderHelper(root.right);
      }
    };
    let array = [];
    preOrderHelper(root);
    return array;
  }

  inOrder(root){
    function inOrderHelper(root) {
      if (root !== null) {
        inOrderHelper(root.left);
        array.push(root.value);
        inOrderHelper(root.right);
      }
    }
    let array = [];
    inOrderHelper(root);
    return array;
  }

  postOrder(root){
    function postOrderHelper(root) {
      if (root !== null) {
        postOrderHelper(root.left);
        postOrderHelper(root.right);
        array.push(root.value);
      }
    }
    let array = [];
    postOrderHelper(root);
    return array;
  }

  findMaximumValue(){
    let array = this.inOrder(this.root);
    for (let i=0; i<array.length; i++){
      var max = 0;
      if (array[i] > max){
        max = array[i];
      }
    }
    return max;
  }

}

class BinarySearchTree extends BinaryTree{
  constructor(root){
    super(root);
  }

  add(value){
    let newNode = new Node(value);
    if (this.root === null){
      this.root = newNode;
    } else {
      traverseBinarySearchTree(this.root, newNode, this.preOrder);
    }
    function traverseBinarySearchTree(root, newNode){
      let currentNode = root;
      if (newNode.value < currentNode){
        if (currentNode.left === null){
          currentNode.left = newNode;
        }
      } else {
        traverseBinarySearchTree (currentNode.left, newNode);
      } if (newNode.value > currentNode) {
        if (currentNode.right === null){
          currentNode.right = newNode;
        } else {
          traverseBinarySearchTree (currentNode.right, newNode);
        }
      }
    }
  }

  contains(root, value) {
    if (root.value === value || root.left.contains(value) || root.right.contains(value)){
      return true;
    } else {
      return false;
    }
  }
}


module.exports = {Node, BinaryTree, BinarySearchTree};
