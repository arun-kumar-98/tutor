var tailRecursion = function (n) {
  if (n > 0) {
    console.log(n);
    //tail calling here

    tailRecursion(n - 1);
  }
};

var headRecursion = function (n) {
  if (n > 0) {
    headRecursion(n - 1);
    console.log(n);
    //tail calling here
  }
};

console.log("---------Tail Recursion----------------"); // 5 4 3 2 1
tailRecursion(5);
console.log("---------Head Recursion----------------"); //1 2 3 4 5
headRecursion(5);
