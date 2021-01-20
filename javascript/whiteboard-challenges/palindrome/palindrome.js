// Write a function to validate whether or not a Linked list is palindrome
//https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-09/interview-02.html


// function palindrome(ll){
//   let array = [];
//   let currentNode = ll.head;
//   while (currentNode) {
//     array.push(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   let reverseArray = array.slice().reverse();
//   console.log('reverse array: ', reverseArray);
//   console.log('array: ', array);
//   return array.toString() === reverseArray.toString();
// }

function palindrome(ll){
  let array = [];
  let currentNode = ll.head;
  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  const len = array.length;
  for (let i = 0; i < len / 2; i++) {
    if (array[i] !== array[len - i - 1]) return false;
  }
  return true;
}

module.exports = palindrome;
