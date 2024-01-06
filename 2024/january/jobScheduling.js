function jobScheduling(startTime, endTime, profit) {
    const n = startTime.length;
    const memo = new Array(n).fill(-1);
    const array = [];

    for (let i = 0; i < n; i++) {
        array.push([startTime[i], endTime[i], profit[i]]);
    }

    array.sort((a, b) => a[0] - b[0]);

    function getNextIndex(l, currentJobEnd) {
        let r = n - 1;
        let result = n + 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (array[mid][0] >= currentJobEnd) {
                result = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return result;
    }

    function solve(i) {
        if (i >= n)
            return 0;

        if (memo[i] !== -1)
            return memo[i];

        const next = getNextIndex(i + 1, array[i][1]);

        const taken = array[i][2] + solve(next);
        const notTaken = solve(i + 1);

        return memo[i] = Math.max(taken, notTaken);
    }

    return solve(0);
}

// Example Usage:
const startTime = [1, 2, 3, 3];
const endTime = [3, 4, 5, 6];
const profit = [50, 10, 40, 70];

const result = jobScheduling(startTime, endTime, profit);
console.log(result);
