function fun(n) {
  if (n == 0) return;

  //call recursive function
  fun(n - 1);
  console.log(n);
  fun(n - 1);
}

fun(3);
