// function manhattanDistance(r1, c1, r2, c2) {
//   return Math.abs(r1 - r2) + Math.abs(c1 - c2);
// }

// function calculateManhattanDistances(n, m, table) {
//   const colorPositions = {};
//   let totalDistance = 0;

//   for (let r = 0; r < n; r++) {
//     for (let c = 0; c < m; c++) {
//       const color = table[r][c];

//       if (color in colorPositions) {
//         for (const [prevR, prevC] of colorPositions[color]) {
//           totalDistance += manhattanDistance(prevR, prevC, r, c);
//         }
//       }

//       if (!(color in colorPositions)) {
//         colorPositions[color] = [];
//       }

//       colorPositions[color].push([r, c]);
//     }
//   }

//   return totalDistance;
// }

// // Example usage
// const input = `2 3
// 1 2 3
// 3 2 1`;

// const inputLines = input.trim().split("\n");
// const [n, m] = inputLines[0].split(" ").map(Number);
// const table = inputLines.slice(1).map((line) => line.split(" ").map(Number));

// const result = calculateManhattanDistances(n, m, table);
// console.log(result);

function manhattanDistance(r1, c1, r2, c2) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}

function processData(input) {
  const inputLines = input.trim().split("\n");
  const [n, m] = inputLines[0].split(" ").map(Number);
  const table = inputLines.slice(1).map((line) => line.split(" ").map(Number));
  const colorPositions = {};
  let totalDistance = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const color = table[r][c];

      if (color in colorPositions) {
        for (const [prevR, prevC] of colorPositions[color]) {
          totalDistance += manhattanDistance(prevR, prevC, r, c);
        }
      }

      if (!(color in colorPositions)) {
        colorPositions[color] = [];
      }

      colorPositions[color].push([r, c]);
    }
  }

  console.log(totalDistance);
}
