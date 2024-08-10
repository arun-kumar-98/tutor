/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
// var minimumCost = function (source, target, original, changed, cost) {
//   let minimumcost = 0;
//   let n = 26;

//   // create adjacency matrix
//   let adjMatrix = Array.from(Array(n), () => Array(n)).fill(Infinity);

//   // finding the cost

//   floydWarshallAlgorithm(adjMatrix, original, changed, cost, n);

//   for (let i = 0; i < source.length; i++) {
//     // if ith element of source and ith if target are same
//     // means simply continue

//     if (source[i] == target[i]) {
//       continue;
//     }

//     // in adjmatrix source index and target index still poinitng to inifinity
//     // return -1

//     let srcIndex = source.charCodeAt(i) - "a".charCodeAt(0);
//     let targetIdex = target.charCodeAt(i) - "a".charCodeAt(0);

//     if (adjMatrix[srcIndex][targetIdex] == Infinity) {
//       return -1;
//     }
//     // find the minimum cost

//     minimumcost += adjMatrix[srcIndex][targetIdex];
//   }

//   return minimumcost;
// };

function floyedWarshalAlgorithm(adjMatrix, original, changed, cost, n) {
  // fill the adjacent matrix
  for (let i = 0; i < original.length; i++) {
    let s = original[i].charCodeAt(0) - "a".charCodeAt(0);
    let t = changed[i].charCodeAt(0) - "a".charCodeAt(0);

    console.log(s, t);

    adjMatrix[s][t] = Math.min(adjMatrix[s][t], cost[i]);
  }

  // floyed warshall implementation
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        adjMatrix[i][j] = Math.min(
          adjMatrix[i][j],
          adjMatrix[i][k] + adjMatrix[k][j]
        );
      }
    }
  }
  return adjMatrix;
}

// let source = "abcd",
//   target = "acbe",
//   original = ["a", "b", "c", "c", "e", "d"],
//   changed = ["b", "c", "b", "e", "b", "e"],
//   cost = [2, 5, 5, 1, 2, 20];

// /// the function

// let ans = minimumCost(source, target, original, changed, cost);

// console.log("** ans  the minimum cost **", ans);

// imolementation here

var minimumCost = function (source, target, original, changed, cost) {
  let minimumCost = 0;
  const n = 26;

  // Create adjacency matrix initialized with Infinity
  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // Fill the adjacency matrix with direct conversion costs
  floydWarshallAlgorithm(adjMatrix, original, changed, cost);

  for (let i = 0; i < source.length; i++) {
    // If the i-th character of source and target are the same, continue
    if (source[i] === target[i]) {
      continue;
    }

    // Get the ASCII values for indices
    let srcIndex = source.charCodeAt(i) - "a".charCodeAt(0);
    let tgtIndex = target.charCodeAt(i) - "a".charCodeAt(0);

    // If there is no valid conversion, return -1
    if (adjMatrix[srcIndex][tgtIndex] === Infinity) {
      return -1;
    }

    // Add the minimum conversion cost to the total
    minimumCost += adjMatrix[srcIndex][tgtIndex];
  }

  return minimumCost;
};

function floydWarshallAlgorithm(adjMatrix, original, changed, cost) {
  const n = 26;

  // Fill the adjacency matrix with direct conversion costs
  for (let i = 0; i < original.length; i++) {
    let s = original[i].charCodeAt(0) - "a".charCodeAt(0);
    let t = changed[i].charCodeAt(0) - "a".charCodeAt(0);

    adjMatrix[s][t] = Math.min(adjMatrix[s][t], cost[i]);
  }

  // Floyd-Warshall algorithm to find the shortest paths
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        adjMatrix[i][j] = Math.min(
          adjMatrix[i][j],
          adjMatrix[i][k] + adjMatrix[k][j]
        );
      }
    }
  }

  return adjMatrix;
}

let source = "abcd",
  target = "acbe",
  original = ["a", "b", "c", "c", "e", "d"],
  changed = ["b", "c", "b", "e", "b", "e"],
  cost = [2, 5, 5, 1, 2, 20];

let ans = minimumCost(source, target, original, changed, cost);

console.log("** ans  the minimum cost **", ans);
