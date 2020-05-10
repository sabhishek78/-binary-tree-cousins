// Part 1


// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Examples
// Example 1:



// Input: root = [1,2,3,4], x = 4, y = 3 Output: false

// Example 2:



// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4 Output: true

// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3 Output: false

// Note:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

// It is not necessary to create a tree structure of Javascript objects as we did for the 'Parent in Binary Tree' challenge. You can efficiently implement a solution using an algorithm that simply looks at the index of X and Y in the root list.
function areCousins(tree, x, y) {
  return checkIfCousins(getSameDepthArray(tree), x, y);
}

function getSameDepthArray(tree) {
  let array = [];
  let power = 0;
  while (tree.length !== 0) {
    array.push(tree.splice(0, Math.pow(2, power)));
    power++;
  }
  return array;
}

function consecutive(tree, x, y) {
  return Math.abs(tree.indexOf(x) - tree.indexOf(y)) === 1;
}
function nodesEqual(tree, x, y) {
  return tree.indexOf(x) === tree.indexOf(y);
}
function smallerIndexOdd(tree, x, y) {
  return tree.indexOf(x) < tree.indexOf(y)
    ? tree.indexOf(x) % 2 !== 0
    : tree.indexOf(y) % 2 !== 0;
}
function checkIfCousins(newTree, x, y) {
  for (let i = 0; i < newTree.length; i++) {
    if (newTree[i].includes(x) && newTree[i].includes(y)) {
      return consecutive(newTree[i], x, y)
        ? smallerIndexOdd(newTree[i], x, y)
        : !nodesEqual(newTree[i], x, y);
    }
  }
  return false;
}
console.log(areCousins([1, 2, 3, 4], 4, 3) === false);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 5, 4) === true);
console.log(areCousins([1, 2, 3, null, 4], 2, 3) === false);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 5, 4) === true);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 4, 4) === false);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 0, 4) === false);
console.log(areCousins([1, 2, 3, null, 4, null, 5], 7, 7) === false);
console.log(areCousins([1, 2, 3, 4], 4) === false);
console.log(areCousins([1, 2, 3, 4]) === false);
console.log(areCousins([], 3, 4) === false);

