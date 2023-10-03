function winnerOfGame(colors: string): boolean {
  let alice: any = 0;
  let bob: any = 0;

  let n = colors.length;

  for (let i = 1; i < n - 1; i++) {
    //check if previous of i equal to next of i
    //then increment alice else increment bob

    if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
      if (colors[i] === "A") alice++;
      else bob++;
    }
  }

  return alice > bob;
}
