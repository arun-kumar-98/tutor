/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
// var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
//   //create map to store adjacent element

//   const adj = new Map();

//   //create child_to_parent map

//   const child_to_parent = new Map();

//   for (let i = 0; i < n; i++) {
//     //initialilly assigned node to i

//     let node = i;
//     let leftChildC = leftChild[i];
//     let rightChildC = rightChild[i];

//     //for left child
//     if (leftChildC !== -1) {
//       child_to_parent.set(i, leftChildC);

//       if (child_to_parent.has(leftChildC)) {
//         return false;
//       }
//       child_to_parent[leftChildC] = node;
//     }

//     //for right child
//     if (rightChildC !== -1) {
//       child_to_parent.set(i, rightChildC);

//       if (child_to_parent.has(rightChildC)) {
//         return false;
//       }
//       child_to_parent[rightChildC] = node;
//     }
//   }

//   //initialize root woth -1

//   let root = -1;

//   for (let i = 0; i < n; i++) {
//     if (child_to_parent.has[i]) {
//       if (root == -1) {
//         return false;
//       }
//     }
//   } //for

//   //at the end if root==-1 return  false

//   if (root == -1) return false;

//   //now appplying BFS TO COUNT VISITED NODES

//   let count = 0;

//   const queue = [];
//   const visited = new Array(n).fill(false);
//   while (queue.length > 0) {
//     let node = queue[0];
//     for (let v of adj[node]) {
//       if (!visited[v]) {
//         visited[v] = true;
//         count++;
//         queue.push(v);
//       }
//     }
//   }
//   return count === n;
// };

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
// var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
//   // Create a Map to store parent-child relationships.
//   const child_to_parent = new Map();

//   for (let i = 0; i < n; i++) {
//     const leftChildC = leftChild[i];
//     const rightChildC = rightChild[i];

//     // For left child
//     if (leftChildC !== -1) {
//       if (child_to_parent.has(leftChildC)) {
//         return false;
//       }
//       child_to_parent.set(leftChildC, i);
//     }

//     // For right child
//     if (rightChildC !== -1) {
//       if (child_to_parent.has(rightChildC)) {
//         return false;
//       }
//       child_to_parent.set(rightChildC, i);
//     }
//   }

//   console.log(child_to_parent);
//   let root = -1;

//   for (let i = 0; i < n; i++) {
//     if (!child_to_parent.has(i)) {
//       if (root === -1) {
//         root = i;
//       } else {
//         return false; // More than one root found.
//       }
//     }
//   }

//   if (root === -1) {
//     return false; // No root found.
//   }

//   // Initialize BFS to count visited nodes.
//   let count = 0;
//   const queue = [root];
//   const visited = new Array(n).fill(false);
//   visited[root] = true;

//   while (queue.length > 0) {
//     const node = queue.shift();

//     // You need to traverse the children based on the leftChild and rightChild arrays.
//     if (leftChild[node] !== -1) {
//       if (visited[leftChild[node]]) {
//         return false; // Cycle detected.
//       }
//       queue.push(leftChild[node]);
//       visited[leftChild[node]] = true;
//       count++;
//       console.log(count);
//     }

//     if (rightChild[node] !== -1) {
//       if (visited[rightChild[node]]) {
//         return false; // Cycle detected.
//       }
//       queue.push(rightChild[node]);
//       visited[rightChild[node]] = true;
//       count++;
//       console.log(count);
//     }
//   }

//   return count === n;
// };

function validateBinaryTreeNodes(n, leftChild, rightChild) {
  const parentToChildren = new Map();
  const childToParent = new Map();

  for (let i = 0; i < n; i++) {
    const node = i;
    const leftChildNode = leftChild[i];
    const rightChildNode = rightChild[i];

    if (leftChildNode !== -1) {
      if (!parentToChildren.has(node)) {
        parentToChildren.set(node, []);
      }
      parentToChildren.get(node).push(leftChildNode);

      if (childToParent.has(leftChildNode)) {
        return false;
      } else {
        childToParent.set(leftChildNode, node);
      }
    }

    if (rightChildNode !== -1) {
      if (!parentToChildren.has(node)) {
        parentToChildren.set(node, []);
      }
      parentToChildren.get(node).push(rightChildNode);

      if (childToParent.has(rightChildNode)) {
        return false;
      } else {
        childToParent.set(rightChildNode, node);
      }
    }
  }

  let root = -1;

  for (let i = 0; i < n; i++) {
    if (!childToParent.has(i)) {
      if (root !== -1) {
        return false;
      } else {
        root = i;
      }
    }
  }
  if (root === -1) {
    return false;
  }

  // Check for connected components using BFS
  const visited = new Array(n).fill(false);
  const queue = [];
  let count = 1;
  queue.push(root);
  visited[root] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const child of parentToChildren.get(node) || []) {
      if (!visited[child]) {
        visited[child] = true;
        count++;
        queue.push(child);
      }
    }
  }

  return count === n; 
}

const n = 4,
  leftChild = [1, -1, 3, -1],
  rightChild = [2, -1, -1, -1];
console.log(validateBinaryTreeNodes(n, leftChild, rightChild));
