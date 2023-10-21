// var minimumTime = function (n, relations, time) {
//   const adj = new Map();
//   const indegree = new Array(n).fill(0);

//   // Initialize the adjacency list.
//   for (let i = 0; i < n; i++) {
//     adj.set(i, []);
//   }

//   // Build the adjacency list and calculate indegree.
//   for (let i = 0; i < relations.length; i++) {
//     let u = relations[i][0] - 1;
//     let v = relations[i][1] - 1;
//     adj.get(u).push(v);
//     indegree[v]++;
//   }

//   // Initialize the queue with nodes having an indegree of 0.
//   const queue = [];
//   for (let i = 0; i < n; i++) {
//     if (indegree[i] === 0) {
//       queue.push(i);
//     }
//   }

//   const maxTime = new Array(n).fill(0);

//   while (queue.length > 0) {
//     let u = queue.shift();

//     for (let v of adj.get(u)) {
//       maxTime[v] = Math.max(maxTime[v], maxTime[u] + time[v]);
//       indegree[v]--;
//       if (indegree[v] == 0) {
//         queue.push(v);
//       }
//     }
//   }

//   // Find the maximum time required for any course.
//   return Math.max(...maxTime);
// };
// const n = 3,
//   relations = [
//     [1, 3],
//     [2, 3],
//   ],
//   time = [3, 2, 5];

// console.log(minimumTime(n, relations, time));

var minimumTime = function (n, relations, time) {
  const adj = new Map();
  const indegree = new Array(n).fill(0);
  const maxTime = new Array(n).fill(0);

  for (const vec of relations) {
    const u = vec[0] - 1;
    const v = vec[1] - 1;
    if (!adj.has(u)) {
      adj.set(u, []);
    }
    adj.get(u).push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      maxTime[i] = time[i];
    }
  }

  while (queue.length > 0) {
    const u = queue.shift();
    const neighbors = adj.get(u) || [];
    for (const v of neighbors) {
      maxTime[v] = Math.max(maxTime[v], maxTime[u] + time[v]);
      indegree[v]--;
      if (indegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, maxTime[i]);
  }

  return result;
};

// Example usage
const n = 3,
  relations = [
    [1, 3],
    [2, 3],
  ];
const time = [3, 2, 5];
const result = minimumTime(n, relations, time);
console.log(result);

const n1 = 5,
  relations1 = [
    [1, 5],
    [2, 5],
    [3, 5],
    [3, 4],
    [4, 5],
  ],
  time1 = [1, 2, 3, 4, 5];

console.log(minimumTime(n1, relations1, time1));
