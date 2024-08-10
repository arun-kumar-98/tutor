function reverseString(s) {
  let index = 0;

  for (let i = s.length - 1; i >=index; i--) {
    //swap the elements
    let temp = s[index];
    s[index] = s[i];
    s[i] = temp;
    index++;
  }
  return s;
}

console.log(reverseString(["H", "E", "L", " L", "O"]));
